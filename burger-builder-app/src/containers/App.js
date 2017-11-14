import React, { Component } from 'react';
import classes from './App.css';

// Separating local imports
import Modal from '../components/Layout/Modal/Modal';
import Burger from '../containers/Burger/Burger';
import Layout from '../components/Layout/Layout';
import Navigation from '../components/Navigation/Navigation';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Layout>
          <Modal />
          <Navigation />
          <Burger />
        </Layout>
      </div>
    );
  }
}

export default App;
