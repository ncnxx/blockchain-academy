import React from 'react';
import { Segment, Grid, Header, Button, Icon, Image } from 'semantic-ui-react';

export default () => (
  <Segment basic style={{ backgroundColor: '#EBEBEB', paddingTop: 0 }}>
    <Grid stackable columns={3}>
      <Grid.Column textAlign="center" verticalAlign="middle">
        <Image centered size="small" src="/static/full-logo.png" />
      </Grid.Column>
      <Grid.Column>
        <Header as="h3">เกี่ยวกับเรา</Header>
        <p style={{ color: 'black' }}>
          Siam Blockchain Academy คือ ศูนย์รวมแห่งการเรียนรู้ของเทคโนโลยี Blockchain และ Cryptocurrency
          เรามุ่งหวังว่าเราจะนำเสนอเนื้อหาและความรู้ที่มีคุณภาพ เข้าใจง่าย สามารถเข้าถึงผู้เรียนรู้ได้ทุกๆคน
          <br /><br />
          <strong>ติดต่อเรา</strong><br />
          พีรพัฒน์ หาญคงแก้ว (หาญ) 080-962-6306<br />
          ณัฐชนน โพธื์เงิน (เอิร์ท) 081-480-4553
        </p>
      </Grid.Column>
      <Grid.Column textAlign="center" verticalAlign="middle">
        <Header as="h3">ติดตามเราได้ที่</Header>
        <Icon size="big" name="facebook" />
        {/* <Button color="twitter">
          <Icon name="twitter" /> Twitter
        </Button> */}
      </Grid.Column>
    </Grid>
  </Segment>
);
