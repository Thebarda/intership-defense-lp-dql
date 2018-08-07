import React from 'react'
import {
  List,
  ListItem,
  Appear,
  Slide,
} from 'spectacle'
import moi from '../img/moi.jpg'

const slide = (
  <Slide bgColor="background">
    <img style={{ position: 'absolute', marginTop: '-15rem', marginLeft: '20rem', width: '10rem' }} src={moi} alt="moi-même" />
    <List textColor="tertiary">
      <Appear><ListItem textSize="32">Développeur web et mobile (React, React native, ...)</ListItem></Appear>
      <Appear><ListItem textSize="32">Agile</ListItem></Appear>
      <Appear><ListItem textSize="32">Dev&apos;Ops</ListItem></Appear>
      <Appear><ListItem textSize="32">Passionné par l&apos;informatique</ListItem></Appear>
      <Appear><ListItem textSize="32">Stage chez Bleemeo</ListItem></Appear>
    </List>
  </Slide>
)

export default slide