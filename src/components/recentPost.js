import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions"


class RecentPost extends Component {

    componentDidMount() {
        this.props.fetchRecentPost();
    }



    render() {
        return(
            <div className="recent-post">
                <div className="recent-post-wrapper">
                    <div className="recent-post-heading">
                        Recent Post
                    </div>

                    <ul className="recent-posts-posts">
                        <li>recent post 0</li>
                        <li>recent post 1</li>
                        <li>recent post 2</li>

                    </ul>

                </div>

            </div>
        )
    }

}

export default connect(null, actions)(RecentPost);