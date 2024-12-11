import { Dispatch } from "redux";
import { ContactActionTypes, ContactState } from "../types/contact_types";
import axios, { AxiosError } from "axios";

export const postContact =
  (data: ContactState) => (dispatch: Dispatch<ContactActionTypes>) => {
    try {
      dispatch({
        type: "START_LOADING",
        payload: { ...data, error: null, message: "END_LOADING" },
      });

      dispatch({ type: "POST_CONTACT", payload: data });
      if (!data.new_one) {
        throw new Error("The condition was not met.");
      } else {
        dispatch({
          type: "POST_SUCCESS_CONTACT",
          payload: { ...data, error: null, message: "POST_SUCCESS" },
        });
      }
      dispatch({
        type: "END_LOADING",
        payload: { ...data, error: null, message: "END_LOADING" },
      });
    } catch (error: any) {
      dispatch({
        type: "END_LOADING",
        payload: { ...data, error: null, message: "END_LOADING" },
      });

      dispatch({
        type: "POST_FAIL_CONTACT",
        payload: {
          ...data,
          error: error,
          message: `POST_FAIL: ${error?.message}`,
        },
      });
    }
  };

export const putContact =
  (data: ContactState) => (dispatch: Dispatch<ContactActionTypes>) => {
    try {
      dispatch({
        type: "START_LOADING",
        payload: { ...data, error: null, message: "END_LOADING" },
      });

      dispatch({ type: "PUT_CONTACT", payload: data });
      if (!data.new_one) {
        throw new Error("The condition was not met.");
      } else {
        dispatch({
          type: "PUT_SUCCESS_CONTACT",
          payload: { ...data, error: null, message: "PUT_SUCCESS_CONTACT" },
        });
      }
      dispatch({
        type: "END_LOADING",
        payload: { ...data, error: null, message: "END_LOADING" },
      });
    } catch (error) {
      dispatch({
        type: "END_LOADING",
        payload: { ...data, error: null, message: "END_LOADING" },
      });

      dispatch({
        type: "PUT_FAIL_CONTACT",
        payload: { ...data, error: error, message: "PUT_FAIL_CONTACT" },
      });
    }
  };

export const updateContact =
  (data: ContactState) => (dispatch: Dispatch<ContactActionTypes>) => {
    try {
      dispatch({
        type: "START_LOADING",
        payload: { ...data, error: null, message: "END_LOADING" },
      });

      dispatch({ type: "UPDATE_CONTACT", payload: data });

      dispatch({
        type: "UPDATE_SUCCESS_CONTACT",
        payload: { ...data, error: null, message: "UPDATE_SUCCESS" },
      });
      dispatch({
        type: "END_LOADING",
        payload: { ...data, error: null, message: "END_LOADING" },
      });
    } catch (error) {
      dispatch({
        type: "END_LOADING",
        payload: { ...data, error: null, message: "END_LOADING" },
      });

      dispatch({
        type: "UPDATE_FAIL_CONTACT",
        payload: { ...data, error: error, message: "UPDATE_FAIL" },
      });
    }
  };

export const deleteContact =
  (data: ContactState) => (dispatch: Dispatch<ContactActionTypes>) => {
    try {
      dispatch({
        type: "START_LOADING",
        payload: { ...data, error: null, message: "END_LOADING" },
      });

      dispatch({ type: "DELETE_CONTACT", payload: data });

      dispatch({
        type: "DELETE_SUCCESS_CONTACT",
        payload: { ...data, error: null, message: "DELETE_SUCCESS" },
      });
      dispatch({
        type: "END_LOADING",
        payload: { ...data, error: null, message: "END_LOADING" },
      });
    } catch (error) {
      dispatch({
        type: "END_LOADING",
        payload: { ...data, error: null, message: "END_LOADING" },
      });

      dispatch({
        type: "DELETE_FAIL_CONTACT",
        payload: { ...data, error: error, message: "DELETE_FAIL" },
      });
    }
  };

export const getContact =
  (data: ContactState) => async (dispatch: Dispatch<ContactActionTypes>) => {
    try {
      dispatch({
        type: "START_LOADING",
        payload: { ...data, error: null, message: "END_LOADING" },
      });

      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/lawyer/get-contact`,
        data
      );
      dispatch({
        type: "GET_CONTACT",
        payload: { ...response.data, error: null, message: "GET_CONTACT" },
      });

      dispatch({
        type: "GET_SUCCESS_CONTACT",
        payload: { ...data, error: null, message: "GET_SUCCESS" },
      });
      dispatch({
        type: "END_LOADING",
        payload: { ...data, error: null, message: "END_LOADING" },
      });
    } catch (error) {
      dispatch({
        type: "END_LOADING",
        payload: { ...data, error: null, message: "END_LOADING" },
      });

      dispatch({
        type: "GET_FAIL_CONTACT",
        payload: { ...data, error: error, message: "GET_FAIL" },
      });
    }
  };
// [ANCHOR_1]
