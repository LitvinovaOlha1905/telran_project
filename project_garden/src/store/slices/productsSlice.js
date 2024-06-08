import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  currentProduct: null,
  status: "",
  error: "",
};

export const fetchAllProducts = createAsyncThunk(
  "products/fetchAllProducts",
  async () => {
    try {
      const res = await fetch(
				"https://project-backend-hvmn.onrender.com/products/all"
			);
      if (!res.ok) {
        throw new Error("Failed to fetch product!");
      }
      const json = await res.json();
      return json;
    } catch (err) {
      console.log(err.message);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    sortProducts: (state, action) => {
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
    getCheapProducts: (state, action) => {
      const { checked } = action.payload;
      state.products = state.products.map((el) => ({
        ...el,
        visible: checked ? el.discont_price : true,
      }));
    },
    filterProducts: (state, action) => {
      const { min_price, max_price } = action.payload;
      state.products = state.products.map((el) => ({
        ...el,
        visible:
          (!min_price || parseFloat(el.price) >= min_price) &&
          (!max_price || parseFloat(el.price) <= max_price),
      }));
    },
    setFilteredProducts: (state, action) => {
      state.products = action.payload.map((el) => ({ ...el, visible: true }));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.status = "ready";
        state.products = action.payload.map((el) => ({ ...el, visible: true }));
      })
      .addCase(fetchAllProducts.rejected, (state) => {
        state.status = "error";
      })
  },
});

export const {
  setProducts,
  sortProducts,
  getCheapProducts,
  filterProducts,
  setFilteredProducts,
} = productsSlice.actions;

export const selectProducts = (state) => state.products.products;

export default productsSlice.reducer;
