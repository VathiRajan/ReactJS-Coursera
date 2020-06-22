import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { DISHES } from '../shared/dishes';
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    }
  }
  render() {
    const menu = this.state.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-10 mt-5">
          <Media tag="li">
            <Media >
              <Media object src={dish.image} ></Media>
              <Media body className="ml-5">
                <Media heading classname="pic-heading" >
                  {dish.name}
                </Media>
                <p>{dish.description}</p>
              </Media>
            </Media>
          </Media>
        </div>
      )
    });
    return (
      <div className="container">
        <div className="row">
          <Media list>
            {menu}
          </Media>
        </div>
      </div>
    );
  }
}
export default Menu;
