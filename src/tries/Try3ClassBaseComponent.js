import React from 'react'

class Try3ClassBaseComponent extends React.Component {
    state = {
        count: 0
    }

    //setState haye motavali inja mese component haye tabe ei baese ejraye chand bare yek code nemishavad
    constructor(props) {
        console.log("*** Constructor ***")
        super(props);

        setInterval(() => {
            this.setState((state) => {
                return {count: state.count + 1}
            })
        }, 2000)
    }

    /*
    ES6 React.Component doesn't auto bind methods to itself. You need to bind them yourself in constructor. Like this:
    constructor (props){
      super(props);

      this.state = {
          loopActive: false,
          shuffleActive: false,
        };

      this.onToggleLoop = this.onToggleLoop.bind(this);
    }

    here are another couple of ways for solve this problem.
    One is to add this.onToggleLoop = this.onToggleLoop.bind(this); in the constructor.
    Another is arrow functions onToggleLoop = (event) => {...}.
    And then there is onClick={this.onToggleLoop.bind(this)}.
    */

    hugeIncrement = () => {
        // in modeli ham mishe vali nemishe be state dastresi dasht
        // this.setState({count: 15})

        this.setState((state) => {
            return {count: state.count + 60}
        })
    }

    render() {
        return <div style={{margin: '30px', color: 'Red'}}>
            <h1>{this.state.count}</h1>
            <button onClick={this.hugeIncrement}>Huge Increase</button>
        </div>;
    }
}

export default Try3ClassBaseComponent;