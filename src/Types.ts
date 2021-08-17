export enum CharacterType {
    enemy = "ENEMY",
    hero = "HERO"
}
export type Character = {
    type: CharacterType
    initialPosition: Position
    render: JSX.Element
    deck: Card[]
    strength: number // modifier
    stamina: number
    mana: number
    spirit: number
    baseHealth: number
}
export type Position = {
    index?: number
    x?: number
    y?: number
}
export type Scenario = {
    entities: Character[]
}
export type EnemyType = {
    name: string
}
export enum CardType {
    ability = "ABILITY",
    spell = "SPELL",
    equipment = "EQUIPMENT"
}
export enum Modifiers {
    strength = "STRENGTH",
}
export type Card = {
    type: CardType
    name: string
    requirements: {
        stamina: number
        mana: number
        spirit: number
    }
    modifiers: Modifiers[]
    effects: Effect
}
export enum EffectType {
    attack = "ATTACK",
    defence = "DEFENCE",
    heal = "HEAL",
    pierce = "PIERCE",
    reduce = "REDUCE",
}
export type Effect = {
    type: EffectType
    value: number
}


