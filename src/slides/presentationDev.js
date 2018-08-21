import React from 'react'
import {
    List,
    ListItem,
    Appear,
    Slide,
    Heading,
} from 'spectacle'
import devEnv from '../img/devEnv.png'

const slide = (
    <Slide bgColor="background" maxWidth={100} maxHeight={100}>
        <Heading style={{ marginTop: '-10rem' }} fit size={4} textColor="primary" lineHeight={2}>Environnement de développement</Heading>
        <img src={devEnv} style={{ width: '120%' }} />
    </Slide>
)

export default slide