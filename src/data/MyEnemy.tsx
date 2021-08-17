import Enemy from "../Enemy";
import { Character } from "../Types";
import React from "react";

const {CharacterType} = require("../Types");
const myHero: Character = {
  type: CharacterType.enemy,
  initialPosition: {x: 1, y: 1},
  render: <Enemy name="Ugly Enemy"/>,
  strength: 0,
  stamina: 3,
  mana: 0,
  spirit: 0,
  baseHealth: 5,
  deck: []
}

export default myHero