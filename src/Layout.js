import React, { Component } from "react";
import ParentContainer from "./ParentContainer";
import Button from "./Button";

class Layout extends Component {
    state = {
        count: 0,
        loggedIn: false
    };

    onButtonClicked = (evt) => {
        this.addCountToState(evt.target.id);
    };

    addCountToState = (id) => {
        this.setState((prevState) => {
            const loggedIn = id === "logIn" ? true : false;
            return { count: ++prevState.count, loggedIn: loggedIn };
        });
    };

    render() {
        return (
            <div>
                <div>This is the core layout</div>

                <ParentContainer>
                    <Button clicked={this.onButtonClicked} id="logIn">
                        Log In
                    </Button>
                </ParentContainer>
                <Button clicked={this.onButtonClicked} id="logOut">
                    Log Out
                </Button>
            </div>
        );
    }
}

export default Layout;
