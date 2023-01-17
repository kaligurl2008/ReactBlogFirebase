import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import {auth} from '../../Config/firebaseConfig'
import {useAuthState} from 'react-firebase-hooks/auth'

function Header() {

    //get user data
    const [user] = useAuthState(auth);
    console.log('user data', user)

    //create array with topics
    const categories = ["Health", "Food", "Travel", "Technology"]
  return (
    <div className='header-container'>
        <FaHome />
        <div className='categories-container'>
            {
                categories.map((item, index)=> <Link to={`/category/${item}`}
                className='nav-link' key = {index}>{item}</Link>)
            }
        </div>
        {
            user?
            <div>
                <span className='username'>
                    {user.displayName? user.displayName : user.email}
                </span>
            </div>
            :
            <button className='auth-link'>Signup</button>
        }
        
    </div>
  )
}

export default Header