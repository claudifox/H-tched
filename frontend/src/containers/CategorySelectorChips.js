import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import TagFacesIcon from '@material-ui/icons/TagFaces';
// import CategorySingleChip from './CategorySingleChip'

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
    chipData: this.props.passCategories,
    color: "pink"
  };

  handleButtonColor = (dataLabel) => {
    let newColor = (this.state.color === "#B84C65") ? 'pink' : "#B84C65"
    console.log(dataLabel);
    this.setState({
      color: newColor
    })
    this.props.handleClick(dataLabel)
  }

  render() {
    const { classes, selectedCategories } = this.props;

    return (
      <Paper className={classes.root}>
     {this.props.passCategories.map(data => {
          let icon = null;

          return (
            // <CategorySingleChip />
            <button
              style={{height:"50px", width:"75px", borderRadius: "20px", backgroundColor: selectedCategories.includes(data.label) ? "#B84C65" : "#FCC0C5"}}
              key={data.key}
              icon={icon}
              className={classes.chip}
              onClick={(event) => this.handleButtonColor(data.label)}
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
