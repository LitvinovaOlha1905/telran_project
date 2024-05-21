import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  currentProduct: null, // Changed from currentProducts to currentProduct
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
      const res = await fetch(`http://localhost:3333/products/${productId}`); // Changed endpoint from categories to products
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
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.status = "ready";
      })
      .addCase(fetchAllProducts.rejected, (state) => {
        state.status = "error";
      })
      .addCase(fetchProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.currentProduct = action.payload; // Changed from state.products to state.currentProduct
        state.status = "ready";
      })
      .addCase(fetchProduct.rejected, (state) => {
        state.status = "error";
      });
  },
});

export default productsSlice.reducer;

