import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, createRoutesFromElements,Route,RouterProvider} from 'react-router-dom';
import Sneakers from './pages/Sneakers'
import Dress from './pages/Dress'
import Kids from './pages/Kids'
import Men from './pages/Men'
import Offers from './pages/Offers'
import Home from './pages/Home'
import Signup from './pages/Signup';

const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path='/' element = {<App/>}>
      <Route index element={<Home/>} />
      <Route path='sneakers' element = {<Sneakers/>}/>
      <Route path='dress' element = {<Dress/>}/>
      <Route path='kids' element = {<Kids/>}/>
      <Route path='men' element = {<Men/>}/>
      <Route path='offers' element = {<Offers/>}/>
      <Route path='signup' element = {<Signup/>} />


    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router = {router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();