import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import * as Typo from '../../components/Typography/typographyStyle';
import { ColoredScoreBar } from '../../components/infos/progressBar';
import Button from '@mui/material/Button';
import { GreyButton } from '../../components/buttons/buttons';
import DeleteIcon from '@mui/icons-material/Delete';
import { Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from '@mui/material';
import { gql } from '@apollo/client';
import client from '../../graphqlApollo';
import { useCookies } from 'react-cookie';
import { useState } from 'react';


interface ItemCardProps {
  title: string;
  photo: string;
  id: string;
  price: number;
  desc: string;
  score: number;
  type: string;
  ethicalscore: number;
  ecologicalscore: number;
  redirectnumber: number;
  lastshown: Date;
  lastclick: Date;
}

const ItemCard: React.FC<ItemCardProps> = (props) => {

  const [cookies] = useCookies(['token']);
  const [openDialog, setOpenDialog] = useState(false);

  const containerStyle = {
    width: 1400,
    height: 250,
    borderRadius: 20,
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'start',
  };

  const imageContainerStyle = {
    width: 190,
    height: 225,
    borderRadius: 10,
    marginLeft: 15,
    marginTop: 12,
  };

  const dividerStyle = {
    padding: '20px',
    borderRight: '1px solid',
    color: '#5E5E5E',
    margin: '20px',
  };

  const progressContainerStyle = {
    width: '120px',
    borderRadius: '5px',
    display: 'flex',
    alignItems: 'center'
  };

  const buttonContainerStyle = {
    alignSelf: 'flex-end',
    marginBottom: '43px',
    margin: '30px',
  };



  const openNewDialog = async () => {
    setOpenDialog(true);
  }


  const deleteArticle = async (newid: string) => {
  
    const qr = gql(`
          query deleteArticlePartner($id: String!) {
            deleteArticlePartner(id: $id) {
              status
              devMessage
              userMessage
            }
          }
        `);
    try {
      const { data } = await client.query({
        query: qr,
        variables: { id: newid },
        context: {
          headers: {
            authorization: "Bearer " + cookies.token,
          },
        },
      });

      setOpenDialog(false);
      window.location.reload();
    } catch (error) {
      console.error("Error deleting article:", error);
    }

  };

  const addArticleRedirect = () => {
    window.location.replace('/addArticle');
  };

  const lastShownDate = props.lastshown ? new Date(props.lastshown).toLocaleDateString() : 'Aucune donnée enregistré';
  const lastClickDate = props.lastclick ? new Date(props.lastclick).toLocaleDateString() : 'Aucune donnée enregistré';

  return (
    <Paper style={containerStyle} elevation={3}>

      <Box style={{ position: 'relative' }}>
        <Box style={{ position: 'absolute', top: 10, left: 1340 }}>
          <IconButton aria-label="delete" onClick={() => openNewDialog()}>
            <DeleteIcon />
          </IconButton>
        </Box>
      </Box>
      <Box style={imageContainerStyle}>
        <img
          src={props.photo}
          alt="Your Image"
          style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }}
        />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '12px', width : '300px', }}>
        <Typography style={Typo.poppinsLightWhiteStyle}>
          {props.type}
        </Typography>
        <Typography
          style={{
            ...Typo.poppinsTitleSB25,
            marginTop: '-5px',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            width : '300px',
          }}
        >
          {props.title}
        </Typography>
        <Typography style={{ ...Typo.poppinsRegular15, marginTop: '-5px' }}>
          Prix unitaire: {props.price}€
        </Typography>
        <Typography style={{ ...Typo.poppinsUnderTitleSB15, marginTop: '30px' }}>
          Description:
        </Typography>
        <Typography style={{ ...Typo.poppinsRegular15, maxWidth: '270px', maxHeight: '95px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {props.desc}
        </Typography>
      </Box>

      <Divider orientation="vertical" flexItem sx={dividerStyle} />

      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '30px', paddingTop: '30px' }}>
        <Typography style={{ ...Typo.poppinsUnderTitleSB15, marginTop: '30px' }}>
          Environnement:
        </Typography>
        <Box style={progressContainerStyle}>
          <Typography style={{ ...Typo.poppinsRegular15 }}>{props.ecologicalscore}/100</Typography >
          <ColoredScoreBar sx={{ marginLeft: '5px', width: '800px' }} variant="determinate" value={props.ecologicalscore} />
        </Box>

        <Typography style={{ ...Typo.poppinsUnderTitleSB15, marginTop: '30px' }}>
          Ethique:
        </Typography>
        <Box style={progressContainerStyle}>
          <Typography style={{ ...Typo.poppinsRegular15 }}>{props.ethicalscore}/100</Typography >
          <ColoredScoreBar sx={{ marginLeft: '5px', width: '800px' }} variant="determinate" value={props.ethicalscore} />
        </Box>
      </Box>

      <Divider orientation="vertical" flexItem sx={dividerStyle} />

      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '30px', paddingTop: '40px', width: '300px' }}>
        <Typography style={{ ...Typo.poppinsUnderTitleGreySB15 }}>
          Dernière apparition sur l’extension
        </Typography>
        <Typography style={{ ...Typo.poppinsUnderTitleSB15 }}>
          {lastShownDate}
        </Typography>

        <Typography style={{ ...Typo.poppinsUnderTitleGreySB15, marginTop: '15px' }}>
          Dernière redirection
        </Typography>
        <Typography style={{ ...Typo.poppinsUnderTitleSB15 }}>
          {lastClickDate}
        </Typography>

        <Typography style={{ ...Typo.poppinsUnderTitleGreySB15, marginTop: '15px' }}>
          Nombre de redirection
        </Typography>
        <Typography style={{ ...Typo.poppinsUnderTitleSB15 }}>
          {props.redirectnumber}
        </Typography>

      </Box>
      <Box style={buttonContainerStyle}>
        <Button variant="contained" size="small" sx={{ ...GreyButton(), width: '150px', height: '50px' }} onClick={addArticleRedirect}>
          <Typography color={'white.light'}>Modifer l'article</Typography>

        </Button>
      </Box>
      <Dialog open={openDialog}>
        <DialogTitle>Etes-vous sur de vouloir supprimer cet article?</DialogTitle>
        <DialogContent>
          <Typography variant="body1">Il ne pourra plus être récupéré par la suite</Typography>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center' }}>
          <Button variant="contained" size="small" sx={{ backgroundColor: '#DB6D55', width: '300px', height: '50px', mb: '20px' }} onClick={() => deleteArticle(props.id)}>
            <Typography color={'white.light'}>supprimer l'article</Typography>
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>

  );
};

export default ItemCard;