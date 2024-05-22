import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  currentProducts: null,
  status: "",
  error: "",
};

export const fetchAllProducts = createAsyncThunk(
  "products/fetchAllProducts",
  async () => {
    try {
      const res = await fetch("http://localhost:3333/products/all");
      if (!res.ok) {
        throw new Error("Failed to fetch users!");
      }
      const json = await res.json();
      return json;
    } catch (err) {
      console.log(err.message);
    }
  }
);

export const fetchProduct = createAsyncThunk(
  "products/fetchProduct",
  async (productId) => {
    try {
      const res = await fetch(`http://localhost:3333/categories/${productId}`);
      if (!res.ok) {
        throw new Error("Failed to fetch users!");
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.status = "ready";
		  state.products = action.payload.map(el => ({ ...el, visible: true }));
      })
      .addCase(fetchAllProducts.rejected, (state) => {
        state.status = "error";
      })
      .addCase(fetchProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.products = action.payload;
        state.status = "ready";
      })
      .addCase(fetchProduct.rejected, (state) => {
        state.status = "error";
      });
  },
});

export const { setProducts } = productsSlice.actions;

export const selectProducts = (state) => state.products.products;

export default productsSlice.reducer;
