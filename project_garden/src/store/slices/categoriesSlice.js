import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
  categories: [],
  currentCategories: null,
  status: "",
  error: "",
};

export const fetchAllCategories = createAsyncThunk(
	"categories/fetchAllCategories",
	async () => {
		try {
			const res = await fetch("http://localhost:3333/categories/all")
			if (!res.ok) {
				throw new Error("Failed to fetch categories!");
			}
			const json = await res.json()
			return json
		} catch (err) { 
			console.log(err.message);
		}	
	}
)

// export const fetchCategory = createAsyncThunk(
//   "categories/fetchCategory",
//   async (categorieId) => {
//     try {
//       const res = await fetch(
//         `http://localhost:3333/categories/${categorieId}`
//       );
//       if (!res.ok) {
//         throw new Error("Failed to fetch categories!");
//       }
//       const json = await res.json();
//       return json;
//     } catch (err) {
//       console.log(err.message);
//     }
//   }
// );

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.status = "ready";
      })
      .addCase(fetchAllCategories.rejected, (state) => {
        state.status = "error";
	  })
	  // .addCase(fetchCategory.pending, (state) => {
    //     state.status = "loading";
    //   })
    //   .addCase(fetchCategory.fulfilled, (state, action) => {
    //     state.categories = action.payload;
    //     state.status = "ready";
    //   })
    //   .addCase(fetchCategory.rejected, (state) => {
    //     state.status = "error";
    //   });
  },
});

export default categoriesSlice.reducer
