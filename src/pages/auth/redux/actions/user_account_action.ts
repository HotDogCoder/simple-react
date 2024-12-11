import { Dispatch } from "redux";
import {
  UserAccount,
  UserAccountActionTypes,
  UserAccountError,
  UserAccountRequest,
  UserAccountState,
} from "../types/user_account_types";
import axios, { AxiosError, AxiosResponse } from "axios";
import { ThunkAction } from "redux-thunk";

export const postUserAccount =
  (data: UserAccount) => async (dispatch: Dispatch<UserAccountActionTypes>) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    dispatch({
      type: "START_LOADING",
      payload: { ...data, error: null, message: "START_LOADING" },
    });

    axios
      .post(
        `${process.env.REACT_APP_API_URL}/dj-rest-auth/login/`,
        data,
        config
      )
      .then((response) => {
        dispatch({ type: "POST_USER_ACCOUNT", payload: response.data });
        dispatch({
          type: "END_LOADING",
          payload: { id: 0, name: "", error: null, message: "END_LOADING" },
        });
        dispatch({
          type: "POST_SUCCESS_USER_ACCOUNT",
          payload: {
            ...response.data,
            error: null,
            message: "POST_SUCCESS_USER_ACCOUNT",
          },
        });
      })
      .catch((error: AxiosError<UserAccountError>) => {
        if (error.response) {
          console.log("Error response data:", error.response.data);
          console.log("Status code:", error.response.status);
          console.log("Headers:", error.response.headers);

          dispatch({
            type: "END_LOADING",
            payload: { id: 0, name: "", error: null, message: "END_LOADING" },
          });

          dispatch({
            type: "POST_FAIL_USER_ACCOUNT",
            payload: {
              error: error.response.data,
              message: "Usuario no valido",
            },
          });
        } else if (error.request) {
          console.log("No response received:", error.request);
        } else {
          console.log("Error:", error.message);
        }
        console.log("Config:", error.config);
      });
  };

export const putUserAccount =
  (data: UserAccountRequest) =>
  (dispatch: Dispatch<UserAccountActionTypes>) => {
    try {
      dispatch({
        type: "START_LOADING",
        payload: { ...data, error: null, message: "START_LOADING" },
      });

      dispatch({ type: "PUT_USER_ACCOUNT", payload: data });

      dispatch({
        type: "PUT_SUCCESS_USER_ACCOUNT",
        payload: { ...data, error: null, message: "PUT_SUCCESS" },
      });
      dispatch({
        type: "END_LOADING",
        payload: { id: 0, name: "", error: null, message: "END_LOADING" },
      });
    } catch (error) {
      dispatch({
        type: "END_LOADING",
        payload: { id: 0, name: "", error: null, message: "END_LOADING" },
      });

      dispatch({
        type: "PUT_FAIL_USER_ACCOUNT",
        payload: { ...data, error: error, message: "PUT_FAIL" },
      });
    }
  };

export const updateUserAccount =
  (data: UserAccountRequest) =>
  (dispatch: Dispatch<UserAccountActionTypes>) => {
    try {
      dispatch({
        type: "START_LOADING",
        payload: { ...data, error: null, message: "START_LOADING" },
      });

      dispatch({ type: "UPDATE_USER_ACCOUNT", payload: data });

      dispatch({
        type: "UPDATE_SUCCESS_USER_ACCOUNT",
        payload: { ...data, error: null, message: "UPDATE_SUCCESS" },
      });

      dispatch({
        type: "END_LOADING",
        payload: { id: 0, name: "", error: null, message: "END_LOADING" },
      });
    } catch (error) {
      dispatch({
        type: "END_LOADING",
        payload: { id: 0, name: "", error: null, message: "END_LOADING" },
      });

      dispatch({
        type: "UPDATE_FAIL_USER_ACCOUNT",
        payload: { ...data, error: error, message: "UPDATE_FAIL" },
      });
    }
  };

export const deleteUserAccount =
  (data: UserAccountRequest) =>
  (dispatch: Dispatch<UserAccountActionTypes>) => {
    try {
      dispatch({
        type: "START_LOADING",
        payload: { ...data, error: null, message: "START_LOADING" },
      });

      dispatch({ type: "DELETE_USER_ACCOUNT", payload: data });

      dispatch({
        type: "DELETE_SUCCESS_USER_ACCOUNT",
        payload: { ...data, error: null, message: "DELETE_SUCCESS" },
      });
      dispatch({
        type: "END_LOADING",
        payload: { id: 0, name: "", error: null, message: "END_LOADING" },
      });
    } catch (error) {
      dispatch({
        type: "END_LOADING",
        payload: { id: 0, name: "", error: null, message: "END_LOADING" },
      });

      dispatch({
        type: "DELETE_FAIL_USER_ACCOUNT",
        payload: { ...data, error: error, message: "DELETE_FAIL" },
      });
    }
  };

export const getUserAccount =
  (data: UserAccountRequest) =>
  (dispatch: Dispatch<UserAccountActionTypes>) => {
    try {
      dispatch({
        type: "START_LOADING",
        payload: { ...data, error: null, message: "START_LOADING" },
      });

      dispatch({ type: "GET_USER_ACCOUNT", payload: data });

      dispatch({
        type: "GET_SUCCESS_USER_ACCOUNT",
        payload: { ...data, error: null, message: "GET_SUCCESS" },
      });
      dispatch({
        type: "END_LOADING",
        payload: { id: 0, name: "", error: null, message: "END_LOADING" },
      });
    } catch (error) {
      dispatch({
        type: "END_LOADING",
        payload: { id: 0, name: "", error: null, message: "END_LOADING" },
      });

      dispatch({
        type: "GET_FAIL_USER_ACCOUNT",
        payload: { ...data, error: error, message: "GET_FAIL" },
      });
    }
  };

export const verifyUserAccount =
  (): ThunkAction<void, UserAccountState, null, UserAccountActionTypes> =>
  async (dispatch) => {
    if (localStorage.getItem("access")) {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      };
      try {
        const body = JSON.stringify({ token: localStorage.getItem("access") });
        const response = await axios.post(
          `${process.env.REACT_APP_API_URL}/dj-rest-auth/token/verify/`,
          body,
          config
        );

        dispatch({
          type: "VERIFY_SUCCESS_USER_ACCOUNT",
          payload: response.data,
        });
      } catch (error) {
        console.log("correcto fallo");

        dispatch({
          type: "VERIFY_FAIL_USER_ACCOUNT",
          payload: {
            id: 0,
            name: "",
            error: error,
          },
        });
        dispatch(refreshUserAccount());
      }
    } else {
      dispatch({
        type: "DEFAULT_USER_ACCOUNT",
        payload: null,
      });
    }
  };

export const refreshUserAccount =
  (): ThunkAction<void, any, null, any> => async (dispatch) => {
    dispatch({
      type: "START_LOADING",
      payload: { error: null, message: "START_LOADING" },
    });
    if (localStorage.getItem("access")) {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_API_URL}/dj-rest-auth/token/refresh/`,
          config
        );
        dispatch({
          type: "REFRESH_USER_ACCOUNT",
          payload: response.data,
        });
        dispatch({
          type: "END_LOADING",
          payload: { id: 0, name: "", error: null, message: "END_LOADING" },
        });
        dispatch({
          type: "REFRESH_SUCCESS_USER_ACCOUNT",
          payload: {
            ...response.data,
            error: null,
            message: "REFRESH_SUCCESS",
          },
        });
      } catch (error) {
        console.log(error);
        dispatch({
          type: "END_LOADING",
          payload: { id: 0, name: "", error: null, message: "END_LOADING" },
        });

        dispatch({
          type: "REFRESH_FAIL_USER_ACCOUNT",
          payload: {
            id: 0,
            name: "",
            error: error,
            message: "REFRESH_FAIL",
          },
        });

        dispatch({
          type: "DEFAULT_USER_ACCOUNT",
          payload: null,
        });
      }
    } else {
      dispatch({
        type: "END_LOADING",
        payload: { id: 0, name: "", error: null, message: "END_LOADING" },
      });

      dispatch({
        type: "DEFAULT_USER_ACCOUNT",
        payload: null,
      });
    }
  };

export const logoutUserAccount =
  () => async (dispatch: Dispatch<UserAccountActionTypes>) => {
    dispatch({
      type: "START_LOADING",
      payload: { error: null, message: "START_LOADING" },
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/dj-rest-auth/logout/`,
        {},
        config
      );
      dispatch({ type: "LOGOUT_USER_ACCOUNT", payload: response.data });

      dispatch({
        type: "LOGOUT_SUCCESS_USER_ACCOUNT",
        payload: { ...response.data, error: null, message: "LOGOUT_SUCCESS" },
      });
      dispatch({
        type: "END_LOADING",
        payload: { id: 0, name: "", error: null, message: "END_LOADING" },
      });
    } catch (error) {
      dispatch({
        type: "END_LOADING",
        payload: { id: 0, name: "", error: null, message: "END_LOADING" },
      });
      dispatch({
        type: "LOGOUT_FAIL_USER_ACCOUNT",
        payload: {
          error: error,
          message: "LOGOUT_FAIL",
          id: 0,
          name: "",
        },
      });
    }
  };

export const registerUserAccount =
  (data: UserAccount) => async (dispatch: Dispatch<UserAccountActionTypes>) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    dispatch({
      type: "START_LOADING",
      payload: { ...data, error: null, message: "START_LOADING" },
    });

    axios
      .post(
        `${process.env.REACT_APP_API_URL}/dj-rest-auth/registration/`,
        data,
        config
      )
      .then((response) => {
        dispatch({ type: "REGISTER_USER_ACCOUNT", payload: response.data });
        dispatch({
          type: "END_LOADING",
          payload: { id: 0, name: "", error: null, message: "END_LOADING" },
        });
        dispatch({
          type: "REGISTER_SUCCESS_USER_ACCOUNT",
          payload: { ...response.data, error: null, message: "POST_SUCCESS" },
        });
      })
      .catch((error: AxiosError<UserAccountError>) => {
        if (error.response) {
          console.log("Error response data:", error.response.data);
          console.log("Status code:", error.response.status);
          console.log("Headers:", error.response.headers);

          dispatch({
            type: "END_LOADING",
            payload: { id: 0, name: "", error: null, message: "END_LOADING" },
          });

          dispatch({
            type: "REGISTER_FAIL_USER_ACCOUNT",
            payload: {
              error: error.response.data,
              message: "Usuario no valido",
            },
          });
        } else if (error.request) {
          console.log("No response received:", error.request);
        } else {
          console.log("Error:", error.message);
        }
        console.log("Config:", error.config);
      });
  };

export const recoverUserAccount =
  (data: UserAccount) => (dispatch: Dispatch<UserAccountActionTypes>) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    dispatch({
      type: "START_LOADING",
      payload: { ...data, error: null, message: "START_LOADING" },
    });

    axios
      .post(
        `${process.env.REACT_APP_API_URL}/dj-rest-auth/password/reset/confirm/${data.uid}/${data.token}/`,
        data,
        config
      )
      .then((response) => {
        dispatch({ type: "RECOVER_USER_ACCOUNT", payload: response.data });
        dispatch({
          type: "END_LOADING",
          payload: { id: 0, name: "", error: null, message: "END_LOADING" },
        });
        dispatch({
          type: "RECOVER_SUCCESS_USER_ACCOUNT",
          payload: { ...response.data, error: null, message: "POST_SUCCESS" },
        });
      })
      .catch((error: AxiosError<UserAccountError>) => {
        if (error.response) {
          dispatch({
            type: "END_LOADING",
            payload: { id: 0, name: "", error: null, message: "END_LOADING" },
          });

          dispatch({
            type: "RECOVER_FAIL_USER_ACCOUNT",
            payload: {
              error: error.response.data,
              message: "Usuario no valido",
            },
          });
        } else if (error.request) {
          console.log("No response received:", error.request);
        } else {
          console.log("Error:", error.message);
        }
        console.log("Config:", error.config);
      });
  };

export const resendUserAccount =
  (data: UserAccount) => (dispatch: Dispatch<UserAccountActionTypes>) => {
    // RESEND
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    dispatch({
      type: "START_LOADING",
      payload: { ...data, error: null, message: "START_LOADING" },
    });

    axios
      .post(
        `${process.env.REACT_APP_API_URL}/dj-rest-auth/registration/resend-email/`,
        data,
        config
      )
      .then((response) => {
        dispatch({
          type: "RESEND_USER_ACCOUNT",
          payload: response.data,
        });
        dispatch({
          type: "END_LOADING",
          payload: { id: 0, name: "", error: null, message: "END_LOADING" },
        });
        dispatch({
          type: "RESEND_SUCCESS_USER_ACCOUNT",
          payload: { ...response.data, error: null, message: "POST_SUCCESS" },
        });
      })
      .catch((error: AxiosError<UserAccountError>) => {
        if (error.response) {
          dispatch({
            type: "END_LOADING",
            payload: { id: 0, name: "", error: null, message: "END_LOADING" },
          });

          dispatch({
            type: "RESEND_FAIL_USER_ACCOUNT",
            payload: {
              error: error.response.data,
              message: "Usuario no valido",
            },
          });
        } else if (error.request) {
          console.log("No response received:", error.request);
        } else {
          console.log("Error:", error.message);
        }
        console.log("Config:", error.config);
      });
  };

export const registrationVerifyEmailUserAccount =
  (data: UserAccount) => (dispatch: Dispatch<UserAccountActionTypes>) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    dispatch({
      type: "START_LOADING",
      payload: { ...data, error: null, message: "START_LOADING" },
    });

    axios
      .post(
        `${process.env.REACT_APP_API_URL}/dj-rest-auth/registration/verify-email/`,
        data,
        config
      )
      .then((response) => {
        dispatch({
          type: "REGISTRATION_VERIFY_EMAIL_USER_ACCOUNT",
          payload: response.data,
        });
        dispatch({
          type: "END_LOADING",
          payload: { id: 0, name: "", error: null, message: "END_LOADING" },
        });
        dispatch({
          type: "REGISTRATION_VERIFY_EMAIL_SUCCESS_USER_ACCOUNT",
          payload: { ...response.data, error: null, message: "POST_SUCCESS" },
        });
      })
      .catch((error: AxiosError<UserAccountError>) => {
        if (error.response) {
          dispatch({
            type: "END_LOADING",
            payload: { id: 0, name: "", error: null, message: "END_LOADING" },
          });

          dispatch({
            type: "REGISTRATION_VERIFY_EMAIL_FAIL_USER_ACCOUNT",
            payload: {
              error: error.response.data,
              message: "Usuario no valido",
            },
          });
        } else if (error.request) {
          console.log("No response received:", error.request);
        } else {
          console.log("Error:", error.message);
        }
        console.log("Config:", error.config);
      });
  };

export const passwordChangeUserAccount =
  (data: UserAccount) => (dispatch: Dispatch<UserAccountActionTypes>) => {
    // PASSWORD_CHANGE
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    dispatch({
      type: "START_LOADING",
      payload: { ...data, error: null, message: "START_LOADING" },
    });

    axios
      .post(
        `${process.env.REACT_APP_API_URL}/dj-rest-auth/password/change/`,
        data,
        config
      )
      .then((response) => {
        dispatch({
          type: "PASSWORD_CHANGE_USER_ACCOUNT",
          payload: response.data,
        });
        dispatch({
          type: "END_LOADING",
          payload: { id: 0, name: "", error: null, message: "END_LOADING" },
        });
        dispatch({
          type: "PASSWORD_CHANGE_SUCCESS_USER_ACCOUNT",
          payload: { ...response.data, error: null, message: "POST_SUCCESS" },
        });
      })
      .catch((error: AxiosError<UserAccountError>) => {
        if (error.response) {
          console.log("Error response data:", error.response.data);
          console.log("Status code:", error.response.status);
          console.log("Headers:", error.response.headers);

          dispatch({
            type: "END_LOADING",
            payload: { id: 0, name: "", error: null, message: "END_LOADING" },
          });

          dispatch({
            type: "PASSWORD_CHANGE_FAIL_USER_ACCOUNT",
            payload: {
              error: error.response.data,
              message: "Usuario no valido",
            },
          });
        } else if (error.request) {
          console.log("No response received:", error.request);
        } else {
          console.log("Error:", error.message);
        }
        console.log("Config:", error.config);
      });
  };

export const passwordResetUserAccount =
  (data: UserAccount) => (dispatch: Dispatch<UserAccountActionTypes>) => {
    // PASSWORD_RESET
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    dispatch({
      type: "START_LOADING",
      payload: { ...data, error: null, message: "START_LOADING" },
    });

    axios
      .post(
        `${process.env.REACT_APP_API_URL}/dj-rest-auth/password/reset/`,
        data,
        config
      )
      .then((response) => {
        dispatch({
          type: "PASSWORD_RESET_USER_ACCOUNT",
          payload: response.data,
        });
        dispatch({
          type: "END_LOADING",
          payload: { id: 0, name: "", error: null, message: "END_LOADING" },
        });
        dispatch({
          type: "PASSWORD_RESET_SUCCESS_USER_ACCOUNT",
          payload: { ...response.data, error: null, message: "POST_SUCCESS" },
        });
      })
      .catch((error: AxiosError<UserAccountError>) => {
        if (error.response) {
          console.log("Error response data:", error.response.data);
          console.log("Status code:", error.response.status);
          console.log("Headers:", error.response.headers);

          dispatch({
            type: "END_LOADING",
            payload: { id: 0, name: "", error: null, message: "END_LOADING" },
          });

          dispatch({
            type: "PASSWORD_RESET_FAIL_USER_ACCOUNT",
            payload: {
              error: error.response.data,
              message: "Usuario no valido",
            },
          });
        } else if (error.request) {
          console.log("No response received:", error.request);
        } else {
          console.log("Error:", error.message);
        }
        console.log("Config:", error.config);
      });
  };

export const passwordResetConfirmUserAccount =
  (data: UserAccount) => (dispatch: Dispatch<UserAccountActionTypes>) => {
    // PASSWORD_RESET_CONFIRM
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    dispatch({
      type: "START_LOADING",
      payload: { ...data, error: null, message: "START_LOADING" },
    });

    axios
      .post(
        `${process.env.REACT_APP_API_URL}/dj-rest-auth/password/reset/confirm/${data.uid}/${data.token}/`,
        data,
        config
      )
      .then((response) => {
        dispatch({
          type: "PASSWORD_RESET_CONFIRM_USER_ACCOUNT",
          payload: response.data,
        });
        dispatch({
          type: "END_LOADING",
          payload: { id: 0, name: "", error: null, message: "END_LOADING" },
        });
        dispatch({
          type: "PASSWORD_RESET_CONFIRM_SUCCESS_USER_ACCOUNT",
          payload: { ...response.data, error: null, message: "POST_SUCCESS" },
        });
      })
      .catch((error: AxiosError<UserAccountError>) => {
        if (error.response) {
          console.log("Error response data:", error.response.data);
          console.log("Status code:", error.response.status);
          console.log("Headers:", error.response.headers);

          dispatch({
            type: "END_LOADING",
            payload: { id: 0, name: "", error: null, message: "END_LOADING" },
          });

          dispatch({
            type: "PASSWORD_RESET_CONFIRM_FAIL_USER_ACCOUNT",
            payload: {
              error: error.response.data,
              message: "Usuario no valido",
            },
          });
        } else if (error.request) {
          console.log("No response received:", error.request);
        } else {
          console.log("Error:", error.message);
        }
        console.log("Config:", error.config);
      });
  };
// [ANCHOR_1]
