import React, { useEffect, useState ,useContext} from 'react'
import axios from 'axios'
import AuthContext from '../context/AuthContext';
const AddFriend = () => {
    let [search, setSearch] = useState(null);
    let [searchUsername, setSearchUsername] = useState({});
    let {user} = useContext(AuthContext)
    useEffect(() => {
        axios.get(`http://localhost:8000/chat/friends/${search}`).then((res) => {
            console.log(res.data);
            setSearchUsername(res.data);

        })
    }, [search])

  
    return (<div>

        <input type="text" placeholder='Enter the user id' onChange={e => setSearch(e.target.value)} />


        {searchUsername.username==user.username?
            <p>This user</p>
            :
            searchUsername.profile_pic?

            <div>
                <p><img id="dp" src={require("../../../project" + searchUsername.profile_pic)} /></p>
                <p>{searchUsername.first_name} {searchUsername.last_name}</p>
                <button >Add to friend</button>
                
            </div>


            :
            <div>Not found  </div>
        }
    </div>
    )
}

export default AddFriend;