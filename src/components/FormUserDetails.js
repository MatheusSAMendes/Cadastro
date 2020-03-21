import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const styles = {
    button: {
      margin: 15
    }
  }

export default function FormUserDetails({ user, nextStep, handleChange, appTitle }) {

  const next = event => {
    event.preventDefault();
    if (nextStep) nextStep();
  }

  return (
    <MuiThemeProvider>
      <React.Fragment>
        <AppBar title={appTitle} />
        <TextField
          hintText="Enter your first name"
          floatingLabelText="First Name"
          onChange={handleChange('firstName')}
          defaultValue={user.firstName}
        />
        <br />
        <TextField
          hintText="Enter your last name"
          floatingLabelText="Last Name"
          onChange={handleChange('lastName')}
          defaultValue={user.lastName}
        />
        <br />
        <TextField
          hintText="Enter your email"
          floatingLabelText="E-mail"
          onChange={handleChange('email')}
          defaultValue={user.email}
        />
        <br />
        <RaisedButton
          label="continue"
          primary={true}
          style={styles.button}
          onClick={next}
        />
      </React.Fragment>
    </MuiThemeProvider>
  )
}




