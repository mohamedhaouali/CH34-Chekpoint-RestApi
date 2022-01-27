import React from "react";
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { togglefalse } from "../../JS/actions/contact";


import './NavBar.css'

const NavBar = () => {

    // dispatch for edit

    const dispatch = useDispatch()



    return (

        <header>
            {/* contact list button */}

            <Link to='/'>

                <button className="appBtn">Contact List</button>

            </Link>


            {/* add contact button */}
            <Link to='/addcontact'>
                <button className="appBtn"
                    onClick={() => dispatch(togglefalse())}
                >Add Contact</button>
            </Link >


        </header>
    )

}

export default NavBar
