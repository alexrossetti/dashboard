import React, { Component } from 'react';

import './App.css';
import Top from './components/Top/Top.js';
import Weekly from './components/Weekly/Weekly.js';
import Layout from './components/Layout/Layout.js';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      active: "Top",
    }
  }

  handleClick = (component) => {
    let newActive;
    if (component === 'Top'){
      newActive = 'Top';
    } else if (component === "Weekly") {
      newActive = "Weekly";
    }
    
    this.setState({active: newActive});
  }

  render() {
      return (
        <div className="App">
          <Layout onClick={this.handleClick} />
          { this.state.active === "Top" ? (
            <Top />
          ) : (
            <Weekly />
          )}
        </div>
      );
    }
  
}

export default App;