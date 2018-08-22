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
        <Heading size={4} textColor="primary" lineHeight={2} style={{ marginTop: '-10rem' }}>Bilan</Heading>
        <List textColor="tertiary">
        <Appear>
            <ListItem textSize={32}>
                Travail en équipe
            </ListItem>
        </Appear>
        <Appear>
            <ListItem textSize={32}>
                Discussion avec d&apos;autres professionnels
            </ListItem>
        </Appear>
        <Appear>
            <ListItem textSize={32}>
                Meilleure approche des problèmatiques
            </ListItem>
        </Appear>
        <Appear>
            <ListItem textSize={32}>
                Compétences dans les domaines Web, Mobile
            </ListItem>
        </Appear>
        <Appear>
            <ListItem textSize={32}>
                Développement de ma curiosité
            </ListItem>
        </Appear>
        </List>
    </Slide>
)

export default slide