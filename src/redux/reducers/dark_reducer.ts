import { DarkActionTypes, DarkState } from "../types/dark_types";

const initialState: DarkState = {
  id: "",
  value: false,
  name: "",
  data: [],
  darks: [],
  error: null,
  message: "",
  loading: false,
  deleted: null,
  new_one: null,
  new_ones: [],
};

const DarkReducer = (state = initialState, action: DarkActionTypes) => {
  switch (action.type) {
    case "DARK_TURN_ON":
      return {
        ...state,
        darks: action.payload.darks,
        error: null,
        message: action.payload.message,
      };
    case "DARK_TURN_ON_SUCCESS":
      return { ...state, error: null, message: action.payload.message };
    case "DARK_TURN_ON_FAIL":
      return { ...state, error: action.payload, message: "TURN_ON_FAIL" };

    case "DARK_TURN_OFF":
      return {
        ...state,
        darks: action.payload.darks,
        error: null,
        message: action.payload.message,
      };
    case "DARK_TURN_OFF_SUCCESS":
      return { ...state, error: null, message: action.payload.message };
    case "DARK_TURN_OFF_FAIL":
      return { ...state, error: action.payload, message: "TURN_OFF_FAIL" };
    // [ANCHOR_1]

    case "START_LOADING":
      return { ...state, loading: true };
    case "END_LOADING":
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default DarkReducer;
