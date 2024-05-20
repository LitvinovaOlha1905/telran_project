import { configureStore } from "@reduxjs/toolkit"
import categoriesReducer from "./slices/categoriesSlice"
import productsReducer from "./slices/productsSlice"
import themeReducer from "./slices/themeSlice"
import dataReducer from './slices/dataSlice'
import filtersReducer from "./slices/filterSlice";
import singleProductReducer from './slices/singleProductSlice'

export const store = configureStore({
	reducer: {
		categories: categoriesReducer,
		products: productsReducer,
		theme: themeReducer,
		data: dataReducer,
    filters: filtersReducer,
		singleProduct: singleProductReducer
	},
});
