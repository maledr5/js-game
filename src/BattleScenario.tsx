import Grid from "./Grid";
import React, { FC } from "react";
import { Scenario } from "./Types";

type BattleScenarioProps = {
    scenario: Scenario
}

const BattleScenario: FC<BattleScenarioProps> = ({scenario}) => {
    return <Grid entities={scenario.entities}/>
}

export default BattleScenario