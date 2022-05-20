import React from "react";
import Button from "../button/button";
import Dice from "../dice/dice";
import { Input } from "../input/input";
import "./config.css";


export class Config extends React.Component {

    state = {
        roll: false,
        diceNum: [],
        goal: 100,
    }

    reset = (event) => {
        this.props.reset();
    }

    roll = (event) => {
        !this.state.roll && this.setState({roll: true}, ()=> setTimeout(()=>this.setState({roll: false}), 1000));
    }

    hold = (event) => {
        this.props.hold();
    }

    rollRes = (num) => {
        this.props.rollRes(num);
    }

    goalChange = (event) => {
        // if(event.target.value > 50 && event.target.value < 2000) {
            this.setState({goal : event.target.value});
        // }
    }

    componentDidUpdate() {
        this.props.sendGoal(this.state.goal);
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
                            this.state.roll &&
                            <>
                                <Dice roll={this.rollRes}/>
                                <br/> 
                                <Dice roll={this.rollRes}/>
                            </>
                        }
                    </div>
                    <div className="buttons">
                        <Button id="roll" name="ROLL DICE" onClick= {this.roll} />
                        <Button id="hold" name="HOLD" onClick= {this.hold} />
                        <Input type= "text" value={this.state.goal} onChange={this.goalChange} />
                    </div>
                </div>
            </div>
        )
    }
}