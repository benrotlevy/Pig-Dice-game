import React from "react";

const Button = (props) => {
    return (
        <>
            <button id= {props.id} onClick={props.onClick}>{props.name}</button>
        </>
    )
}

export default Button;