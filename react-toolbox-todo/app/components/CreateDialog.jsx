import React from 'react';
import Dialog from 'react-toolbox/lib/dialog';

export default class CreateDialog extends React.Component {
  dialogToggle() {
    console.log('test');
  }
  render() {
    return (
      <Dialog
          active={this.props.active}
          onEscKeyDown={this.props.onEscKeyDown}
          onOverlayClick={this.props.onOverlayClick}
          title={this.props.title}>

        <p>Create Dialog.</p>
      </Dialog>
    )
  }

}
