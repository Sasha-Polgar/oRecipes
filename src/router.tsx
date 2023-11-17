/* eslint-disable import/prefer-default-export */
import { createBrowserRouter } from 'react-router-dom';
import Root from './routes/Root/Root';
import Home from './routes/Home';
import Recipe from './routes/Recipe';
import Error from './routes/Error';
import Favorites from './routes/Favorites';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    // en fonction de la route, on va charger un composant différent dans App
    // Ce composant se retrouvera à l'intérieur du composant `Outlet` positionner dans App
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'recipe/:slug',
        element: <Recipe />,
      },
      {
        path: 'favorites',
        element: <Favorites />,
      },
    ],
  },
]);
