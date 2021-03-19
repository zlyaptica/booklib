import React, {useEffect} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import {Header} from './Header/Header'
import {UserPost} from './Profile/UserPost/UserPost'
import {SignIn} from './Login/SignIn/SignIn'
import {SignUp} from './Login/SignUp/SignUp'
import {Post} from './CreatePost/Post/Post'
import {CreatePost} from './CreatePost/CreatePost'
import {Profile} from './Profile/Profile'
import {useDispatch} from 'react-redux'
import {getMe} from './redux/authReducer'

const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMe())
    }, [dispatch])

    return (
        <BrowserRouter>
            <div>
                <Header/>

                <Route path='/signin' render={() => <SignIn/>}/>
                <Route path='/signup' render={() => <SignUp/>}/>
                <Route path='/createpost' render={() => <CreatePost/>}/>
                <Route path='/profile' render={() => <Profile/>}/>
                <Route path='/userpost' render={() => <UserPost/>}/>
                <Route path='/' render={() => <Post/>} exact/>
            </div>
        </BrowserRouter>
    )
}

export default App;
