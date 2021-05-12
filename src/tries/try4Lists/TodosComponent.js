import React from 'react'

class Try3ClassBaseComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: props.todos
        }
    }

    render() {
        return <div style={{margin: '30px', color: 'Red'}}>
            {this.state.todos.map((item, index) => {
                return <ul key={index} style={{backgroundColor: '#ddd'}}>{item}</ul>
            })}
        </div>;
    }
}

export default Try3ClassBaseComponent;