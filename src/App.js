import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import {Header} from './Header/Header'
import {SignIn} from './Login/SignIn/SignIn'
import {CreatePostContainer} from "./CreatePost/CreatePostContainer";
import {PostContainer} from "./CreatePost/Post/PostContainer";
import {SignUp} from "./Login/SignUp/SignUp";
import {Profile} from "./Profile/Profile";


const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Header/>

                <Route path='/signin' render={ () => <SignIn /> } />
                <Route path='/signup' render={ () => <SignUp /> } />
                <Route path='/createpost' render={ () => <CreatePostContainer /> } />
                <Route path='/profile' render={ () => <Profile /> } />
                <Route path='/' render={ () => <PostContainer /> } exact/>

            </div>
        </BrowserRouter>
    )
}
export default App;
