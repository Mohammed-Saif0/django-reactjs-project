import React, {createContext,useState ,useEffect} from 'react'
import jwt_decode from "jwt-decode";
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const AuthContext = createContext()

export default AuthContext

export const AuthProvider = ({children}) =>{

    
    let[authTokens,setAuthTokens] = useState( ()=>localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')): null )
    let[user,setUser] = useState( ()=>localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')): null)
    let[loading,setLoading] = useState(true)
    let[friends,setFriends]=useState()
    
    const[profile_pic,setProfile_pic] = useState();
    let navigate = useNavigate()


    //loggin in the user
    const loginUser = async(e) =>{
        e.preventDefault()

        let response = await fetch("http://localhost:8000/api/token/",{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({'username':e.target.username.value,'password':e.target.password.value})
        }) 
        let data =await response.json()
       
        if(response.status === 200){
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('authTokens',JSON.stringify(data))
            navigate('/')

        }else{
            alert('Please enter correct username and password')
        } 
    }

    

//This function will be used further still under development
const profile_changer = (e) =>{
    e.preventDefault();
    setProfile_pic(e.target.profile_pic.file);
    const id = user.user_id;
    let form_data =new FormData()
    // form_data.append('user_id',id);  
    form_data.append('profile_pic',profile_pic);
    let url = "http://localhost:8000/change_profile/"
    axios.post(url, form_data, {
        headers: {
          'content-type': 'multipart/form-data'
        }
      })
          .then(res => {
            console.log(res.data);
          })
          .catch(err => console.log(err))
}



//This function for signing up the user
    const signup = async(e) =>{
        e.preventDefault()
        let leng = e.target.password.value
        if(leng.length<8)
        {
            alert("Please Enter 8 char password")
            return;
        }
        let response = await fetch("http://localhost:8000/signup/",{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({'username':e.target.username.value,'first_name':e.target.first_name.value,'last_name':e.target.last_name.value,'email':e.target.email.value,'password':e.target.password.value})
        })
        let data = await response.json()
        if(response.status===200)
        {
            alert('Account created for the username :'+data.username)
            navigate('/login')

        }
        else{
            alert('username already taken')
        }
    }

//This function is to logout the user
    const logoutuser =() => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens')
        navigate('/login')
    }


    // This function to send refresh token and get new access token from the backend  
    const refreshtokens = async() =>{
            let response = await fetch("http://localhost:8000/api/token/refresh/",{
                method :'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({'refresh':authTokens?.refresh})
            })
            let data = await response.json()
            if(response.status === 200){
                setAuthTokens(data)
                setUser(jwt_decode(data.access))
                localStorage.setItem('authTokens',JSON.stringify(data))
            }else{
                logoutuser()
            }
            if(loading){
                setLoading(false)
            }
        }

        // after every 4 minutes refreshtokens function will be called 
        useEffect(()=>{

            if(loading){
                refreshtokens()
            }

            let fourMinutes = 1000 *60*4
            let interval = setInterval(()=>{
                if(authTokens){
                    refreshtokens()
                }
            },fourMinutes)
            return () => clearInterval(interval)
        },[authTokens,loading])


        //Function to get friends by user name
        const searchFriends = () =>{
            axios.get(`http://localhost:8000/chat/${user.user_id}/`)
                .then(res=>setFriends(res.data))
        }
    
        

        //This is sending context to the other components
        let contextData = {
            user:user,
            loginUser:loginUser,
            logoutuser: logoutuser,
            profile_changer: profile_changer,
            signup:signup,
            searchFriends:searchFriends,
            friends:friends,
        }


    return(
        <AuthContext.Provider value = {contextData}>
                {loading ? null : children}
        </AuthContext.Provider>
    )
}