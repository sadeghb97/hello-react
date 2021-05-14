import React from 'react'
import GameCard from "./GameCard";
import tlou2Image from "./images/tlou2.jpg"
import tlou2AltImage from './images/tlou2-2.jpg'
import bloodborneImage from "./images/bloodborne.jpeg"
import bloodborneAltImage from "./images/bloodborne-2.jpg"

class GamesApp extends React.Component {
    state = {
        games: [
            {
                image: tlou2Image,
                altImage: tlou2AltImage,
                title: "The Last Of Us Part 2",
                altered: false
            },
            {
                image: bloodborneImage,
                altImage: bloodborneAltImage,
                title: "BloodBorne",
                altered: false
            }
        ]
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