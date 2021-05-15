import React from 'react'

class BadComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            arr: props.arr
        }
    }

    render() {
        return <div><h2>{this.state.arr.length}</h2></div>
    }
}

export default BadComponent