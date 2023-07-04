import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import reservation from '../../assets/images/booking.jpg'
import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import {
  Stepper,
  Step,
  StepLabel,
  Typography,
  CircularProgress,
} from '@mui/material'
import { Formik, Form } from 'formik'
import { styled } from '@mui/material/styles'

import TableForm from './TableForm'
import BookingForm from './BookingForm'
import UserForm from './UserForm'

const steps = ['Booking details', 'User details', 'Review your booking']

const useStyles = styled((theme) => ({
  stepper: {
    width: '25%', // Adjust the width value as per your requirements
    //margin: '0 auto', // Center the stepper horizontally
  },
}))

function _renderStepContent(step) {
  switch (step) {
    case 0:
      return <TableForm />
    case 1:
      return <BookingForm />
    case 2:
      return <UserForm />
    default:
      return <div>Not Found</div>
  }
}

function ReservationForm() {
  const backgroundStyles = {
    backgroundImage: `url(${reservation})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '35vh',
    position: 'relative', // Add position relative
  }

  const textStyles = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'yellow',
    fontSize: '48px',
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'blue', // Add background color
    zIndex: 1,
  }

  //go main page
  const navigate = useNavigate()
  const goBack = () => {
    navigate(-1)
  }

  const [activeStep, setActiveStep] = useState(0)
  const isLastStep = activeStep === steps.length - 1
  const classes = useStyles()

  return (
    <React.Fragment>
      <div style={backgroundStyles}>
        <Container>
          <img src='holder.js/100px250' fluid alt='Booking' />
        </Container>
        <div style={textStyles}>Reserve Your Table</div>
      </div>
      <div>
        <Button variant='primary' onClick={goBack} className='mt-2 ms-2 mb-3'>
          Go Back
        </Button>
      </div>
      <Stepper
        activeStep={activeStep}
        sx={{ width: '50%', marginLeft: '500px' }}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {/* <TableForm /> */}
    </React.Fragment>
  )
}

export default ReservationForm
