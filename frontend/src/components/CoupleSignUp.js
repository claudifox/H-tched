import React from 'react';
// import PropTypes from 'prop-types';
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


class CoupleSignUp extends React.Component {

  state = {
    name_1: "",
    name_2: "",
    email_address: "",
    password: ""
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSignUpSubmit = event => {
    event.preventDefault()
    const { logIn, history } = this.props
    const couple = this.state
    API.create(couple).then(data => {
      if (data.error) {
        alert('Email address already in use')
      } else {
        // logIn(data)
        history.push("/")
      }
    })
  }

  render() {
    const { classes } = this.props;
    const { name_1, name_2, email_address, password } = this.state
    const {handleSignUpSubmit, handleChange} = this

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
              Sign Up
            </Typography>
            <form className={classes.form} onSubmit={handleSignUpSubmit}>
              <FormControl margin="normal" required halfWidth>
              <InputLabel htmlFor="name_1">Your Name</InputLabel>
              <Input id="name_1" name="name_1" autoComplete="name_1" value={name_1} onChange={handleChange} autoFocus />
              </FormControl>

              <FormControl margin="normal" required halfWidth>
              <InputLabel htmlFor="name_2">Your Fiancé's Name</InputLabel>
              <Input id="name_2" name="name_2" autoComplete="name_2" value={name_2} onChange={handleChange}  />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="email_address">Couple Email Address</InputLabel>
                <Input id="email_address" name="email_address" autoComplete="email_address" value={email_address} onChange={handleChange} />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input name="password" type="password" id="password" autoComplete="current-password" value={password} onChange={handleChange} />
              </FormControl>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className={classes.submit}
              >
                Sign Up
              </Button>
            </form>
          </Paper>
          <div  style={{height: 200 }}/>
        </main>
      </div>
    )
  }
}



export default withStyles(styles)(CoupleSignUp);
