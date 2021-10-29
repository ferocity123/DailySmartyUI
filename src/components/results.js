import React, { Component } from "react";
import SearchBar from "./searchbar";
import Logo from "./logo";

import { connect } from "react-redux";
import * as actions from "../actions";


class Results extends Component {

    handleSearchbarSubmit(query) {
        this.props.fetchPostWithQuery(query);
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

export default connect(null, actions)(Results);