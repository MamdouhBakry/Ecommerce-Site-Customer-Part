import { productConstants } from "../actions/constants";

const initState = {
  products: [],
  productsByPrice: {
    under5k: [],
    under10k: [],
    under15k: [],
    under20k: [],
  },
};

export default (state = initState, action) => {
  switch (action.type) {
    case productConstants.GET_PRODUCTS_BY_SLUG:
      return {
        ...state,
        products: action.payload.products,
        productsByPrice: action.payload.productsByPrice,
      };
    default:
      return state;
  }
};
