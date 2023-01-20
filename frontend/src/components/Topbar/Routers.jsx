import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from '../../pages/home/About'
import Admin from '../../pages/home/Admin'
import Allpost from '../../pages/home/Allpost'
import Alluser from '../../pages/home/Alluser'
import Chat from '../../pages/home/Chat'
import Friends from '../../pages/home/Friends'
import Home from '../../pages/home/Home'
import Loging from '../../pages/home/Loging'
import Notification from '../../pages/home/Notification'
import Photos from '../../pages/home/Photos'
import Posts from '../../pages/home/Posts'
import Profile from '../../pages/home/Profile'
import Savedpost from '../../pages/home/Savedpost'
import Setings from '../../pages/home/Setings'
import Signup from '../../pages/home/Signup'
import Verify from '../../pages/home/Verify'
import Protected from './Protected'

export default function Routers() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route element = {<Protected/>}>
                    <Route path='/profile' element={<Profile />}></Route>
                    <Route path='/profile/post' element={<Posts />}></Route>
                    <Route path='/profile/about' element={<About />}></Route>
                    <Route path='/profile/friends' element={<Friends />}></Route>
                    <Route path='/profile/photos' element={<Photos />}></Route>
                    <Route path='/saved' element={<Savedpost />}></Route>
                    <Route path='/notifications' element={<Notification />}></Route>
                  
                    <Route path='/chat' element={<Chat />}></Route>
                    <Route path='/setings' element={<Setings />}></Route>
                   

                    </Route>
                    <Route path='/'element={<Home />}></Route>
                    <Route path='/login' element={<Loging />}></Route>
                    <Route path='/signup' element={<Signup />}></Route>
                    <Route path='/admin' element={<Admin />}></Route>
                    <Route path='/allusers' element={<Alluser />}></Route>
                    <Route path='/allpost' element={<Allpost />}></Route>
                    <Route path='/Verifyemail/:id' element={<Verify />}></Route>
                   
                   
                </Routes>

            </BrowserRouter>
        </div>
    )
}
