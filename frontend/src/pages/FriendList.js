import React,{useContext} from 'react'
import AuthContext from '../context/AuthContext'
const FriendList = () =>{

    let {friend} = useContext(AuthContext)

    return(
        <div>
           <h1>Your friends</h1>
            {friend ? <div>
                {
                    friend.map((something)=>{
                       return <div>User id : {something.id}</div>
                    })
                }
            </div>  : <p> </p>   }
        </div>
    )
}

export default FriendList