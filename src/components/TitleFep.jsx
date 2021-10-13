import React from 'react';
import { Helmet } from 'react-helmet';

const TITLE = 'Grupo Fep';

class TitleFep extends React.PureComponent {
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

export default TitleFep;
