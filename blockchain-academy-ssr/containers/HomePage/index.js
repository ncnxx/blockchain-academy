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
import CountUp from 'react-countup';
import { Fade } from 'react-reveal';
import { Particles } from 'react-particles-js';
import {
  Sidebar,
  Responsive,
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
import { seminarList } from '~/containers/SeminarPage/constants';
import ShuttleLaunchVideo from '~/components/ShuttleLaunchVideo';

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
const thminerLogo =
  'https://s3-ap-southeast-1.amazonaws.com/blockchain-academy-static/thminer-logo.jpg';

const PushableWrapper = styled(Sidebar.Pushable)`
  @media (max-width: 768px) {
  }
`;

const SidebarPusher = styled(Sidebar.Pusher)`
  @media (max-width: 768px) {
  }
`;

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
    top: 15vh;
    left: 0;
    right: 0;
  }
`;

const CanvasHeaderText = styled.div`
  @media (max-width: 767px) {
    font-size: 2em !important;
  }

  @media (min-width: 768px) {
    font-size: 3em !important;
  }
`;

const VideoOverlay = styled.div`
  background-color: rgba(255, 255, 255, 0.75);
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
`;

const BitcoinText = () => (
  <span style={{ color: '#FB9238' }}>BITCOIN</span>
);

const CanvasSubheaderText = styled.h2`
  font-size: 5vh !important;
  color: #DD3336;
`;

const BitcoinPriceTicker = (props) => (
  <CountUp
    className="CountUp"
    start={props.previousBTCPrice}
    end={props.nextBTCPrice}
    duration={1}
    separator=","
    redraw
  />
);

const ImageContainer = styled.div`
  position: relative;
  text-align: center;
  color: white;
`;

const TextOverImage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 6em !important;
`;

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = { sidebarVisible: false, previousBTCPrice: 580000, nextBTCPrice: 587000 };

    setInterval(() => {
      this.setState({
        previousBTCPrice: this.state.nextBTCPrice,
        nextBTCPrice: this.state.nextBTCPrice += Math.floor((Math.random() * 100) - 100),
      });
    }, Math.floor((Math.random() * 3000) + 1000));
  }

  toggleSidebarVisibility = () => this.setState({ sidebarVisible: !this.state.sidebarVisible })

  hideSidebar = () => this.state.sidebarVisible ? this.setState({ sidebarVisible: false }) : null;

  render() {
    return (
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
        <Segment
          basic
          style={{
            padding: '0 0 0 0', height: '100vh', overflow: 'hidden', marginBottom: '0',
          }}
        >
          <Image centered src="https://static.pexels.com/photos/730564/pexels-photo-730564.jpeg" style={{ width: '100%' }} />
          <VideoOverlay />
          <CanvasHeader textAlign="center">
            <CanvasHeaderText><Image centered style={{ width: '70vh' }} src="/static/full-logo.png" /></CanvasHeaderText>
            <CanvasSubheaderText>
          ศูนย์รวมแห่งการเรียนรู้ BLOCKCHAIN<br />และ CRYPTOCURRENCY
            </CanvasSubheaderText>
          </CanvasHeader>
        </Segment>
        <Segment
          basic
          style={{
            height: '100vh', backgroundColor: 'black', marginTop: '0', paddingTop: '100px',
          }}
        >
          <Grid>
            <Grid.Column width="16" textAlign="center" style={{ fontSize: '1.5em' }}>
              <Fade left>
                <Header size="huge" as="h1" color="red">
                  เงินดิจิตอล คือ คำตอบของอนาคต
                </Header>
              </Fade>
              <Fade right>
                <Header size="huge" as="h1" color="red">
                  มกราคม ปี พ.ศ. 2560 <BitcoinText /> มีราคาประมาณ 20,000 บาท
                </Header>
              </Fade>
            </Grid.Column>
            <Grid.Column style={{ padding: '0 0 0 0' }} width="16" textAlign="center">
              <Fade>
                <div
                  style={{
                    width: '100vw', overflow: 'hidden', position: 'relative', height: '80vh',
                  }}
                >
                  <ShuttleLaunchVideo
                    style={{
                      width: '100vw',
                      left: 0,
                      bottom: 0,
                      position: 'absolute',
                    }}
                  />
                </div>
              </Fade>
              <div
                style={{
                  position: 'absolute', top: '0px', left: '0px', display: 'table', width: '100%', height: '100%', backgroundColor: 'rgba(60, 55, 55, 0.57)',
                }}
              >
                <div style={{ display: 'table-cell', verticalAlign: 'middle', textAlign: 'center' }}>
                  <Fade><Header as="h3" size="large" inverted>วันนี้ <BitcoinText /> เงินดิจิตอลสกุลแรกของโลก มีราคา</Header></Fade>
                  <Fade>
                    <Header as="h1" style={{ fontSize: '6em' }} inverted>
                      <BitcoinPriceTicker {...this.state} /> บาท
                    </Header>
                  </Fade>
                  <Fade><Header as="h3" size="large" inverted>เพิ่มมากขึ้นกว่า {Math.floor(this.state.nextBTCPrice / 20000)} เท่าตัว และยังคงเพิ่มขึ้นเรื่อยๆ</Header></Fade>
                  <Fade><Header as="h3" size="medium" inverted>ข้อมูลราคาจาก <span style={{ color: 'red' }}>TDAX.COM</span></Header></Fade>
                </div>
              </div>
            </Grid.Column>
          </Grid>
        </Segment>
        <Segment
          basic
          style={{
            height: '100vh', backgroundColor: 'white', overflow: 'hidden', marginTop: '100px',
          }}
        >
          <Grid>
            <Grid.Column width="16">
              <Header as="h1" size="huge" textAlign="center">
                <span style={{ color: 'red' }}>BLOCKCHAIN</span> เทคโนโลยีเบื้องหลังของ <BitcoinText /><br />เป็นที่ต้องการอย่างมากเพื่อนำไปประยุกต์ใช้ในหลากหลายอุตสาหกรรม
              </Header>
            </Grid.Column>
            <Grid.Row style={{ padding: '0 0 0 0' }}>
              <Grid.Column width="16">
                <ImageContainer>
                  <div style={{ overflow: 'hidden', height: '25vh' }}>
                    <Image fluid src="https://images.pexels.com/photos/421888/pexels-photo-421888.jpeg?w=940&h=650&auto=compress&cs=tinysrgb" />
                  </div>
                  <TextOverImage>
                    พลังงาน
                  </TextOverImage>
                </ImageContainer>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row style={{ padding: '0 0 0 0' }}>
              <Grid.Column width="16">
                <ImageContainer>
                  <div style={{ overflow: 'hidden', height: '25vh' }}>
                    <Image fluid src="https://images.unsplash.com/photo-1500316124030-4cffa46f10f0?auto=format&fit=crop&w=1050&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" />
                  </div>
                  <TextOverImage>
                    การเงิน
                  </TextOverImage>
                </ImageContainer>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row style={{ padding: '0 0 0 0' }}>
              <Grid.Column width="16">
                <ImageContainer>
                  <div style={{ overflow: 'hidden', height: '25vh' }}>
                    <Image fluid src="https://images.unsplash.com/photo-1494412623380-6e86033ab9ed?auto=format&fit=crop&w=1050&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" />
                  </div>
                  <TextOverImage>
                    โลจิสติกส์
                  </TextOverImage>
                </ImageContainer>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        {/* <Container>
          <Fade>
            <Header as="h1" textAlign="center">
        คอร์สอบรมและสัมนา ถ่ายทอดความรู้แบบถึงตัว
              <Header.Subheader>
          พร้อมสาธิตให้เห็นภาพชัดเจน
          เพรียบพร้อมด้วยความรู้จากวิทยากรผู้เชี่ยวชาญ
          ด้วยประสบการณ์การจัดสัมนากับ พันธุ์ทิพย์ ประตูน้ำ, THMiner และ
          Biostar
              </Header.Subheader>
            </Header>
          </Fade>
          <Fade>
            <Segment basic textAlign="center">
              <Image.Group>
                <Image size="small" src={pantipPratunamLogo} />
                <Image size="small" src={biostarLogo} />
                <Image size="tiny" src={thminerLogo} />
                <Image size="tiny" src={ratchapatLogo} />
              </Image.Group>
            </Segment>
          </Fade>
          <Fade>
            <div
              style={{
                maxHeight: '600px',
              }}
            >
              <Slider {...settings}>
                <div>
                  <Image size="big" centered src={seminar1} />
                  <Header textAlign="center" as="h2"><i>"ประทับใจการตอบคำถาม ที่สามารถตอบคำถามได้เป็นอย่างดี"</i></Header>
                </div>
                <div>
                  <Image size="big" centered src={seminar2} />
                  <Header textAlign="center" as="h2"><i>"รายละเอียดครบถ้วน วิทยากรพูดเข้าใจง่ายและมีตัวอย่างทำให้เห็นภาพและเข้าใจง่าย"</i></Header>
                </div>
                <div>
                  <Image size="big" centered src={seminar3} />
                  <Header textAlign="center" as="h2"><i>"ได้รับความรู้ใหม่ๆ ที่บางอย่างเรานึกว่ารู้แล้ว เราก็ยังไม่รู้ และอาจารย์เรียงเนื้อหาคอร์สดี ปูทางให้เข้าใจแต่ละจุดได้ง่าย"</i></Header>
                </div>
                <div>
                  <Image size="big" centered src={seminar4} />
                  <Header textAlign="center" as="h2"><i>"เป็นกันเองดี ใส่ใจตอบทุกคำถามมากครับ"</i></Header>
                </div>
              </Slider>
            </div>
          </Fade>
          <Fade bottom duration={500}>
            <Segment
              basic
              style={{
                marginTop: '50px',
              }}
            >
              <Card.Group stackable itemsPerRow="3">
                {seminarList.slice(0, 2).map((each) => (
                  <Card key={each.name} onClick={() => window.location.replace(`/seminar/${each.slug}`)}>
                    <Image fluid src={each.image} />
                    <Card.Content>
                      <Card.Header style={{ color: 'red' }}>
                        {each.name}
                      </Card.Header>
                      <Card.Description>{each.shortDescription}</Card.Description>
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
                <Dimmer.Dimmable as={Card} onClick={() => window.location.replace('/all-seminar')} dimmed>
                  <Dimmer inverted active>
                    <Header as="h2" icon color="red">
                      <Icon name="plus" />
                ดูคอร์สอบรม<br />
                และสัมนาทั้งหมด
                    </Header>
                  </Dimmer>
                  <Image fluid src={seminarList[2].image} />
                  <Card.Content>
                    <Card.Header>
                      {seminarList[2].name}
                    </Card.Header>
                    <Card.Meta>{seminarList[2].meta}</Card.Meta>
                    <Card.Description />
                  </Card.Content>
                </Dimmer.Dimmable>

              </Card.Group>
              <br />
              <Header as="h1" textAlign="center">
        คอร์สออนไลน์คุณภาพ
                <Header.Subheader>
          รู้ลึกทุกข้อมูล ด้วยเนื้อหาที่เข้าใจง่าย เหมาะสมสำหรับทุกคน
                </Header.Subheader>
              </Header>
              <br />
              <Header as="h1" textAlign="center">เร็วๆนี้</Header>
              <Card.Group stackable itemsPerRow="4">
                {courseList.map((each) => (
                  <Card key={each.name}>
                    <a href={`/course/${each.slug}`}>
                      <Image fluid src={each.image} />
                    </a>
                    <Card.Content>
                      <Card.Header>
                        <a href={`/course/${each.slug}`}>{each.name}</a>
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
            </Segment>
          </Fade>
        </Container> */}
        <Footer />
      </div>
    );
  }
}
