import React from 'react';
import CoursePage from '../containers/CoursePage';

export default class extends React.Component {
  static async getInitialProps({ query }) {
    if (query && query.slug) {
      return { slug: query.slug };
    }
    return {};
  }

  render() {
    return <CoursePage {...this.props} />;
  }
}
