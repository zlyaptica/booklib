import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import {Header} from './Header/Header'
import {UserPost} from "./Profile/UserPost/UserPost";
import {SignIn} from "./Login/SignIn/SignIn";
import ProfileContainer from "./Profile/ProfileContainer";
import SignUpContainer from "./Login/SignUp/SignUpContainer";
import {Post} from "./CreatePost/Post/Post";
import { CreatePost } from './CreatePost/CreatePost';

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Header/>

                <Route path='/signin' render={ () => <SignIn /> } />
                <Route path='/signup' render={ () => <SignUpContainer />} />
                <Route path='/createpost' render={ () => <CreatePost /> } />
                <Route path='/profile' render={ () => <ProfileContainer /> } />
                <Route path='/userpost' render={ () => <UserPost /> }/>
                <Route path='/' render={ () => <Post /> } exact/>
            </div>
        </BrowserRouter>
    )
}

export default App;
