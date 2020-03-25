import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    maxWidth: 300,
  },
  title: {
    fontSize: 25,
  },
  pos: {
    marginBottom: 12,
  },
  button: {
    margin: 15
  }
}

export default function Confirm({ nextStep, prevStep, user, appTitle }) {

  const classes = styles;

  const next = e => {
    e.preventDefault();
    if (nextStep) nextStep();
  }

  return (
    <MuiThemeProvider>
      <React.Fragment>
        <Typography className={classes.title}
          color="textPrimary"
          gutterBottom>
          Welcome, {user.firstName}!
          </Typography>
        <RaisedButton
          label="Home"
          primary={true}
          style={classes.button}
          onClick={next}
        />
      </React.Fragment>
    </MuiThemeProvider>
  )
}
