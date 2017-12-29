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
import { Fade, Zoom } from 'react-reveal';
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

const PushableWrapper = styled(Sidebar.Pushable) `
  @media (max-width: 768px) {
  }
`;

const SidebarPusher = styled(Sidebar.Pusher) `
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

const CanvasHeader = styled(Header) `
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

const YellowButton = styled(Button) `
  margin-top: 30px !important;
  background-color: #F5BF5F !important;
  color: white !important;
`;

const BitcoinText = () => (
  <span style={{ color: '#FB9238' }}>BITCOIN</span>
);

const CanvasSubheaderText = styled.h2`
  font-size: 5vh !important;
  color: red;
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
  width: 100%;
`;

const OurServicesSegment = styled.div`
  background: url('/static/our-services-bg.png') center center no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
`;

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = { sidebarVisible: false, previousBTCPrice: 580000, nextBTCPrice: 587000 };

    setInterval(() => {
      this.setState({
        previousBTCPrice: this.state.nextBTCPrice,
        nextBTCPrice: this.state.nextBTCPrice += Math.floor(Math.random() * (100 - (-100))) + (-100),
      });
    }, Math.floor((Math.random() * 6000) + 3000));
  }

  toggleSidebarVisibility = () => this.setState({ sidebarVisible: !this.state.sidebarVisible })

  hideSidebar = () => this.state.sidebarVisible ? this.setState({ sidebarVisible: false }) : null;

  render() {
    return (
      <div>
        <AppMenu />
        <ImageContainer>
          <div style={{ overflow: 'hidden', height: '100vh' }}>
            <Image style={{ height: '100vh' }} fluid src="/static/home-header.jpg" />
          </div>
          <TextOverImage>
            <Grid
              stackable
              columns={2}
              style={{
                padding: '0 0 0 0', height: '100vh', overflow: 'hidden', marginBottom: '0', marginTop: 0,
              }}
            >
              <Grid.Column verticalAlign="middle">
                <Image centered size="big" src="/static/full-logo.png" />
                <Header textAlign="center" style={{ fontSize: '15px', letterSpacing: '10px' }} as="h1">POWERED BY</Header>
                <Image style={{ marginTop: '-35px' }} centered size="medium" src="https://siamblockchain.com/wp-content/uploads/2016/12/sblogo1-04.png" />
              </Grid.Column>
              <Grid.Column verticalAlign="middle">
                <Header as="h1" style={{ fontSize: '4.5rem' }} inverted>ศูนย์รวมแห่งการเรียนรู้ BLOCKCHAIN และ CRYPTOCURRENCY</Header>
              </Grid.Column>
            </Grid>
          </TextOverImage>
        </ImageContainer>
        <Segment
          basic
          style={{
            backgroundColor: 'white', marginTop: '0', paddingTop: '100px', overflow: 'hidden',
          }}
        >
          <Grid columns={2}>
            <Grid.Column verticalAlign="middle" textAlign="center">
              <Fade left>
                <Header size="huge" as="h3" style={{ color: '#737273' }}>
                  เงินดิจิตอล คือ คำตอบของอนาคต
                  มกราคม ปี พ.ศ. 2560 <BitcoinText /> มีราคาประมาณ 20,000 บาท
                </Header>
              </Fade>
              <br />
              <br />
              <Fade left>
                <Header size="huge" as="h3" style={{ color: 'red' }}>
                  วันนี้ <BitcoinText /> เงินดิจิตอลสกุลแรกของโลก มีราคา
                  เพิ่มมากขึ้นกว่า {Math.floor(this.state.nextBTCPrice / 20000)} เท่าตัว และยังคงเพิ่มขึ้นเรื่อยๆ
                </Header>
              </Fade>
            </Grid.Column>
            <Grid.Column verticalAlign="middle">
              <Fade>
                <Header as="h1" style={{ fontSize: '7rem' }} textAlign="center">
                  <BitcoinPriceTicker {...this.state} /> บาท
                </Header>
              </Fade>
              <Fade><Header as="h3" size="medium" textAlign="center">ข้อมูลราคาจาก <span style={{ color: 'red' }}>TDAX.COM</span></Header></Fade>
            </Grid.Column>
          </Grid>
        </Segment>
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
              <Image src='https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?auto=format&fit=crop&w=1050&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D' />
              <Card.Content>
                <Card.Header>
                  <Header as="h1">{'อบรมและสัมมนา'}</Header>
                </Card.Header>
                <Card.Description style={{ fontSize: '1.5rem' }}>
                  {'ถ่ายทอดความรู้แบบถึงตัว พร้อมสาธิตให้เห็นภาพชัดเจน เพรียบพร้อมด้วยความรู้จากวิทยากรผู้เชี่ยวชาญ'}
                  <Segment basic textAlign="center">
                    <YellowButton size="massive">{'ดูงานทั้งหมด'}</YellowButton>
                  </Segment>
                </Card.Description>
              </Card.Content>
            </Card>
            <Card>
              <Image src='https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1052&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D' />
              <Card.Content>
                <Card.Header>
                  <Header as="h1">{'คอร์สออนไลน์'}</Header>
                </Card.Header>
                <Card.Description style={{ fontSize: '1.5rem' }}>
                  {'เนื้อหาคุณภาพ เข้าใจง่าย เข้าถึงความรู้ได้ทุกที่ทุกเวลา'}
                  <Segment basic textAlign="center">
                    <YellowButton size="massive">{'ดูคอร์สทั้งหมด'}</YellowButton>
                  </Segment>
                </Card.Description>
              </Card.Content>
            </Card>
            <Card>
              <div style={{ height: '300px', overflow: 'hidden' }}>
                <Image src='https://images.unsplash.com/photo-1505860421472-7d74e0b4d98a?auto=format&fit=crop&w=634&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D' />
              </div>
              <Card.Content>
                <Card.Header>
                  <Header as="h1">{'วิทยากรรับเชิญและอบรมส่วนตัว'}</Header>
                </Card.Header>
                <Card.Description style={{ fontSize: '1.5rem' }}>
                  {'เรายินดีถ่ายทอดความรู้ให้ตามสถานที่ของท่าน หรือจัดคอร์สอบรมส่วนตัวสำหรับกลุ่มผู้สนใจ'}
                  <Segment basic textAlign="center">
                    <YellowButton size="massive">{'ติดต่อเรา'}</YellowButton>
                  </Segment>
                </Card.Description>
              </Card.Content>
            </Card>
          </Card.Group>
        </OurServicesSegment>
        <Segment basic textAlign="center" style={{ minHeight: '100vh' }}>
          <Fade bottom left><Header as="h1">การันตีคุณภาพจากผู้เคยเข้าร่วมการอบรมและสัมมนา</Header></Fade>
          <Zoom>
            <Image.Group>
              <Image size="small" src={pantipPratunamLogo} />
              <Image size="small" src={biostarLogo} />
              <Image size="tiny" src={thminerLogo} />
              <Image size="tiny" src={ratchapatLogo} />
            </Image.Group>
          </Zoom>
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
        </Segment>
        <Segment
          basic
          style={{
            minHeight: '100vh', backgroundColor: 'black', overflow: 'hidden', padding: '100px 0px 0px 0px',
          }}
        >
          <ImageContainer>
            <div style={{ overflow: 'hidden', height: '100vh' }}>
              <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1352&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" />
            </div>
            <TextOverImage>
              <Fade duration={3000}>
                <h1>
                  เรายังอยู่แค่เพียงจุดเริ่มต้นของเทคโนโลยีนี้เท่านั้น
                </h1>
                <h1 style={{ fontSize: '3rem' }}>
                  โอกาสอีกมากมาย<br />
                  ยังรอคุณอยู่<br />
                </h1>
                <Button color="red" size="huge">เริ่มเรียนรู้</Button>
              </Fade>
            </TextOverImage>
          </ImageContainer>
        </Segment>
        <Footer />
      </div >
    );
  }
}
