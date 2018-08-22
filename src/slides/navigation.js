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
                <img src={nav} />
            </div>
        </Appear>
    </Slide>
)

export default slide