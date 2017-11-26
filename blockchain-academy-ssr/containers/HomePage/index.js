/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */
import React, { Component } from 'react';
import { Particles } from 'react-particles-js';
import {
  Menu,
  Header,
  Button,
  Grid,
  Segment,
  Image,
  Container,
  Card,
  Icon,
  Dimmer,
} from 'semantic-ui-react';
import Slider from 'react-slick';
import styled from 'styled-components';

import { particleConfig } from './constants';
import NextArrow from '../../components/NextArrow';
import PrevArrow from '../../components/PrevArrow';
import { courseList } from '../CoursePage';
import AppMenu from '~/containers/AppMenu';
import Footer from '~/components/Footer';
import { Link } from '~/routes';

const seminar1 =
  'https://s3-ap-southeast-1.amazonaws.com/blockchain-academy-static/seminar-1.png';
const seminar2 =
  'https://s3-ap-southeast-1.amazonaws.com/blockchain-academy-static/seminar-2.png';
const seminar3 =
  'https://s3-ap-southeast-1.amazonaws.com/blockchain-academy-static/seminar-3.png';
const seminar4 =
  'https://s3-ap-southeast-1.amazonaws.com/blockchain-academy-static/seminar-4.png';
const pantipPratunamLogo =
  'https://s3-ap-southeast-1.amazonaws.com/blockchain-academy-static/pantip-pratunam-logo.png';
const biostarLogo =
  'https://s3-ap-southeast-1.amazonaws.com/blockchain-academy-static/biostar-logo.png';
const ratchapatLogo =
  'https://s3-ap-southeast-1.amazonaws.com/blockchain-academy-static/ratchapat-logo.png';
const bitcoinSeminar1 =
  'https://s3-ap-southeast-1.amazonaws.com/blockchain-academy-static/seminar-bitcoin.jpg';
const thminerLogo =
  'https://s3-ap-southeast-1.amazonaws.com/blockchain-academy-static/thminer-logo.jpg';

const settings = {
  dots: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  accessibility: true,
  adaptiveHeight: true,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
};

const CanvasHeader = styled(Header)`
  text-align: center;
  position: absolute;

  @media (max-width: 767px) {
    top: 50px;
    left: 0;
    right: 0;
  }

  @media (min-width: 768px) {
    top: 110px;
    left: 0;
    right: 0;
  }
`;

const CanvasHeaderText = styled.h1`
  letter-spacing: 2px;
  pointer-events: none;
  font-weight: 700;

  @media (max-width: 767px) {
    font-size: 2em !important;
  }

  @media (min-width: 768px) {
    font-size: 3em !important;
  }
`;

const CanvasSubheaderText = styled.h2``;

const seminarList = [
  {
    image: bitcoinSeminar1,
    name: 'Introduction to Bitcoin and Blockchain ครั้งที่ 1',
    venue: 'HUBBA-TO',
    description:
      'คอร์สอบรมความรู้ระดับเบื้องต้นเกี่ยวกับ Bitcoin และ Blockchain พร้อมสาธิตการเทรด' +
      'และการขุด',
    time: '29 October 2017',
    price: 'ตั๋วหมด',
  },
  {
    image: bitcoinSeminar1,
    name: 'Introduction to Bitcoin and Blockchain ครั้งที่ 2',
    venue: 'สมาคมธรรมศาสตร์',
    description:
      'คอร์สอบรมความรู้ระดับเบื้องต้นเกี่ยวกับ Bitcoin และ Blockchain พร้อมสาธิตการเทรด' +
      'และการขุด',
    time: '18 November 2017',
    price: 'ตั๋วหมด',
  },
];

export default () => (
  <div>
    <link
      rel="stylesheet"
      href="//cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
    />
    <link
      rel="stylesheet"
      href="//cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
    />
    <AppMenu />
    <Segment>
      <Particles params={particleConfig} height="400px" />
      <CanvasHeader textAlign="center">
        <CanvasHeaderText>SIAM BLOCKCHAIN ACADEMY</CanvasHeaderText>
        <CanvasSubheaderText>
        ศูนย์รวมแห่งการเรียนรู้ Blockchain และ Cryptocurrency
        </CanvasSubheaderText>
        <Button
          color="blue"
          style={{
            fontSize: '20px',
          }}
        >
        เริ่มต้นที่นี่
        </Button>
      </CanvasHeader>
    </Segment>
    <br />
    <Container>
      <Header as="h1" textAlign="center">
      คอร์สออนไลน์คุณภาพ
        <Header.Subheader>
        รู้ลึกทุกข้อมูล ด้วยเนื้อหาที่เข้าใจง่าย เหมาะสมสำหรับทุกคน
        </Header.Subheader>
      </Header>
      <br />
      <Card.Group stackable itemsPerRow="4">
        {courseList.map((each) => (
          <Card key={each.name}>
            <Link route="course" params={{ slug: each.slug }}>
              <a>
                <Image fluid src={each.image} />
              </a>
            </Link>
            <Card.Content>
              <Card.Header>
                <Link route="course" params={{ slug: each.slug }}><a>{each.name}</a></Link>
              </Card.Header>
              <Card.Meta>{each.meta}</Card.Meta>
              <Card.Description>{each.description}</Card.Description>
              <br />
            </Card.Content>
            <Card.Content extra textAlign="right">
              <Icon name="time" />
              <span>
                {each.duration}
              ชั่วโมง
              </span>
            &nbsp;&nbsp;&nbsp;
              <Icon name="tags" />
              <span>{each.price}</span>
            </Card.Content>
          </Card>
        ))}
        <Dimmer.Dimmable as={Card} dimmed>
          <Dimmer inverted active>
            <Header as="h2" icon color="blue">
              <Icon name="plus" />
            ดูคอร์สออนไลน์ทั้งหมด
            </Header>
          </Dimmer>
          <Image fluid src={courseList[0].image} />
          <Card.Content>
            <Card.Header>
              <a>{courseList[0].name}</a>
            </Card.Header>
            <Card.Meta>{courseList[0].meta}</Card.Meta>
            <Card.Description />
          </Card.Content>
        </Dimmer.Dimmable>
      </Card.Group>
      <br />
      <Header as="h1" textAlign="center">
      คอร์สอบรมและสัมนา ถ่ายทอดความรู้แบบถึงตัว
        <Header.Subheader>
        พร้อมสาธิตให้เห็นภาพชัดเจน
        เพรียบพร้อมด้วยความรู้จากวิทยากรผู้เชี่ยวชาญ
        ด้วยประสบการณ์การจัดสัมนากับ พันธุ์ทิพย์ ประตูน้ำ, THMiner และ
        Biostar
        </Header.Subheader>
      </Header>
      <Segment basic textAlign="center">
        <Image.Group>
          <Image size="small" src={pantipPratunamLogo} />
          <Image size="small" src={biostarLogo} />
          <Image size="tiny" src={thminerLogo} />
          <Image size="tiny" src={ratchapatLogo} />
        </Image.Group>
      </Segment>
      <div
        style={{
          maxHeight: '600px',
        }}
      >
        <Slider {...settings}>
          <div>
            <Image centered src={seminar1} />
          </div>
          <div>
            <Image centered src={seminar2} />
          </div>
          <div>
            <Image centered src={seminar3} />
          </div>
          <div>
            <Image centered src={seminar4} />
          </div>
        </Slider>
      </div>
      <Segment
        basic
        style={{
          marginTop: '50px',
        }}
      >
        <Card.Group stackable itemsPerRow="3">
          {seminarList.map((each) => (
            <Card key={each.name}>
              <Image fluid src={each.image} />
              <Card.Content>
                <Card.Header>
                  <a>{each.name}</a>
                </Card.Header>
                <Card.Description>{each.description}</Card.Description>
                <br />
              </Card.Content>
              <Card.Content extra textAlign="right">
                <Icon name="time" />
                <span>{each.time}</span>
              &nbsp;&nbsp;&nbsp;
                <Icon name="tags" />
                <span>{each.price}</span>
              </Card.Content>
            </Card>
          ))}
          <Dimmer.Dimmable as={Card} dimmed>
            <Dimmer inverted active>
              <Header as="h2" icon color="blue">
                <Icon name="plus" />
              ดูคอร์สอบรม<br />
              และสัมนาทั้งหมด
              </Header>
            </Dimmer>
            <Image fluid src={seminarList[0].image} />
            <Card.Content>
              <Card.Header>
                {seminarList[0].name}
              </Card.Header>
              <Card.Meta>{seminarList[0].meta}</Card.Meta>
              <Card.Description />
            </Card.Content>
          </Dimmer.Dimmable>
        </Card.Group>
      </Segment>
    </Container>
  </div>
);
