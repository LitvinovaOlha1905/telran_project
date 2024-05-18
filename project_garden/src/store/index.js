import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./slices/categoriesSlice";
import productsReducer from "./slices/productsSlice";
import themeReducer from "./slices/themeSlice";
import filtersReducer from "./slices/filterSlice";

export const store = configureStore({
	reducer: {
		categories: categoriesReducer,
		products: productsReducer,
		theme: themeReducer,
		filters: filtersReducer,
	},
});
