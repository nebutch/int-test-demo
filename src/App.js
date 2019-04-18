import React, { Component } from "react";
import Layout from "./Layout";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        if (process.env.NODE_ENV !== "production") {
            const { whyDidYouUpdate } = require("why-did-you-update");
            whyDidYouUpdate(React);
        }

        this.state = {
            count: 0
        };
    }

    render() {
        return (
            <div className="App">
                <Layout />
            </div>
        );
    }
}

export default App;
