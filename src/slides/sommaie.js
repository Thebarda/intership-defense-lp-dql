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
    <Heading size={4} textColor="primary">Sommaire</Heading>
    <List textColor="tertiary">
      <Appear>
        <ListItem>
          Présentation de l&apos;entreprise
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>
          Développement des interfaces utilisateur web et mobile
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>
          Bilan professionnelle
        </ListItem>
      </Appear>
    </List>
  </Slide>
)

export default slide