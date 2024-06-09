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
			state.favorites = state.favorites.filter(
				product => product.id !== action.payload.id
			);
		},
		setFavorits: (state, action) => {
			state.favorites = action.payload;
		},
		sortFavorits: (state, action) => {
			if (action.payload === "name") {
				state.favorites.sort((a, b) => a.title.localeCompare(b.title));
			} else if (action.payload === "priceAsc") {
				state.favorites.sort((a, b) => a.price - b.price);
			} else if (action.payload === "priceDesc") {
				state.favorites.sort((a, b) => b.price - a.price);
			} else if (action.payload === "dateAdded") {
				state.favorites.sort(
					(a, b) => new Date(b.createdAt) - new Date(a.createdAt)
				);
			}
		},
		filterFavorits: (state, action) => {
			const { min_price, max_price } = action.payload;
			state.favorites = state.favorites.filter(
				el =>
					parseFloat(el.price) >= min_price && parseFloat(el.price) <= max_price
			);
		},
		setFilteredFavorits: (state, action) => {
			state.favorites = action.payload.map(el => ({ ...el, visible: true }));
		},
	},
});

export const {
	addFavorite,
	removeFavorite,
	filterFavorits,
	setFilteredFavorits,
	setFavorits,
	sortFavorits,
} = favoritesSlice.actions;

export const selectFavorits = state => state.favorites.favorites;

export default favoritesSlice.reducer;
