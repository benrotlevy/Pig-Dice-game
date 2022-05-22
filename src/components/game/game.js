import React from "react";
import { Config } from "../config/config";
import { Player } from "../player/player";


class Game extends React.Component {

    state = {
        PlayersScore: [0, 0],
        PlayersCurrent: [0, 0],
        playersTurn: [true, false],
        isRoll: false,
        goal: 100,
        gameStart: false,
    }

    resetGame = () => {
        this.setState({
            PlayersScore: [0, 0],
            PlayersCurrent: [0, 0],
            playersTurn: [true, false],
            isRoll: false,
            goal: 100,
            gameStart: false,
        })
    }

    hold = () => {
        if(this.state.isRoll) {
            this.setState(
                (prevState => ({
                    PlayersScore: prevState.PlayersScore.map((score, i) => score += prevState.PlayersCurrent[i]),
                    PlayersCurrent: [0, 0],
                    playersTurn: prevState.playersTurn.map(e => !e),
                    isRoll: false,
                })))
        }
    }


    rollRes = (num) => {
        if(num !== 12) {
            this.setState(prevState => ({
                PlayersCurrent: prevState.PlayersCurrent.map((curr, i) => prevState.playersTurn[i]? prevState.PlayersCurrent[i]+num: prevState.PlayersCurrent[i]),
                isRoll: true,
                gameStart: true,
            }))
        } else {
            this.setState(prevState => ({PlayersCurrent: [0,0], playersTurn: prevState.playersTurn.map(e => !e), isRoll: false, gameStart: true,}));
        }
    }

    winner(yourScore, otherScore) {
        if(!this.state.goal) return false;
        if(yourScore === this.state.goal || otherScore > this.state.goal) {
            return true;
        }
        return false;
    }

    isWinner() {
        return this.state.PlayersScore[0] >= this.state.goal || this.state.PlayersScore[1] >= this.state.goal;
    }

    setGoal = (newGoal) => {
        if(newGoal !== this.state.goal.toString() && !this.state.gameStart) {
            if(newGoal.split("").filter(e => e < 0 || e > 9).length === 0) { // all elements are numbers
                if(newGoal && newGoal !== "0") {
                    this.setState({goal: parseInt(newGoal)});
                } else {
                    this.setState({goal: ""});
                }
            }
        }
    }

    render() {
        return(
            <>
                <Player num="1" score={this.state.PlayersScore[0]} winner= {this.winner(this.state.PlayersScore[0], this.state.PlayersScore[1])} current= {this.state.PlayersCurrent[0]} turn={this.state.playersTurn[0]}/>
                <Player num="2" score={this.state.PlayersScore[1]} winner= {this.winner(this.state.PlayersScore[1], this.state.PlayersScore[0])} current= {this.state.PlayersCurrent[1]} turn={this.state.playersTurn[1]}/>
                <Config sendGoal= {this.setGoal} reset= {this.resetGame} hold= {this.hold} rollRes= {this.rollRes} isWinner= {this.isWinner()} goal= {this.state.goal} />
            </>
        )
    }
}

export default Game;