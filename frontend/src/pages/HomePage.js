import React, { useEffect ,useContext} from 'react'
import AuthContext from '../context/AuthContext'
import FriendList from './FriendList'
import '../css/HomePage.css'
const HomePage = () =>{
    let {searchFriends} = useContext(AuthContext)
    useEffect(()=>{
        searchFriends()
    },[])
    return(
        <div>
            <h1>This is homepage</h1>
            <div className='mainFriendList'>
            <FriendList className='FriendList'/>
            </div>
        </div>
    )
}


export default HomePage