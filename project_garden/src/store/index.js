import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./slices/categoriesSlice";
import productsReducer from "./slices/productsSlice";
import themeReducer from "./slices/themeSlice";
import dataReducer from "./slices/dataSlice";
import singleProductReducer from "./slices/singleProductSlice";
import cartReducer from "./slices/cartSlice";
import favoritesReducer from "./slices/favoritesSlice";
import { loadState, saveState } from "./slices/localStorage";

const preloadedState = loadState();

const store = configureStore({
	reducer: {
		categories: categoriesReducer,
		products: productsReducer,
		theme: themeReducer,
		data: dataReducer,
		singleProduct: singleProductReducer,
		cart: cartReducer,
		favorites: favoritesReducer,
	},
	preloadedState,
});

store.subscribe(() => {
	saveState(store.getState());
});

export default store;
