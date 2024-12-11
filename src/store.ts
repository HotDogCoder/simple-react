import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./core/redux/reducers/combinations/root_index";
import { composeWithDevTools } from "redux-devtools-extension";
import { ContactState } from "./pages/directory/redux/types/contact_types";
import { UserAccountState } from "./pages/auth/redux/types/user_account_types";

export interface RootState {
  // [ANCHOR_1]
  network?: number;
  alert?: any;
  web3?: any;

  contact_state?: ContactState;

  user_account_state?: UserAccountState;
}

const initialState: RootState = {
  user_account_state: {
    user: null,
    loading: false,
    error: null,
    id: 0,
    name: "",
    data: []
  },
};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
