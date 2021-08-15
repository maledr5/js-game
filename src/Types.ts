export enum CharacterType {
    enemy = "ENEMY"
  }
export type Npc = {
    type: CharacterType
    initialPosition: Position
    render: JSX.Element
}  
export type Position = {
    index?: number
    x?: number
    y?: number
}
export type Scenario = {
    entities: Npc[]
}
export type EnemyType = {
    name: string
}

