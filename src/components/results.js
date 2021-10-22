import React, { Component } from "react";
import SearchBar from "./searchbar";
import Logo from "./logo";


class Results extends Component {
    render() {
        return (
            <div>
                <h1>Results</h1>
                <Logo size={55}/>
                <SearchBar/>

            </div>
        )
    }
}

export default Results