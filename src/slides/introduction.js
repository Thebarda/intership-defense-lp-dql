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
    <Heading size={4} textColor="primary">Choix de l&apos;entreprise</Heading>
    <List textColor="tertiary">
      <Appear>
        <ListItem>
          Lionel Porcheron
          <List textColor="tertiary">
            <ListItem textSize="32">
              Directeur de Bleemeo
            </ListItem>
            <ListItem textSize="32">
              Organisateur du Capitole du libre
            </ListItem>
          </List>
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>
          Technologies web et mobile intéressantes
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>
          L&apos;esprit start-up
        </ListItem>
      </Appear>
    </List>
  </Slide>
)

export default slide