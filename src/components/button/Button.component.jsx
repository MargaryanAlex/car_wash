import "./button.css";

const Button = (props) => {
  const { children, type = "button", disabled, ...restProps } = props;
  return (
    <div className="btn-container">
      <button className="btn" type={type} {...restProps}>
        {children}
      </button>
    </div>
  );
};

export default Button;
