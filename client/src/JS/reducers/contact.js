import {
    GET_CONTACTS_FAIL, GET_CONTACTS_LOAD, GET_CONTACTS_SUCC,
    DELETE_CONTACT_FAIL, ADD_CONTACT_FAIL,
    TOGGLE_TRUE, TOGGLE_FALSE, GET_CONTACT_SUCC,
    GET_CONTACT_FAIL, GET_CONTACT_LOAD, EDIT_CONTACT_FAIL

} from "../actionsType/contact";


const initState = {
    //listContacts du base du donnees
    listContacts: [],
    //load du base du donnees
    load: false,
    //
    errors: null,
    //edit
    edit: false,
    //edit get by id
    contact: {},
    //contact updated
    msg: ""
}

export const contactReducer = (state = initState, { type, payload }) => {

    switch (type) {
        case GET_CONTACTS_LOAD: return { ...state, load: true }

        //payload du action
        case GET_CONTACTS_SUCC: return { ...state, load: false, listContacts: payload }
        case GET_CONTACTS_FAIL: return { ...state, load: false, errors: payload }
        //DELETE +ADD
        case DELETE_CONTACT_FAIL: return { ...state, errors: payload }

        case ADD_CONTACT_FAIL: return { ...state, errors: payload }

        // TOGGLE_TRUE

        case TOGGLE_TRUE: return { ...state, edit: true }

        // TOGGLE_FALSE

        case TOGGLE_FALSE: return { ...state, edit: false }

        // edit get by id

        case GET_CONTACT_LOAD: return { ...state, load: true }

        case GET_CONTACT_SUCC: return { ...state, load: true, contact: payload }

        case GET_CONTACT_FAIL: return { ...state, load: false, errors: payload }

        // EDIT

        case EDIT_CONTACT_FAIL: return { ...state, load: false, msg: payload.msg }

        default: return state


    }

}

export default contactReducer;