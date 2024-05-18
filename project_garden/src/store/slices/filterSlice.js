import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	products: [],
};

export const filtersSlice = createSlice({
	name: "filters",
	initialState,
	reducers: {
		sortProducts: (state, action) => {
			if (action.payload === "name") {
				state.products.sort((a, b) => a.title.localeCompare(b.title));
			} else if (action.payload === "priceAsc") {
				state.products.sort((a, b) => a.price - b.price);
			} else if (action.payload === "priceDesc") {
				state.products.sort((a, b) => b.price - a.price);
			}
		},
		getCheapProducts: (state, action) => {
			const { checked } = action.payload;
			state.products = state.products.map(el => ({
				...el,
				visible: checked ? el.discont_price : true,
			}));
		},
		filterProducts: (state, action) => {
			const { min_price, max_price } = action.payload;
			state.products = state.products.map(el => ({
				...el,
				visible:
					(!min_price || parseFloat(el.price) >= min_price) &&
					(!max_price || parseFloat(el.price) <= max_price),
			}));
		},
		setFilteredProducts: (state, action) => {
			state.products = action.payload.map(el => ({ ...el, visible: true }));
		},
	},
});

export const {
	sortProducts,
	getCheapProducts,
	filterProducts,
	setFilteredProducts,
} = filtersSlice.actions;

export const selectFilteredProducts = state => state.filters.products;

export default filtersSlice.reducer;
