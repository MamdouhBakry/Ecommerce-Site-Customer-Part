import axiosInstance from "../helpers/axios";
import { productConstants } from "./constants";

export const getProductBySlug = (slug) => {
  return async (dispatch) => {
    try {
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
    } catch (error) {
      console.log(error);
    }
  };
};

export const getProductPage = (payload) => {
  return async (dispatch) => {
    dispatch({ type: productConstants.GET_PRODUCT_PAGE_REQUEST });
    try {
      const { cid, type } = payload.params;
      console.log(payload.params);
      const res = await axiosInstance.get(`/page/${cid}/${type}`);
      console.log(res);
      if (res.status === 200) {
        dispatch({
          type: productConstants.GET_PRODUCT_PAGE_SUCCESS,
          payload: {
            page: res.data.page,
          },
        });
      } else {
        dispatch({
          type: productConstants.GET_PRODUCT_PAGE_FAILURE,
          payload: {
            error: res.data.error,
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getProductDetailsById = (payload) => {
  return async (dispatch) => {
    dispatch({ type: productConstants.GET_PRODUCT_DETAILS_BY_ID_REQUEST });
    let res;
    try {
      const { productId } = payload.params;
      res = await axiosInstance.get(`/product/${productId}`);
      console.log(res);
      dispatch({
        type: productConstants.GET_PRODUCT_DETAILS_BY_ID_SUCCESS,
        payload: {
          productDetails: res.data.product,
        },
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: productConstants.GET_PRODUCT_DETAILS_BY_ID_FAILURE,
        payload: {
          error: res.data.error,
        },
      });
    }
  };
};
