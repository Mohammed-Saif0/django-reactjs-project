import React,{useContext} from 'react'
import AuthContext from '../context/AuthContext'
const Change_profile = () =>{
    let {profile_changer} = useContext(AuthContext)
    return(
        <div>
            <form onSubmit={profile_changer} >
                <input type="file" name="profile_pic" />
                <input type="submit" value="Change" />
            </form>
        </div>
    )
}

export default Change_profile;