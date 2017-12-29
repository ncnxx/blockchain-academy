import React from 'react';
import { Segment, Grid, Header, Button, Icon, Image } from 'semantic-ui-react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: url('/static/footer-bg.png') center center no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  backgroundColor: #6f6f6f;
  padding: 40vh 0 40vh 0;
  max-height: 100vh;
`;

export default () => (
  <Wrapper>
    <Grid stackable columns={2}>
      <Grid.Column textAlign="center" verticalAlign="middle">
        <Image centered size="small" src="/static/full-logo.png" />
        <Icon size="big" name="facebook" style={{ paddingTop: '50px' }} />
      </Grid.Column>
      <Grid.Column style={{ padding: '0 100px 0 100px' }}>
        <Header as="h3" color="red">เกี่ยวกับเรา</Header>
        <p>
          Siam Blockchain Academy คือ ศูนย์รวมแห่งการเรียนรู้ของเทคโนโลยี Blockchain และ Cryptocurrency
          เรามุ่งหวังว่าเราจะนำเสนอเนื้อหาและความรู้ที่มีคุณภาพ เข้าใจง่าย สามารถเข้าถึงผู้เรียนรู้ได้ทุกๆคน
          <br /><br />
        </p>
        <Header as="h3" color="red">ติดต่อเรา</Header>
        <p>
          พีรพัฒน์ หาญคงแก้ว (หาญ) 080-962-6306<br />
          ณัฐชนน โพธื์เงิน (เอิร์ท) 081-480-4553
        </p>
      </Grid.Column>
    </Grid>
  </Wrapper>
);
