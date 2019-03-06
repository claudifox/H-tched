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

function RegistryItemCollectionRow(props) {
  const { classes, registryItems } = props;

// Have a look into doing the Grid item responsive, on half a big screen have it set at 4, otherwise full screen have as 2
  return (
    <React.Fragment>
      {registryItems.map(
        registryItem =>
          <Grid item xs={4}>
            <Paper className={classes.paper}><RegistryItemCard key={registryItem.id} registryItem={registryItem} />
            </Paper>
          </Grid>
        )}
    </React.Fragment>
  );
}

RegistryItemCollectionRow.propTypes = {
  classes: PropTypes.object.isRequired
}


export default RegistryItemCollectionRow;
