import React, { useEffect } from 'react'

import './ContactList.css'

import { useDispatch, useSelector } from 'react-redux'
import { getContacts } from '../../JS/actions/contact'


import ContactCard from '../../Components/ContactCard/ContactCard'

const ContactList = () => {
    //Reducer
    const listContacts = useSelector(state => state.contactReducer.listContacts)
    //Reducer load
    const load = useSelector(state => state.contactReducer.load)

    // cycle du vie 
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getContacts())

    }, [dispatch]);



    return (
        load ? <h2>waiiiittttt</h2>
            :
            <div className="contactList">
                {listContacts.map(contact =>
                    <ContactCard contact={contact} key={contact._id}
                    />
                )}
            </div>
    )
}

export default ContactList;
