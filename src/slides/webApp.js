import React from 'react'
import {
    List,
    ListItem,
    Appear,
    Slide,
    Heading,
} from 'spectacle'
import react from '../img/react.png'
import html from '../img/htmlcssjs.png'
import webpack from '../img/webpack.png'
import bs from '../img/bootstrap-logo.png'

const slide = (
    <Slide bgColor="background" maxWidth={100} maxHeight={100}>
        <Heading style={{ marginTop: '-10rem' }} size={4} textColor="primary" lineHeight={2}>Les technologies</Heading>
        <List textColor="tertiary">
            <Appear>
                <ListItem textSize={32}>
                    Single Page Application
                </ListItem>
            </Appear>
        </List>
        <Appear>
            <div>  
                <img src={react} alt="react" style={{ position: 'absolute', width: "10rem", marginLeft: '-20rem' }} />
                <img src={html} alt="react" style={{ position: 'absolute', width: "15rem", marginLeft: '-10rem' }} />
                <img src={webpack} alt="react" style={{ position: 'absolute', width: "7rem", marginLeft: '7rem' }} />
                <img src={bs} style={{ position: 'absolute', width: "7rem", marginLeft: '13rem' }} />
            </div>
        </Appear>
    </Slide>
)

export default slide