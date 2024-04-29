import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
	categories: [],
}

export const fetchCategories = createAsyncThunk(
	"categories/fetchCategories",
	async () => {
		const res = await fetch("http://localhost:3333/categories/all")
		const json = res.json()
		return json
	}
)

const categoriesSlice = createSlice({
	name: "categories",
	initialState,
	reducers: {},
})

export default categoriesSlice.reducer
