import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/buildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const BuildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      {controls.map((item) => (
        <BuildControl
          key={item.label}
          label={item.label}
          added={() => props.onAdded(item.type)}
          remove={() => props.onRemove(item.type)}
        />
      ))}
    </div>
  );
};

export default BuildControls;
