import React, { Component } from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }
  //Need to have render if you are going for Class based component.
  //In class based component render should be used and you cannot use return directly 
  render() {
    return (
      <div className="App" >
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="#"> React Js Development</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} />
      </div>
    );
  }
}

export default App;
