import React, {useState} from 'react';
import './App.css';
import Game from './components/Game.js';
import GameForm from './components/GameForm.js'

function App() {
  // Set up state for initial game list
  const [games, setGames] = useState([
    {
      name: "Total War: Warhammer II",
      system: "PC",
      esrb: "M",
      genre: "Strategy",
      cost: 25,
      isCompleted: false
    },
    {
      name: "Total War: Rome II",
      system: "PC",
      esrb: "M",
      genre: "Strategy",
      cost: 15,
      isCompleted: false
    }
  ]);

  // handler function to add a game to the list of games
  const addNewGame = (newGame) => {
    setGames([...games, {name: newGame.name, system: newGame.system, esrb: newGame.esrb, genre: newGame.genre, cost: newGame.cost, isCompleted: false}]);
  }

  // handler function to toggle whether or not a game is completed
  const completeGame = index => {
    const newGames = [...games];
    newGames[index].isCompleted = !newGames[index].isCompleted;
    console.log(newGames);
    setGames(newGames);
  }

  // handler function that will clear games that are already completed
  const clearGames = event => {
    let gamesFilter = games.filter(game => !game.isCompleted);

    setGames(gamesFilter);
  }

  // handler function that will clear single game that is X-ed
  const removeGame = index => {
    const newGames = [...games];
    newGames.splice(index,1);
    setGames(newGames);
  }


  // Return list of games and generate a game component for each one in the list.
  return (
    <div className="App">
      <div className="games">
        {games.map((game, index) => {
          return <Game key={index} index={index} game={game} completeGame={completeGame} removeGame={removeGame}/>
        })}
      </div>

      <GameForm addNewGame={addNewGame}/>

      <button onClick={() => clearGames()}>Clear Completed Games</button>
    </div>
  );
}

export default App;
