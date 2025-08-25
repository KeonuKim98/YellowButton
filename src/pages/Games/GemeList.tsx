import { Stack, Typography } from '@mui/material';

export const GameList = () => {
  return (
    <Stack
      sx={{
        height: '100%',
        width: '100%',
        backgroundColor: '#ffffffff',
        padding: '10px',
      }}
    >
      <Stack
        sx={{
          height: '100%',
          width: '100%',
          backgroundColor: '#ffffffff',
          // padding: '10px',
        }}
      >
        <Typography
          sx={{
            width: '100%',
            fontSize: '20px',
            marginBottom: '50px',
            alignContent: 'center',
          }}
        >
          게임 목록
        </Typography>
        <Stack
          sx={{
            height: '100%',
          }}
          gap="20px"
        ></Stack>
      </Stack>
    </Stack>
  );
};
