import { Box, IconButton, Stack } from '@mui/material';
import logo from '../../assets/Logo.png';
import { useNavigate } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';
import { useMenuStore } from '../../store/Menu/menu';

export const Gnb = () => {
  const { isMenuOpen, setIsMenuOpen } = useMenuStore();

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
      justifyContent="space-between"
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
      <IconButton
        sx={{
          height: '100%',
          color: '#FFFFFF',
        }}
        disableRipple
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
          console.log(isMenuOpen);
        }}
      >
        <MenuIcon
          sx={{
            height: '70%',
            width: '70%',
            color: '#FFFFFF',
          }}
        />
      </IconButton>
    </Stack>
  );
};
