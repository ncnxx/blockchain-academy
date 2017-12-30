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
import _ from 'lodash';
import React, { Component } from 'react';
import axios from 'axios';
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

import { carouselList } from './constants';
import NextArrow from '../../components/NextArrow';
import PrevArrow from '../../components/PrevArrow';
import AppMenu from '~/containers/AppMenu';
import Footer from '~/components/Footer';
import ImageContainer from '~/components/ImageContainer';
import TextOverImage from '~/components/TextOverImage';
import HomePageHeader from '~/components/HomePageHeader';
import OurServices from '~/components/OurServices';

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

const OurServicesSegment = styled.div`
  background: url('/static/our-services-bg.png') center center no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
`;

const getBitcoinPrice = () => axios('https://api.tdax.com/orders?Symbol=BTC_THB')
  .then(({ data }) => Promise.resolve(_.get(data, 'Bids[0].Price', 0) / 100.0));

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = { sidebarVisible: false };
    getBitcoinPrice().then((bitcoinPrice) => {
      this.setState({
        previousBTCPrice: bitcoinPrice,
        nextBTCPrice: bitcoinPrice,
      });
    });

    setInterval(() => {
      getBitcoinPrice().then((bitcoinPrice) => {
        this.setState({
          previousBTCPrice: this.state.nextBTCPrice,
          nextBTCPrice: bitcoinPrice,
        });
      });
    }, 15000);
  }

  toggleSidebarVisibility = () => this.setState({ sidebarVisible: !this.state.sidebarVisible })

  hideSidebar = () => this.state.sidebarVisible ? this.setState({ sidebarVisible: false }) : null;

  render() {
    return (
      <div>
        <AppMenu />
        <HomePageHeader />
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
        <OurServices />
        <Segment basic textAlign="center" style={{ margin: '0 0 0 0', padding: '0 0 0 0', backgroundColor: '#E6E5E6' }}>
          <Grid>
            <Grid.Column width="6" style={{ padding: '0 0 0 0' }}>
              <ImageContainer>
                <Image src="/static/light-bulb.jpg" fluid />
                <TextOverImage>
                  <h1>
                    เรายังอยู่แค่เพียงจุดเริ่มต้น<br />
                    ของเทคโนโลยีนี้เท่านั้น
                  </h1>
                  <h1 style={{ color: '#F6CD45', fontSize: '3rem' }}>
                    โอกาสอีกมากมาย<br />
                    รอคุณอยู่
                  </h1>
                  <Button color="red" size="huge">เริ่มเรียนรู้</Button>
                </TextOverImage>
              </ImageContainer>
            </Grid.Column>
            <Grid.Column width="10" verticalAlign="middle">
              <Fade bottom left><Header as="h1">การันตีคุณภาพจากผู้เคยเข้าร่วมการอบรมและสัมมนา</Header></Fade>
              <Fade>
                <Image.Group>
                  <Image size="small" src={pantipPratunamLogo} />
                  <Image size="small" src={biostarLogo} />
                  <Image size="tiny" src={thminerLogo} />
                  <Image size="tiny" src={ratchapatLogo} />
                </Image.Group>
              </Fade>
              <Fade>
                <div
                  style={{
                    maxHeight: '500px',
                  }}
                >
                  <Slider {...settings}>
                    {carouselList.map((each) => (
                      <Grid key={each.id} padded width="8" verticalAlign="middle">
                        <Grid.Column width="8">
                          <Image size="medium" floated="right" src={each.image} />
                        </Grid.Column>
                        <Grid.Column width="8" style={{ height: '100%' }}>
                          <Header textAlign="center" as="h2" style={{ paddingRight: '150px' }}><i>{`"${each.text}"`}</i></Header>
                        </Grid.Column>
                      </Grid>
                    ))}
                  </Slider>
                </div>
              </Fade>
            </Grid.Column>
          </Grid>
        </Segment>
        <Footer />
      </div >
    );
  }
}
