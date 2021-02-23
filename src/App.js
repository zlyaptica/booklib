import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import {Header} from './Header/Header'
import {SignUp} from "./Login/SignUp/SignUp";
import {FindText} from "./FindText/FindText";
import {UserPost} from "./Profile/UserPost/UserPost";

import {CreatePostContainer} from "./CreatePost/CreatePostContainer";
import PostContainer from "./CreatePost/Post/PostContainer";
import ProfileContainer from "./Profile/ProfileContainer";
import SignInContainer from "./Login/SignIn/SignInContainer";

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Header/>

                <Route path='/signin' render={ () => <SignInContainer /> } />
                <Route path='/signup' render={ () => <SignUp /> } />
                <Route path='/createpost' render={ () => <CreatePostContainer /> } />
                <Route path='/profile' render={ () => <ProfileContainer /> } />
                <Route path='/findtext' render={ () => <FindText /> }/>
                <Route path='/userpost' render={ () => <UserPost /> }/>
                <Route path='/' render={ () => <PostContainer /> } exact/>
            </div>
        </BrowserRouter>
    )
}

export default App;
