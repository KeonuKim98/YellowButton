import { Box, Stack } from '@mui/material';
import logo from '../../assets/Logo.png';
import { Banner } from './Gnb';

export const GnbLayout = () => {
  return (
    <Stack
      sx={{
        height: '100%',
        width: '100%',
        backgroundColor: '#900020',
      }}
    >
      <Banner />
    </Stack>
  );
};
