import { Backdrop, Box, CircularProgress, Typography } from '@mui/material';

const Loading = ({open = false, message="Chargement....", darkVariant = false}) => {
    return (
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
        >
          <Box display='flex' justifyContent='center' alignItems='center'>
              <CircularProgress color={darkVariant? "secondary" : "primary"} size={300} thickness={1}/>
              <Typography fontSize={30} variant={'body2'} color={darkVariant? 'green.dark' : 'green.main'} fontWeight={'bold'} position='absolute'>{message}</Typography>
          </Box>
        </Backdrop>
    )
}

export default Loading;