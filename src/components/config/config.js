import React from "react";
import Button from "../button/button";
import Dice from "../dice/dice";
import { Input } from "../input/input";
import "./config.css";


export class Config extends React.Component {

    state = {
        roll: false,
        // diceNum: [],
    }

    reset = (event) => {
        this.props.reset();
    }

    roll = (event) => {
        if(!this.props.isWinner && this.props.goal) {
            !this.state.roll && this.setState({roll: true}, ()=> setTimeout(()=>this.setState({roll: false}), 1000));
        }
    }

    hold = (event) => {
        this.props.hold();
    }

    rollRes = (num, num2) => {
        this.props.rollRes(num + num2);
    }

    goalChange = (event) => {
            this.props.sendGoal(event.target.value);
    }

    render() {
        return (
            <div className="config-container">
                <div className="config">
                    <div className="new-game">
                        <Button id="reset" name="NEW GAME" onClick= {this.reset} />
                    </div>
                    <div className="dices">
                        {
                            this.state.roll  && this.props.goal &&
                            <>
                                <Dice roll={this.rollRes}/>
                            </>
                        }
                    </div>
                    <div className="buttons">
                        <Button id="roll" name="ROLL DICE" onClick= {this.roll} />
                        <Button id="hold" name="HOLD" onClick= {this.hold} />
                        <Input type= "text" value={this.props.goal} onChange={this.goalChange} />
                    </div>
                </div>
            </div>
        )
    }
}