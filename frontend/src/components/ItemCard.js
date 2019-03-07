import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
    width: '150px',
    marginLeft: 'auto',
    marginRight: 'auto'
     // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class ItemCard extends React.Component {

  state = {
    expanded: false
  };

  handleExpandClick = () => {
   this.setState(state => ({ expanded: !state.expanded }));
  };



  render() {
    const { classes, handleClick, item } = this.props;
    return (
      <Card className={classes.card} key={item.id}>
        <CardHeader
          title={item.title}
          subheader={item.category}
        />
        <CardMedia
          className={classes.media}
          image={item.image}
          title="item image"
        />
        <CardContent>
          <Typography component="p">
            £{item.price}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Add to favorites" onClick={(event) => handleClick(item)} >
            <FavoriteIcon  />
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              {item.description}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

ItemCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ItemCard);
