const CloseBurger = (props) => {
    return (
      <div
        className="header__burger burger"
        onClick={() => {
          props.setIsNavOpen(!props.isNavOpen);
        }}
      >
        <span className="burger__line burger__line_first"></span>
        <span className="burger__line burger__line_second"></span>
        <span className="burger__line burger__line_third"></span>
      </div>
    );
  };
  
  export { CloseBurger }