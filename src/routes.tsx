import { createBrowserRouter } from 'react-router-dom';
import Root from './routes/Root';
import Error from './components/Error';
import App from './components/App/App';
import Recipe from './components/Recipe';

// eslint-disable-next-line import/prefer-default-export
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: '/recipe/:slug',
        element: <Recipe />,
      },
    ],
  },
]);
