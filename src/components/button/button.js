import React from "react";
import "./button.css"

const Button = (props) => {
    return (
        <>
            <button id= {props.id} onClick={props.onClick}>{props.name}</button>
        </>
    )
}

export default Button;