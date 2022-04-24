import axios from 'axios';
import React, { useEffect, useState,useContext } from 'react'
import { useParams } from 'react-router-dom'
import AuthContext from '../context/AuthContext'
import '../css/Messages.css'

const Messgaes = () => {

    const { id } = useParams();
    let sending = id
    let {user} = useContext(AuthContext)
    const [getmessages, setGetmessages] = useState();
    const [sendMessages,setSendMessages] = useState("");

    const url = `http://localhost:8000/chat/message/${id}/`


    

    const submit = (e) =>{
        e.preventDefault()
        const data = {
            "message":sendMessages,
            "sent_by":user.user_id,
            "sent_to":sending,
             }

                axios.post(url,data)
                .then(res=>console.log(res))

             e.target.reset()
    }


    
    useEffect(() => {
       
      axios.get(url)
    .then(res => {
        setGetmessages(res.data)
    })
    }, [])

    


    const updateMessage = (e) =>{
        setSendMessages(e.target.value)
    }




    return (
        <div>
            {user.user_id}
            {getmessages ? <div>
                {
                    getmessages.map((something) => {
                        return <div className='messages'>{something.sent_by === user.user_id    ?
                            <div className='main-left'>
                            <div className='left-side'>
                            {something.message}  
                            </div>
                            </div>
                        :
                        <div className='main-right'>
                        <div className='right-side'>
                         <img id="dp" src={require("../../../project" + something.profile_pic_sent_by)} alt="This is the profile pic" /> 
                         {something.message}
                         </div>
                         </div>
                      
                        }
                        </div>
                    })
                }
            </div> : <p> </p>}

            <div>
                <form onSubmit={submit}>
                    <input type="text" name="sendMessage" onChange={updateMessage}/>
                    <input type="submit" value="Send" />
                </form>
            </div>
        </div>
    )


}





export default Messgaes