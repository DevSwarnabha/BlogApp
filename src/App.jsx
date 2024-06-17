import { useState } from 'react'
import Login from './component/Login/Login'
import MainPage from './component/Home/mainPage'
import Navbar from './component/Navbar/Navbar'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CreateBlog from './component/BlogFunctions/CreateBlog';
import UpdateBlog from './component/BlogFunctions/UpdateBlog';
import ReadBlog from './component/BlogFunctions/ReadBlog';


const router = createBrowserRouter([
  {path : "/", element : <Login/>},
  {path : "/Home", element : <MainPage/>},
  {path : "/create", element : <CreateBlog/>},
  {path : "/update/:id", element : <UpdateBlog/>},
  {path : "/read/:id", element : <ReadBlog/>},
]);


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={router} />  
    </>
  )
}

export default App
