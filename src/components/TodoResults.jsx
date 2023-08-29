import React from 'react';

const TodoResults = (props) => {
  return (
    <li className="todo-item">
      <span className="content">{props.item}</span>
      <span className="button-container">
        <button
          className="tdr-button"
          onClick={e => {
            props.DeleteListItem(props.index);
          }}
          type="button">-</button>
      </span>
    </li>
  );
};

export default TodoResults;
