import React from 'react';
import { Responsive } from 'semantic-ui-react';
import AllSeminarPage from '../containers/AllSeminarPage';
import MobileViewWrapper from '../containers/MobileViewWrapper';

const Index = () => (
  <div>
    <Responsive as="div" maxWidth={425}>
      <MobileViewWrapper>
        <AllSeminarPage />
      </MobileViewWrapper>
    </Responsive>
    <Responsive as="span" minWidth={426}>
      <AllSeminarPage />
    </Responsive>
  </div>
);

export default Index;
