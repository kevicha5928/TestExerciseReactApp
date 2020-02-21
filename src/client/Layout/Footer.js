import React from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';
import PropTypes from 'prop-types';

function Footer({ muscles, onSelect, category }) {
  const index = category
    ? muscles.findIndex((group) => group === category) + 1
    : 0;
  // console.log(index);
  const onIndexSelect = (e, indexS) => {
    onSelect(indexS === 0 ? '' : muscles[indexS - 1]);
  };
  return (
    <Paper>
      <Tabs
        value={index}
        onChange={onIndexSelect}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="All" />
        {muscles.map((muscle) => (
          <Tab label={muscle} key={muscle} />
        ))}
      </Tabs>
    </Paper>
  );
}
Footer.propTypes = {
  muscles: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelect: PropTypes.func.isRequired,
  category: PropTypes.string
};

Footer.defaultProps = {
  category: null
};

export default Footer;
