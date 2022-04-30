import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import AuthContext from '../context/AuthContext';
import '../css/AddFriend.css'
const AddFriend = () => {
    let [search, setSearch] = useState(null);
    let [searchUsername, setSearchUsername] = useState({});
    let { user } = useContext(AuthContext)
    useEffect(() => {
        axios.get(`http://localhost:8000/chat/friends/${search}`).then((res) => {
            console.log(res.data);
            setSearchUsername(res.data);

        })
    }, [search])

    const addFriendRequest = (a,b) =>{
         
       
    }

    return (<div>

        <input type="text" placeholder='Enter the user id' onChange={e => setSearch(e.target.value)} />
            <div>
                {searchUsername.username === user.username ?
                    <p>This user</p>
                    :
                    searchUsername.profile_pic ?

                    <div className='searched'>
                    <div>
                            <p><img id="friendimg" src={require("../../../project" + searchUsername.profile_pic)} /></p>
                            <p>{searchUsername.first_name} {searchUsername.last_name} </p>
                            <button onClick={()=>{
                                 axios.post("http://localhost:8000/chat/Friend_request",{
                                    "user_one":searchUsername.id,
                                    "user_two":user.user_id
                                })
                                    .then(res=>console.log(res.data))
                             } }  >Add to friend</button>
                    </div>
                    </div>


                        :
                        <div>Not found  </div>
                }
           </div>
       
     </div>
    )
}

export default AddFriend;