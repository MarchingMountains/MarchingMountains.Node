import React from 'react';
import {RouteHandler} from 'react-router';
import Footer from './Footer';
import Header from './Header';

class App extends React.Component {
  render() {
    return (
      <div>
      	<Header />
        <RouteHandler />
        <Footer /> 
      </div>
    );
  }
}

export default App;