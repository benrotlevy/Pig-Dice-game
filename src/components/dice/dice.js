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
        const res2 = Math.floor(Math.random() *6 +1);
        this.props.roll(res, res2);
        return [res, res2];
    }

    render() {
        return (
            <>
                <div className={`dice dice${this.state.num[0]}`}></div>
                <br />
                <div className={`dice dice${this.state.num[1]}`}></div>
            </>
        )
    }
}

export default Dice;