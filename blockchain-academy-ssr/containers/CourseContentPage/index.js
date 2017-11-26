import React from 'react';
import ReactPlayer from 'react-player';
import { Image, Segment, Advertisement, Button, Grid, Responsive, Header, Rating, Icon, Accordion, Item } from 'semantic-ui-react';
import AppMenu from '~/containers/AppMenu';
import Footer from '~/components/Footer';
import { courseList } from '../CoursePage';

export const contentList = [
  {
    id: '1',
    name: 'ประวัติความเป็นมาของเงินดิจิตอล',
    duration: '10:37',
  },
  {
    id: '2',
    name: 'ประวัติของ Bitcoin',
    duration: '8:09',
  },
  {
    id: '3',
    name: 'ความน่าเชื่อถือของ Bitcoin',
    duration: '11:57',
  },
  {
    id: '4',
    name: 'Bitcoin มีมูลค่ามาจากอะไร',
    duration: '5:13',
  },
  {
    id: '5',
    name: 'เศรษฐศาสตร์ของ Bitcoin',
    duration: '9:49',
  },
  {
    id: '6',
    name: 'การเก็บรักษา Bitcoin',
    duration: '8:45',
  },
  {
    id: '7',
    name: 'การหาซื้อ Bitcoin',
    duration: '8:09',
  },
];

export default (props) => {
  const { id, slug } = props;
  const content = contentList.find((each) => each.id === id);
  return (
    <div>
      <AppMenu />
      <div>
        <Responsive minWidth={Responsive.onlyComputer.minWidth}>
          <Advertisement className="sss" unit="leaderboard" test="Advertisement" centered />
        </Responsive>
      </div>
      <Grid padded>
        <Grid.Row>
          <Grid.Column width="16">
            <Segment basic>
              <a href={`/course/${slug}`}><Button color="red" floated="left" labelPosition="left" icon="left chevron" content="Back" /></a>
              <Header as="h1" floated="left">Bitcoin คืออะไร?</Header>
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Column mobile="16" computer="11">
          <Segment>
            <Header as="h2">{content.name}</Header>
            <ReactPlayer width="100%" url="https://nutchanon-pho.wistia.com/medias/paj1eig2u5" />
            <Segment basic>
              <p>
            นรีแพทย์พฤหัสพาสปอร์ตเซ็กซ์คอรัปชัน เซนเซอร์สโตนแฟนตาซี กีวีรุสโซอาข่าบอยคอตต์อิเหนา คอมเพล็กซ์ซูโม่ ซันตาคลอส ต้าอ่วยเยอร์บีราแตงโมคอปเตอร์ดีพาร์ตเมนต์ เมคอัพซาฟารีเยอร์บีร่าวอล์คแทคติค ก๋ากั่นเลิฟ เที่ยงวันถ่ายทำแมมโบ้ เวเฟอร์ ปาสเตอร์ฮอตซาดิสต์บาบูนเป็นไง แอปพริคอทจิ๊กโก๋ วาฟเฟิลไงครัวซองต์เอสเพรสโซ ว้าว คอนโดมิเนียมกรีนจูเนียร์ธัมโม โซนี่โพลารอยด์สกรัมไฮไลต์

              </p>

              <p>
            สเต็ปแทคติค วานิลาป๊อป พะเรออะปิยมิตร ซูชิ ศึกษาศาสตร์ทอร์นาโด ศากยบุตร เรต ราชานุญาตดยุคพูล เลดี้นรีแพทย์คอมเพล็กซ์แตงโม เทวาเรต ฮาราคีรี รองรับบิลโบตั๋นแพนด้าโง่เขลา เฟรมเคลียร์ คอรัปชันโต๊ะจีนพาร์ตเนอร์บ็อกซ์ ฮิปฮอป มุมมองวาฟเฟิลดาวน์เทเลกราฟ

              </p>

              <p>
            ซูฮกโฮสเตสโซนี่วีเจเพียว ฮองเฮา พูลคาราโอเกะคลับ ซันตาคลอสตะหงิดจีดีพีซาดิสต์ โอ้ย ติวเตอร์ม้ง แม็กกาซีนทับซ้อนวาทกรรมติงต๊อง ว้อยเลกเชอร์นายแบบเรซิ่นเกสต์เฮาส์ กิมจิมาร์ช แฟนตาซี ธัมโมอพาร์ตเมนต์ออร์แกนิค ฟอยล์ตังค์คอรัปชันอยุติธรรมต่อยอด เทเลกราฟฮ็อตด็อกคอนเทนเนอร์แชมปิยองหมวย สไลด์ซูโม่ ห่วยบ๋อยอพาร์ทเมนท์ เอ็นเตอร์เทนฮาร์ด

              </p>

              <p>
            ฟลุกแทงโก้บึ้มวาซาบิ โปรดิวเซอร์ภคันทลาพาธ ท็อปบู๊ทสมิติเวช สตรอว์เบอร์รีเดอะมินท์เทควันโดแซลมอน เพลย์บอยแจ๊กเก็ตสต๊อก โอเปอเรเตอร์มอคค่าเอ๊าะแซนด์วิชซินโดรม โฟนอัลมอนด์ ปักขคณนาโหงวเฮ้งไอซ์ลิมิตนินจา เบนโตะ แบต แหม็บ โมเดลแอ็คชั่นแทงกั๊กเกรด ช็อปเปอร์เอเซีย แชมเปี้ยนไฮไลท์เทวาโซน พาสตาแอพพริคอทเที่ยงคืน แพกเกจซ้อบุญคุณ

              </p>

              <p>
            มุมมองแบนเนอร์แอร์ โบกี้ศากยบุตร แฟลชซี้ท็อปบู๊ทผลไม้สปา แกสโซฮอล์แอพพริคอทโฮลวีต ซีเนียร์ เจ๊าะแจ๊ะสตริงอยุติธรรมแจ็กเก็ต กลาสพาร์ตเนอร์โบ้ย คาแรคเตอร์พาสเจอร์ไรส์นินจาอาร์ติสต์ เดชานุภาพชินบัญชรทาวน์ พรีเมียมแคมเปญแบดอพาร์ตเมนต์ช็อปปิ้ง พรีเมียมบิ๊กเมจิกพาสต้าโปสเตอร์ ซาดิสต์สะบึมส์โพลล์โฮปสปอต เอาท์สึนามิเซ็กส์ท็อปบู๊ทคอนแทค แผดเผา ปาร์ตี้ ยังไงแหววสเตอริโอตัวเองกู๋

              </p>
            </Segment>
          </Segment>
        </Grid.Column>
        <Grid.Column mobile="16" computer="5">
          <Advertisement centered unit="medium rectangle" test="Advertisement" />
          <Advertisement centered unit="medium rectangle" test="Advertisement" />
          <Advertisement centered unit="medium rectangle" test="Advertisement" />
        </Grid.Column>
      </Grid>
    </div>
  );
};
