// RouterMeetup.jsx
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './login';
import SignUp from './Signup';
import Layout from './Layout';
import Home from './Home';
import Profile from './Profile';

const RouterMeetup = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />} />
                <Route path='/Home' element={<Home />}>
                    <Route path='Profile' element={<Profile />} /> {/* Nested route */}
                </Route>
                <Route path='/Login' element={<Login />} />
                <Route path='/Signup' element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouterMeetup;
