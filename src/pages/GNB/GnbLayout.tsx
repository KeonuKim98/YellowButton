import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
} from '@mui/material';
import { Gnb } from './Gnb';
import { Outlet } from 'react-router-dom';
import { useMenuStore } from '../../store/Menu/menu';

export const GnbLayout = () => {
  const { isMenuOpen, setIsMenuOpen } = useMenuStore();

  return (
    <Stack
      sx={{
        height: '100%',
        width: '100%',
        backgroundColor: '#900020',
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
        <Box
          sx={{
            height: '100%',
            color: '#FFFFFF',
            padding: 2,
          }}
          role="presentation"
          onClick={() => setIsMenuOpen(false)}
        >
          <List>
            {['메뉴 1', '메뉴 2', '메뉴 3', '설정'].map((text) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemText primary={text} sx={{ color: '#FFFFFF' }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider sx={{ backgroundColor: '#FFFFFF' }} />
          <List>
            {['로그아웃'].map((text) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemText primary={text} sx={{ color: '#FFFFFF' }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Stack>
  );
};
