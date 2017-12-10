import React, { Component } from 'react';
import { Menu, Image, Responsive } from 'semantic-ui-react';
import Link from 'next/link';

const Logo = 'https://s3-ap-southeast-1.amazonaws.com/blockchain-academy-static/logo.png';

export default class AppMenu extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <Responsive as="span" minWidth={768}>
        <Menu fixed="top" fluid borderless stackable style={{ backgroundColor: '#EBEBEB' }}>

          <Menu.Item>
            <Image
              centered
              style={{ width: '2em' }}
              src="/static/symbol-logo.png"
              alt="Logo"
            />
          </Menu.Item>
          <Menu.Menu position="right">
            <Link href="/">

              <Menu.Item as="a">
          หน้าแรก
              </Menu.Item>
            </Link>

            <Link href="/all-seminar">
              <Menu.Item as="a">
          อบรม/สัมนา
              </Menu.Item>
            </Link>

            <Link href="/">
              <Menu.Item as="a">
            คอร์สออนไลน์
              </Menu.Item>
            </Link>

            <Link href="/">
              <Menu.Item as="a">
            เกี่ยวกับเรา
              </Menu.Item>
            </Link>
          </Menu.Menu>
        </Menu>
      </Responsive>
    );
  }
}
