import "./button.scss";

export const Button = (props) => {
  const click = props.onClick;
  return (
    <button
      type={props.type || "button"}
      onClick={click}
      className={props.className}
      style={{ background: props.background, color: props.color }}
      disabled={props.isDisabled || false}
    >
      {props.icon}
      {props.text}
    </button>
  );
};
