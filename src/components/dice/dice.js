import React from "react";
import "./dice.css";

class Dice extends React.Component {

    constructor(props) {
        super(props);
        const num = this.roll();
        this.state = {num : num};
    } 

    roll = () => {
        const res = Math.floor(Math.random() *6 +1);
        this.props.roll(res);
        return res;
    }

    render() {
        return (
            <>
                <div className={`dice dice${this.state.num}`}></div>
            </>
        )
    }
}

export default Dice;