import React from 'react';
import './App.css';
import Login from './components/Login';
import Logout from './components/LogoutButton';
// import Profile from './components/Profile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import AdminCarlisting from './components/Admin/AdminCarlisting';
import UserCarlisting from './components/User/UserCarlisting';
import CreateCar from './components/Admin/CreateCar';
import CarDetail from './components/Admin/CarDetail';
import EditCar from './components/Admin/EditCar';
import LogoutButton from './components/LogoutButton';
import Navbar from './components/Navbar';
import AdminWelcome from './components/Admin/AdminWelcome';
import UserWelcome from './components/User/UserWelcome';
import Profile from './components/Profile';

function App() {
  const { isAuthenticated, user, isLoading } = useAuth0();

  if (!isAuthenticated) {
    return <div><h1 className="text-center">Please log in to see the car list.</h1></div>;
  }
    if (isLoading) {
    return <div>Loading</div>;
  } else
   if (user.email.includes('@srec.ac.in')) {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/admin' element={<AdminCarlisting />} />
            <Route path='/createcar' element={<CreateCar />} />
            <Route path='/cardetail/:carid' element={<CarDetail />} />
            <Route path='/editcar/:carid' element={<EditCar />} />
            <Route path='/user' element={<UserCarlisting />} />
            <Route path="*" element={<div>Page Not Found!</div>}></Route>
            <Route path='/' element={<AdminWelcome />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  } else {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/user' element={<UserCarlisting />} />
            <Route path="*" element={<div>Page Not Found!</div>}></Route>
            <Route path='/' element={<UserWelcome />} />
            <Route exact path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
