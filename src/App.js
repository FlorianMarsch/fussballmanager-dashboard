import React, { Component } from 'react';
import Paperbase from './components/Paperbase'
import { BrowserRouter } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Paperbase />
      </BrowserRouter>
    );
  }
}

export default App;
