import React from 'react';
import CoursePage from '../containers/CoursePage';

const posts = [
  { slug: 'hello-world', title: 'Hello world' },
  { slug: 'another-blog-post', title: 'Another blog post' },
];

export default class extends React.Component {
  static async getInitialProps({ query }) {
    return { query };
  }

  render() {
    return <CoursePage {...this.props} />;
  }
}
