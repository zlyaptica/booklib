import classes from './CloseBurger.module.css'

const CloseBurger = (props) => {
    return (
      <div
        className={classes.header__burger + ' ' + classes.burger}
        onClick={() => {
          props.setIsNavOpen(!props.isNavOpen);
        }}
      >
        <span className={classes.burger__line + ' ' + classes.burger__line_first} />
        <span className={classes.burger__line + ' ' + classes.burger__line_second} />
        <span className={classes.burger__line + ' ' + classes.burger__line_third} />
      </div>
    );
  };
  
  export { CloseBurger }

