import { Dispatch, SetStateAction, useState } from 'react';
import { Box, Button, styled } from "@mui/material";

export type FileInfo = {
  name: any, type: any, size: any, base64: any, file: any,
}
export type Dispatcher<S> = Dispatch<SetStateAction<S>>;

export function ImageInput({ setImageString, imageString, title = '', edit, prevLogo, id }: { setImageString: (value: string) => void, imageString: string, prevLogo?: string, title?: string, edit?: boolean, id: string }) {
  const [image, setImage] = useState(imageString);
  const handleButtonClick = () => {
    document.getElementById(`image-upload-${id}`)?.click();
  };

  const ImageBox = styled(Box)(({ theme }) => ({
    position: 'relative',
    borderRadius: '8px',
    width: 200,
    height: 200,
    border: '1px solid #000',
    borderColor: theme.palette.gray.light,
  }))

  const ImageButton = styled(Button)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
      width: '100%',
    },
    [theme.breakpoints.down('md')]: {
      width: '100%',

    },
    marginTop: "15px",
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    backgroundColor: theme.palette.green.main,
    boxShadow: '0px 4px 10px rgba(0,0,0,0.2)',
    color: theme.palette.white.main,
    borderRadius: '5px'
  }))
  return (
    <Box>
      <Box display={'flex'} flexDirection={'column'}>
        <ImageBox>
          {image ? (
            <img src={image} alt="image" className={'image'} style={{ width: '100%', height: '100%', borderRadius: '8px' }} />
          ) : prevLogo ? (<img src={prevLogo} alt="image" className={'image'} style={{ width: '100%', height: '100%', borderRadius: '8px' }} />) : null}
        </ImageBox>
        <input
          id={`image-upload-${id}`}
          type="file"
          accept="image/gif, image/jpeg, image/png"
          onChange={(value) => {
            if (!value || !value.target || !value.target.files)
              return;
            const reader = new FileReader();
            reader.readAsDataURL(value.target.files[0]);
            reader.onloadend = () => {
              const base64Image = reader.result?.toString();
              if (base64Image) {
                setImageString(base64Image)
                setImage(base64Image)
              }
            }
          }}
          style={{ display: 'none' }}
          disabled={edit ? false : true}
        />
        <label htmlFor={`image-upload-${id}`} >
          <ImageButton disabled={!edit} onClick={handleButtonClick}>{title}</ImageButton>
        </label>
      </Box>
    </Box >
  );
}