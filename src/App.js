import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import {Header} from './Header/Header'
import {Login} from './Login/Login'
import {PostTemplate} from "./CreatePost/PostTemplate/PostTemplate";
import {CreatePostContainer} from "./CreatePost/CreatePostContainer";
import {Post} from "./CreatePost/Post/Post";


const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Header/>

                <Route path='/login' render={ () => <Login /> } />
                <Route path='/createpost' render={ () => <CreatePostContainer /> } />

                <Post />
            </div>
        </BrowserRouter>
    )
}

export default App;
