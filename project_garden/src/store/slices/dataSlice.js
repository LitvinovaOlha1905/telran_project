import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  currentCategory: null,
  status: "",
  error: "",
};

export const fetchProductsByCategory = createAsyncThunk(
  "data/fetchProductsByCategory",
  async (categoryId) => {
    try {
      const response = await fetch(
				`https://project-backend-hvmn.onrender.com/categories/${categoryId}`
			);
      if (!response.ok) {
        throw new Error("Failed to fetch users!");
      }
      const data = await response.json();
      return data;
    } catch (err) {
      console.log(err.message);
    }
  }
);
const dataSlice = createSlice({
	name: "data",
	initialState,
	reducers: {
		setProductsData: (state, action) => {
			state.products = action.payload;
		},
		sortProductsData: (state, action) => {
			if (action.payload === "name") {
				state.products.sort((a, b) => a.title.localeCompare(b.title));
			} else if (action.payload === "priceAsc") {
				state.products.sort((a, b) => a.price - b.price);
			} else if (action.payload === "priceDesc") {
				state.products.sort((a, b) => b.price - a.price);
			} else if (action.payload === "dateAdded") {
				state.products.sort(
					(a, b) => new Date(b.createdAt) - new Date(a.createdAt)
				);
			}
		},
		getCheapProductsData: (state, action) => {
			const { checked } = action.payload;
			state.products = state.products.map(el => ({
				...el,
				visible: checked ? el.discont_price : true,
			}));
		},
		filterProductsData: (state, action) => {
			const { min_price, max_price } = action.payload;
			state.products = state.products.map(el => ({
				...el,
				visible:
					(!min_price || parseFloat(el.price) >= min_price) &&
					(!max_price || parseFloat(el.price) <= max_price),
			}));
		},
		setFilteredProductsData: (state, action) => {
			state.products = action.payload.map(el => ({ ...el, visible: true }));
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchProductsByCategory.pending, state => {
				state.status = "loading";
			})
			.addCase(fetchProductsByCategory.fulfilled, (state, action) => {
				state.currentCategory = action.payload.category;
				state.products = action.payload.data.map(el => ({
					...el,
					visible: true,
				}));
				state.status = "ready";
			})
			.addCase(fetchProductsByCategory.rejected, state => {
				state.status = "error";
			});
	},
});

export const {
	setProductsData,
	sortProductsData,
	getCheapProductsData,
	filterProductsData,
	setFilteredProductsData,
} = dataSlice.actions;

export const selectData = state => state.data.data;

export default dataSlice.reducer;
