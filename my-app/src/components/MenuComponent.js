import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardTitle, CardBody } from 'reactstrap';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDish: null
    }
  }
  onDishSelect(dish) {
    console.log(dish.name);
    this.setState({ selectedDish: dish });
  }

  renderDIsh(dish) {
    if (dish != null) {
      console.log("dish not null");
      return (
        <Card>
          {console.log(dish.name)}
          <CardImg top src={dish.image} alt={dish.name}></CardImg>
          <CardBody>
            <CardTitle>
              {dish.name}
            </CardTitle>
            <CardText>
              {dish.desc}
            </CardText>
          </CardBody>
        </Card>
      );
    }
    else {
      console.log("dish is null");
      return (<div></div>);
    }

  }
  render() {
    const menu = this.props.dishes.map((dish) => {
      return (

        < div key={dish.id} className="col-10 col-md-5 m-1" >
          <Card onClick={(dish) => this.onDishSelect(dish)}>
            <CardImg width="100%" src={dish.image} ></CardImg>
            <CardImgOverlay body className="ml-5">
              <CardTitle heading classname="pic-heading" >
                {dish.name}
              </CardTitle>
            </CardImgOverlay>
          </Card>
        </div >
      )
    });
    return (
      <div className="container" >
        <div className="row">

          {menu}

        </div>
        <div className="row">
          <div className="col-5 col-md-6">
            {this.renderDIsh(this.state.selectedDish)}</div>
        </div>
      </div>
    );
  }
}
export default Menu;
