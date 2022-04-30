import React,{useContext} from 'react'
import AuthContext from '../context/AuthContext'
import { Link } from 'react-router-dom'
const FriendList = () =>{

    let {friends,user} = useContext(AuthContext)

    return(
        <div>
           <h1>Your friends</h1>
            {friends ? <div>
                {
                    friends.map((something)=>{
                       return <div> {something.user_one.username !== user.username ? <div>
                           
                           
                         
                           
                           <img id="dp" src={require("../../../project" + something.user_one.profile_pic)} alt="This is the profile pic" /> 
                           
                           
                            {something.user_one.username }

                            {something.user_one.id }
                     
                       <Link to={`/messages/${something.user_one.id}/${something.user_two.id}`} >messages</Link>
                       {/* <button data = {something.user_one} component = {Link} to ="/messages    ">Message</button> */}
                       </div>
                       : <p>{something.user_two.username} 
                             <img id="dp" src={require("../../../project" + something.user_two.profile_pic)} alt="This is the profile pic" /> 
                             {something.user_one.id }
                     
                       <Link to={`/messages/${something.user_two.id}/${something.user_one.id}`} >messages</Link>
                       </p>}


                       </div>
                    })
                }
            </div>  : <p> </p>   }
        </div>
    )
}

export default FriendList