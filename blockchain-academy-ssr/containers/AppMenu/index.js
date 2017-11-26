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
            style={{
              width: '6.5em',
            }}
            src={Logo}
            alt="Logo"
          />
        </Menu.Item>
        <Link href="/">
          <Menu.Item>
          หน้าแรก
          </Menu.Item>
        </Link>
        <Menu.Item
          name="features"
          active={activeItem === 'features'}
          onClick={this.handleItemClick}
        >
          คอร์สออนไลน์
        </Menu.Item>

        <Menu.Item
          name="testimonials"
          active={activeItem === 'testimonials'}
          onClick={this.handleItemClick}
        >
          อบรม/สัมนา
        </Menu.Item>

        <Menu.Item
          name="sign-in"
          active={activeItem === 'sign-in'}
          onClick={this.handleItemClick}
        >
          เกี่ยวกับเรา
        </Menu.Item>
      </Menu>
    );
  }
}
