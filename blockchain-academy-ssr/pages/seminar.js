import React from 'react';
import { Responsive } from 'semantic-ui-react';
import SeminarPage from '../containers/SeminarPage';
import MobileViewWrapper from '../containers/MobileViewWrapper';

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
      return (
        <div>
          <Responsive as="div" maxWidth={425}>
            <MobileViewWrapper>
              <SeminarPage {...this.props} />
            </MobileViewWrapper>
          </Responsive>
          <Responsive as="span" minWidth={426}>
            <SeminarPage {...this.props} />
          </Responsive>
        </div>
      );
    } return <div>Not Found</div>;
  }
}
