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
import sommaire from './slides/sommaie'
import presentationEntreprise from './slides/presentationEntreprise'
import devEnv from './slides/presentationDev'
import presWebMobile from './slides/titleWeb'
import webApp from './slides/webApp'
import thresholds from './slides/affichageThresholds'
import newHomePage from './slides/webApp2'
import titleMobile from './slides/titleMobile.js'
import mobileApp from './slides/mobileApp'
import reactNavigation from './slides/reactNavigation'
import feedback from './slides/feedbackPerso'
import conclusion from './slides/conclusion'
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
        {sommaire}
        {presentationEntreprise}
        {presWebMobile}
        {webApp}
        {thresholds}
        {newHomePage}
        {titleMobile}
        {mobileApp}
        {reactNavigation}
        {feedback}
        {conclusion}
        {endPage}
      </Deck>
    );
  }
}
