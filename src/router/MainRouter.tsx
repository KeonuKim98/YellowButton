import { createBrowserRouter } from 'react-router-dom';
import { GnbLayout } from '../pages/GNB/GnbLayout';
import { Home } from '../pages/Home/Home';
import { ReservationHome } from '../pages/Reservation/ReservationHome';

export const MainRouter = createBrowserRouter([
  {
    path: '/',
    element: <GnbLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'reserve',
        element: <ReservationHome />,
      },
    ],
  },
]);
