import React from 'react';
import { Helmet } from 'react-helmet';

const TITLE = 'VI SEMFEP';

class Title extends React.PureComponent {
  render() {
    return (
      <>
        <Helmet>
          <title>{TITLE}</title>
        </Helmet>
        ...
      </>
    );
  }
}

export default Title;
