import { productConstants } from "../actions/constants";

const initState = {
  products: [],
  productsByPrice: {
    under5k: [],
    under10k: [],
    under15k: [],
    under20k: [],
  },
  pageRequest: false,
  page: {},
  error: null,
  productDetails: {},
  loading: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case productConstants.GET_PRODUCTS_BY_SLUG:
      return {
        ...state,
        products: action.payload.products,
        productsByPrice: action.payload.productsByPrice,
      };
    case productConstants.GET_PRODUCT_PAGE_REQUEST:
      return {
        ...state,
        pageRequest: true,
      };
    case productConstants.GET_PRODUCT_PAGE_SUCCESS:
      return {
        ...state,
        pageRequest: false,
        page: action.payload.page,
      };
    case productConstants.GET_PRODUCT_PAGE_FAILURE:
      return {
        ...state,
        pageRequest: false,
        error: action.payload.error,
      };
    case productConstants.GET_PRODUCT_DETAILS_BY_ID_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case productConstants.GET_PRODUCT_DETAILS_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        productDetails: action.payload.productDetails,
      };
    case productConstants.GET_PRODUCT_DETAILS_BY_ID_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
