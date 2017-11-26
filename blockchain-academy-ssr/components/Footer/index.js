import React from 'react';
import { Segment, Grid, Header, Button, Icon } from 'semantic-ui-react';

export default () => (
  <Segment inverted basic>
    <Grid stackable columns={3}>
      <Grid.Column textAlign="center" verticalAlign="middle">
        <Header as="h1" inverted>SIAM BLOCKCHAIN ACADEMY</Header>
      </Grid.Column>
      <Grid.Column>
        <Header as="h3" inverted>เกี่ยวกับเรา</Header>
        <p style={{ color: 'white' }}>
          Siam Blockchain Academy คือ ศูนย์รวมแห่งการเรียนรู้ของเทคโนโลยี Blockchain และ Cryptocurrency
          เรามุ่งหวังว่าเราจะนำเสนอเนื้อหาและความรู้ที่มีคุณภาพ เข้าใจง่าย สามารถเข้าถึงผู้เรียนรู้ได้ทุกๆคน
          <br /><br />
          ติดต่อเรา <a href="mailto:info@siamblockchainacademy.com">info@siamblockchainacademy.com</a>
        </p>
      </Grid.Column>
      <Grid.Column textAlign="center">
        <Header as="h3" inverted>ติดตามเราได้ที่</Header>
        <Button color="facebook">
          <Icon name="facebook" /> Facebook
        </Button>
        <Button color="twitter">
          <Icon name="twitter" /> Twitter
        </Button>
      </Grid.Column>
    </Grid>
  </Segment>
);
