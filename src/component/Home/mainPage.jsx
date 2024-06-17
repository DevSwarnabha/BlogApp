import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import Navbar from '../Navbar/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import axios from 'axios'
import { useEffect, useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from "@mui/icons-material/Add";
import './mainPage.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const MainPage = () => {

  const navigate = useNavigate();  

  const [blogData, setBlogData] = useState([]);           

  useEffect(() => {
      axios.get("http://localhost:3000/blogs")
      .then(res => setBlogData(res.data))
  })

  const blogDeleteFunction = (id) => {
    const conf = window.confirm("Are you Sure? ");
    if (conf) {
      axios.delete("http://localhost:3000/blogs/"+id)
      .then(res => {
        location.reload();  
      })
    }

  }
  
  

  return (
    <>
      <Navbar/>
      <div className='mainDiv'>
        
        <div className='tableDiv'>
          <div className='Header'>
            <h1>My Blogs</h1>
          </div>
        <TableContainer component={Paper} sx = {{"width" : "95%", "border" : "solid", "border-width" : "1px"}}>
          <Table  aria-label="simple table">
            <TableHead sx = {{"background" : "rgb(181, 180, 180)"}}>
              <TableRow>
                <TableCell><strong>Title</strong></TableCell>
                <TableCell align="center"><strong>Author</strong></TableCell>
                <TableCell align="center"><strong>Date</strong></TableCell>
                <TableCell align="center"><strong>Content</strong></TableCell>
                <TableCell align="center"><strong>Edit</strong></TableCell>
                <TableCell align="center"><strong>Delete</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {blogData.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Link to={`/read/${row.id}`}>{row.title}</Link>
                  </TableCell>
                  <TableCell align="center"><Link to={`/read/${row.id}`}>{row.author}</Link></TableCell>
                  <TableCell align="center"><Link to={`/read/${row.id}`}>{row.date}</Link></TableCell>
                  <TableCell align="center"><Link to={`/read/${row.id}`}>{row.content}</Link></TableCell>
                  <TableCell align="center">
                    <IconButton sx = {{ "color" : "green", "padding" : "2px"}}>
                      <Link to={`/update/${row.id}`}>
                        <EditIcon />
                      </Link>
                    </IconButton>
                  </TableCell>
                  <TableCell align='center'>
                    <IconButton onClick={e => blogDeleteFunction(row.id)} sx = {{"color" : "red",  "padding" : "2px"}}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <button className='createBtn'>
          <Link className='createBlog' to={`/create`}>Add Blog</Link>
        </button>
        </div>
      </div>
    </>
  )
}

export default MainPage
