import {Search} from "./Search";
import {connect} from "react-redux";
import {findPost} from "../../../redux/findTextPostReducer";

let mapStateToProps = (state) => {
    return {
        text: state.findTextPost.text
    }
}

const SearchContainer = connect(mapStateToProps, {findPost})(Search)

export {SearchContainer}
