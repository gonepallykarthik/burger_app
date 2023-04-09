import classes from "./buildControl.module.css";

const BuildControl = (props) => (
  <div className={classes.buildControl}>
    <div>{props.label}</div>
    <button
      className={classes.btn}
      style={{ cursor: "pointer" }}
      onClick={props.added}
    >
      +
    </button>
    <button className={classes.btn} onClick={props.remove}>
      -
    </button>
  </div>
);

export default BuildControl;
