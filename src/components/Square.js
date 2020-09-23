import React from 'react'

export default function Square(props) {
    return (
      <button className={"square" + (props.is_game?' square-in-game':'')} onClick={props.onClick}>
        {props.value}
      </button>
    );
}
