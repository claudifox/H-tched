import React from 'react'
import RegistryItemCollectionRow from './RegistryItemCollectionRow'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PrimarySearchAppBar from '../components/PrimarySearchAppBar'


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function RegistryItemCollectionNestedGrid(props) {
  const { classes, registryItems, onSearchChange, logOut, currentCouple } = props;

  return (
    <div className={classes.root}>
    <PrimarySearchAppBar onSearchChange={onSearchChange} logOut={logOut} currentCouple={currentCouple}/>
      <Grid container spacing={8}>
        <Grid container item xs={12} spacing={24}>
          <RegistryItemCollectionRow registryItems={registryItems} classes={classes}  />
        </Grid>
      </Grid>
    </div>
  );
}

RegistryItemCollectionNestedGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RegistryItemCollectionNestedGrid);
