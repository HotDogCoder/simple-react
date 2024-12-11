export interface Dark {
  id: string;
  name: string;
}

export interface DarkRequest {
  id: string;
  name: string;
  fk_id?: string;
  error?: any;
  message?: string;
}

export interface DarkError {
  id: [string];
  name: [string];
}

export interface DarkResponse {
  id: string;
  name: string;
  value: boolean;
  data: DarkRequest[];
  error?: DarkError | null;
  message?: string;
  loading?: boolean;
  deleted?: DarkRequest | null;
  new_one?: DarkRequest | null;
  new_ones?: DarkRequest[];
  darks?: DarkRequest[];
}

export type DarkState = DarkResponse;

export const START_LOADING = "START_LOADING";
export const END_LOADING = "END_LOADING";

export const DARK_TURN_ON = "DARK_TURN_ON";
export const DARK_TURN_ON_SUCCESS = "DARK_TURN_ON_SUCCESS";
export const DARK_TURN_ON_FAIL = "DARK_TURN_ON_FAIL";

export const DARK_TURN_OFF = "DARK_TURN_OFF";
export const DARK_TURN_OFF_SUCCESS = "DARK_TURN_OFF_SUCCESS";
export const DARK_TURN_OFF_FAIL = "DARK_TURN_OFF_FAIL";
// [ANCHOR_1]

interface StartLoadingAction {
  type: typeof START_LOADING;
  payload: DarkRequest;
}

interface EndLoadingAction {
  type: typeof END_LOADING;
  payload: DarkRequest;
}

interface DarkTurnOnAction {
  type: typeof DARK_TURN_ON;
  payload: DarkResponse;
}
interface DarkTurnOnSuccessAction {
  type: typeof DARK_TURN_ON_SUCCESS;
  payload: DarkResponse;
}
interface DarkTurnOnErrorAction {
  type: typeof DARK_TURN_ON_FAIL;
  payload: DarkError;
}

interface DarkTurnOffAction {
  type: typeof DARK_TURN_OFF;
  payload: DarkResponse;
}
interface DarkTurnOffSuccessAction {
  type: typeof DARK_TURN_OFF_SUCCESS;
  payload: DarkResponse;
}
interface DarkTurnOffErrorAction {
  type: typeof DARK_TURN_OFF_FAIL;
  payload: DarkError;
}
// [ANCHOR_2]

export type DarkActionTypes =
  | StartLoadingAction
  | EndLoadingAction
  | DarkTurnOnAction
  | DarkTurnOnSuccessAction
  | DarkTurnOnErrorAction
  | DarkTurnOffAction
  | DarkTurnOffSuccessAction
  | DarkTurnOffErrorAction;
// [ANCHOR_3]
