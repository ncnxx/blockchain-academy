import React from 'react';
import styled from 'styled-components';
import { Zoom } from 'react-reveal';
import { Header, Card, Segment, Image, Button } from 'semantic-ui-react';

const OurServicesSegment = styled.div`
  background: url('/static/our-services-bg.png') center center no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
`;

const YellowButton = styled(Button)`
  margin-top: 30px !important;
  background-color: #F5BF5F !important;
  color: white !important;
`;


export default () => (
  <OurServicesSegment
    basic
    style={{
      minHeight: '100vh', backgroundColor: 'black', overflow: 'hidden', paddingTop: '100px', margin: '0 0 0 0',
    }}
  >
    <Zoom>
      <Header textAlign="center" inverted as="h1" style={{ fontSize: '3rem' }}>
              SIAM BLOCKCHAIN ACADEMY
      </Header>
    </Zoom>
    <Zoom delay={500}>
      <Header textAlign="center" inverted as="h1">
              จะทำให้คุณรู้จักและเข้าใจในเทคโนโลยี CRYPTOCURRENCY และ BLOCKCHAIN ด้วยบริการของเรา
      </Header>
    </Zoom>
    <br />
    <Card.Group itemsPerRow="3" style={{ margin: '0 50px 0 50px' }}>
      <Card>
        {/* <Image src="https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?auto=format&fit=crop&w=1050&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" /> */}
        <Image src="/static/seminar-service.jpg" />
        <Card.Content>
          <Card.Header>
            <Header as="h1">อบรมและสัมมนา</Header>
          </Card.Header>
          <Card.Description style={{ fontSize: '1.5rem' }}>
            {'ถ่ายทอดความรู้แบบถึงตัว พร้อมสาธิตให้เห็นภาพชัดเจน เพรียบพร้อมด้วยความรู้จากวิทยากรผู้เชี่ยวชาญ'}
            <Segment basic textAlign="center">
              <YellowButton size="massive">ดูงานทั้งหมด</YellowButton>
            </Segment>
          </Card.Description>
        </Card.Content>
      </Card>
      <Card>
        {/* <Image src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1052&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" /> */}
        <Image src="/static/online-course-service.jpg" />
        <Card.Content>
          <Card.Header>
            <Header as="h1">คอร์สออนไลน์</Header>
          </Card.Header>
          <Card.Description style={{ fontSize: '1.5rem' }}>
            {'เนื้อหาคุณภาพ เข้าใจง่าย เข้าถึงความรู้ได้ทุกที่ทุกเวลา'}
            <Segment basic textAlign="center">
              <YellowButton size="massive">ดูคอร์สทั้งหมด</YellowButton>
            </Segment>
          </Card.Description>
        </Card.Content>
      </Card>
      <Card>
        {/* <Image src="https://images.unsplash.com/photo-1505860421472-7d74e0b4d98a?auto=format&fit=crop&w=634&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" /> */}
        <Image src="/static/personal-course-service.jpg" />
        <Card.Content>
          <Card.Header>
            <Header as="h1">วิทยากรรับเชิญและอบรมส่วนตัว</Header>
          </Card.Header>
          <Card.Description style={{ fontSize: '1.5rem' }}>
            {'เรายินดีถ่ายทอดความรู้ให้ตามสถานที่ของท่าน หรือจัดคอร์สอบรมส่วนตัวสำหรับกลุ่มผู้สนใจ'}
            <Segment basic textAlign="center">
              <YellowButton size="massive">ติดต่อเรา</YellowButton>
            </Segment>
          </Card.Description>
        </Card.Content>
      </Card>
    </Card.Group>
  </OurServicesSegment>
);
