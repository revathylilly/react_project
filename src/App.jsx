import React from 'react'

import { Route, Router, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import HomeComponent from './components/HomeComponent';
import LoginComponent from './components/LoginComponent';
import SignupComponent from './components/SignupComponent';

import AdminComponent from './components/AdminComponent';


import DonatorsComponent from './components/DonatorsComponent';
import ProtectedroutesComponent from './ProtectedroutesComponent';
import UpdateComponent from './components/UpdateComponent';
import RegisterCollectorComponent from './components/RegisterCollectorComponent';
import AboutusComponent from './components/AboutusComponent';
import ContactusComponent from './components/ContactusComponent';
import EnquiriesComponent from './components/EnquiriesComponent';




const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/'>
          <Route element={<ProtectedroutesComponent/>}>
              <Route path='/' element={<HomeComponent/>} />
              <Route path='/collector' element={<AdminComponent/>} />
              <Route path='/donators' element={<DonatorsComponent />}/>
              <Route path='/getenquiries' element={<EnquiriesComponent/>}/>
             
           
          </Route>
          <Route path='/login' element={<LoginComponent/>} />
          <Route path='/register' element={<SignupComponent/>} />
          <Route path='/update' element={<UpdateComponent />}/>
          <Route path='/registercollector' element={<RegisterCollectorComponent />}/>
          <Route path='/aboutus' element={<AboutusComponent/>}/>
          <Route path='/contactus' element={<ContactusComponent/>}/>
        
          <Route path='*' element={
              <div>
                  <header>
                      <h1>Not Found</h1>
                  </header>
                  <p>
                      <a href="/">Back to Home</a>
                  </p>
              </div>
          } />
      </Route>
  )
);
function App() {
  const isLogged = localStorage.getItem("user");
  console.log(isLogged)

  const logout = async () => {
      const response = await fetch("/api/Pothichoru/logout", {
          method: "GET",
          credentials: "include"
      });

      const data = await response.json();
      if (response.ok) {
          localStorage.removeItem("user");

          alert(data.message);

          document.location = "/";
      } else {
          console.log("could not logout: ", response);
      }
  };
  return (
      <section>
          <div className='top-nav' style={
            {
                backgroundColor:"#236bd5b8"
            }
          }>
              {
                  isLogged ?
                      <span className='item-holder'>
                          <a href="/" className="btn btn-light">Home</a>
                          <a href="/collector" className="btn btn-light">Collectors Info</a>
                          <button className='btn btn-danger' onClick={logout}>Logout</button>
                          
                           

                          
                      </span> :
                      <span className='item-holder'>
                         <a href="/" className="btn btn-light">Home</a>
                          <a href="/aboutus" className="btn btn-light">About Us</a>
                          <a href="/contactus" className="btn btn-light">Contact Us</a>
                          <a href="/login" className="btn btn-light"> Login</a>
                          <a href="/register" className="btn btn-light">Sign Up</a>
                          
                       
                          
                      </span>
              }
          </div>

          
          <RouterProvider router={router} />
      </section>
  );
}

export default App;

