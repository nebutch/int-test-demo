import React from "react";

const button = (props) => {
    return (
        <button id={props.id} onClick={props.clicked}>
            {props.children}
        </button>
    );
};

export default button;
