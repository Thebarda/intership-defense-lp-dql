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
import js from '../img/js.png'
import webpack from '../img/webpack.png'
import bs from '../img/bootstrap-logo.png'
import node from '../img/node.jpg'

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
                <img src={js} alt="js" style={{ position: 'absolute', width: "5rem", marginLeft: '-25rem', marginTop: '-.4rem' }} />
                <img src={react} alt="react" style={{ position: 'absolute', width: "10rem", marginLeft: '-20rem' }} />
                <img src={html} alt="react" style={{ position: 'absolute', width: "12rem", marginLeft: '-10rem' }} />
                <img src={bs} style={{ position: 'absolute', width: "10rem", marginLeft: '.4rem', marginTop: '-1.5rem' }} />
                <img src={webpack} alt="react" style={{ position: 'absolute', width: "7rem", marginLeft: '9rem' }} />
                <img src={node} style={{ position: 'absolute', width: "9rem", marginLeft: '17rem', marginTop: '1rem' }} />
            </div>
        </Appear>
    </Slide>
)

export default slide