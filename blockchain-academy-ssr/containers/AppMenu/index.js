import React, { Component } from 'react';
import { Menu, Image, Responsive } from 'semantic-ui-react';
import Link from 'next/link';
import { menuList } from './constants';

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
            {menuList.map((eachMenu) => (
              <Link key={eachMenu.name} href={eachMenu.link}>
                <Menu.Item as="a">
                  <h3>{eachMenu.label}</h3>
                </Menu.Item>
              </Link>
            ))}
            <a href="https://www.siamblockchain.com">
              <Menu.Item>
                <Image centered style={{ width: '130px' }} src="https://siamblockchain.com/wp-content/uploads/2016/12/sblogo1-04.png" />
              </Menu.Item>
            </a>
          </Menu.Menu>
        </Menu>
      </Responsive>
    );
  }
}
