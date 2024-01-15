import React from 'react';
import PropTypes from 'prop-types';

const Society = ({ data }) => (
  <article className="society-container">
    <header>
      <h4 className="society">{data.society}</h4>
      <p className="school"><a href={data.link} target="_blank" rel="noopener noreferrer">{data.school}</a>, {data.year}</p>
    </header>
  </article>
);

Society.propTypes = {
  data: PropTypes.shape({
    society: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    school: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }).isRequired,
};

export default Society;
