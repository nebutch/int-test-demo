import React, { Component } from "react";

class ParentContainer extends Component {
    render() {
        return <div>{this.props.children}</div>;
    }
}

export default ParentContainer;
