import React from 'react';
import './App.css';
import scenario1 from "./data/scenarios/scenario1";
import BattleScenario from "./BattleScenario";

function App() {
  return (
    <div className="app">
      <BattleScenario scenario={scenario1}/>
    </div>
  );
}

export default App;
