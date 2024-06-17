import React, { useState } from 'react';
import './Login.css';
import Button from '@mui/material/Button';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import Navbar from '../Navbar/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password : ""
  });

  const navigate = useNavigate();
  
  const loginBtnClick = () => {
    console.log(data.email)
    // alert("ENTER")
    if (data.email == "abc@gmail.com" && data.password == "123456")
      {
        navigate('/Home')
      } 
  };

  return (
  <>
  <Navbar/>
    <div className='loginBox'>
      <div className='Header'>
        <h1>Login Details</h1>
      </div>
      
      <div className="email">
        <TextField 
        id="input-with-icon-textfield"
        placeholder='someone@gmail.com'
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailIcon />
            </InputAdornment>
          ),
        }}
        variant="standard"
        onChange={a => setData({...data, email:a.target.value})}/>
      </div>
      
      <div className="email">
        <TextField 
        id="input-with-icon-textfield"
        placeholder='Password'
        type='password'
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockIcon />
            </InputAdornment>
          ),
        }}
        variant="standard"
        onChange={a => setData({...data, password:a.target.value})}/>
      </div>

      <div>
        <Button variant="contained" className='loginBtn' onClick={loginBtnClick}>Login</Button>
      </div>
      
    </div>
    {/* <Alert sx={{ display: {success} }} icon={<CheckIcon fontSize="inherit" />} severity="success">
    Here is a gentle confirmation that your action was successful.
    </Alert> */}
  </>
  )
}

export default Login

