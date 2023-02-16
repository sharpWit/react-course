import React from 'react'
import State from './State'

export default function UnitStates({ units, name }) {

    const states = units.map((unit, index) => <State
        key={unit.value}
        state={unit.state}
        value={unit.value}
        noBorder={index === units.length - 1} />)

    return (
        <div className={`clash-card__unit-stats clash-card__unit-stats--${name} clearfix`}>
            {states}
        </div>
    )
}
