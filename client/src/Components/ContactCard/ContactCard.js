import React from "react";

import avatar from '../../assets/avatar.png';
import editBtn from '../../assets/editBtn.png';
import deleteBtn from '../../assets/deleteBtn.jpg';


import { useDispatch } from 'react-redux';
import { deleteContact, getContact, toggleTrue } from "../../JS/actions/contact";


import './ContactCard.css'
import { Link } from "react-router-dom";

const ContactCard = ({ contact }) => {

    // dispatch for delete
    const dispatch = useDispatch()

    return (
        <div className="contactCard">
            <img src={avatar} alt="avatar" className="avatar" />

            <h3>{contact.name}</h3>
            <span>{contact.email}</span>
            <span>{contact.phone}</span>
            <div className="deleteEditBtns">


                {/* delete button*/}
                <img src={deleteBtn}
                    alt="delete-icon"
                    onClick={() => dispatch(deleteContact(contact._id))}
                />



                {/*edit button*/}

                <Link to={`/editContact/${contact._id}`}>

                    <img src={editBtn}
                        alt="edit-icon"
                        onClick={() => { dispatch(toggleTrue()); dispatch(getContact(contact._id)) }}
                    />

                </Link>

            </div>

        </div >
    )
}

export default ContactCard

