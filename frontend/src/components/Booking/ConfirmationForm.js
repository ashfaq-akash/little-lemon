import React from 'react'
import { Box, Typography } from '@mui/material'

function ConfirmationForm() {
  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      minHeight='50vh'
      bgcolor='#f5f5f5'
    >
      <Box
        bgcolor='#33eb91'
        p={3}
        borderRadius={4}
        boxShadow={1}
        textAlign='center'
      >
        <Typography variant='h4' component='h1' gutterBottom>
          Your Reservation is Confirmed!
        </Typography>
        <Typography variant='h6' component='h2' gutterBottom>
          A confirmation message has been sent to your email.
        </Typography>
        <Typography variant='h6' component='h2' gutterBottom>
          Thanks for dining with us!
        </Typography>
      </Box>
    </Box>
  )
}

export default ConfirmationForm
