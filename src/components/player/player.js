import React from "react";
import "./player.css";

export class Player extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.highllight(props.turn)
    // }
    // state = {background : this.highllight(this.props.turn)}

    highllight = (myTurn) =>{
        if(myTurn) {
            return "dark";
        } else {
            return "light";
        }
    }

    render() {
        return (
            <div className={`player ${this.highllight(this.props.turn)}`}>
                <div className="name-and-score">
                    <h1>PLAYER {this.props.num}</h1>
                    <h1 className="score">{this.props.score}</h1>
                </div>
                <div className="winner">
                    {this.props.winner && <h1>YOU ARE THE WINNER!!!</h1>}
                </div>
                <div className="current-container">
                    <div className="current">
                        <h3>CURRENT</h3>
                        <h3>{this.props.current}</h3>
                    </div>
                </div>
            </div>
        )
    }
}