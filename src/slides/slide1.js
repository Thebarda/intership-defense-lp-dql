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
} from 'spectacle';

const slide = (
  <Slide transition={['zoom']} bgColor="primary">
    <Heading size={1} fit caps lineHeight={1} textColor="secondary">
      Spectacle Boilerplate
    </Heading>
    <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
      open the presentation/index.js file to get started
    </Text>
  </Slide>
)

export default slide