import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import { categoriesReduser } from "./reducers/categoriesReducer";

const rootReducer = combineReducers({
	categories: categoriesReduser,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
