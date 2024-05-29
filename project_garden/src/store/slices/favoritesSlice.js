import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	favorites: [],
};

const favoritesSlice = createSlice({
	name: "favorites",
	initialState,
	reducers: {
		addFavorite: (state, action) => {
			state.favorites.push(action.payload);
		},
		removeFavorite: (state, action) => {
			return state.favorites.filter(
				(product => product.id !== action.payload.id)
			);
		},
	},
});

export const {addFavorite, removeFavorite} = favoritesSlice.actions
export default favoritesSlice.reducer