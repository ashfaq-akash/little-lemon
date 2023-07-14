import React from 'react'
import { useState } from 'react'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'

import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Grid,
  FormHelperText,
  Container,
  Button,
} from '@mui/material'
import reservation from '../../assets/images/booking.jpg'

import TableForm from './TableForm'
import UserForm from './UserForm'
import BookingForm from './BookingForm'
import ConfirmationForm from './ConfirmationForm'
import { date } from 'yup'

const ReservationForm = () => {
  const [activeStep, setActiveStep] = useState(0)
  const steps = ['Booking details', 'User details', 'Review your booking']

  const [data, setData] = useState({
    date: null,
    time: '',
    numberofPeople: '',
    tableNumber: '',
    occasion: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    Comment: '',
  })

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

  const makeRequest = (formData) => {
    // console.log('Form Submitted', formData)
  }

  const handleNext = (newData, final = false) => {
    setData((prev) => ({ ...prev, ...newData }))
    if (final) {
      makeRequest(newData)
      setActiveStep(steps.length)
      return
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = (newData) => {
    setData((prev) => ({ ...prev, ...newData }))
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const formContent = (step) => {
    switch (step) {
      case 0:
        return <TableForm next={handleNext} prev={handleBack} data={data} />
      case 1:
        return <UserForm prev={handleBack} next={handleNext} data={data} />
      case 2:
        return <BookingForm prev={handleBack} next={handleNext} data={data} />
      case 3:
        return <ConfirmationForm />
      default:
        return <div>404: Not Found</div>
    }
  }

  console.log('data', data)
  console.log(date)

  return (
    <React.Fragment>
      <div style={backgroundStyles}>
        <Container>
          <img src='holder.js/100px250' fluid alt='Booking' />
        </Container>
        <div style={textStyles}>Reserve Your Table</div>
      </div>
      <div>
        <Button
          variant='contained'
          onClick={goBack}
          sx={{ marginTop: '10px', marginLeft: '5px' }}
        >
          Go Back
        </Button>
      </div>
      <Stepper
        activeStep={activeStep}
        sx={{ width: '50%', marginLeft: '500px' }}
        alternativeLabel
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {
        <Grid container>
          <Grid item xs={12} sx={{ padding: '20px' }}>
            {formContent(activeStep)}
          </Grid>
          {/*     <div>
          {activeStep === steps.length ? (
            <div>
              <Button onClick={handleReset}>Reset</Button>
            </div>
          ) : (
            <div>
              <div className='container'>
                <Button disabled={activeStep === 0} onClick={handleBack}>
                  Back
                </Button>
                <input
                  type='submit'
                  value={activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  variant='contained'
                  color='primary'
                  onClick={handleNext}
                  className='btn btn-primary'
                />
              </div>
            </div>
          )}
        </div> */}
        </Grid>
      }
    </React.Fragment>
  )
}

export default ReservationForm
