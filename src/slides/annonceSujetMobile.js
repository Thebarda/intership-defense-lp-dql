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
    <Heading style={{ marginTop: '-10rem' }} size={4} textColor="primary" lineHeight={2}>Contenu du stage</Heading>
    <Heading size={5} textColor="tertiary">Développement mobile</Heading>
    <List textColor="tertiary">
      <Appear>
        <ListItem textSize={32}>
          Mise à niveau de l&apos;application
        </ListItem>
      </Appear>
      <Appear>
        <ListItem textSize={32}>
          Ajout amélioration de fonctionnalités
        </ListItem>
      </Appear>
      <Appear>
        <ListItem textSize={32}>
          Amélioration de fonctionnalités
        </ListItem>
      </Appear>
      <Appear>
        <ListItem textSize={32}>
          Correction de dysfonctionnement
        </ListItem>
      </Appear>
    </List>
    <Appear>
      <div>  
        <img src={react} alt="react" style={{ position: 'absolute', width: "10rem", marginLeft: '-13rem' }} />
        <img src={gradle} alt="react" style={{ position: 'absolute', width: "6rem" }} />
      </div>
    </Appear>
  </Slide>
)

export default slide