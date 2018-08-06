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
import UPS from '../img/UPS.png'
import bleemeo from '../img/logo_bleemeo.png'

const slide = (
  <Slide transition={['zoom']} bgColor="primary">
    <img src={UPS} alt='logo UPS'/>

    <br /> <br /><br /> <br />
    <Heading size={1} fit caps lineHeight={1} textColor="secondary">
      Développement web et mobile de la solution Bleemeo
    </Heading>
    
    <Text margin="10px 0 0" textColor="background" size={6} bold>
      Solution Saas d&apos;infrastructure IT
    </Text>
    <br /> <br /><br />
    <img src={bleemeo} alt='logo Bleemeo'/>
  </Slide>
)

export default slide