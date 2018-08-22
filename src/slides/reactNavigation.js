import React from 'react'
import {
    List,
    ListItem,
    Appear,
    Slide,
    Heading,
} from 'spectacle'
import nav from '../img/nav.gif'

const slide = (
    <Slide bgColor="background" maxWidth={100} maxHeight={100}>
        <Heading style={{ marginTop: '-10rem' }} fit size={4} textColor="primary" lineHeight={2}>Intégration de react-navigation</Heading>
        <div>  
            <img src={nav} style={{ opacity: 1 }} />
        </div>
    </Slide>
)

export default slide