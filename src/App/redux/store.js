// import { createStore } from "redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import postman from './middleware';

//reducers
import reducer from "./reducer";

// const store = createStore(
//   reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware(), postman]
})

export default store;