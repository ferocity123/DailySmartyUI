import React, { Component } from "react";
import SearchBar from "./searchbar";
import Logo from "./logo";


class Results extends Component {

    handleSearchbarSubmit(query) {
      console.log(query);
    }



    render() {
        return (
            <div>
                <h1>Results</h1>
                <Logo size={55}/>
                <SearchBar onSubmit={(query) => this.handleSearchbarSubmit(query)}/>

            </div>
        )
    }
}

export default Results