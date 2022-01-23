import axiosInstance from "../helpers/axios";
import { authConstants, cartConstants } from "./constants";

// new update signup action
export const userSignupFun = (user) => {
  console.log(user);
  return async (dispatch) => {
    let res;
    try {
      dispatch({ type: authConstants.SIGNUP_REQUEST });
      res = await axiosInstance.post("/signup", user);
      if (res.status === 201) {
        dispatch({ type: authConstants.SIGNUP_SUCCESS });
        const { token, user } = res.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        dispatch({
          type: authConstants.LOGIN_SUCCESS,
          payload: {
            token,
            user,
          },
        });
      } else {
        const { error } = res.data;
        dispatch({ type: authConstants.SIGNUP_FAILURE, payload: { error } });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const login = (user) => {
  console.log(user);

  return async (dispatch) => {
    try {
      dispatch({ type: authConstants.LOGIN_REQUEST });
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
