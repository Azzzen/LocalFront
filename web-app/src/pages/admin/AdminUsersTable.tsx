import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { gql } from '@apollo/client';
import client from '../../graphqlApollo';
import { Container, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper, TextField, styled } from '@mui/material';
import { Modal, Box, Typography, Button, Checkbox, FormControlLabel } from '@mui/material';
import { useCookies } from 'react-cookie';
import { showToast } from '../../components/tools/toast';

interface User {
  id: string;
  email: string;
  name: string;
  lastName: string;
  businessRole: string;
  businessName: string;
  isConfirmed: boolean;
  isDeveloper: boolean;
  isAdmin: boolean;
}

const GET_ALL_USERS = gql(`
    query {
        getAllUsers {
            status
            users {
                email
                name
                lastName
                businessRole
                businessName
                businessContact
                isConfirmed
                isDeveloper
            }
        }
    }
`);
const UPDATE_ADMIN_USER = gql`
  mutation UpdateAdminUser(
    $email: String!,
    $name: String!,
    $lastName: String!,
    $businessRole: String!,
    $businessName: String!,
    $isConfirmed: Boolean!,
    $isDeveloper: Boolean!,
  ) {
    updated_admin_user(
      email: $email,
      name: $name,
      lastName: $lastName,
      businessRole: $businessRole,
      businessName: $businessName,
      isConfirmed: $isConfirmed,
      isDeveloper: $isDeveloper,

    ) {
      status, 
      userMessage,
      devMessage
    }
  }
`;

export default function AdminUsersTable() {
  const [donnees, setDonnees] = useState<User[]>([]);
  const [recherche, setRecherche] = useState('');
  const [selectedUser, setSelectedUser] = useState<User | undefined>(undefined);
  const [isSlected, setIsSlected] = useState<boolean>(false);
  const [cookies] = useCookies(['token']);

  useEffect(() => {
    getAllUsers().then((data: User[]) => {
      setDonnees(data);
    });
  }, []);

  const getAllUsers = async () => {
    const data = await client.query({
      query: GET_ALL_USERS,
      context: {
        headers: {
          authorization: "Bearer " + cookies.token,
        },
      }
    });
    const users = data.data.getAllUsers.users;
    return users;
  };

  const handleChangeRecherche = (event: ChangeEvent<HTMLInputElement>) => {
    setRecherche(event.target.value);
  };

  const handleEditClick = (user: User) => {
    setIsSlected(true);
    setSelectedUser(user);
  };
  const handleCloseModal = () => {
    setIsSlected(false);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, checked, value } = event.target;
    if (selectedUser) {
      if (event.target.name === "isConfirmed" || event.target.name === "isDeveloper") {
        setSelectedUser({
          ...selectedUser,
          [name]: checked
        });
      } else {
        setSelectedUser({
          ...selectedUser,
          [name]: value,
        });
      }
    }
  };

  const handleUpdateUser = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (selectedUser) {
      try {
        const { data } = await client.mutate({
          mutation: UPDATE_ADMIN_USER,
          variables: {
            name: selectedUser.name,
            email: selectedUser.email,
            lastName: selectedUser.lastName,
            businessRole: selectedUser.businessRole,
            businessName: selectedUser.businessName,
            isConfirmed: selectedUser.isConfirmed,
            isDeveloper: selectedUser.isDeveloper,
          },
          context: {
            headers: {
              authorization: "Bearer " + cookies.token,
            },
          }
        });
        setIsSlected(false);
        setSelectedUser(undefined);
        getAllUsers().then((data: User[]) => {
          setDonnees(data);
        });
        window.location.reload();
        if (data.updated_admin_user.status !== 200)
          showToast('error', data.updated_admin_user.devMessage);
        else
          showToast('success', data.updated_admin_user.devMessage);
      } catch (error) {
        console.error('Error updating user:', error);
        showToast('error', "Update raté");
      }
    }
  };

  const donneesFiltrees = donnees.filter((item) =>
    Object.values(item)
      .join('')
      .toLowerCase()
      .includes(recherche.toLowerCase())
  );

  const TableCellStyled = styled(TableCell)(({ theme }) => ({
    fontSize: '1rem',
    border: '1px solid black',
    padding: '8px',
    textAlign: 'center'
  }))

  const displayBodyTable = (items: User[]) => {
    return donneesFiltrees.map((item) => (
      <TableRow key={item.id}>
        {Object.values(item).map((value, index) => (
          index === 0 ? null :
            <TableCellStyled key={index} size='small'>
              {typeof value === 'boolean' ? (value ? <Checkbox style={{ pointerEvents: 'none' }} checked /> : <Checkbox style={{ pointerEvents: 'none' }} />) : value}
            </TableCellStyled>
        ))}
        <TableCellStyled padding="checkbox">
          <Button variant="outlined" onClick={() => handleEditClick(item)}>
            Modifier
          </Button>
        </TableCellStyled>
      </TableRow>
    ))
  }

  return (
    <Container sx={{ width: '100%' }}>
      <TextField
        label="Rechercher"
        variant="outlined"
        value={recherche}
        onChange={handleChangeRecherche}
        sx={{ marginBottom: '10px' }}
      />
      <TableContainer >
        <Table
          aria-labelledby="tableTitle">
          <TableHead>
            <TableRow >
              {['Email', 'Prénom', 'Nom', 'Rôle', 'Entreprise', 'Contact', 'Utilisateur Confirmé', 'Développeur', ''].map((columnName, index) => (
                <TableCellStyled key={index} size='small' padding='normal'>
                  {columnName}
                </TableCellStyled>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {displayBodyTable(donneesFiltrees)}
          </TableBody>
        </Table>
      </TableContainer>

      {selectedUser && isSlected && (
        <Modal open={isSlected}
          onClose={handleCloseModal}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 400,
              bgcolor: 'background.paper',
              border: '2px solid #000',
              boxShadow: 24,
              p: 4,
              maxHeight: '80vh',
              overflowY: 'auto',
            }}
          >
            <Typography id="modal-title" variant="h6" component="h2" gutterBottom>
              Modifier l'utilisateur
            </Typography>
            <form onSubmit={handleUpdateUser}>
              <TextField
                key="name"
                label="Prénom"
                name='name'
                value={selectedUser.name}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
                variant="outlined"
              />

              <TextField
                key="lastName"
                label="Nom de Famille"
                name='lastName'
                value={selectedUser.lastName}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
                variant="outlined"
              />
              <TextField
                key="businessRole"
                label="Rôle"
                name='businessRole'
                value={selectedUser.businessRole}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
                variant="outlined"
              />
              <TextField
                key="businessName"
                label="Entreprise "
                name='businessName'
                value={selectedUser.businessName}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
                variant="outlined"
              />

              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedUser.isConfirmed}
                    onChange={handleInputChange}
                    name="isConfirmed"
                    color="primary"
                  />
                }
                label="Is Confirmed"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedUser.isDeveloper}
                    onChange={handleInputChange}
                    name="isDeveloper"
                    color="primary"
                  />
                }
                label="Is Developer"
              />
              <Button type="submit" variant="outlined">Enregistrer</Button>
            </form>
          </Box>
        </Modal>
      )}
    </Container>
  );
}
