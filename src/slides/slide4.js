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
  CodePane,
  Code
} from 'spectacle';

const slide = (
  <Slide transition={['fade']} bgColor="secondary" textColor="primary">
    <CodePane
      lang="javascript"
      source={`
      import React from 'react';
      import ReactDOM from 'react-dom';
      import Presentation from './presentation';
      import registerServiceWorker from './registerServiceWorker';
      
      ReactDOM.render(<Presentation />, document.getElementById('root'));
      registerServiceWorker();`}
      them="dark"
      clasName="largerTextSize"
    />
  </Slide>
)

export default slide
