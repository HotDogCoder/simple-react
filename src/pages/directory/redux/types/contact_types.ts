
export interface Contact {
    id: number;
    first_name: string;
    last_name: string;
    phone: string;
    office_phone: string;
    email: string;
    address: string;
    office_address: string;
    photo: string;
    description: string;
}

export interface ContactRequest {
    id: number;
    first_name?: string;
    last_name?: string;
    phone?: string;
    office_phone?: string;
    email?: string;
    address?: string;
    office_address?: string;
    photo?: string;
    description?: string;
    error?: any;
    message?: string;
}

export interface ContactResponse {
    id: number;
    first_name?: string;
    last_name?: string;
    phone?: string;
    office_phone?: string;
    email?: string;
    address?: string;
    office_address?: string;
    photo?: string;
    description?: string;
    contacts: ContactRequest[];
    error?: any;
    message?: string;
    new_one?: ContactRequest;
    loading?: boolean;
}

export type ContactState = ContactResponse;

export const START_LOADING = 'START_LOADING';
export const END_LOADING = 'END_LOADING';
export const POST_CONTACT = 'POST_CONTACT';
export const POST_SUCCESS_CONTACT = 'POST_SUCCESS_CONTACT';
export const POST_FAIL_CONTACT = 'POST_FAIL_CONTACT';
export const PUT_CONTACT = 'PUT_CONTACT';
export const PUT_SUCCESS_CONTACT = 'PUT_SUCCESS_CONTACT';
export const PUT_FAIL_CONTACT = 'PUT_FAIL_CONTACT';
export const UPDATE_CONTACT = 'UPDATE_CONTACT';
export const UPDATE_SUCCESS_CONTACT = 'UPDATE_SUCCESS_CONTACT';
export const UPDATE_FAIL_CONTACT = 'UPDATE_FAIL_CONTACT';
export const DELETE_CONTACT = 'DELETE_CONTACT';
export const DELETE_FAIL_CONTACT = 'DELETE_SUCCESS_CONTACT';
export const DELETE_SUCCESS_CONTACT = 'DELETE_FAIL_CONTACT';
export const GET_CONTACT = 'GET_CONTACT';
export const GET_SUCCESS_CONTACT = 'GET_SUCCESS_CONTACT';
export const GET_FAIL_CONTACT = 'GET_FAIL_CONTACT';
// [ANCHOR_1]

interface PostContactAction {
type: typeof POST_CONTACT;
payload: ContactState;
}

interface PostSuccessContactAction {
type: typeof POST_SUCCESS_CONTACT;
payload: ContactState;
}

interface PostFailContactAction {
type: typeof POST_FAIL_CONTACT;
payload: ContactState;
}

interface PutContactAction {
type: typeof PUT_CONTACT;
payload: ContactState;
}

interface PutSuccessContactAction {
type: typeof PUT_SUCCESS_CONTACT;
payload: ContactState;
}

interface PutFailContactAction {
type: typeof PUT_FAIL_CONTACT;
payload: ContactState;
}

interface UpdateContactAction {
type: typeof UPDATE_CONTACT;
payload: ContactState;
}

interface UpdateSuccessContactAction {
type: typeof UPDATE_SUCCESS_CONTACT;
payload: ContactState;
}

interface UpdateFailContactAction {
type: typeof UPDATE_FAIL_CONTACT;
payload: ContactState;
}

interface DeleteContactAction {
type: typeof DELETE_CONTACT;
payload: ContactState;
}

interface DeleteSuccessContactAction {
type: typeof DELETE_SUCCESS_CONTACT;
payload: ContactState;
}

interface DeleteFailContactAction {
type: typeof DELETE_FAIL_CONTACT;
payload: ContactState;
}

interface GetContactAction {
type: typeof GET_CONTACT;
payload: ContactState;
}

interface GetSuccessContactAction {
type: typeof GET_SUCCESS_CONTACT;
payload: ContactState;
}

interface GetFailContactAction {
type: typeof GET_FAIL_CONTACT;
payload: ContactState;
}
// [ANCHOR_2]

interface StartLoadingAction {
type: typeof START_LOADING;
payload: ContactRequest;
}

interface EndLoadingAction {
type: typeof END_LOADING;
payload: ContactRequest;
}

export type ContactActionTypes = 
StartLoadingAction
| EndLoadingAction
| PostContactAction 
| PostSuccessContactAction 
| PostFailContactAction 
| PutContactAction 
| PutSuccessContactAction 
| PutFailContactAction 
| UpdateContactAction 
| UpdateSuccessContactAction 
| UpdateFailContactAction 
| DeleteContactAction 
| DeleteSuccessContactAction 
| DeleteFailContactAction 
| GetContactAction 
| GetSuccessContactAction 
| GetFailContactAction 
// [ANCHOR_3]
    