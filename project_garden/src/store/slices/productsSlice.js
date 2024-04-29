import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
	products: [],
}

export const fetchProducts = createAsyncThunk(
	"products/fetchProducts",
	async () => {
		const res = await fetch("http://localhost:3333/products/all")
		const json = res.json()
		return json
	}
)

const productsSlice = createSlice({
	name: "products",
	initialState,
	reducers: {},
})

export default productsSlice.reducer
