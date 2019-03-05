import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import HtchedLogoLight from '../images/HtchedLogoLight.png'


const styles = {
  root: {
    flexGrow: 1,
  },
};

function HomeLogInAppBar(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
        <img src={HtchedLogoLight} style={{height: 150 }} />
        </Toolbar>
      </AppBar>
    </div>
  );
}

HomeLogInAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeLogInAppBar);
