export interface UserAccount {
  id?: number;
  uid?: string;
  key?: string;
  token?: string;
  name?: string;
  email?: string;
  password?: string;
  password1?: string;
  password2?: string;
  new_password1?: string;
  new_password2?: string;
  error?: any;
  message?: string;
  non_field_errors?: string[];
}

export interface UserAccountError {
  name?: string[];
  email?: string[];
  password?: string[];
  password1?: string[];
  password2?: string[];
  error?: any;
  message?: string;
  non_field_errors?: string[];
}

export interface UserAccountRequest {
  id?: number;
  uid?: string;
  name?: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  picture?: string;
  error?: any;
  message?: string;
  access?: string | null;
  refresh?: string | null;
  isAuthenticated?: boolean;
  user?: UserAccountRequest;
  non_field_errors?: string[];
}

export interface UserAccountResponse {
  id: number;
  uid?: string;
  name: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  picture?: string;
  data: UserAccountRequest[];
  error?: any;
  message?: string;
  detail?: string;
  loading?: boolean;
  access?: string | null;
  refresh?: string | null;
  isAuthenticated?: boolean;
  user?: UserAccountRequest | null;
  non_field_errors?: string[];
}

export type UserAccountState = UserAccountResponse;

export const START_LOADING = "START_LOADING";
export const END_LOADING = "END_LOADING";
export const POST_USER_ACCOUNT = "POST_USER_ACCOUNT";
export const POST_SUCCESS_USER_ACCOUNT = "POST_SUCCESS_USER_ACCOUNT";
export const POST_FAIL_USER_ACCOUNT = "POST_FAIL_USER_ACCOUNT";
export const PUT_USER_ACCOUNT = "PUT_USER_ACCOUNT";
export const PUT_SUCCESS_USER_ACCOUNT = "PUT_SUCCESS_USER_ACCOUNT";
export const PUT_FAIL_USER_ACCOUNT = "PUT_FAIL_USER_ACCOUNT";
export const UPDATE_USER_ACCOUNT = "UPDATE_USER_ACCOUNT";
export const UPDATE_SUCCESS_USER_ACCOUNT = "UPDATE_SUCCESS_USER_ACCOUNT";
export const UPDATE_FAIL_USER_ACCOUNT = "UPDATE_FAIL_USER_ACCOUNT";
export const DELETE_USER_ACCOUNT = "DELETE_USER_ACCOUNT";
export const DELETE_FAIL_USER_ACCOUNT = "DELETE_SUCCESS_USER_ACCOUNT";
export const DELETE_SUCCESS_USER_ACCOUNT = "DELETE_FAIL_USER_ACCOUNT";
export const GET_USER_ACCOUNT = "GET_USER_ACCOUNT";
export const GET_SUCCESS_USER_ACCOUNT = "GET_SUCCESS_USER_ACCOUNT";
export const GET_FAIL_USER_ACCOUNT = "GET_FAIL_USER_ACCOUNT";

export const VERIFY_USER_ACCOUNT = "VERIFY_USER_ACCOUNT";
export const VERIFY_SUCCESS_USER_ACCOUNT = "VERIFY_SUCCESS_USER_ACCOUNT";
export const VERIFY_FAIL_USER_ACCOUNT = "VERIFY_FAIL_USER_ACCOUNT";

export const REFRESH_USER_ACCOUNT = "REFRESH_USER_ACCOUNT";
export const REFRESH_SUCCESS_USER_ACCOUNT = "REFRESH_SUCCESS_USER_ACCOUNT";
export const REFRESH_FAIL_USER_ACCOUNT = "REFRESH_FAIL_USER_ACCOUNT";

export const LOGOUT_USER_ACCOUNT = "LOGOUT_USER_ACCOUNT";
export const LOGOUT_SUCCESS_USER_ACCOUNT = "LOGOUT_SUCCESS_USER_ACCOUNT";
export const LOGOUT_FAIL_USER_ACCOUNT = "LOGOUT_FAIL_USER_ACCOUNT";

export const REGISTER_USER_ACCOUNT = "REGISTER_USER_ACCOUNT";
export const REGISTER_SUCCESS_USER_ACCOUNT = "REGISTER_SUCCESS_USER_ACCOUNT";
export const REGISTER_FAIL_USER_ACCOUNT = "REGISTER_FAIL_USER_ACCOUNT";

export const RECOVER_USER_ACCOUNT = "RECOVER_USER_ACCOUNT";
export const RECOVER_SUCCESS_USER_ACCOUNT = "RECOVER_SUCCESS_USER_ACCOUNT";
export const RECOVER_FAIL_USER_ACCOUNT = "RECOVER_FAIL_USER_ACCOUNT";

export const RESEND_USER_ACCOUNT = "RESEND_USER_ACCOUNT";
export const RESEND_SUCCESS_USER_ACCOUNT = "RESEND_SUCCESS_USER_ACCOUNT";
export const RESEND_FAIL_USER_ACCOUNT = "RESEND_FAIL_USER_ACCOUNT";

export const REGISTRATION_VERIFY_EMAIL_USER_ACCOUNT =
  "REGISTRATION_VERIFY_EMAIL_USER_ACCOUNT";
export const REGISTRATION_VERIFY_EMAIL_SUCCESS_USER_ACCOUNT =
  "REGISTRATION_VERIFY_EMAIL_SUCCESS_USER_ACCOUNT";
export const REGISTRATION_VERIFY_EMAIL_FAIL_USER_ACCOUNT =
  "REGISTRATION_VERIFY_EMAIL_FAIL_USER_ACCOUNT";

export const PASSWORD_CHANGE_USER_ACCOUNT = "PASSWORD_CHANGE_USER_ACCOUNT";
export const PASSWORD_CHANGE_SUCCESS_USER_ACCOUNT =
  "PASSWORD_CHANGE_SUCCESS_USER_ACCOUNT";
export const PASSWORD_CHANGE_FAIL_USER_ACCOUNT =
  "PASSWORD_CHANGE_FAIL_USER_ACCOUNT";

export const PASSWORD_RESET_USER_ACCOUNT = "PASSWORD_RESET_USER_ACCOUNT";
export const PASSWORD_RESET_SUCCESS_USER_ACCOUNT =
  "PASSWORD_RESET_SUCCESS_USER_ACCOUNT";
export const PASSWORD_RESET_FAIL_USER_ACCOUNT =
  "PASSWORD_RESET_FAIL_USER_ACCOUNT";

export const PASSWORD_RESET_CONFIRM_USER_ACCOUNT =
  "PASSWORD_RESET_CONFIRM_USER_ACCOUNT";
export const PASSWORD_RESET_CONFIRM_SUCCESS_USER_ACCOUNT =
  "PASSWORD_RESET_CONFIRM_SUCCESS_USER_ACCOUNT";
export const PASSWORD_RESET_CONFIRM_FAIL_USER_ACCOUNT =
  "PASSWORD_RESET_CONFIRM_FAIL_USER_ACCOUNT";
// [ANCHOR_1]

export const DEFAULT_USER_ACCOUNT = "DEFAULT_USER_ACCOUNT";

interface DefaultUserAccountAction {
  type: typeof DEFAULT_USER_ACCOUNT;
  payload: null;
}

interface PostUserAccountAction {
  type: typeof POST_USER_ACCOUNT;
  payload: UserAccountRequest;
}

interface PostSuccessUserAccountAction {
  type: typeof POST_SUCCESS_USER_ACCOUNT;
  payload: UserAccountRequest;
}

interface PostFailUserAccountAction {
  type: typeof POST_FAIL_USER_ACCOUNT;
  payload: UserAccount;
}

interface PutUserAccountAction {
  type: typeof PUT_USER_ACCOUNT;
  payload: UserAccountRequest;
}

interface PutSuccessUserAccountAction {
  type: typeof PUT_SUCCESS_USER_ACCOUNT;
  payload: UserAccountRequest;
}

interface PutFailUserAccountAction {
  type: typeof PUT_FAIL_USER_ACCOUNT;
  payload: UserAccountRequest;
}

interface UpdateUserAccountAction {
  type: typeof UPDATE_USER_ACCOUNT;
  payload: UserAccountRequest;
}

interface UpdateSuccessUserAccountAction {
  type: typeof UPDATE_SUCCESS_USER_ACCOUNT;
  payload: UserAccountRequest;
}

interface UpdateFailUserAccountAction {
  type: typeof UPDATE_FAIL_USER_ACCOUNT;
  payload: UserAccountRequest;
}

interface DeleteUserAccountAction {
  type: typeof DELETE_USER_ACCOUNT;
  payload: UserAccountRequest;
}

interface DeleteSuccessUserAccountAction {
  type: typeof DELETE_SUCCESS_USER_ACCOUNT;
  payload: UserAccountRequest;
}

interface DeleteFailUserAccountAction {
  type: typeof DELETE_FAIL_USER_ACCOUNT;
  payload: UserAccountRequest;
}

interface GetUserAccountAction {
  type: typeof GET_USER_ACCOUNT;
  payload: UserAccountRequest;
}

interface GetSuccessUserAccountAction {
  type: typeof GET_SUCCESS_USER_ACCOUNT;
  payload: UserAccountRequest;
}

interface GetFailUserAccountAction {
  type: typeof GET_FAIL_USER_ACCOUNT;
  payload: UserAccountRequest;
}

interface VerifyUserAccountAction {
  type: typeof VERIFY_USER_ACCOUNT;
  payload: UserAccountState;
}

interface VerifySuccessUserAccountAction {
  type: typeof VERIFY_SUCCESS_USER_ACCOUNT;
  payload: UserAccountState;
}

interface VerifyErrorUserAccountAction {
  type: typeof VERIFY_FAIL_USER_ACCOUNT;
  payload: UserAccountRequest;
}

interface RefreshUserAccountAction {
  type: typeof REFRESH_USER_ACCOUNT;
  payload: UserAccountState;
}

interface RefreshSuccessUserAccountAction {
  type: typeof REFRESH_SUCCESS_USER_ACCOUNT;
  payload: UserAccountState;
}

interface RefreshErrorUserAccountAction {
  type: typeof REFRESH_FAIL_USER_ACCOUNT;
  payload: UserAccountRequest;
}

interface LogoutUserAccountAction {
  type: typeof LOGOUT_USER_ACCOUNT;
  payload: UserAccountState;
}

interface LogoutSuccessUserAccountAction {
  type: typeof LOGOUT_SUCCESS_USER_ACCOUNT;
  payload: UserAccountState;
}

interface LogoutErrorUserAccountAction {
  type: typeof LOGOUT_FAIL_USER_ACCOUNT;
  payload: UserAccountRequest;
}

interface RegisterUserAccountAction {
  type: typeof REGISTER_USER_ACCOUNT;
  payload: UserAccountState;
}

interface RegisterSuccessUserAccountAction {
  type: typeof REGISTER_SUCCESS_USER_ACCOUNT;
  payload: UserAccountState;
}

interface RegisterErrorUserAccountAction {
  type: typeof REGISTER_FAIL_USER_ACCOUNT;
  payload: UserAccountError;
}

interface RecoverUserAccountAction {
  type: typeof RECOVER_USER_ACCOUNT;
  payload: UserAccountState;
}

interface RecoverSuccessUserAccountAction {
  type: typeof RECOVER_SUCCESS_USER_ACCOUNT;
  payload: UserAccountState;
}

interface RecoverErrorUserAccountAction {
  type: typeof RECOVER_FAIL_USER_ACCOUNT;
  payload: UserAccountError;
}

interface ResendUserAccountAction {
  type: typeof RESEND_USER_ACCOUNT;
  payload: UserAccountState;
}

interface ResendSuccessUserAccountAction {
  type: typeof RESEND_SUCCESS_USER_ACCOUNT;
  payload: UserAccountState;
}

interface ResendErrorUserAccountAction {
  type: typeof RESEND_FAIL_USER_ACCOUNT;
  payload: UserAccountError;
}

interface RegistrationVerifyEmailUserAccountAction {
  type: typeof REGISTRATION_VERIFY_EMAIL_USER_ACCOUNT;
  payload: UserAccountState;
}

interface RegistrationVerifyEmailSuccessUserAccountAction {
  type: typeof REGISTRATION_VERIFY_EMAIL_SUCCESS_USER_ACCOUNT;
  payload: UserAccountState;
}

interface RegistrationVerifyEmailErrorUserAccountAction {
  type: typeof REGISTRATION_VERIFY_EMAIL_FAIL_USER_ACCOUNT;
  payload: UserAccountError;
}

interface PasswordChangeUserAccountAction {
  type: typeof PASSWORD_CHANGE_USER_ACCOUNT;
  payload: UserAccountState;
}

interface PasswordChangeSuccessUserAccountAction {
  type: typeof PASSWORD_CHANGE_SUCCESS_USER_ACCOUNT;
  payload: UserAccountState;
}

interface PasswordChangeErrorUserAccountAction {
  type: typeof PASSWORD_CHANGE_FAIL_USER_ACCOUNT;
  payload: UserAccountError;
}

interface PasswordResetUserAccountAction {
  type: typeof PASSWORD_RESET_USER_ACCOUNT;
  payload: UserAccountState;
}

interface PasswordResetSuccessUserAccountAction {
  type: typeof PASSWORD_RESET_SUCCESS_USER_ACCOUNT;
  payload: UserAccountState;
}

interface PasswordResetErrorUserAccountAction {
  type: typeof PASSWORD_RESET_FAIL_USER_ACCOUNT;
  payload: UserAccountError;
}

interface PasswordResetConfirmUserAccountAction {
  type: typeof PASSWORD_RESET_CONFIRM_USER_ACCOUNT;
  payload: UserAccountState;
}

interface PasswordResetConfirmSuccessUserAccountAction {
  type: typeof PASSWORD_RESET_CONFIRM_SUCCESS_USER_ACCOUNT;
  payload: UserAccountState;
}

interface PasswordResetConfirmErrorUserAccountAction {
  type: typeof PASSWORD_RESET_CONFIRM_FAIL_USER_ACCOUNT;
  payload: UserAccountError;
}
// [ANCHOR_2]

interface StartLoadingAction {
  type: typeof START_LOADING;
  payload: UserAccount | UserAccountRequest;
}

interface EndLoadingAction {
  type: typeof END_LOADING;
  payload: UserAccountRequest;
}

export type UserAccountActionTypes =
  | DefaultUserAccountAction
  | StartLoadingAction
  | EndLoadingAction
  | PostUserAccountAction
  | PostSuccessUserAccountAction
  | PostFailUserAccountAction
  | PutUserAccountAction
  | PutSuccessUserAccountAction
  | PutFailUserAccountAction
  | UpdateUserAccountAction
  | UpdateSuccessUserAccountAction
  | UpdateFailUserAccountAction
  | DeleteUserAccountAction
  | DeleteSuccessUserAccountAction
  | DeleteFailUserAccountAction
  | GetUserAccountAction
  | GetSuccessUserAccountAction
  | GetFailUserAccountAction
  | VerifyUserAccountAction
  | VerifySuccessUserAccountAction
  | VerifyErrorUserAccountAction
  | RefreshUserAccountAction
  | RefreshSuccessUserAccountAction
  | RefreshErrorUserAccountAction
  | LogoutUserAccountAction
  | LogoutSuccessUserAccountAction
  | LogoutErrorUserAccountAction
  | RegisterUserAccountAction
  | RegisterSuccessUserAccountAction
  | RegisterErrorUserAccountAction
  | RecoverUserAccountAction
  | RecoverSuccessUserAccountAction
  | RecoverErrorUserAccountAction
  | ResendUserAccountAction
  | ResendSuccessUserAccountAction
  | ResendErrorUserAccountAction
  | RegistrationVerifyEmailUserAccountAction
  | RegistrationVerifyEmailSuccessUserAccountAction
  | RegistrationVerifyEmailErrorUserAccountAction
  | PasswordChangeUserAccountAction
  | PasswordChangeSuccessUserAccountAction
  | PasswordChangeErrorUserAccountAction
  | PasswordResetUserAccountAction
  | PasswordResetSuccessUserAccountAction
  | PasswordResetErrorUserAccountAction
  | PasswordResetConfirmUserAccountAction
  | PasswordResetConfirmSuccessUserAccountAction
  | PasswordResetConfirmErrorUserAccountAction;
// [ANCHOR_3]
