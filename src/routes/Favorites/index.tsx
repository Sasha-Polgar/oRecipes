import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import Page from '../../components/Page';
import AppHeader from '../../components/AppHeader';
import Content from '../../components/Content';
import { fetchFavoriteRecipes } from '../../store/reducers/recipes';

function Favorites() {
  const dispatch = useAppDispatch();
  const isLogged = useAppSelector((state) => state.user.logged);

  // Lorsque j'arrive sur la page, j'emet l'intention de récupérer mes recettes favorites
  useEffect(() => {
    dispatch(fetchFavoriteRecipes());
  }, [dispatch]);

  // Si je ne suis pas connecté, je redirige vers la page d'accueil
  if (!isLogged) {
    return <Navigate to="/" />;
  }
  return (
    <Page>
      <AppHeader />
      <Content
        title="Vos recettes favorites"
        text="On les a gardé au chaud pour vous !"
        recipes={[]}
      />
    </Page>
  );
}

export default Favorites;
