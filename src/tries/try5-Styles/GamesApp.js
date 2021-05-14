import React from 'react'
import GameCard from "./GameCard";
import {games} from "../datas/data";

class GamesApp extends React.Component {
    state = {
        games: games
    }

    render() {
        return <div style={{margin: "auto", width: '75%', textAlign: 'center'}}>
            {this.state.games.map((item) => {
                return <GameCard game={item} />
            })}
        </div>
    }
}

export default GamesApp