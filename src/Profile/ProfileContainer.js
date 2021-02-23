import {connect} from "react-redux";
import {Profile} from "./Profile";
import React from "react";

class ProfileContainer extends React.Component {

    render() {
        return <Profile {...this.props} />
    }
}

let mapStateToProps = (state) => {
    return {
        posts: state.createPost.posts,
    }
}

export default connect(mapStateToProps)(ProfileContainer);