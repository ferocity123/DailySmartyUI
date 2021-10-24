import React, { Component } from 'react';
import Logo from "./logo"
import SearchBar from './searchbar';
import RecentPost from './recentPost';

export default class Home extends Component {


  handleSearchBarSubmit(query) {
    console.log(query)
    this.props.history.push("/results");
}

  render() {
    return (
      <div>
       <div>
       <Logo/>
       <SearchBar onSubmit={(query) => this.handleSearchBarSubmit(query)}/>
       <RecentPost/>
       </div>
      </div>
    );
  }
}