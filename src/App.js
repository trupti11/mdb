import React, { Component } from 'react';
import './App.css';
import NavbarSterling from './components/NavbarSterling.jsx';
import ExistingCategories from './components/ExistingCategories.jsx';
import { Container } from 'mdbreact';

class App extends Component {

      state = {
            value: "Select Product"
    };


  constructor(props) {
    super(props);

    this.handleOptionSelection = this.handleOptionSelection.bind(this);
  }

    handleOptionSelection = (valuePassed) => {
      console.log(valuePassed);
        if (valuePassed === "Select Product") {
            return 'Please select a value of a product from the drop-down';
        }

        this.setState(() => ({ value: valuePassed }));
    };    

    render() {
      return (
        <div>
            <header>
              <NavbarSterling handleOptionSelection={this.handleOptionSelection} />
            </header>
            <main className='blue lighten-4'>
              <ExistingCategories key={Math.random()} selectedCategory={this.state.value} />
            </main>
            <footer>
              <div className="footer-copyright text-center">
                <Container fluid>
                  &copy; {(new Date().getFullYear())} Copyright: <a href="https://www.sterlingtalentsolutions.com/"> Sterling Talent Solutions </a>
                </Container>
              </div>
            </footer>
        </div>
      );
    }
}

export default App;
