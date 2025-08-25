import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './queryClient';
import { RouterProvider } from 'react-router-dom';
import { MainRouter } from './router/MainRouter';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { koKR } from '@mui/x-date-pickers/locales';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const App = () => {
  // const [count, setCount] = useState(0);

  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      localeText={
        koKR.components.MuiLocalizationProvider.defaultProps.localeText
      }
      // adapterLocale={'zh-cn'}
      // dateFormats={
      //   {
      //     monthAndYear: 'YYYY년 MM월',
      //   } as any
      // }
    >
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={MainRouter}></RouterProvider>
      </QueryClientProvider>
    </LocalizationProvider>
  );
};

export default App;
