import React from 'react';
import ReactPlayer from 'react-player';
import { Image, Segment, Advertisement, Grid, Responsive, Header, Rating, Icon, Accordion, Item } from 'semantic-ui-react';
import AppMenu from '~/containers/AppMenu';
import Footer from '~/components/Footer';
import Video from '~/components/Video';

export default (props) => (
  <div>
    <AppMenu />
    <Grid>
      <Grid.Column mobile="16" computer="11">
        <ReactPlayer url="https://nutchanon-pho.wistia.com/medias/paj1eig2u5" playing />
      </Grid.Column>
      <Grid.Column mobile="16" computer="5">
      </Grid.Column>
    </Grid>
  </div>
);
