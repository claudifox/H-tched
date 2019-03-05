import React from 'react'
import ItemCollectionRow from './ItemCollectionRow'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
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

function ItemCollectionNestedGrid(props) {
  const { classes, items } = props;

  return (
    <div className={classes.root}>
      <PrimarySearchAppBar />
      <br />
      <Grid container spacing={8}>
        <Grid container item xs={12} spacing={24}>
          <ItemCollectionRow items={items} classes={classes} />
        </Grid>
      </Grid>
    </div>
  );
}

ItemCollectionNestedGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ItemCollectionNestedGrid);
