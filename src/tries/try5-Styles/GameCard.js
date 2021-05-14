import React from 'react'
//style inline:
//akolade aval baraye raftan be fazaye name moteghayer ha va akolade dovom yek object ast
/* style={{margin: '10px'}} */

//rahe dovom importe file css
import './GameCard.css'

//baraye dashtance style haye dynamic dar file khareji mitavan az :hover, ... estefade kard
//dar raveshe khati bayad az event handler ha estefeade konim

class GameCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            game: props.game
        }
    }

    alter = () => {
        this.setState({
            game: {
                ...this.state.game,
                altered: !this.state.game.altered
            }
        })
    }

    render() {
        const game = this.state.game

        return <div onClick={this.alter} className={`GameCard ${game.altered ? 'altered' : ''}`}>
            <img src={game.altered ? game.altImage : game.image} />
            <span>{game.title}</span>
        </div>
    }
}

export default GameCard