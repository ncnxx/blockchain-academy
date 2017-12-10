import React from 'react';
import { Responsive } from 'semantic-ui-react';
import HomePage from '../containers/HomePage';
import MobileViewWrapper from '../containers/MobileViewWrapper';

const Index = () => (
  <div>
    <Responsive as="div" maxWidth={425}>
      <MobileViewWrapper>
        <HomePage />
      </MobileViewWrapper>
    </Responsive>
    <Responsive as="span" minWidth={426}>
      <HomePage />
    </Responsive>
  </div>
);


export default Index;
