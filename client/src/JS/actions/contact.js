
import axios from 'axios'
import {
    GET_CONTACTS_SUCC, GET_CONTACTS_FAIL, GET_CONTACTS_LOAD,
    DELETE_CONTACT_SUCCESS, DELETE_CONTACT_FAIL, ADD_CONTACT_SUCCESS,
    ADD_CONTACT_FAIL, TOGGLE_TRUE, TOGGLE_FALSE, GET_CONTACT_LOAD, GET_CONTACT_FAIL, GET_CONTACT_SUCC, EDIT_CONTACT_SUCC, EDIT_CONTACT_FAIL
} from '../actionsType/contact'


// get contacts

export const getContacts = () => async (dispatch) => {

    dispatch({ type: GET_CONTACTS_LOAD })

    try {
        let result = await axios.get('api/contacts') //http://localhost:6000/api/contacts/
        console.log(result)
        //data base du donnees
        //listContacts du Postman
        dispatch({ type: GET_CONTACTS_SUCC, payload: result.data.listContacts })

    } catch (error) {
        console.log(error)
        dispatch({ type: GET_CONTACTS_FAIL, payload: error.response.data })

    }

}

// delete contact

export const deleteContact = (contactId) => async (dispatch) => {
    try {
        await axios.delete(`/api/contacts/${contactId}`)
        dispatch({ type: DELETE_CONTACT_SUCCESS })
        dispatch(getContacts())
    } catch (error) {
        dispatch({ type: DELETE_CONTACT_FAIL, payload: error.response.data })

    }
}

//add contact

export const addContact = (newContact) => async (dispatch) => {

    try {

        await axios.post(`/api/contacts/`, newContact)
        dispatch({ type: ADD_CONTACT_SUCCESS })
        dispatch(getContacts())

    } catch (error) {

        dispatch({ type: ADD_CONTACT_FAIL, payload: error.response.data })

    }

}

//edit

// Toggle true


export const toggleTrue = () => {
    return {
        type: TOGGLE_TRUE
    }


}

// Toggle true


export const togglefalse = () => {
    return {
        type: TOGGLE_FALSE
    }

}

//get contact

export const getContact = (contactId) => async (dispatch) => { //http://localhost:6000/api/contacts/id

    dispatch({ type: GET_CONTACT_LOAD })

    try {
        let result = await axios.get(`/api/contacts/${contactId}`)

        dispatch({ type: GET_CONTACT_SUCC, payload: result.data.contactToFind })

    } catch (error) {

        dispatch({ type: GET_CONTACT_FAIL, payload: error.response.data })

    }
}

// Edit contact

export const editContact = (contactId, newContact) => async (dispatch) => {

    try {
        await axios.put(`/api/contacts/${contactId}`, newContact)
        dispatch({ type: EDIT_CONTACT_SUCC })
        dispatch(getContacts())

    } catch (error) {

        dispatch({ type: EDIT_CONTACT_FAIL, payload: error.response.data })
    }


}