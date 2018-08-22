import React from 'react'
import {
    List,
    ListItem,
    Appear,
    Slide,
    Heading,
} from 'spectacle'

const slide = (
    <Slide bgColor="background">
        <Heading size={4} textColor="primary" lineHeight={2} style={{ marginTop: '-10rem' }}>Conclusion</Heading>
        <List textColor="tertiary">
        <Appear>
            <ListItem textSize={32}>
                Une application mobile mise à jour et améliorée
            </ListItem>
        </Appear>
        <Appear>
            <ListItem textSize={32}>
                Des fonctionnalités ajoutées et de nombreux bugs corrigés
            </ListItem>
        </Appear>
        <Appear>
            <ListItem textSize={32}>
                Un CDI dès le 14 Septembre
            </ListItem>
        </Appear>
        </List>
    </Slide>
)

export default slide