import React from 'react'
import ItemCollectionRow from './ItemCollectionRow'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PrimarySearchAppBar from '../components/PrimarySearchAppBar'
import CategorySelectorChips from './CategorySelectorChips'

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
  const { classes, items, categoriesToShow, handleClick, passCategories, onSearchChange, selectedCategories, handleHeartClick, logOut, currentCouple } = props;

  return (
    <div className={classes.root}>
      <PrimarySearchAppBar onSearchChange={onSearchChange} logOut={logOut} currentCouple={currentCouple}/>
      <CategorySelectorChips handleClick={handleClick} passCategories={passCategories} items={items} selectedCategories={selectedCategories}/>
      <br />
      <Grid container spacing={16}>
        <Grid container item xs={12} spacing={16}>
          <ItemCollectionRow items={items} classes={classes} categoriesToShow={categoriesToShow} handleHeartClick={handleHeartClick}  />
        </ Grid>
      </ Grid>
    </div>
  );
}

ItemCollectionNestedGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ItemCollectionNestedGrid);
