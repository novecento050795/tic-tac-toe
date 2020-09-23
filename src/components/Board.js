import React from 'react';
import Square from './Square'

export default class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
        is_game={this.props.is_game}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0, this.props.is_game)}
          {this.renderSquare(1, this.props.is_game)}
          {this.renderSquare(2, this.props.is_game)}
        </div>
        <div className="board-row">
          {this.renderSquare(3, this.props.is_game)}
          {this.renderSquare(4, this.props.is_game)}
          {this.renderSquare(5, this.props.is_game)}
        </div>
        <div className="board-row">
          {this.renderSquare(6, this.props.is_game)}
          {this.renderSquare(7, this.props.is_game)}
          {this.renderSquare(8, this.props.is_game)}
        </div>
      </div>
    );
  }
}


