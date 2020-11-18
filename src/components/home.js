import React, { Component } from 'react';

import Logo from './logo';
import SearchBar from './searchBar';
import RecentPosts from './recentPosts';

import { connect } from 'react-redux';
import * as actions from '../actions';

//export default class App extends Component {
//export default class Home extends Component {  
class Home extends Component {

  handleSearchBarSubmit(query) {
    this.props.fetchPostsWithQuery(query, () => {
    this.props.history.push('/results');
  });
    //console.log('trying to handle submit for query', query);
    //this.props.fetchPostsWithQuery(query);
    //this.props.history.push('/results');
}

  render() {
    return (
      <div>
        <div>
          <Logo/>
          <SearchBar onSubmit={(query) => this.handleSearchBarSubmit(query)}/>
          <RecentPosts/>
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(Home);

//<h2>React Redux Router</h2>
//<h1>Logo</h1>
//<div className='app'>
//<SearchBar/>