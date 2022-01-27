import React, { useEffect, useState } from "react";
import { Form } from 'react-bootstrap';

import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux';
import { addContact, editContact } from "../../JS/actions/contact";

import addBtn from '../../assets/addBtn.png';
import editBtn from '../../assets/editBtn.png';


import './AddEditContact.css'

const AddEditContact = () => {
    // Add
    const [contact, setContact] = useState({ name: "", email: "", phone: "" });

    // Edit

    const edit = useSelector(state => state.contactReducer.edit)

    // Edit + get by id

    const contactRed = useSelector(state => state.contactReducer.contact)

    // dispatch for add

    const dispatch = useDispatch()

    //use effect 

    useEffect(() => {
        edit ? setContact(contactRed) : setContact({ name: "", email: "", phone: "" })

    }, [edit, contactRed]);

    const handleChange = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <Form className="myForm">
                {/* input name */}
                <Form.Group className="my-little-form">
                    <Form.Control type="text"
                        placeholder="Enter contact name ..."
                        name="name"
                        value={contact.name}
                        onChange={handleChange}
                    //onChange={() => setContact({ ...contact, name: e.target.value })}
                    />

                    <Form.Text className="text-muted">Name is required</Form.Text>

                </Form.Group>

                {/* input email */}
                <Form.Group className="my-little-form">
                    <Form.Control type="text"
                        placeholder="Enter contact email ..."
                        name="email"
                        value={contact.email}
                        onChange={handleChange}
                    />

                    <Form.Text className="text-muted">email is required</Form.Text>

                </Form.Group>

                {/* input phone */}
                <Form.Group className="my-little-form">
                    <Form.Control type="text"
                        placeholder="Enter contact phone ..."
                        name="phone"
                        value={contact.phone}
                        onChange={handleChange}
                    />

                    <Form.Text className="text-muted">phone is required</Form.Text>

                </Form.Group>

                {/* add or edit button */}

                {edit ?
                    <Link to='/'>
                        <img src={editBtn} alt="edit" className="editBtn"
                            onClick={() => dispatch(editContact(contact._id, contact))}

                        />
                    </Link>

                    :
                    <Link to='/'>
                        <img src={addBtn} alt="add" className="addBtn"
                            onClick={() => dispatch(addContact(contact))}

                        />

                    </Link>

                }




            </Form>
        </div >
    )
}

export default AddEditContact;