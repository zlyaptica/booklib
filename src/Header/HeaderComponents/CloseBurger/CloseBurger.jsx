import classes from './CloseBurger.module.css'

const CloseBurger = (props) => {
    return (
        <div
            className={classes.burger}
            onClick={() => {
                props.setIsNavOpen(!props.isNavOpen);
            }}
        >
            <span className={classes.line + ' ' + classes.line_first}/>
            <span className={classes.line + ' ' + classes.line_second}/>
            <span className={classes.line + ' ' + classes.line_third}/>
        </div>
    );
};

export {CloseBurger}

