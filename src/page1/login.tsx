import {  useHistory } from "react-router-dom";
import './login.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch } from "react-redux";
import { loginAction } from "../redux/login/loginaction";

export function Login() {
  const dispatch = useDispatch();

    // let username:string,password:string;
    const history =useHistory();
    const [usernamereg,setUsername]=useState('')
    const [passwordreg,setPassword]=useState('')
    const [emailreg,setEmail]=useState('')
    const [usernamelog,setUserlog]=useState('')
    const [passwordlog,setPasswordlog]=useState('')

    const [loginStatus,setloginStatus]=useState('')
    const signup=()=>{
      axios.post('http://localhost:8001/auth/signup',{
          userName:usernamereg,
          userPassword:passwordreg,
          email:emailreg
      }).then((response)=>{console.log(response)})
  }
    const login = () => {
      axios.post('http://localhost:8001/auth/login',{
        userName:usernamelog,
        userPassword:passwordlog,
    }).then((response)=>{
        window.localStorage.setItem('tokenName', response.data.token);
        dispatch<any>(loginAction(true))
        history.push('/')
        console.log(response.data)
  
    }).catch((err)=>{ 
      console.log(err)
      alert('you have enterd bad credentials')
      
    })
    
    //   if (username === 'yummy' && password === '1234'){
    //     sessionStorage.setItem("Authenticate", "Authenticated");
    //     history.push('/')
    //   }
    //   else{
    //     alert('Invalid Username or Password')
    //   }
    // };
    // const setusername=(e:React.ChangeEvent<HTMLInputElement>)=>{
    //   username = e.target.value;
    // }
    // const setpassword=(e:React.ChangeEvent<HTMLInputElement>)=>{
    //   password = e.target.value;
     
  
  
  }
  

    return (
      <>
      <div className="login">
      <h2>Sign Up</h2>
        
        Username:<input type='text' onChange={(e)=>{setUsername(e.target.value)}}/><br/>
        Password:<input type='password' onChange={(e)=>{setPassword(e.target.value)}}/><br/>
        Email:<input type="text" onChange={(e)=>{setEmail(e.target.value)}}/>

      <button onClick={signup}>sign up</button>
      </div>
      <div className="login">
        <h2>Login page</h2>
        Username:<input type='text' onChange={(e)=>{setUserlog(e.target.value)}} /><br/>
        Password:<input type='password' onChange={(e)=>{setPasswordlog(e.target.value)}}/><br/>
        <button onClick={login}>Log in</button>

      </div>
      <div className='loginStatus'>
        <h2>{loginStatus}</h2>
        <button onClick={()=>{localStorage.setItem('tokenName','')}}>Logout</button>
      </div>
      </>
    );
}
