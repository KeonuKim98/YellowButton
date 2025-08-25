import { Stack, TextField, Typography } from '@mui/material';
import { TextFieldSx, TextInputProps, TitleSx } from './ReservationFormStyles';
import { DateTimePicker } from '@mui/x-date-pickers';

export const ReservationHome = () => {
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
          예약하기
        </Typography>
        <Stack
          sx={{
            height: '100%',
          }}
          gap="20px"
        >
          <Stack direction="row" gap="10px">
            <Typography sx={TitleSx}>이름</Typography>
            <TextField
              inputProps={TextInputProps}
              sx={{ ...TextFieldSx, width: '100%' }}
            />
          </Stack>
          <Stack direction="row" gap="10px">
            <Typography sx={TitleSx}>예약날짜</Typography>
            <DateTimePicker
              sx={{ width: '100%', borderRadius: '100px' }}
              format="YYYY년 MM월 DD일 HH:mm"
            ></DateTimePicker>
          </Stack>
          <Stack direction="row" gap="10px">
            <Typography sx={TitleSx}>인원수</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
