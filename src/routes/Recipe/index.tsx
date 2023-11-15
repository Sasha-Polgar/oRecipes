/* eslint-disable arrow-body-style */
import { Navigate, useParams } from 'react-router-dom';
import { useEffect, useRef } from 'react';

import Page from '../../components/Page';
import AppHeader from '../../components/AppHeader';

import Header from './Header';
import Ingredients from './Ingredients';
import Instructions from './Instructions';

import { useAppSelector } from '../../hooks/redux';
import { findRecipe } from '../../store/selectors/recipes';

import './styles.scss';

function Recipe() {
  const { slug } = useParams();
  if (!slug) {
    throw new Error('Aucun slug fourni');
  }

  const endRef = useRef<HTMLDivElement>(null);

  const recipe = useAppSelector((state) =>
    findRecipe(state.recipes.list, slug)
  );

  useEffect(() => {
    endRef.current?.scrollIntoView();
  }, [recipe]);

  if (!recipe) {
    return <Navigate to="/error" replace />;
  }
  return (
    <Page>
      <span ref={endRef} />
      <AppHeader />
      <div className="recipe">
        <Header
          name={recipe.title}
          thumbnail={recipe.thumbnail}
          author={recipe.author}
          difficulty={recipe.difficulty}
        />
        <Ingredients list={recipe.ingredients} />
        <Instructions steps={recipe.instructions} />
      </div>
    </Page>
  );
}

export default Recipe;
