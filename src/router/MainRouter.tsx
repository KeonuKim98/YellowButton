import { createBrowserRouter } from 'react-router-dom';
import { GnbLayout } from '../pages/GNB/GnbLayout';

export const MainRouter = createBrowserRouter([
  {
    path: '/',
    element: <GnbLayout />,
  },
]);
