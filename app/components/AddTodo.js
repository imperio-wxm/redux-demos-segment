import React, { Component, PropTypes } from 'react';
import {findDOMNode} from 'react-dom'
import { Input,Button } from 'antd'

export default class AddTodo extends Component {
  render() {
    return (
      <div>
        <Input placeholder="Basic usage" ref='input' style={{width:200}}/>
        <Button onClick={e => this.handleClick(e)}>
          Add
        </Button>
      </div>
    );
  }

  handleClick(e) {
    const node = findDOMNode(this.refs.input);
    const text = node.value.trim();
    if(text != "") {
      this.props.onAddClick(text);
      node.value = '';
    }
  }
}

AddTodo.propTypes = {
  onAddClick: PropTypes.func.isRequired
}
