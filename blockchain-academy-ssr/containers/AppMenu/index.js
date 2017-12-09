import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import Link from 'next/link';

const Logo = 'https://s3-ap-southeast-1.amazonaws.com/blockchain-academy-static/logo.png';

export default class AppMenu extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <Menu stackable>

        <Menu.Item>
          <img
            style={{ width: '4em' }}
            src="/static/symbol-logo.png"
            alt="Logo"
          />
        </Menu.Item>
        <Link href="/">

          <Menu.Item as="a">
          หน้าแรก
          </Menu.Item>
        </Link>
        {/* <Menu.Item
          name="features"
        >
          คอร์สออนไลน์
        </Menu.Item> */}

        <Link href="/all-seminar">

          <Menu.Item as="a">
          อบรม/สัมนา
          </Menu.Item>
        </Link>

        {/* <Menu.Item
          name="sign-in"
        >
          เกี่ยวกับเรา
        </Menu.Item> */}
      </Menu>
    );
  }
}
