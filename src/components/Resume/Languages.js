import React from 'react';
import PropTypes from 'prop-types';

import Language from './Languages/Language';

const Languages = ({ data }) => (
  <div className="languages">
    <div className="link-to" id="languages" />
    <div className="title">
      <h3>Languages</h3>
    </div>
    {data.map((language) => (
      <Language
        data={language}
        key={language.level}
      />
    ))}
  </div>
);

Languages.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    language: PropTypes.string,
    level: PropTypes.string,
  })),
};

Languages.defaultProps = {
  data: [],
};

export default Languages;
