import React from "react";
import { AppBar, Tabs, Tab, useMediaQuery, useTheme } from "@material-ui/core";
import PropTypes from "prop-types";
// import useMediaQuery from '@material-ui/core/useMediaQuery';
// import { useTheme } from '@material-ui/core/styles';

function Footer({ muscles, onSelect, category }) {
  const theme = useTheme();
  // checks for screens that are mobile sized and below
  const mobile = useMediaQuery(theme.breakpoints.down("xs"));
  // const wideScreen = useMediaQuery(theme.breakpoints.up("xs"));
  // console.log(mobile);

  const index = category
    ? muscles.findIndex(group => group === category) + 1
    : 0;
  // console.log(index);
  const onIndexSelect = (e, indexS) => {
    onSelect(indexS === 0 ? "" : muscles[indexS - 1]);
  };
  return (
    <AppBar position="static">
      <Tabs
        value={index}
        onChange={onIndexSelect}
        indicatorColor="secondary"
        textColor="secondary"
        centered={!mobile}
        variant={mobile ? "scrollable" : "standard"}
        scrollButtons="off"
      >
        <Tab label="All" />
        {muscles.map(muscle => (
          <Tab label={muscle} key={muscle} />
        ))}
      </Tabs>
    </AppBar>
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
