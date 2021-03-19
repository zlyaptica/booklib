import {SearchForm} from './SearchForm'
import {reduxForm} from 'redux-form'

const Search = () => {

    return (
        <SearchReduxForm/>
    )
}

const SearchReduxForm = reduxForm({form: 'search'})(SearchForm)

export {Search}