import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const styles = {
  button: {
    margin: 15
  }
}

export default function FormPersonalDetails({ user, nextStep, prevStep, handleChange, appTitle }) {
  
  const next = e => {
    e.preventDefault();
    nextStep();
  }
  const prev = e => {
    e.preventDefault();
    prevStep();
  }

  return (
    <MuiThemeProvider>
      <React.Fragment>
        <TextField
          hintText="Enter your occupation"
          floatingLabelText="Occupation"
          onChange={handleChange('occupation')}
          defaultValue={user.occupation}
        />
        <br />
        <TextField
          hintText="Enter your City"
          floatingLabelText="City"
          onChange={handleChange('city')}
          defaultValue={user.city}
        />
        <br />
        <TextField
          hintText="Enter your Bio"
          floatingLabelText="Bio"
          onChange={handleChange('bio')}
          defaultValue={user.bio}
        />
        <br />
        <RaisedButton
          label="Previous"
          primary={true}
          style={styles.button}
          onClick={prev}
        />
        <RaisedButton
          label="Continue"
          primary={true}
          style={styles.button}
          onClick={next}
        />
      </React.Fragment>
    </MuiThemeProvider>
  )
}





