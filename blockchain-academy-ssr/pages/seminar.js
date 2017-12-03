import React from 'react';
import SeminarPage from '../containers/SeminarPage';

export default class extends React.Component {
  static async getInitialProps({ query }) {
    if (query) {
      return { ...query };
    }
    return {};
  }

  render() {
    const { slug, id } = this.props;
    if (slug) {
      return <SeminarPage {...this.props} />;
    } return <div>Not Found</div>;
  }
}
