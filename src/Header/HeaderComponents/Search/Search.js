import {SearchForm} from "./SerachForm";
import {reduxForm} from "redux-form";

const Search = (props) => {
    const findTextPost = (values) => {
        props.findPost(values.searchText)
    }

    return (
        <SearchReduxForm onSubmit={findTextPost}/>
    )
}

const SearchReduxForm = reduxForm({form: 'search'})(SearchForm)

export {Search}