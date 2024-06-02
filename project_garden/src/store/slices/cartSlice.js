import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	productsInCart: [],
	totalSum: 0,
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		deleteProduct: (state, action) => {
			const productIndex = state.productsInCart.findIndex(
				product => product.id === action.payload.id
			);
			if (productIndex !== -1) {
				state.productsInCart.splice(productIndex, 1);
			}
		},
		decreaseProduct: (state, action) => {
			const product = state.productsInCart.find(
				product => product.id === action.payload.id
			);
			if (product) {
				if (product.quantity > 1) {
					product.quantity -= 1;
				} else {
					state.productsInCart = state.productsInCart.filter(
						p => p.id !== product.id
					);
				}
			}
		},
		addProduct: (state, action) => {
			const product = state.productsInCart.find(
				product => product.id === action.payload.id
			);
			if (product) {
				product.quantity += 1;
			} else {
				state.productsInCart.push({ ...action.payload, quantity: 1 });
			}
		},
		clearCart: state => {
			state.productsInCart = [];
		},
		countTotalSum: state => {
			state.totalSum = state.productsInCart.reduce((accum, product) => {
				const isProductOfDay = product.id === 14;
				let currentPrice = product.discont_price
					? product.discont_price
					: product.price;
				if (isProductOfDay) {
					currentPrice = product.price / 2;
				}
				return currentPrice * product.quantity + accum;
			}, 0);
		},
	},
});

export const {
	deleteProduct,
	decreaseProduct,
	addProduct,
	clearCart,
	countTotalSum,
} = cartSlice.actions;
export default cartSlice.reducer;
