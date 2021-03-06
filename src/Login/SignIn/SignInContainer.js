// import React from 'react'
// import {usersAPI} from "../../api/api";
// import {connect} from "react-redux";
// import {SignIn} from "./SignIn";
// import {setUserData} from "../../redux/authReducer";
// import axios from "axios";

// class SignInContainer extends React.Component {

//     componentDidMount() {
//         axios.get('http://localhost:8080/private/whoami').then(response => {
//             debugger
//         })
//     }

//     render() {
//         return <SignIn {...this.props} />
//     }
// }

// let mapStateToProps = (state) => {
//     return {
//         posts: state.createPost.posts,
//     }
// }

// export default connect(mapStateToProps, {setUserData})(SignInContainer);