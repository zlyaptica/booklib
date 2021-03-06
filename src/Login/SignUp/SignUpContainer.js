import React from 'react'
import {connect} from "react-redux";
import {SignUp} from "./SignUp";


class SignUpContainer extends React.Component {

    render() {
        return <SignUp {...this.props} />
    }
}

let mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps)(SignUpContainer);
