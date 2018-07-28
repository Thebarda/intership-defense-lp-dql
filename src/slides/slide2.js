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
  <Slide transition={['fade']} bgColor="tertiary">
    <Heading size={6} textColor="primary" caps>
      Typography
    </Heading>
    <Heading size={1} textColor="secondary">
      Heading 1
    </Heading>
    <Heading size={2} textColor="secondary">
      Heading 2
    </Heading>
    <Heading size={3} textColor="secondary">
      Heading 3
    </Heading>
    <Heading size={4} textColor="secondary">
      Heading 4
    </Heading>
    <Heading size={5} textColor="secondary">
      Heading 5
    </Heading>
    <Text size={6} textColor="secondary">
      Standard text
    </Text>
  </Slide>
)

export default slide