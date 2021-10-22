import React, { Component } from "react";


class Logo extends Component {
    render() {

        const size = {
            height: this.props.size ? this.props.size: 105,
            witdh: this.props.size ? this.props.size: 105,
        }
        return(
            <div className="logo-main">
                <img style={size} alt="daily smarty ui logo big" src="/assets/logo/dailysmartyLOGO.png" />

            </div>
        )
    }

}

export default Logo;