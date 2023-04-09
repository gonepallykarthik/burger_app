import styles from "./burger.module.css";
import Ingredients from "./BurgerIngredients/Ingredients";

const Burger = (props) => {
  let trasnformed = Object.keys(props.ingredients)
    .map((igkey) => {
      return [...Array(props.ingredients[igkey])].map((_, i) => {
        return <Ingredients key={igkey + i} type={igkey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  if (trasnformed.length === 0) {
    trasnformed = <p>Please add Ingredients</p>;
  }
  console.log(trasnformed);
  return (
    <div className={styles.Burger}>
      <Ingredients type="bread-top" />
      {trasnformed}
      <Ingredients type="bread-bottom" />
    </div>
  );
};

export default Burger;
