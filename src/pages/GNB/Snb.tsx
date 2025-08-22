import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import { useMenuStore } from '../../store/Menu/menu';
import { useNavigate } from 'react-router-dom';

export const Snb = () => {
  const { setIsMenuOpen } = useMenuStore();

  const navigate = useNavigate();

  return (
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
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              navigate('./reserve');
            }}
          >
            <ListItemText primary={'예약하기'} sx={{ color: '#FFFFFF' }} />
          </ListItemButton>
        </ListItem>
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
  );
};
