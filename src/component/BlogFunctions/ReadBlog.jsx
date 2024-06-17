import React from 'react';
import './CreateBlog.css';
import Button from '@mui/material/Button';
import Navbar from '../Navbar/Navbar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { TextField } from '@mui/material';

const ReadBlog = () => {

  const navigate = useNavigate();

  const backBtnPress = () => {
    navigate("/Home");
  }

  const [blogData, setBlogData] = useState([]);    
  const {id} = useParams();       

  useEffect(() => {
      axios.get("http://localhost:3000/blogs/"+id)
      .then(res => setBlogData(res.data))
  })

  return (
    <>
    <Navbar/>
      <div className='createBox'>
      <div className='Header'>
        <h1>My Blog</h1>
      </div>
      <div className="title">
      <TextField className='standardInput'
      sx = {{"color" : "black", "margin-top" : "20px", "width" : "100%", "border" : "solid", "border-color" : "black", "border-width" : "1px"}}
          id="outlined-disabled"
          placeholder={blogData.title}
          InputProps={{
            readOnly: true,
        }}/>
      </div>

      <div className="author">
       <TextField className='standardInput'
        sx = {{"margin-top" : "20px", "width" : "100%", "border" : "solid", "border-color" : "black", "border-width" : "1px"}}
        id="outlined-disabled"
          placeholder={blogData.title}
          InputProps={{
            readOnly: true,
        }}/>
      </div>

      <div className="date">
      <TextField className='standardInput'
        sx = {{"margin-top" : "20px", "width" : "100%", "border" : "solid", "border-color" : "black", "border-width" : "1px"}}
        id="outlined-disabled"
          placeholder={blogData.date}
          InputProps={{
            readOnly: true,
        }}/>
      </div>
      
      <div className="content">
      <TextField className='standardInput'
        sx = {{"margin-top" : "20px", "width" : "100%" , "border" : "solid", "border-color" : "black", "border-width" : "1px"}}
        id="outlined-multiline-flexible"
        placeholder={blogData.content}
        InputProps={{
          readOnly: true,
        }}
        multiline
        maxRows={4}
        />
      </div>

      <div className='btnDiv'>
        <Button onClick={backBtnPress} variant="contained" className='backBtn'>Back</Button> 
      </div>
    </div>
    </>     
  )
}

export default ReadBlog
