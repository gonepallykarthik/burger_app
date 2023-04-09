import React, { Component } from "react";
import Burger from "../Components/Burger/Burger";
import BuildControls from "../Components/Burger/BuildControls/BuildControls";
class Builder extends Component {
  state = {
    ingredients: {
      salad: 0,
      cheese: 0,
      meat: 0,
      bacon: 0,
    },
  };

  addItem = (type) => {
    const oldCount = this.state.ingredients[type];
    const newCount = oldCount + 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = newCount;
    this.setState({ ingredients: updatedIngredients });
  };
  removeItem = (type) => {
    const currentCount = this.state.ingredients[type];
    if (currentCount === 0) {
      return;
    }
    const updatedCount = currentCount - 1;
    const updatedArr = { ...this.state.ingredients };
    updatedArr[type] = updatedCount;
    this.setState({ ingredients: updatedArr });
  };

  render() {
    return (
      <div>
        <div>
          <Burger ingredients={this.state.ingredients} />
        </div>
        <BuildControls onAdded={this.addItem} onRemove={this.removeItem} />
      </div>
    );
  }
}

export default Builder;
