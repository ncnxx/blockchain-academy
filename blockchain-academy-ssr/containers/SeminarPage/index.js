import _ from 'lodash';
import React from 'react';
import Slider from 'react-slick';
import { Image, Segment, Advertisement, Grid, Responsive, Header, Button, Rating, Icon, Accordion, Item } from 'semantic-ui-react';
import AppMenu from '~/containers/AppMenu';
import { seminarList, slideSettings } from './constants';

export default (props) => {
  const { slug } = props;
  const selectedSeminar = seminarList.find((course) => course.slug === slug);
  if (!selectedSeminar) {
    return <div>Not found</div>;
  }
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
      <div style={{ marginTop: '70px' }}>
        <Responsive minWidth={Responsive.onlyComputer.minWidth}>
          <Advertisement unit="leaderboard" test="Advertisement" centered />
        </Responsive>
        <Advertisement unit="mobile leaderboard" test="Advertisement" centered />
        <Grid padded stackable>
          <Grid.Column computer={11}>
            <Segment>
              <Grid>
                <Grid.Column mobile="16" computer="6">
                  <Image src={selectedSeminar.image} />
                </Grid.Column>
                <Grid.Column mobile="16" computer="10">
                  <Header as="h1">
                    {selectedSeminar.name}
                    <Header.Subheader>
                      {selectedSeminar.shortDescription}
                    </Header.Subheader>
                  </Header>
                  {/* <div>
                  <Rating disabled maxRating={5} defaultRating={4} icon="star" size="large" />
                  <span> 4.8/5 (จาก 138 คน)</span>
                </div> */}
                  <br />
                  <div>
                    <Icon name="time" />
                    {selectedSeminar.time}
                  &nbsp;&nbsp;&nbsp;
                    <Icon name="tags" />
                    {selectedSeminar.price}
                  &nbsp;&nbsp;&nbsp;
                    {selectedSeminar.facebookEventLink && <Icon name="facebook" />}
                    {selectedSeminar.facebookEventLink && <a target="_blank" href={selectedSeminar.facebookEventLink}>Facebook Event</a>}
                  </div>
                  <br />
                </Grid.Column>
                <Grid.Column mobile="16" computer="16">
                  <Segment textAlign="center">
                    <Header as="h1">ซื้อตั๋ว</Header>
                    <Button size="huge" negative>งานสิ้นสุดลงแล้ว</Button>
                  </Segment>
                  {selectedSeminar.ratings &&
                  <Segment>
                    <Header as="h1">ความพึงพอใจของผู้เข้าร่วม</Header>
                    <br />
                    <Grid>
                      {selectedSeminar.ratings && _.map(selectedSeminar.ratings, (rating, item) => (
                        [
                          <Grid.Column key={`${item}_item`} width="8"><Header as="h4">{item}</Header></Grid.Column>,
                          <Grid.Column key={`${item}_rating`} width="8"><Rating disabled maxRating={5} defaultRating={rating} size="large" /> {rating}</Grid.Column>,
                        ]
                      ))}
                      <Grid.Column width="16" textAlign="center">
                        {selectedSeminar.reviews && selectedSeminar.reviews.map((review) => (
                          <Header key={review} as="h2"><i>"{review}"</i></Header>
                        ))}
                        <p>ข้อมูลจากการทำแบบสอบถามโดยผู้เข้าร่วมงานจำนวน {selectedSeminar.actualParticipants} คน</p>
                      </Grid.Column>
                    </Grid>
                  </Segment>}
                  <Segment>
                    <Header as="h1">รายละเอียด</Header>
                    <div dangerouslySetInnerHTML={{ __html: selectedSeminar.longDescription }} />
                  </Segment>
                </Grid.Column>
              </Grid>
            </Segment>
            {selectedSeminar.pictures &&
            <Segment>
              <Header as="h1">ภาพจากงาน</Header>
              <div style={{ paddingBottom: '20px' }}>
                <Slider {...slideSettings}>
                  {selectedSeminar.pictures.map((eachPicture) =>
                    (
                      <div key={eachPicture}>
                        <Image style={{ maxHeight: '600px' }} centered src={eachPicture} />
                      </div>
                    ))}
                </Slider>
              </div>
            </Segment>}
          </Grid.Column>
          <Grid.Column computer={5}>
            <Advertisement centered unit="medium rectangle" test="Advertisement" />
            <Advertisement centered unit="medium rectangle" test="Advertisement" />
            <Advertisement centered unit="medium rectangle" test="Advertisement" />
          </Grid.Column>
        </Grid>
      </div>
    </div>
  );
};
