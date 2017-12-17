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
  width: 70%;
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
        <Segment
          basic
          style={{
            padding: '0 0 0 0', height: '100vh', overflow: 'hidden', marginBottom: '0', marginTop: 0,
          }}
        >
          <ImageContainer>
            <div style={{ overflow: 'hidden', height: '100vh' }}>
              <video
                ref="video"
                muted
                id="background-video"
                loop
                autoPlay
                style={{ minHeight: '100vh', filter: 'brightness(300%)' }}
              >
                <source src="/static/space.mp4" type="video/mp4" />
              </video>
            </div>
            <TextOverImage>
              <Image centered size="large" src="/static/full-logo.png" />
              <Header style={{ fontSize: '20px' }} as="h1">POWERED BY</Header>
              <Image style={{ marginTop: '-35px' }} centered size="medium" src="https://siamblockchain.com/wp-content/uploads/2016/12/sblogo1-04.png" />
              <Header inverted as="h1">ศูนย์รวมแห่งการเรียนรู้ BLOCKCHAIN และ CRYPTOCURRENCY</Header>
            </TextOverImage>
          </ImageContainer>
        </Segment>
        <Segment
          basic
          style={{
            minHeight: '100vh', backgroundColor: 'black', marginTop: '0', paddingTop: '100px',
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
                      filter: 'brightness(50%)',
                    }}
                  />
                </div>
              </Fade>
              <div
                style={{
                  position: 'absolute', top: '0px', left: '0px', display: 'table', width: '100%', height: '100%',
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
              <Fade right>
                <Header as="h1" size="huge" textAlign="center">
                  <span style={{ color: 'red' }}>BLOCKCHAIN</span> เทคโนโลยีเบื้องหลังของ <BitcoinText /><br />กำลังเป็นที่นิยมสำหรับการนำไปประยุกต์ใช้ในหลากหลายอุตสาหกรรม
                </Header>
              </Fade>
            </Grid.Column>
            <Fade left delay={0} style={{ width: '100%' }}>
              <Grid.Row style={{ padding: '0 0 0 0' }}>
                <Grid.Column width="16">
                  <ImageContainer>
                    <div style={{ overflow: 'hidden', height: '25vh' }}>
                      <Image fluid src="https://images.pexels.com/photos/421888/pexels-photo-421888.jpeg?w=940&h=650&auto=compress&cs=tinysrgb" />
                    </div>
                    <TextOverImage>
                      <h1 style={{ fontSize: '6em' }}>
                        พลังงาน
                      </h1>
                    </TextOverImage>
                  </ImageContainer>
                </Grid.Column>
              </Grid.Row>
            </Fade>
            <Fade left delay={500} style={{ width: '100%' }}>
              <Grid.Row style={{ padding: '0 0 0 0' }}>
                <Grid.Column width="16">
                  <ImageContainer>
                    <div style={{ overflow: 'hidden', height: '25vh' }}>
                      <Image fluid src="https://images.unsplash.com/photo-1500316124030-4cffa46f10f0?auto=format&fit=crop&w=1050&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" />
                    </div>
                    <TextOverImage>
                      <h1 style={{ fontSize: '6em' }}>
                        การเงิน
                      </h1>
                    </TextOverImage>
                  </ImageContainer>
                </Grid.Column>
              </Grid.Row>
            </Fade>
            <Fade left delay={1000} style={{ width: '100%' }}>
              <Grid.Row style={{ padding: '0 0 0 0' }}>
                <Grid.Column width="16">
                  <ImageContainer>
                    <div style={{ overflow: 'hidden', height: '25vh' }}>
                      <Image fluid src="https://images.unsplash.com/photo-1494412623380-6e86033ab9ed?auto=format&fit=crop&w=1050&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" />
                    </div>
                    <TextOverImage>
                      <h1 style={{ fontSize: '6em' }}>
                        โลจิสติกส์
                      </h1>
                    </TextOverImage>
                  </ImageContainer>
                </Grid.Column>
              </Grid.Row>
            </Fade>
          </Grid>
        </Segment>
        <Segment
          basic
          style={{
            minHeight: '100vh', backgroundColor: 'black', overflow: 'hidden', paddingTop: '100px',
          }}
        >
          <Zoom>
            <Header textAlign="center" color="red" as="h1">
            SIAM BLOCKCHAIN ACADEMY
            </Header>
          </Zoom>
          <Zoom delay={500}>
            <Header textAlign="center" color="red" as="h1">
            จะทำให้คุณรู้จักและเข้าใจในเทคโนโลยี CRYPTOCURRENCY และ BLOCKCHAIN<br />
            ด้วยบริการของเรา
            </Header>
          </Zoom>
          <br />
          <Grid stackable columns={3}>

            <Grid.Column>
              <Fade top>
                <ImageContainer>
                  <div style={{ overflow: 'hidden', height: '80vh' }}>
                    <img style={{ height: '100%', filter: 'brightness(50%)' }} src="https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?auto=format&fit=crop&w=1050&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" />
                  </div>
                  <TextOverImage>
                    <h1>อบรมและสัมมนา</h1>
                    <h3>ถ่ายทอดความรู้แบบถึงตัว พร้อมสาธิตให้เห็นภาพชัดเจน
                    เพรียบพร้อมด้วยความรู้จากวิทยากรผู้เชี่ยวชาญ
                    </h3>
                    <Button color="red">ดูงานทั้งหมด</Button>
                  </TextOverImage>
                </ImageContainer>
              </Fade>
            </Grid.Column>
            <Grid.Column>
              <Fade top delay={500}>
                <ImageContainer>
                  <div style={{ overflow: 'hidden', height: '80vh' }}>
                    <img style={{ height: '100%', filter: 'brightness(50%)' }} src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1052&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" />
                  </div>
                  <TextOverImage>
                    <h1>คอร์สออนไลน์</h1>
                    <h3>
                    เนื้อหาคุณภาพ เข้าใจง่าย เข้าถึงความรู้ได้ทุกที่ทุกเวลา
                    </h3>
                    <Button color="red">ดูคอร์สทั้งหมด</Button>
                  </TextOverImage>
                </ImageContainer>
              </Fade>
            </Grid.Column>
            <Grid.Column>
              <Fade top delay={1000}>
                <ImageContainer>
                  <div style={{ overflow: 'hidden', height: '80vh' }}>
                    <img style={{ height: '100%', filter: 'brightness(50%)' }} src="https://images.unsplash.com/photo-1505860421472-7d74e0b4d98a?auto=format&fit=crop&w=634&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" />
                  </div>
                  <TextOverImage>
                    <h1>วิทยากรรับเชิญและอบรมส่วนตัว</h1>
                    <h3>
                    เรายินดีถ่ายทอดความรู้ให้ตามสถานที่ของท่าน หรือจัดคอร์สอบรมส่วนตัวสำหรับกลุ่มผู้สนใจ
                    </h3>
                    <Button color="red">ติดต่อเรา</Button>
                  </TextOverImage>
                </ImageContainer>
              </Fade>
            </Grid.Column>
          </Grid>
        </Segment>
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
            minHeight: '100vh', backgroundColor: 'black', overflow: 'hidden', paddingTop: '100px', paddingBottom: '0px',
          }}
        >
          <ImageContainer>
            <div style={{ overflow: 'hidden', height: '100vh' }}>
              <Image fluid src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1352&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" />
            </div>
            <TextOverImage>
              <Fade duration={3000}>
                <h1>
                ณ ตอนนี้ เรายังอยู่แค่เพียงจุดเริ่มต้นของเทคโนโลยีนี้เท่านั้น
                </h1>
                <h1 style={{ fontSize: '6em' }}>
                โอกาสอีกมากมาย<br />
                ยังรอคุณอยู่<br />
                </h1>
                <Button color="red" size="huge">เริ่มเรียนรู้</Button>
              </Fade>
            </TextOverImage>
          </ImageContainer>
        </Segment>
        <Footer />
      </div>
    );
  }
}
