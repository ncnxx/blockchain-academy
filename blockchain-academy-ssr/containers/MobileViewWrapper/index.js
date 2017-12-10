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
import {
  Sidebar,
  Responsive,
  Menu,
  Segment,
  Image,
} from 'semantic-ui-react';
import { menuList } from '~/containers/AppMenu/constants';

export default class MobileViewWrapper extends Component {
    state = { sidebarVisible: false };

    toggleSidebarVisibility = () => this.setState({ sidebarVisible: !this.state.sidebarVisible })

    hideSidebar = () => this.state.sidebarVisible ? this.setState({ sidebarVisible: false }) : null;

    render() {
      return (
        <div>
          <Responsive maxWidth={768}>
            <Menu fixed="top" style={{ backgroundColor: '#EBEBEB' }}>
              <Segment basic>
                <Image
                  centered
                  style={{ width: '2em' }}
                  src="/static/symbol-logo.png"
                  alt="Logo"
                  onClick={this.toggleSidebarVisibility}
                />
              </Segment>
            </Menu>
            <Sidebar as={Menu} animation="overlay" width="thin" visible={this.state.sidebarVisible} icon="labeled" vertical inverted>
              {menuList.map((eachMenu) => (
                <a key={eachMenu.name} href={eachMenu.link} onClick={this.hideSidebar}>
                  <Menu.Item as="div" name={eachMenu.name} style={{ color: 'red' }}>
                    {eachMenu.label}
                  </Menu.Item>
                </a>
              ))}
            </Sidebar>
          </Responsive>
          <Sidebar.Pushable as={Segment}>
            <Sidebar.Pusher onClick={this.hideSidebar}>
              {this.props.children}
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </div>
      );
    }
}
