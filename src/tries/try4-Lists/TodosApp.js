import React from 'react'
import TodosComponent from "./TodosComponent";

class TodosApp extends React.Component {
    render() {
        return <div style={{margin: '30px', color: 'Red'}}>
            <TodosComponent todos={["Do something awesome"]} />
        </div>;
    }
}

export default TodosApp;