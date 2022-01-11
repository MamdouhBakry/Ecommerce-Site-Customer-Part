import categoryReducer from "./category.reducers";
import productReducer from "./product.reducer";
import authReducer from "./auth.reducers";
import cartReducer from "./cart.reducers";
import userReducer from "./user.reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  category: categoryReducer,
  product: productReducer,
  auth: authReducer,
  cart: cartReducer,
  user: userReducer,
});

export default rootReducer;
