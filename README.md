# ReactJS-Coursera

Configure your React Project to use Reactstrap : 

    To configure your project to use reactstrap, type the following at the prompt to install reactstrap, and Bootstrap 4:
      yarn add bootstrap@4.0.0
      yarn add reactstrap@5.0.0
      yarn add react-popper@0.9.2
    
Configure to use Bootstrap 4

    Next, open index.js file in the src folder and add the following line into the imports:
    import 'bootstrap/dist/css/bootstrap.min.css';
    
 Adding a Navigation Bar:

    Open App.js in the src folder and update it as follows:
    import { Navbar, NavbarBrand } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
      </div>
    );
  }
}

