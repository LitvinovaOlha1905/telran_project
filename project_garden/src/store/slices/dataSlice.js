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
        `http://localhost:3333/categories/${categoryId}`
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
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsByCategory.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
        state.currentCategory = action.payload.category;
        state.products = action.payload.data.map((el) => ({
          ...el,
          visible: true,
        }));
        state.status = "ready";
      })
      .addCase(fetchProductsByCategory.rejected, (state) => {
        state.status = "error";
      });
  },
});

export default dataSlice.reducer;
