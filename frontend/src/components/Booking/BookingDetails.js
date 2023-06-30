import React from 'react'
import { Container } from 'react-bootstrap'
import reservation from '../../assets/images/booking.jpg'
import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import TableBooking from './TableBooking'

function BookingDetails() {
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

  const navigate = useNavigate()
  const goBack = () => {
    navigate(-1)
  }

  return (
    <div>
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
      <TableBooking />
    </div>
  )
}

export default BookingDetails
