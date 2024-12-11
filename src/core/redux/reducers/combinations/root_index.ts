import { combineReducers } from "redux";
import ContactReducer from "../../../../pages/directory/redux/reducers/contact_reducer";
import { RootState } from "../../../../store";
import UserAccountReducer from "../../../../pages/auth/redux/reducers/user_account_reducer";

export default combineReducers<RootState>({
  contact_state: ContactReducer,
  user_account_state: UserAccountReducer,
});
