import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Recipe } from '../../@types/recipe';

interface RecipesState {
  list: Recipe[];
  isLoading: boolean;
  error: string | null;
}
export const initialState: RecipesState = {
  list: [],
  isLoading: false,
  error: null,
};

export const fetchRecipes = createAsyncThunk(
  'recipes/fetchRecipes',
  async () => {
    const { data } = await axios.get(
      'https://orecipes-api.onrender.com/api/recipes'
    );
    return data;
  }
);

// export const fetchRecipe = createAsyncThunk(
//   'recipes/fetchRecipes',
//   async () => {
//     const { data } = await axios.get(
//       'https://orecipes-api.onrender.com/api/recipes'
//     );
//     return data;
//   }
// );

const recipesReducer = createSlice({
  name: 'recipes',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.list = action.payload;
      })
      .addCase(fetchRecipes.rejected, (state) => {
        state.error = 'Une erreur est survenue';
        state.isLoading = false;
      });
  },
});

export default recipesReducer.reducer;
