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
import React, { Component } from 'react';
import styled from 'styled-components';
import {
  Sidebar,
  Responsive,
  Menu,
  Segment,
  Image,
} from 'semantic-ui-react';
import { menuList } from '~/containers/AppMenu/constants';

const MenuIcon = styled.img`
  transition: 300ms linear all;
  margin: 15px 0px 0px 15px;

  &:hover {
    transform: rotate(90deg);
  }

  @media (min-width: 768px) {
    width: 5vw;
  }

  @media (max-width: 767px) {
    width: 30%;
  }
`;

export default class MobileViewWrapper extends Component {
    state = { sidebarVisible: false };

    toggleSidebarVisibility = () => this.setState({ sidebarVisible: !this.state.sidebarVisible })

    hideSidebar = () => this.state.sidebarVisible ? this.setState({ sidebarVisible: false }) : null;

    render() {
      return (
        <div>
          <Menu fixed="top" style={{ backgroundColor: 'transparent', border: 'none', boxShadow: 'none' }}>
            <Segment basic>
              <MenuIcon
                style={{ cursor: 'pointer' }}
                src="/static/symbol-logo.png"
                alt="Logo"
                onClick={this.toggleSidebarVisibility}
              />
            </Segment>
          </Menu>
          <Sidebar as={Menu} animation="overlay" width="wide" visible={this.state.sidebarVisible} icon="labeled" vertical inverted>
            {menuList.map((eachMenu) => (
              <a key={eachMenu.name} href={eachMenu.link} onClick={this.hideSidebar}>
                <Menu.Item as="h1" name={eachMenu.name} style={{ color: 'red', fontWeight: 'bold' }}>
                  {eachMenu.label}
                </Menu.Item>
              </a>
            ))}
          </Sidebar>
          <Sidebar.Pushable as={Segment} style={{ marginTop: 0 }}>
            <Sidebar.Pusher onClick={this.hideSidebar}>
              {this.props.children}
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </div>
      );
    }
}
