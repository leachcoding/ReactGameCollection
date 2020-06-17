import React from 'react';

const Game = (props) => {
  console.log(props.game);
  return (
    <div className='game' style={{textDecoration: props.game.isCompleted ? "line-through" : ''}}>
      <p>Title: {props.game.name}</p>
      <p>System: {props.game.system}</p>
      <p>Rating: {props.game.esrb}</p>
      <p>Genre: {props.game.genre}</p>
      <p>Cost: {props.game.cost}</p>

      <div>
        <button onClick={() => props.completeGame(props.index)}>Completed</button>
        <button onClick={() => props.removeGame(props.index)}>X</button>
      </div>
    </div>
  );
}

export default Game;
