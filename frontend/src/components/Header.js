import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import AuthContext from '../context/AuthContext'
import '../css/header.css'

const Header = () =>{
    let {user,logoutuser} = useContext(AuthContext)
    return(
        <div className='headermain'>
            <div className='home'>
            <Link to="/">Home</Link> 
            </div>
            <div className='user'>
                <div className='insideUser'>

                

                
            {user ? (
               <span className="username"> {user && <span>{user.username} <span className="vspace"></span> <img  onClick={logoutuser} id = "dp" src={require("../../../project"+user.profile_pic)} alt="This is the profile pic" /> </span>}</span>
            ):(
                <>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
                </>
            )}
           
         
           
            </div>
            </div>
        </div>
    )
}

export default Header