import React from 'react';
import { Segment, Grid, Image } from 'semantic-ui-react';
import ImageContainer from '~/components/ImageContainer';
import TextOverImage from '~/components/TextOverImage';
import BitcoinText from '~/components/BitcoinText';

export default () => (
  <Segment
    basic
    style={{
      height: '100vh', backgroundColor: 'white', overflow: 'hidden', padding: '0 0 0 0', margin: '0 0 0 0',
    }}
  >
    <Grid>
      <Grid.Column width="16">
        <ImageContainer>
          <div style={{ overflow: 'hidden', height: '100vh', backgroundColor: 'black' }}>
            <Image style={{ height: '100vh' }} src="/static/three-tiles.jpg" />
          </div>
          <TextOverImage style={{ width: '100%' }}>
            <h1 style={{ fontSize: '2.4rem' }}>
              <span style={{ color: 'red' }}>BLOCKCHAIN</span> เทคโนโลยีเบื้องหลังของ <BitcoinText /><br />กำลังเป็นที่นิยมสำหรับการนำไปประยุกต์ใช้ในหลากหลายอุตสาหกรรม
            </h1>
            <Grid columns={3}>
              <Grid.Column>
                <h1 style={{ fontSize: '2.4rem' }}>
                        พลังงาน
                </h1>
              </Grid.Column>
              <Grid.Column>
                <h1 style={{ fontSize: '2.4rem' }}>
                        การเงิน
                </h1>
              </Grid.Column>
              <Grid.Column>
                <h1 style={{ fontSize: '2.4rem' }}>
                        โลจิสติกส์
                </h1>
              </Grid.Column>
            </Grid>
          </TextOverImage>
        </ImageContainer>
      </Grid.Column>
    </Grid>
  </Segment>
);
