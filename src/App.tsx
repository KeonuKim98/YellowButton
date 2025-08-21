import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './queryClient';
import { RouterProvider } from 'react-router-dom';
import { MainRouter } from './router/MainRouter';

const App = () => {
  // const [count, setCount] = useState(0);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={MainRouter}></RouterProvider>
    </QueryClientProvider>
  );
};

export default App;
