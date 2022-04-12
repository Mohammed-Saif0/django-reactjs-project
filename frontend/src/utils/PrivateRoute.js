import React from 'react'
import { Navigate} from 'react-router-dom'
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';


// PrivateRoute this will redirect the route to login page if user is not logged in
const PrivateRoute = ({ children}) => {
    let {user} = useContext(AuthContext)  
    if (user) {
      return children
    }   
    return <Navigate to="/login" />
  }


export default PrivateRoute