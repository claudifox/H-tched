import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import TagFacesIcon from '@material-ui/icons/TagFaces';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: theme.spacing.unit / 2,
  },
  chip: {
    margin: theme.spacing.unit / 2,
  },
});

class ChipsArray extends React.Component {
  state = {
    chipData: this.props.passCategories
  };

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
     {this.props.passCategories.map(data => {
          let icon = null;

          return (
            <button style={{height:"50px", width:"75px"}}
              key={data.key}
              icon={icon}
              className={classes.chip}
              onClick={() => this.props.handleClick(data.label)}
              color="primary"
              name={data.label}
            >{data.label}</button>
          );
        })
      }
      </Paper>
    );
  }
}

ChipsArray.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChipsArray);
