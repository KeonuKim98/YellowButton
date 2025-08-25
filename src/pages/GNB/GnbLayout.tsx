import { Drawer, Stack } from '@mui/material';
import { Gnb } from './Gnb';
import { Outlet } from 'react-router-dom';
import { useMenuStore } from '../../store/Menu/menu';
import { Snb } from './SNB';

export const GnbLayout = () => {
  const { isMenuOpen, setIsMenuOpen } = useMenuStore();

  return (
    <Stack
      sx={{
        height: '100%',
        width: '100%',
        backgroundColor: '#FFFFFF',
      }}
    >
      <Gnb />
      <Outlet />
      <Drawer
        anchor="right"
        open={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        PaperProps={{
          sx: {
            width: 250, // sx 대신 PaperProps 사용
            backgroundColor: '#272422',
          },
        }}
      >
        <Snb />
      </Drawer>
    </Stack>
  );
};
