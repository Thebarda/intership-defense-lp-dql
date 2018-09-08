import React from 'react'
import {
    List,
    ListItem,
    Appear,
    Slide,
    Heading,
} from 'spectacle'

const slide = (
    <Slide bgColor="background" maxWidth={100} maxHeight={100}>
        <Heading style={{ marginTop: '-10rem' }} size={4} textColor="primary" lineHeight={2}>La start-up Bleemeo</Heading>
        <List textColor="tertiary">
        <Appear>
            <ListItem textSize={32}>
                Créée en 2015
            </ListItem>
        </Appear>
        <Appear>
            <ListItem textSize={32}>
                Surveillance en temps réel des serveurs (CPU, RAM, Docker, Processus, ...)
            </ListItem>
        </Appear>
        <Appear>
            <ListItem textSize={32}>
                Notification en temps réel
            </ListItem>
        </Appear>
        <Appear>
            <ListItem textSize={32}>
                Disponiblité des services
            </ListItem>
        </Appear>
        <Appear>
            <ListItem textSize={32}>
                Facilité d&apos;installation et d&apos;utilisation
            </ListItem>
        </Appear>
        </List>
    </Slide>
)

export default slide