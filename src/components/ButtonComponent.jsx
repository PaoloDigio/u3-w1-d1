const ButtonComponent = function (props) {
  return (
    <>
      <button className={"btn " + props.buttonColor}>{props.buttonText || "Button prova"}</button>
    </>
  );
};

export default ButtonComponent;
