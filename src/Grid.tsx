import React, { FC } from "react";
import { Scenario } from "./Types";


const Grid: FC<Scenario> = ({entities}) => {
    const columns = 5
    const rows = 5

    const style = {
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: `repeat(${columns}, 1fr)`
    }

    const gridSpaces = []
    for (let col = 0; col < columns; col++) {
        for (let row = 0; row < rows; row++) {
            const char = entities.find(
                entity => (entity.initialPosition.x === col && entity.initialPosition.y === row))
            if (char) {
                gridSpaces.push(<div key={col}>{char.render}</div>)
            } else {
                gridSpaces.push(<div key={col}>{col},{row}</div>)
            }
        }
    }

    return (
        <section className='myGrid' style={style}>
            {gridSpaces}
        </section>
    )
    
}

export default Grid