import React from 'react'
import {
    List,
    ListItem,
    Appear,
    Slide,
    Heading,
} from 'spectacle'
import react from '../img/react.png'
import gradle from '../img/gradle.png'

const slide = (
    <Slide bgColor="background" maxWidth={100} maxHeight={100}>
        <Heading style={{ marginTop: '-10rem' }} size={4} textColor="primary" lineHeight={2}>Les technologies</Heading>
        <Appear>
            <div>  
                <img src={react} alt="react" style={{ position: 'absolute', width: "10rem", marginLeft: '-13rem' }} />
                <img src={gradle} alt="react" style={{ position: 'absolute', width: "6rem" }} />
            </div>
        </Appear>
    </Slide>
)

export default slide