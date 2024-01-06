import React from 'react';
import PropTypes from 'prop-types';

import Society from './Societies/Society';

const Societies = ({ data }) => (
  <div className="societies">
    <div className="link-to" id="society" />
    <div className="title">
      <h3>Societies</h3>
    </div>
    {data.map((society) => (
      <Society
        data={society}
        key={society.school}
      />
    ))}
  </div>
);

Societies.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    school: PropTypes.string,
    society: PropTypes.string,
    link: PropTypes.string,
    year: PropTypes.number,
  })),
};

Societies.defaultProps = {
  data: [],
};

export default Societies;
