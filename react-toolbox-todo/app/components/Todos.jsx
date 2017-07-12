import React from 'react';
import { connect } from 'react-redux'
import Board from './Board.jsx';
import Todo from './Todo.jsx'
import UpdateDialog from './UpdateDialog.jsx';
import CreateDialog from './CreateDialog.jsx';
import { List } from 'react-toolbox/lib/list';
import { Button } from 'react-toolbox/lib/button';

class Todos extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      updateDialogActive: false,
      createDialogActive: false
    };
  }
  
  updateDialogToggle(todo) {
    console.log(todo);
    this.setState({updateDialogActive: !this.state.updateDialogActive});
  }

  createDialogToggle() {
    this.setState({createDialogActive: !this.state.createDialogActive});
  }
 
  render() {
    var createDialogActive = this.state.createDialogActive;
    var updateDialogActive = this.state.updateDialogActive;

    return (
      <div>
        <Board title={'Todo List'}>
          <List selectable ripple>
            {this.props.todos.todos.map((todo, key) =>
              <Todo onClick={() => this.updateDialogToggle(todo)} key={key} todo={todo} />
            )}
          </List>

          <div style={{padding:10, textAlign: 'right'}} >
            <Button onClick={() => this.createDialogToggle()} icon='add' ripple floating />
          </div>

        </Board>

        <UpdateDialog
            active={updateDialogActive}
            onEscKeyDown={this.updateDialogToggle.bind(this)}
            onOverlayClick={this.updateDialogToggle.bind(this)}
            title='Update Dialog' />

        <CreateDialog
            active={createDialogActive}
            onEscKeyDown={this.createDialogToggle.bind(this)}
            onOverlayClick={this.createDialogToggle.bind(this)}
            title='Create Dialog' />
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(Todos);
