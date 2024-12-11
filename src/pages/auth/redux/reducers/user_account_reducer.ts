import {
  UserAccountActionTypes,
  UserAccountState,
} from "../types/user_account_types";
import axios from "axios";
axios.defaults.withCredentials = true;

const initialState: UserAccountState = {
  id: 0,
  name: "",
  data: [],
  error: null,
  message: "",
  user: JSON.parse(localStorage.getItem("user")!),
  access: localStorage.getItem("access")!,
  isAuthenticated: localStorage.getItem("access") ? true : false,
  first_name: "",
  last_name: "",
  email: "",
  picture: "",
};

const UserAccountReducer = (
  state = initialState,
  action: UserAccountActionTypes
) => {
  switch (action.type) {
    case "POST_USER_ACCOUNT":
      localStorage.setItem("access", action.payload.access!);
      localStorage.setItem("user", JSON.stringify(action.payload.user!));
      // const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/`, {});
      // console.log(response)
      return {
        ...state,
        user: action.payload.user!,
        access: action.payload.access!,
        isAuthenticated: true,
        error: null,
        message: action.payload.message!,
      };
    case "POST_SUCCESS_USER_ACCOUNT":
      return { ...state, error: null, message: action.payload.message };
    case "POST_FAIL_USER_ACCOUNT":
      localStorage.removeItem("access");
      return {
        ...state,
        access: null,
        isAuthenticate: false,
        user: null,
        error: action.payload.error,
        message: action.payload.message,
        non_field_errors: action.payload.non_field_errors,
      };

    case "PUT_USER_ACCOUNT":
      // const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/`, {});
      // console.log(response)
      return { ...state, data: [] };
    case "PUT_SUCCESS_USER_ACCOUNT":
      return { ...state, error: null, message: action.payload.message! };
    case "PUT_FAIL_USER_ACCOUNT":
      return {
        ...state,
        error: action.payload.error!,
        message: action.payload.message!,
      };

    case "UPDATE_USER_ACCOUNT":
      // const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/`, {});
      // console.log(response)
      return { ...state, data: [] };
    case "UPDATE_SUCCESS_USER_ACCOUNT":
      return { ...state, error: null, message: action.payload.message };
    case "UPDATE_FAIL_USER_ACCOUNT":
      return {
        ...state,
        error: action.payload.error!,
        message: action.payload.message,
      };

    case "DELETE_USER_ACCOUNT":
      // const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/`, {});
      // console.log(response)
      return { ...state, data: [] };
    case "DELETE_SUCCESS_USER_ACCOUNT":
      return { ...state, error: null, message: action.payload.message };
    case "DELETE_FAIL_USER_ACCOUNT":
      return {
        ...state,
        error: action.payload.error!,
        message: action.payload.message,
      };

    case "GET_USER_ACCOUNT":
      // const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/`, {});
      // console.log(response)
      return state;
    case "GET_SUCCESS_USER_ACCOUNT":
      return { ...state, user: action.payload.user };
    case "GET_FAIL_USER_ACCOUNT":
      return {
        ...state,
        user: null,
        error: action.payload.error,
        message: action.payload.message,
      };

    case "VERIFY_USER_ACCOUNT":
      return state;
    case "VERIFY_SUCCESS_USER_ACCOUNT":
      return { ...state, isAuthenticated: true };
    case "VERIFY_FAIL_USER_ACCOUNT":
      return { ...state, error: action.payload.error!, isAuthenticated: false };

    case "REFRESH_USER_ACCOUNT":
      return state;
    case "REFRESH_SUCCESS_USER_ACCOUNT":
      localStorage.setItem("access", action.payload.access!);
      return {
        ...state,
        access: action.payload.access,
        isAuthenticated: true,
        message: "Refresh token success",
      };
    case "REFRESH_FAIL_USER_ACCOUNT":
      localStorage.removeItem("access");
      return {
        ...state,
        access: null,
        isAuthenticated: false,

        user: null,
        message: "Refresh token fail",
      };

    case "LOGOUT_USER_ACCOUNT":
      localStorage.removeItem("access");
      return {
        ...state,
        access: null,
        isAuthenticated: false,
        user: null,
        message: "User has logged out",
      };
    case "LOGOUT_SUCCESS_USER_ACCOUNT":
      return { ...state, data: [] };
    case "LOGOUT_FAIL_USER_ACCOUNT":
      return { ...state, error: action.payload.error, data: [] };

    case "REGISTER_USER_ACCOUNT":
      return {
        ...state,
        user: null,
        access: null,
        isAuthenticated: false,
        error: null,
      };
    case "REGISTER_SUCCESS_USER_ACCOUNT":
      return {
        ...state,
        error: null,
        message: action.payload.message,
        detail: action.payload.detail,
      };
    case "REGISTER_FAIL_USER_ACCOUNT":
      localStorage.removeItem("access");
      return {
        ...state,
        access: null,
        isAuthenticate: false,
        user: null,
        detail: "",
        error: action.payload.error,
        message: action.payload.message,
        non_field_errors: action.payload.non_field_errors,
      };

    case "RECOVER_USER_ACCOUNT":
      return {
        ...state,
        user: null,
        access: null,
        isAuthenticated: false,
        error: null,
      };
    case "RECOVER_SUCCESS_USER_ACCOUNT":
      return {
        ...state,
        error: null,
        message: action.payload.message,
        detail: action.payload.detail,
      };
    case "RECOVER_FAIL_USER_ACCOUNT":
      localStorage.removeItem("access");
      return {
        ...state,
        access: null,
        isAuthenticate: false,
        user: null,
        detail: "",
        error: action.payload.error,
        message: action.payload.message,
        non_field_errors: action.payload.non_field_errors,
      };

    case "RESEND_USER_ACCOUNT":
      return {
        ...state,
        user: null,
        access: null,
        isAuthenticated: false,
        error: null,
      };
    case "RESEND_SUCCESS_USER_ACCOUNT":
      return {
        ...state,
        error: null,
        message: action.payload.message,
        detail: action.payload.detail,
      };
    case "RESEND_FAIL_USER_ACCOUNT":
      return {
        ...state,
        detail: "",
        error: action.payload.error,
        message: action.payload.message,
        non_field_errors: action.payload.non_field_errors,
      };

    case "REGISTRATION_VERIFY_EMAIL_USER_ACCOUNT":
      return {
        ...state,
        user: null,
        access: null,
        isAuthenticated: false,
        error: null,
      };
    case "REGISTRATION_VERIFY_EMAIL_SUCCESS_USER_ACCOUNT":
      return {
        ...state,
        error: null,
        message: action.payload.message,
        detail: action.payload.detail,
      };
    case "REGISTRATION_VERIFY_EMAIL_FAIL_USER_ACCOUNT":
      localStorage.removeItem("access");
      return {
        ...state,
        access: null,
        isAuthenticate: false,
        user: null,
        detail: "",
        error: action.payload.error,
        message: action.payload.message,
        non_field_errors: action.payload.non_field_errors,
      };

    case "PASSWORD_CHANGE_USER_ACCOUNT":
      return {
        ...state,
        user: null,
        access: null,
        isAuthenticated: false,
        error: null,
      };
    case "PASSWORD_CHANGE_SUCCESS_USER_ACCOUNT":
      return {
        ...state,
        error: null,
        message: action.payload.message,
        detail: action.payload.detail,
      };
    case "PASSWORD_CHANGE_FAIL_USER_ACCOUNT":
      return {
        ...state,
        detail: "",
        error: action.payload.error,
        message: action.payload.message,
        non_field_errors: action.payload.non_field_errors,
      };

    case "PASSWORD_RESET_USER_ACCOUNT":
      return {
        ...state,
        user: null,
        access: null,
        isAuthenticated: false,
        error: null,
      };
    case "PASSWORD_RESET_SUCCESS_USER_ACCOUNT":
      return {
        ...state,
        error: null,
        message: action.payload.message,
        detail: action.payload.detail,
      };
    case "PASSWORD_RESET_FAIL_USER_ACCOUNT":
      localStorage.removeItem("access");
      return {
        ...state,
        access: null,
        isAuthenticate: false,
        user: null,
        detail: "",
        error: action.payload.error,
        message: action.payload.message,
        non_field_errors: action.payload.non_field_errors,
      };

    case "PASSWORD_RESET_CONFIRM_USER_ACCOUNT":
      return {
        ...state,
        user: null,
        access: null,
        isAuthenticated: false,
        error: null,
      };
    case "PASSWORD_RESET_CONFIRM_SUCCESS_USER_ACCOUNT":
      return {
        ...state,
        error: null,
        message: action.payload.message,
        detail: action.payload.detail,
      };
    case "PASSWORD_RESET_CONFIRM_FAIL_USER_ACCOUNT":
      localStorage.removeItem("access");
      return {
        ...state,
        access: null,
        isAuthenticate: false,
        user: null,
        detail: "",
        error: action.payload.error,
        message: action.payload.message,
        non_field_errors: action.payload.non_field_errors,
      };
    // [ANCHOR_1]

    case "START_LOADING":
      return { ...state, loading: true };
    case "END_LOADING":
      return { ...state, loading: false };

    case "DEFAULT_USER_ACCOUNT":
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("access");
      return { ...initialState };

    default:
      return state;
  }
};

export default UserAccountReducer;
