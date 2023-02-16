import React from 'react'
import CardImage from './CardImage'
import CardItem from './CardItem'
import UnitStates from './UnitStates'
import Buy from './Buy'

export default function Card({ hero }) {
    return (
        <div className="clash-card barbarian">
            <CardImage src={hero.img} name={hero.name} />
            <CardItem type='clash-card__level clash-card__level--barbarian'>{hero.level}</CardItem>
            <CardItem type='clash-card__unit-name'>The {hero.name}</CardItem>
            <CardItem type='clash-card__unit-description'>{hero.description}</CardItem>
            <Buy name={hero.name} id={hero.id} />
            <UnitStates units={hero.units} name={hero.name} />

        </div>
    )
}
