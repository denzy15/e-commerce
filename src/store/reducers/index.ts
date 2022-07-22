import { combineReducers } from "redux";
import cartReducer from "./cartreducer";
import filterReducer from "./filterreducer";
import productReducer from "./productreducer";
import typeReducer from "./typereducer";

export const rootReducer = combineReducers({
  type: typeReducer,
  product: productReducer,
  filter: filterReducer,
  cart: cartReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
