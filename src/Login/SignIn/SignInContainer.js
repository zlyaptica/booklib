import React from 'react'
import {usersAPI} from "../../api/api";
import {connect} from "react-redux";
import {SignIn} from "./SignIn";
import {setUserData} from "../../redux/authReducer";

class SignInContainer extends React.Component {

    componentDidMount() {
        usersAPI.getUsers().then(data => {
        })
    }

    render() {
        return <SignIn {...this.props} />
    }
}

let mapStateToProps = (state) => {
    return {
        posts: state.createPost.posts,
    }
}

export default connect(mapStateToProps, {setUserData})(SignInContainer);