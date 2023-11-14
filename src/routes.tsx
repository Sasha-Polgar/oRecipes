import { createBrowserRouter } from 'react-router-dom';
import Root from './routes/Root/Root';
import Error from './routes/Error';
import Recipe from './routes/Recipe';
import Home from './routes/Home';

// eslint-disable-next-line import/prefer-default-export
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/recipe/:slug',
        element: <Recipe />,
      },
    ],
  },
]);
