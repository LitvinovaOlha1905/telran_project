import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	nightMode: false,
}

const themeSlice = createSlice({
   name: 'theme',
   initialState,
   reducers: {
      toggleTheme: state => {
         state.nightMode = !state.nightMode 
      }
   }
})

export const {toggleTheme} = themeSlice.actions
export default themeSlice.reducer
