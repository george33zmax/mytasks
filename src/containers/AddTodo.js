import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import '../css/layout.css'

const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div className="container">

      <form className="new__todo"  onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value));
        input.value = ''
      }}>
        <input ref={node => input = node} placeholder="My Tasks" className="placeholder"/>
        <button className="button__add" type="submit">
          <span id="plusIcon"><i className="fas fa-plus"/></span>
        </button>
      </form>
    </div>
  )
};

export default connect()(AddTodo)
