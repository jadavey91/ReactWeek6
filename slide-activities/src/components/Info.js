import Price from "./Price";

const Info = (props) => {
  return (
    <div className="information">
      <img src={props.src}></img>
      <Price RRP={props.RRP} now={props.now}/>
      <p>
        {props.name}, {props.option}
      </p>
    </div>
  );
};

export default Info;
