import React from 'react'
import {
    List,
    ListItem,
    Appear,
    Slide,
    Heading,
} from 'spectacle'
import newHome from '../img/newHome.png'

const slide = (
    <Slide bgColor="background">
        <Heading style={{ marginTop: '-10rem' }} size={4} textColor="primary" lineHeight={2}>Refonte de la page d&apos;accueil</Heading>
        <img src={newHome} style={{ width: '150%', marginLeft: '-13rem' }} />
    </Slide>
)

export default slide