import { useEffect } from 'react';
import Page from '../../components/Page';
import AppHeader from '../../components/AppHeader';
import Content from '../../components/Content';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchRecipes } from '../../store/reducers/recipes';

function Home() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchRecipes());
  });

  const recipes = useAppSelector((state) => state.recipes.list);
  return (
    <Page>
      <AppHeader />
      <Content
        title="Les recettes oRecipes"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, explicabo."
        recipes={recipes}
      />
    </Page>
  );
}

export default Home;
