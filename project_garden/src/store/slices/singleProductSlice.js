import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
  product: [{}],
  status: "",
  error: "",
};

export const fetchSingleProducts = createAsyncThunk(
  "singleProducts/fetchSingleProducts",
  async (productId) => {
    try {
      const res = await fetch(
				`https://project-backend-hvmn.onrender.com/products/${productId}`
			);
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
    
    const singleProductSlice = createSlice({
      name: "singleProduct",
      initialState,
      reducers: {},
      extraReducers: (builder) => {
        builder
          .addCase(fetchSingleProducts.pending, (state) => {
            state.status = "loading";
          })
          .addCase(fetchSingleProducts.fulfilled, (state, action) => {
            state.product = action.payload;
            state.status = "ready";
          })
          .addCase(fetchSingleProducts.rejected, (state) => {
            state.status = "error";
          });
                },
    });

    export default singleProductSlice.reducer;
