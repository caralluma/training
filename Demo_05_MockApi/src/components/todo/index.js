import React from 'react';

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.state = {items: [], text: ''};
    }

    render() {
        return (
            <div>
                <h3>TODO</h3>
                <TodoList items={this.state.items} callbackForDelete={this.handleDelete}/>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} value={this.state.text} />
                    <button>{'Add #' + (this.state.items.length + 1)}</button>
                </form>
            </div>
        );
    }

    handleChange(e) {
        this.setState({text: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        var newItem = {
            text: this.state.text,
            id: Date.now()
        };
        this.setState((prevState) => ({
            items: prevState.items.concat(newItem),
            text: ''
        }));
    }

    handleDelete(e, toToId) {
        console.log(toToId);
        var oldItems = this.state.items;
        var newItems = [];
        for(var i =0; i < oldItems.length; i++) {
            if(toToId != oldItems[i].id) {
                newItems.push(oldItems[i]);
            }
        }
        this.setState((prevState) => ({
            items: newItems,
            text: ''
        }));
    }
}

class TodoList extends React.Component {
    render() {
        //console.log(this.props.callbackForDelete);
        return (
            <ul>
                {this.props.items.map(item => (
                    <li key={item.id}>
                        {item.text}
                        <RemoveButton todoId={item.id} callbackForDelete={this.props.callbackForDelete}></RemoveButton>
                    </li>
                ))}
            </ul>
        );
    }
}

class RemoveButton extends React.Component {
    render() {
        return (
            <button onClick={() => this.props.callbackForDelete(event, this.props.todoId )}>X</button>
        )
    }
}

module.exports = TodoApp;