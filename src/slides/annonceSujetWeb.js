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

const slide = (
  <Slide bgColor="background">
    <Heading size={4} textColor="primary" lineHeight={2}>Contenu du stage</Heading>
    <Heading size={5} textColor="tertiary">Développement web</Heading>
    <List textColor="tertiary">
      <Appear>
        <ListItem textSize={32}>
          Ajout de fonctionnalités
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
        <img src={react} alt="react" style={{ position: 'absolute', width: "10rem", marginLeft: '-20rem' }} />
        <img src={html} alt="react" style={{ position: 'absolute', width: "15rem", marginLeft: '-10rem' }} />
        <img src={webpack} alt="react" style={{ position: 'absolute', width: "7rem", marginLeft: '7rem' }} />
      </div>
    </Appear>
  </Slide>
)

export default slide