import React from 'react';
import CoursePage from '../containers/CoursePage';
import CourseContentPage from '../containers/CourseContentPage';

export default class extends React.Component {
  static async getInitialProps({ query }) {
    if (query) {
      return { ...query };
    }
    return {};
  }

  render() {
    const { slug, id } = this.props;
    if (id) {
      return <CourseContentPage {...this.props} />;
    } else if (slug) {
      return <CoursePage {...this.props} />;
    } return <div>Not Found</div>;
  }
}
