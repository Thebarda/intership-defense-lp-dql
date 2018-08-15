// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Deck,
} from 'spectacle';

import firstPage from './slides/firstPage'
import titleIntroduction from './slides/titleIntroduction'
import introduction from './slides/introduction'
import annonceSujetWeb from './slides/annonceSujetWeb'
import annonceSujetMobile from './slides/annonceSujetMobile'
import sommaire from './slides/sommaie'
import presentationEntreprise from './slides/presentationEntreprise'
import endPage from './slides/endPage'
import slide3 from './slides/slide3'
import slide4 from './slides/slide4'

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    background: "black",
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quartenary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
        controls={true}
        progress="pacman"
      >
        {firstPage}
        {titleIntroduction}
        {introduction}
        {annonceSujetWeb}
        {annonceSujetMobile}
        {sommaire}
        {presentationEntreprise}
        {endPage}
      </Deck>
    );
  }
}
