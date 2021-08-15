import React from 'react';
import './App.css';
import Grid from './Grid';
import Enemy from './Enemy';
import { CharacterType } from './Types';


function App() {

  const myEnemy = {
    type: CharacterType.enemy,
    initialPosition: {x: 1, y: 1},
    render: <Enemy name="Ugly Enemy"/>
  }

  const scenarioEntities = [myEnemy]

  return (
    <div className="app">
      <Grid entities={scenarioEntities}/>
    </div>
  );
}

export default App;
