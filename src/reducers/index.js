import categoryReducer from "./category.reducers";
import productReducer from "./product.reducer";
import authReducer from "./auth.reducers";
import cartReducer from "./cart.reducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  category: categoryReducer,
  product: productReducer,
  auth: authReducer,
  cart: cartReducer,
});

export default rootReducer;
