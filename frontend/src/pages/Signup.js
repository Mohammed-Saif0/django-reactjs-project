import React,{useContext} from 'react'
import AuthContext from '../context/AuthContext'

const Signup = () =>{
    let{signup} = useContext(AuthContext)
    return(
        <form onSubmit={signup}>
            <input type="text" name = "username" placeholder='Enter the username'/>
            <input type="text" name = "first_name" placeholder='Enter the first name'/>
            <input type="text" name = "last_name" placeholder='Enter the last name'/>
            <input type="email" name = "email" placeholder='Enter the mail'/>
            <input type="password" name = "password" placeholder='Enter the password' />
            <input type="submit" />
        </form>
    )
}

export default Signup