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
import { Menu, Header, Button, Grid, Segment, Image, Container, Card, Icon, Dimmer } from 'semantic-ui-react';
import styled from 'styled-components';

const posts = [
  { slug: 'hello-world', title: 'Hello world' },
  { slug: 'another-blog-post', title: 'Another blog post' },
];

export default class extends React.Component {
  render() {
    return <h1>{this.props.query.slug}</h1>;
  }
}
