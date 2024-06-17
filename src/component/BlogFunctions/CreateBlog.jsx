import React from 'react';
import './CreateBlog.css';
import Button from '@mui/material/Button';
import Navbar from '../Navbar/Navbar';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { TextField } from '@mui/material';

const CreateBlog = () => { 

  const navigate = useNavigate();
  
  const [blogData, setBlogData] = useState({
    title : "",
    content : "",
  });           

    const createBlogFunction = (event) => {
      event.preventDefault();

      axios.post("http://localhost:3000/blogs/", blogData)
      .then(res => console.log(res))
      navigate('/Home');
    }
      

 
  return (
    <>
    <Navbar/>
      <div className='createBox'>
      <div className='Header'>
        <h1>Write Your Blog</h1>
      </div>
      
      <div className="title">
      <TextField className='standardInput'
        sx = {{"margin-top" : "20px", "width" : "100%", "border" : "solid", "border-color" : "black", "border-width" : "1px"}}
        id="input-with-icon-textfield"
        placeholder='Enter the title here'
        variant="filled"
        onChange={a => setBlogData({...blogData, title:a.target.value})}/>
      </div>

      <div className="author">
       <TextField className='standardInput'
        sx = {{"margin-top" : "20px", "width" : "100%", "border" : "solid", "border-color" : "black", "border-width" : "1px"}}
        id="input-with-icon-textfield"
        placeholder='Enter the author name here'
        variant="filled"
        onChange={a => setBlogData({...blogData, author:a.target.value})}/>
      </div>

      <div className="date">
      <TextField className='standardInput'
        sx = {{"margin-top" : "20px", "width" : "100%", "border" : "solid", "border-color" : "black", "border-width" : "1px"}}
        id="input-with-icon-textfield"
        placeholder='Enter the Date Here'
        variant="filled"
        onChange={a => setBlogData({...blogData, date:a.target.value})}/>
      </div>
      
      <div className="content">
      <TextField className='standardInput'
        sx = {{"margin-top" : "20px", "width" : "100%" , "border" : "solid", "border-color" : "black", "border-width" : "1px"}}
        id="outlined-multiline-flexible"
        placeholder='Enter the Content Here'
        multiline
        maxRows={4}
        onChange={a => setBlogData({...blogData, content:a.target.value})}/>
      </div>

      <div className='btnDiv'>
        <Button onClick={createBlogFunction} variant="contained" className='createBtn'>Create</Button> 
      </div>
    </div>
    </>
  )
}

export default CreateBlog
