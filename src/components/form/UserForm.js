import React, { useState } from 'react'
import FormUserDetails from './FormUserDetails'
import FormPersonDetails from './FormPersonalDetails'
import Confirm from './Confirm'
import Success from './Success'

export default function UserForm() {

  const [step, setStep] = useState(0);
  const [appTitle] = useState('Cadastro')
  const [user, setUser] = useState({
    step: 0,
    firstName: 'Matheus',
    lastName: 'Araujo',
    email: 'abc@gmail.com',
    occupation: 'dev',
    city: 'Rio',
    bio: 'Abc.'
  });

  const nextStep = () => setStep(step + 1);

  const prevStep = () => setStep(step - 1);

  const handleChange = input => e => setUser({ ...user, [input]: e.target.value });

  return (
    <>
      {step === 0 && (
        <FormUserDetails
          user={user}
          nextStep={nextStep}
          handleChange={handleChange}
          appTitle={appTitle}
        />
      )}
      {step === 1 && (
        <FormPersonDetails
          user={user}
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          appTitle={appTitle}
        />
      )}
      {step === 2 && (
        <Confirm
          user={user}
          nextStep={nextStep}
          prevStep={prevStep}
          appTitle={appTitle}
        />
      )}
      {step === 3 && (
        <Success
          user={user}
          appTitle={appTitle}
        />
      )}
    </>
  );

}
