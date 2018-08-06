import React from 'react'
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
} from 'spectacle'
import react from '../img/react-logo.png'

const slide = (
  <Slide transition={['fade']} bgColor="background">
    <Heading size={1} textColor="primary">
      Merci de votre attention
    </Heading>
    <br /> <br /> <br />
    Présentation réalisé avec <br /> <img style={{ width: "11rem" }} src={react} alt="logo React" />
  </Slide>
)

export default slide