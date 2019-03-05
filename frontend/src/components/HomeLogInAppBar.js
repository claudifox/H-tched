import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import HtchedLogoLight from '../images/HtchedLogoLight.png'


const styles = {
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 0.5,
  },
};

function HomeLogInAppBar(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" color="white">
        <Toolbar>
        <div className={classes.grow} />
        <img src={HtchedLogoLight} style={{height: 105 }} />
        </Toolbar>
      </AppBar>
    </div>
  );
}

HomeLogInAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeLogInAppBar);
