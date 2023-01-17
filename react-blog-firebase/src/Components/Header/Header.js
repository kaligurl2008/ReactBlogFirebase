import React from 'react'
import './Header.css'
import {Link, useNavigate} from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import {auth} from '../../Config/firebaseConfig'
import {useAuthState} from 'react-firebase-hooks/auth'
import { signOut } from 'firebase/auth';

function Header() {

    //activate navigate
    let navigate = useNavigate();

    //get user data
    const [user] = useAuthState(auth);
    console.log('user data', user)

    //create array with topics
    const categories = ["Health", "Food", "Travel", "Technology"]
  return (
    <div className='header-container'>
        <FaHome onClick={()=>navigate("/")}/>
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
                <button className='auth-link'
                        onClick={()=>signOut(auth)}>Logout</button>
            </div>
            :
            <Link to='/auth' className='auth-link'>Signup</Link>
        }
        
    </div>
  )
}

export default Header