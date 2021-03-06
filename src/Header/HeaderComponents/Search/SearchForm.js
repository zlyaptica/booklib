import classes from './SearchForm.module.css'
import {Field} from "redux-form";
import {Input} from "../../../components/FormsControls/FormsControls";

const SearchForm = (props) => {
    return (
        <form className={classes.searchForm} onSubmit={props.handleSubmit}>
            <fieldset className={classes.searchForm__wrap}>
                <div className={classes.searchForm__info}>
                    <Field className={classes.searchForm__field} placeholder="Поиск по сайту..." name="searchText" type="text" component={Input}/>
                    <button className={classes.searchForm__submit} type="submit"  />
                </div>
            </fieldset>
        </form>
    )
}

export {SearchForm}