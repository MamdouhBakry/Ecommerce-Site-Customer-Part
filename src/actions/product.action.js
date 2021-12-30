import axiosInstance from "../helpers/axios";
import { productConstants } from "./constants";

export const getProductBySlug = (slug) => {
  return async (dispatch) => {
    const res = await axiosInstance.get(`/products/${slug}`);
    if (res.status === 200) {
      dispatch({
        type: productConstants.GET_PRODUCTS_BY_SLUG,
        payload: res.data,
      });
    } else {
      // dispatch({
      //   type:
      // })
    }
  };
};
