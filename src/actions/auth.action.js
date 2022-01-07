import axiosInstance from "../helpers/axios";
import { authConstants, cartConstants } from "./constants";

export const login = (user) => {
  console.log(user);

  return async (dispatch) => {
    dispatch({ type: authConstants.LOGIN_REQUEST });

    try {
      const res = await axiosInstance.post("/signin", { ...user });
      if (res.status === 200) {
        const { token, user } = res.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        dispatch({
          type: authConstants.LOGIN_SUCCSESS,
          payload: {
            token,
            user,
          },
        });
      } else {
        if (res.status === 400) {
          dispatch({
            type: authConstants.LOGIN_FAILURE,
            payload: {
              error: res.data.error,
            },
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const isUserLoggedIn = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = JSON.parse(localStorage.getItem("user"));
      dispatch({
        type: authConstants.LOGIN_SUCCSESS,
        payload: {
          token,
          user,
        },
      });
    } else {
      dispatch({
        type: authConstants.LOGIN_FAILURE,
        payload: {
          error: "failed to login",
        },
      });
    }
  };
};

export const signout = () => {
  return async (dispatch) => {
    dispatch({ type: authConstants.LOGOUT_REQUEST });
    // localStorage.removeItem("user");
    // localStorage.removeItem("token");
    localStorage.clear();
    dispatch({
      type: authConstants.LOGOUT_SUCCESS,
    });
    dispatch({ type: cartConstants.RESET_CART });
    // try {
    //   const res = await axiosInstance.post("/signout");
    //   if (res.status === 200) {
    //     localStorage.clear();
    //     dispatch({
    //       type: authConstants.LOGOUT_SUCCESS,
    //     });
    //   } else {
    //     dispatch({
    //       type: authConstants.LOGOUT_FAILURE,
    //       payload: {
    //         error: res.data.error,
    //       },
    //     });
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };
};
