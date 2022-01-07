import { cartConstants } from "../actions/constants";

const initState = {
  cartItems: {
    // 123:{
    //     _id:123,
    //     name:"samsung mobile",
    //     img:"som.jpg",
    //     price:200,
    //     qty:1
    // }
  },
  updatingCart: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case cartConstants.ADD_TO_CART_REQUEST:
      return {
        ...state,
        updatingCart: true,
      };
    case cartConstants.ADD_TO_CART_SUCCESS:
      return {
        ...state,
        cartItems: action.payload.cartItems,
        updatingCart: false,
      };
    case cartConstants.ADD_TO_CART_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        updatingCart: false,
      };
    case cartConstants.RESET_CART:
      return {
        ...initState,
      };
    default:
      return state;
  }
};
