
import { ContactActionTypes, ContactState } from '../types/contact_types';

const initialState: ContactState = {
    id: 0,
    contacts: [],
    error: null,
    message: ''
};

const ContactReducer = (state = initialState, action: ContactActionTypes) => {
    switch (action.type) {
        
        case 'POST_CONTACT':
            // const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/`, {});
            // console.log(response)
            console.log('POST_CONTACT', action.payload)
            return {...state, new_one: action.payload.new_one};
        case 'POST_SUCCESS_CONTACT':
            return {...state, contacts: [...state.contacts, action.payload.new_one!], error: null, message: action.payload.message};
        case 'POST_FAIL_CONTACT':
            return {...state, error: action.payload.error, message: action.payload.message};
        
        case 'PUT_CONTACT':
            const data_with_contact_updated = [...state.contacts.map((contact) => {
                if (contact.id === action.payload.new_one?.id) {
                    return {...contact, ...action.payload.new_one};
                }
                return contact;
            })];
            console.log('PUT_CONTACT REDUCER', data_with_contact_updated)
            return {...state, new_one: action.payload.new_one, contacts: data_with_contact_updated};
        case 'PUT_SUCCESS_CONTACT':
            return {...state, error: null, message: action.payload.message};
        case 'PUT_FAIL_CONTACT':
            return {...state, error: action.payload.error, message: action.payload.message};
        
        case 'UPDATE_CONTACT':
            // const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/`, {});
            // console.log(response)
            return {...state, data: []};
        case 'UPDATE_SUCCESS_CONTACT':
            return {...state, error: null, message: action.payload.message};
        case 'UPDATE_FAIL_CONTACT':
            return {...state, error: action.payload.error, message: action.payload.message};
            
        case 'DELETE_CONTACT':
            // const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/`, {});
            // console.log(response)
            return {...state, data: []};
        case 'DELETE_SUCCESS_CONTACT':
            console.log(state)
            return {...state, error: null, message: action.payload.message};
        case 'DELETE_FAIL_CONTACT':
            return {...state, error: action.payload.error, message: action.payload.message};
        
        case 'GET_CONTACT':
            console.log('REDUCER', action.payload)
            return {...state, contacts: action.payload.contacts, error: null, message: action.payload.message}
        case 'GET_SUCCESS_CONTACT':
            return {...state, error: null, message: action.payload.message};
        case 'GET_FAIL_CONTACT':
            return {...state, error: action.payload.error, message: action.payload.message};
//  [ANCHOR_1]
        case 'START_LOADING':
            return {...state, loading: true};
        case 'END_LOADING':
            return {...state, loading: false};
        default:
            return state;
    }
};

export default ContactReducer;
    