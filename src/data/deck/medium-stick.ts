import { CardType, EffectType } from "../../Types";

const mediumStick = {
    type: CardType.equipment,
    name: "Medium Stick",
    requirements: {
        stamina: 1,
        mana: 0,
        spirit: 0,
    },
    modifiers: [],
    effects: {
        type: EffectType.attack,
        value: 1
    }
}
export default mediumStick