import React, { Component } from 'react';
import Logo from "./logo"
import SearchBar from './searchbar';
import RecentPost from './recentPost';

export default class Home extends Component {
  render() {
    return (
      <div>
       <div>
       <Logo/>
       <SearchBar/>
       <RecentPost/>
       </div>
      </div>
    );
  }
}
