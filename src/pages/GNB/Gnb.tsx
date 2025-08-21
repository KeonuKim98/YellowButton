import { Box, IconButton, Stack } from '@mui/material';
import logo from '../../assets/Logo.png';
import { useNavigate } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';
import { useEffect } from 'react';
import { useMenuStore } from '../../store/Menu/menu';

export const Gnb = () => {
  const { isMenuOpen, setIsMenuOpen } = useMenuStore();

  const navigate = useNavigate();

  useEffect(() => {
    // 이 로그는 isMenuOpen 값이 실제로 변경된 후, 리렌더링이 완료되었을 때 실행됩니다.
    console.log('isMenuOpen 상태가 변경되었습니다:', isMenuOpen);
  }, [isMenuOpen]);

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
          // width: '100%',
          color: '#FFFFFF',
        }}
        disableRipple
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
          console.log(isMenuOpen);
        }}
        // onTouchEnd={() => setIsMenuOpen(!isMenuOpen)}
      >
        <MenuIcon
          sx={{
            height: '70%',
            width: '70%',
            color: '#FFFFFF',
          }}
        />
      </IconButton>
      {/* <Drawer
        anchor="right"
        open={isMenuOpen}
        onClose={toggleDrawer(false)}
        sx={{
          width: '30%',
          backgroundColor: '#272422',
        }}
      ></Drawer> */}
    </Stack>
  );
};
