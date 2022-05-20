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
    }

    resetGame = () => {
        this.setState({
            PlayersScore: [0, 0],
            PlayersCurrent: [0, 0],
            playersTurn: [true, false],
            isRoll: false,
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
        this.setState(prevState => ({
            PlayersCurrent: prevState.PlayersCurrent.map((curr, i) => prevState.playersTurn[i]? prevState.PlayersCurrent[i]+num: prevState.PlayersCurrent[i]),
            isRoll: true,
        }))
    }

    winner(yourScore, otherScore) {
        if(yourScore === this.state.goal || otherScore > this.state.goal) {
            return true;
        }
        return false;
    }

    setGoal = (newGoal) => {
        if(newGoal !== this.state.goal) {
            this.setState({goal: newGoal});
        }
    }

    render() {
        return(
            <>
                {/* {this.num1} */}
                <Player num="1" score={this.state.PlayersScore[0]} winner= {this.winner(this.state.PlayersScore[0], this.state.PlayersScore[1])} current= {this.state.PlayersCurrent[0]} turn={this.state.playersTurn[0]}/>
                <Player num="2" score={this.state.PlayersScore[1]} winner= {this.winner(this.state.PlayersScore[1], this.state.PlayersScore[0])} current= {this.state.PlayersCurrent[1]} turn={this.state.playersTurn[1]}/>
                <Config sendGoal= {this.setGoal} reset= {this.resetGame} hold= {this.hold} rollRes= {this.rollRes} />
            </>
        )
    }
}

export default Game;