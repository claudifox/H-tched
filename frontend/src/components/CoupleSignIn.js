import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import HomeLogInAppBar from './HomeLogInAppBar'
import API from '../API.js'

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: '#B84C65',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
    backgroundColor:'#B84C65'
  },
});


class CoupleSignIn extends React.Component {

  state = {
    email_address: "",
    password: ""
  }

  handleLogInSubmit = event => {
    event.preventDefault()
    const { logIn, history } = this.props
    const couple = this.state
    API.login(couple).then(data => {
      if (data.error) {
        alert('Email address/password invalid')
      } else {
        logIn(data)
        history.push("/items")
      }
    })
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
    const { classes } = this.props;
    const { email_address, password } = this.state
    const {handleLogInSubmit, handleChange} = this

    return (
      <div className='home-next-background'>
        <HomeLogInAppBar />
        <main className={classes.main}>
          <CssBaseline />
          <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Log In
        </Typography>
        <form className={classes.form} onSubmit={handleLogInSubmit}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email_address">Email Address</InputLabel>
            <Input id="email_address" name="email_address" value={email_address} onChange={handleChange} autoComplete="email_address" autoFocus />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input name="password" type="password" value={password} onChange={handleChange} id="password" autoComplete="current-password" />
          </FormControl>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}

          >
            Log In
          </Button>
          </form>
          </Paper>
          <div  style={{height: 250 }}/>
        </main>
      </div>
    )
  }
}



export default withStyles(styles)(CoupleSignIn);
