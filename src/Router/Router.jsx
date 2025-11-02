import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Home/Home";
import Error from "../Error";

export const router =  createBrowserRouter ([
{
  path:'/',
  element:<Main></Main>,
  errorElement:<Error></Error>,
  children:[
    {
      path:'/',
      element:<Home></Home>
    }
  ],
 
}
]);

