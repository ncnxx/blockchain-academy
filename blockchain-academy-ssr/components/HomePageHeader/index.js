import _ from 'lodash';
import React, { Component } from 'react';
import { Fade, Zoom } from 'react-reveal';
import { Image, Grid, Header, Segment } from 'semantic-ui-react';
import axios from 'axios';
import CountUp from 'react-countup';
import ImageContainer from '~/components/ImageContainer';
import TextOverImage from '~/components/TextOverImage';

const getBitcoinPrice = () => axios('https://api.tdax.com/orders?Symbol=BTC_THB')
  .then(({ data }) => Promise.resolve(_.get(data, 'Bids[0].Price', 0) / 100.0));

const BitcoinText = () => (
  <span style={{ color: '#FB9238' }}>BITCOIN</span>
);

const BitcoinPriceTicker = (props) => {
  console.log(props.nextBTCPrice);
  return (
    <CountUp
      className="CountUp"
      start={props.previousBTCPrice}
      end={props.nextBTCPrice}
      duration={1}
      separator=","
      redraw
    />
  );
};

export default class HomePageHeader extends Component {
  constructor(props) {
    super(props);

    this.state = { previousBTCPrice: 0, nextBTCPrice: 0 };

    getBitcoinPrice().then((bitcoinPrice) => {
      this.setState({
        previousBTCPrice: bitcoinPrice,
        nextBTCPrice: bitcoinPrice,
      });
    });

    setInterval(() => {
      getBitcoinPrice().then((bitcoinPrice) => {
        if (bitcoinPrice) {
          this.setState({
            previousBTCPrice: this.state.nextBTCPrice,
            nextBTCPrice: bitcoinPrice,
          });
        }
      });
    }, 15000);
  }

  render() {
    return (
      <div>
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
            backgroundColor: 'white', marginTop: '0', padding: '100px 0 100px 0', overflow: 'hidden',
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
              <Fade><Header as="h3" size="medium" textAlign="center">ข้อมูลราคาจาก <a href="https://tdax.com"><span style={{ color: 'red' }}>TDAX.COM</span></a></Header></Fade>
            </Grid.Column>
          </Grid>
        </Segment>
      </div>
    );
  }
}
