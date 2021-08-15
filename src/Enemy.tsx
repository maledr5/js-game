import React, { FC } from "react";
import { EnemyType } from "./Types";


const Enemy: FC<EnemyType> = ({name}) => {
    return (
        <div className="enemy"></div>
    )
}

export default Enemy