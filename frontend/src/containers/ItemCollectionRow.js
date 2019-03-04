import React from 'react'
import ItemCard from "../components/ItemCard"
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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

function ItemCollectionRow(props) {
  const { classes, items } = props;

// Have a look into doing the Grid item responsive, on half a big screen have it set at 4, otherwise full screen have as 2
  return (
    <React.Fragment>
      {items.map(
        item =>
          <Grid item xs={4}>
            <Paper className={classes.paper}><ItemCard key={item.id} item={item} />
            </Paper>
          </Grid>
        )}
    </React.Fragment>
  );
}

ItemCollectionRow.propTypes = {
  classes: PropTypes.object.isRequired
}


export default ItemCollectionRow;
