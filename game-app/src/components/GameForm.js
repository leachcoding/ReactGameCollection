import React, {useState, useEffect} from 'react';

const GameForm = (props) => {
  const[newGame, setNewGame] = useState({
    name: "",
    system: "",
    esrb: "",
    genre: "",
    cost: 0,
    isCompleted: false
  });

  const handleChange = e => {
    setNewGame({...newGame, [e.target.name]:e.target.value});
    console.log(newGame);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(newGame) {
      props.addNewGame(newGame)
    }

    setNewGame({
      name: "",
      system: "",
      esrb: "",
      genre: "",
      cost: 0,
      isCompleted: false
    });
  };

  return (
    <div className='formDiv'>
      <p>ADD A NEW GAME</p>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type='text' name='name' placeholder="Enter name of game" value={newGame.name} onChange={(e) => handleChange(e)}/>
        Choose a System
        <select name='system' onChange={(e) => handleChange(e)}>
          <option value="PC">PC</option>
          <option value="PS4">PS4</option>
          <option value="Xbox One">Xbox One</option>
          <option value="Nintendo Switch">Nintendo Switch</option>
          <option value="PS3">PS3</option>
          <option value="Xbox 360">Xbox 360</option>
          <option value="Nintendo Wii">Nintendo Wii</option>
        </select>
        <input type='text' name='esrb' placeholder="Enter esrb of game" value={newGame.esrb} onChange={(e) => handleChange(e)}/>
        <input type='text' name='genre' placeholder="Enter genre of game" value={newGame.genre} onChange={(e) => handleChange(e)}/>
        <input type='text' name='cost' placeholder="Enter cost of game" value={newGame.cost} onChange={(e) => handleChange(e)}/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default GameForm;
