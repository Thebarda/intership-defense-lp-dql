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
import react from '../img/React-Logo-v2.svg'

const slide = (
  <Slide transition={['fade']} bgColor="background">
    <Heading size={1} textColor="primary">
      Merci de votre attention
    </Heading>
    <br /> <br /> <br />
    <Text textSize="22" textColor="primary">
      Présentation réalisé avec <br /> <img style={{ width: "11rem" }} src={react} alt="logo React" />
    </Text>
  </Slide>
)

export default slide