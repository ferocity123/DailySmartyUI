import React, { Component } from 'react';
import Logo from "./logo"
import SeachBar from './searchbar';
import RecentPost from './recentPost';

export default class App extends Component {
  render() {
    return (
      <div>
       <div>
       <Logo/>
       <SeachBar/>
       <RecentPost/>
       </div>
      </div>
    );
  }
}
