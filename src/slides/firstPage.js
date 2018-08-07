import React from 'react'
import {
  Heading,
  Slide,
  Text,
  BlockQuote,
  Cite,
} from 'spectacle'
import UPS from '../img/UPS.png'
import bleemeo from '../img/logo_bleemeo.png'

const slide = (
  <Slide transition={['zoom']} bgColor="primary">
    <img style={{ position: 'absolute', marginTop: '-15rem', marginLeft: "-22em" }} src={UPS} alt='logo UPS'/>
    <img style={{ position: 'absolute', marginTop: '-15rem', marginLeft: "15rem" }} src={bleemeo} alt='logo Bleemeo'/>
    <Heading size={1} fit caps lineHeight={1} textColor="secondary">
      Développement web et mobile de la solution Bleemeo
    </Heading>
    
    <Text margin="10px 0 0" textColor="background" size={6}>
      Solution Saas d&apos;infrastructure IT
    </Text>
    <BlockQuote>
      <Cite textColor="secondary">Tom Darneix</Cite>
    </BlockQuote>
    <Text style={{ position: 'absolute', marginTop: '8rem', marginLeft: "-15rem", fontSize: '80%' }}>
      Soutenance du 10 Septembre 2018
    </Text>
  </Slide>
)

export default slide