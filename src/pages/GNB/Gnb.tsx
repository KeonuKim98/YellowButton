import { Box, Stack } from '@mui/material';
import logo from '../../assets/Logo.png';
import { useNavigate } from 'react-router-dom';

export const Banner = () => {
  const navigate = useNavigate();
  return (
    <Stack
      sx={{
        height: '81px',
        width: '100%',
        backgroundColor: '#333333',
        paddingLeft: '8px',
      }}
      direction="row"
      alignItems="center"
    >
      <Box
        component="img"
        src={logo}
        sx={{
          height: '52px',
          width: '52px',
        }}
        onClick={() => navigate('/')}
      />
    </Stack>
  );
};
