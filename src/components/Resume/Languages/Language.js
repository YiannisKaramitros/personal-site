import React from 'react';
import PropTypes from 'prop-types';

const Language = ({ data }) => (
  <article className="language-container">
    <header>
      <h4 className="language">{data.language}, {data.level}</h4>
    </header>
  </article>
);

Language.propTypes = {
  data: PropTypes.shape({
    language: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
  }).isRequired,
};

export default Language;
