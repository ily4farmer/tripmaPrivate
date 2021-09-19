import { TypedUseSelectorHook, useSelector } from "react-redux";
import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { modalReducer } from "./modalReducer";
import { searchFormReducer } from "./searchFormReducer";
import { tableReducer } from "./tableReducer";
import { homeReducer } from "./homeReducer";
import { tableContentReducer } from "./tableContentReducer";

const reducer = combineReducers({
    searchForm: searchFormReducer,
    modal: modalReducer,
    table: tableReducer,
    home: homeReducer,
    tableContent: tableContentReducer
})

export const store = createStore(reducer, composeWithDevTools());

type RootState = ReturnType<typeof reducer>
export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector