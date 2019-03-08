import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import styles from './styles.module.scss';

import Header from './components/header/header.jsx';
import LatestPosts from '../pages/latestPosts/latestPosts.jsx';
import Post from '../pages/post/post.jsx';


class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Header />
        <div className={styles.main}>
        <Switch>
          <Route exact path='/' component={LatestPosts}/>
          <Route path='/posts/:id' component={Post}/>
        </Switch>
        </div>
      </div>
    );
  }
}

export default App;
