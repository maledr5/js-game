import { CardType, EffectType, Modifiers } from "../../Types";

const simplePunch =  {
    type: CardType.ability,
    name: "Simple Punch",
    requirements: {
        stamina: 1,
        mana: 0,
        spirit: 0,
    },
    modifiers: [Modifiers.strength],
    effects: {
        type: EffectType.attack,
        value: 1
    }
}
export default simplePunch