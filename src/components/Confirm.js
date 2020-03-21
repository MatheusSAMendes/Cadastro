import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    maxWidth: 300,
  },
  title: {
    fontSize: 14,
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

  const formatName = user => `${user.firstName} ${user.lastName}`;
  

  const next = e => {
    e.preventDefault();
    if (nextStep) nextStep();
  }

  const prev = e => {
    e.preventDefault();
    if (prevStep) prevStep();
  }

  return (
    <MuiThemeProvider>
      <React.Fragment>
        <AppBar title={appTitle} />
        <Card className={classes.root}>
          <CardContent>
            <Typography className={classes.title}
              color="textPrimary"
              gutterBottom>
              Do all your data check?
            </Typography>
            <Typography className={classes.pos} 
            color="textSecondary">
              Name: {formatName(user)}
            </Typography>
            <Typography className={classes.pos} 
            color="textSecondary">
              E-mail: {user.email}
            </Typography>
            <Typography className={classes.pos} 
            color="textSecondary">
              City: {user.city}
            </Typography>
            <Typography className={classes.pos} 
            color="textSecondary">
              Occupation: {user.occupation}
            </Typography>
          </CardContent>
          <CardActions />
        </Card>
        <RaisedButton
          label="Change"
          primary={true}
          style={classes.button}
          onClick={prev}
        />
        <RaisedButton
          label="Confirm"
          primary={true}
          style={classes.button}
          onClick={next}
        />
      </React.Fragment>
    </MuiThemeProvider>
  )
}
