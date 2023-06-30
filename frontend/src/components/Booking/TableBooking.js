import React from 'react'
import { Box } from '@mui/material'
import { FormControl, FormLabel } from '@mui/material'

function TableBooking() {
  return (
    <Box
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        width: 800,
        height: 500,
        border: '1px solid grey',
        color: 'white',
        marginLeft: '600px',
      }}
    >
      <FormControl>
        <FormLabel id='date'>Date</FormLabel>
      </FormControl>
    </Box>
  )
}

export default TableBooking
