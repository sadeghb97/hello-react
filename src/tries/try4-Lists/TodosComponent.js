import React from 'react'

class Try3ClassBaseComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: props.todos,
            input: ""
        }
    }

    addTodo = () => {
        if(!this.state.input) return
        this.setState((state) => {
            return {
                todos: [...state.todos, state.input],
                input: ""
            }
        })
    }

    syncInputValue = (event) => {
        this.setState({input: event.target.value})
    }

    render() {
        return <div style={{margin: '30px', color: 'Red'}}>
            {this.state.todos.map((item, index) => {
                return <ul key={index} style={{backgroundColor: '#ddd'}}>{item}</ul>
            })}

            <input value={this.state.input}
                onChange={(event) => { this.syncInputValue(event) }}/>
            <button style={{marginLeft: '10px'}} onClick={this.addTodo}>Add Todo</button>
        </div>;
    }
}

export default Try3ClassBaseComponent;