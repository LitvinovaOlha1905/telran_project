import { act } from "react-dom/test-utils";

const LOAD_ALL_CATEGORIES = "LOAD_ALL_CATEGORIES";

export const loadAllCaregoriesAction = categories => ({ type: LOAD_ALL_CATEGORIES , payload: categories});


export const categoriesReduser = (state = [], action) => {
	if ((action.type === LOAD_ALL_CATEGORIES)) {
		return action.payload
	}
	return state;
};

