import React from 'react';
import { Image, Segment, Advertisement, Grid, Responsive, Header, Rating, Icon, Accordion, Item } from 'semantic-ui-react';
import AppMenu from '~/containers/AppMenu';
import { contentList } from '../CourseContentPage';

const IntroToBitcoinImage =
'https://s3-ap-southeast-1.amazonaws.com/blockchain-academy-static/introduction-to-bitcoin.png';
const CryptoCurrencyMiningImage =
'https://s3-ap-southeast-1.amazonaws.com/blockchain-academy-static/cryptocurrency-mining.png';
const EthereumImage =
'https://s3-ap-southeast-1.amazonaws.com/blockchain-academy-static/ethereum.png';

export const courseList = [
  {
    name: 'Bitcoin คืออะไร?',
    image: IntroToBitcoinImage,
    description:
        'ประวัติความเป็นมา และความรู้เบื้องต้นของสกุลเงินดิจิตอล Bitcoin',
    meta: 'ระดับมือใหม่',
    duration: 3,
    price: 'ฟรี',
    slug: 'what-is-bitcoin',
    content: [
      {
        name: 'Bitcoin คืออะไร?',
        chapterContent: contentList,
      },
    ],
  },
  {
    name: 'สร้างกำไรจากการขุด Cryptocurrency',
    image: CryptoCurrencyMiningImage,
    description:
        'เจาะลึกวิธีการและเทคนิคในการขุด Cryptocurrency ตั้งแต่การเลือกซื้ออุปกรณ์ ไปจนถึ' +
        'งการติดตั้งและใช้งานซอฟต์แวร์สำหรับการขุด',
    meta: 'ระดับกลาง',
    duration: 10,
    price: '500 THB',
    slug: 'mining-cryptocurrency',
  },
  {
    name: 'Ethereum นวัตกรรมเปลี่ยนโลก',
    image: EthereumImage,
    description:
        'ทำความรู้จักกับ Ethereum อีกหนึ่ง Cryptocurrency ที่นำเสนอแนวคิดใหม่ที่แตกต่างไป' +
        'จาก Bitcoin และเหรียญอื่นๆ',
    meta: 'ระดับมือใหม่',
    duration: 3,
    price: 'ฟรี',
    slug: 'what-is-ethereum',
  },
];

// const reviewZone = () => (
//   [
//     <Header as="h2">Reviews</Header>,
//     <Grid>
//       <Grid.Column width="4" textAlign="center">
//         <Statistic>
//           <Statistic.Value>4.8</Statistic.Value>
//           <Statistic.Label>
//             <div><Rating disabled maxRating={5} defaultRating={4} icon="star" size="huge" /></div>
//             <div>คะแนนเฉลี่ย</div>
//           </Statistic.Label>
//         </Statistic>
//       </Grid.Column>
//       <Grid.Column width="12"></Grid.Column>
//     </Grid>,
//   ]
// );

export default (props) => {
  const { slug } = props;
  const selectedCourse = courseList.find((course) => course.slug === slug);
  if (!selectedCourse) {
    return <div>Not found</div>;
  }
  return (
    <div>
      <AppMenu />
      <Responsive minWidth={Responsive.onlyComputer.minWidth}>
        <Advertisement unit="leaderboard" test="Advertisement" centered />
      </Responsive>
      <Advertisement unit="mobile leaderboard" test="Advertisement" centered />
      <Grid padded stackable>
        <Grid.Column computer={11}>
          <Segment>
            <Grid>
              <Grid.Column mobile="16" computer="6">
                <Image src={selectedCourse.image} />
              </Grid.Column>
              <Grid.Column mobile="16" computer="10">
                <Header as="h1">
                  {selectedCourse.name}
                  <Header.Subheader>
                    {selectedCourse.description}
                  </Header.Subheader>
                </Header>
                <div>
                  <Rating disabled maxRating={5} defaultRating={4} icon="star" size="large" />
                  <span> 4.8/5 (จาก 138 คน)</span>
                </div>
                <br />
                <div>
                  <Icon name="user" size="large" />
                  {selectedCourse.meta}
                  &nbsp;&nbsp;&nbsp;
                  <Icon name="time" />
                  {selectedCourse.duration} ชั่วโมง
                  &nbsp;&nbsp;&nbsp;
                  <Icon name="tags" />
                  {selectedCourse.price}
                </div>
                <br />
              </Grid.Column>
              <Grid.Column mobile="16" computer="16">
                <Accordion fluid styled>
                  {selectedCourse.content && selectedCourse.content.map((chapter, index) => (
                    <div key={chapter.name}>
                      <Accordion.Title active index={index}>
                        <Icon name="dropdown" />
                        <span>{chapter.name}</span>
                      </Accordion.Title>
                      <Accordion.Content active>
                        <Item.Group divided>
                          {chapter.chapterContent && chapter.chapterContent.map((content) => (
                            <Item key={content.name}>
                              <Item.Content>
                                <Grid>
                                  <Grid.Column computer="10">
                                    <a href={`/course/${selectedCourse.slug}/content/${content.id}`}>
                                      <Header as="h4"><Icon name="video play" size="large" />{content.name}</Header>
                                    </a>
                                  </Grid.Column>
                                  <Grid.Column computer="6" textAlign="right">
                                    {content.duration}
                                  </Grid.Column>
                                </Grid>
                              </Item.Content>
                            </Item>
                          ))}
                        </Item.Group>
                      </Accordion.Content>
                    </div>
                  ))}
                </Accordion>
              </Grid.Column>
            </Grid>
          </Segment>
        </Grid.Column>
        <Grid.Column computer={5}>
          <Advertisement centered unit="medium rectangle" test="Advertisement" />
          <Advertisement centered unit="medium rectangle" test="Advertisement" />
          <Advertisement centered unit="medium rectangle" test="Advertisement" />
        </Grid.Column>
      </Grid>
    </div>
  );
};
