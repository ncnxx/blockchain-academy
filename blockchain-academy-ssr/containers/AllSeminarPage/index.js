import _ from 'lodash';
import React from 'react';
import { Image, Card, Segment, Advertisement, Grid, Responsive, Header, Button, Rating, Icon, Accordion, Item } from 'semantic-ui-react';
import AppMenu from '~/containers/AppMenu';
import { seminarList } from '~/containers/SeminarPage/constants';

export default () => (
  <div>
    <AppMenu />
    <Grid padded>
      <Grid.Column width="16">
        <Header as="h1">งานอบรมและสัมนาทั้งหมด</Header>
        <Segment>
          <Header as="h2">งานอบรมและสัมนาที่กำลังจะจัดขึ้น</Header>
          <Header textAlign="center" as="h1">รอติดตามเร็วๆนี้</Header>
        </Segment>
        <Segment>
          <Header as="h2">งานอบรมและสัมนาที่ผ่านไปแล้ว</Header>
          <Card.Group stackable itemsPerRow="3">
            {seminarList.map((each) => (
              <Card key={each.name}>
                <Image fluid src={each.image} />
                <Card.Content>
                  <Card.Header>
                    <a href={`/seminar/${each.slug}`}>{each.name}</a>
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
          </Card.Group>
        </Segment>
      </Grid.Column>
    </Grid>
  </div>
);
