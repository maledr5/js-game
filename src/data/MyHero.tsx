import Enemy from "../Enemy";
import { Character } from "../Types";
import cards from "./deck/cards";

const {CharacterType} = require("../Types");
const myHero: Character = {
  type: CharacterType.hero,
  initialPosition: {x: 3, y: 3},
  render: <Enemy name="Shiny Hero"/>,
  strength: 1,
  stamina: 5,
  mana: 3,
  spirit: 3,
  baseHealth: 8,
  deck: [cards.simplePunch, cards.mediumStick]
}

export default myHero