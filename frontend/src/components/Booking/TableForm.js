import React, { useState } from 'react'
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  IconButton,
  Select,
  MenuItem,
} from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { DesktopTimePicker } from '@mui/x-date-pickers'
import dayjs from 'dayjs'
import { Add, Remove } from '@mui/icons-material'

function TableForm() {
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  const [guests, setGuests] = useState(1)
  const [selectedTable, setSelectedTable] = useState('0')
  const [selectedOccasion, setSelectedOccasion] = useState('Select Occasion')

  const handleDateChange = (date) => {
    setSelectedDate(date)
  }

  const handleTimeChange = (time) => {
    setSelectedTime(time)
  }

  const incrementGuests = () => {
    setGuests((prevGuests) => prevGuests + 1)
  }

  const decrementGuests = () => {
    setGuests((prevGuests) => Math.max(prevGuests - 1, 1))
  }

  const handleTableChange = (event) => {
    setSelectedTable(event.target.value)
  }

  const handleOccasionChange = (event) => {
    setSelectedOccasion(event.target.value)
  }

  return (
    <Box
      sx={{
        width: 800,
        height: 500,
        border: 'none',
        borderRadius: 'rounded',
        color: 'white',
        marginLeft: '600px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
      }}
    >
      <FormControl>
        <FormLabel
          id='date'
          sx={{
            fontWeight: 'bold',
          }}
        >
          Date
        </FormLabel>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            value={selectedDate}
            onChange={handleDateChange}
            renderInput={(params) => (
              <Input
                {...params}
                placeholder='Select Date'
                sx={{
                  borderRadius: '16px',
                  width: '200px',
                }}
              />
            )}
            disablePast
          />
        </LocalizationProvider>
      </FormControl>

      <FormControl>
        <FormLabel
          id='time'
          sx={{
            fontWeight: 'bold',
          }}
        >
          Time
        </FormLabel>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DesktopTimePicker
            skipDisabled={true}
            //viewRenderers={DigitalClock}
            sx={{ color: 'black' }}
            minTime={dayjs('2022-04-17T17:00')}
            value={selectedTime}
            onChange={handleTimeChange}
            minutesStep={30}
            ampm={false}
          />
        </LocalizationProvider>
      </FormControl>

      <FormControl>
        <FormLabel
          id='guests'
          sx={{
            fontWeight: 'bold',
          }}
        >
          Number of Guests
        </FormLabel>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton onClick={incrementGuests} size='small' color='primary'>
            <Add />
          </IconButton>
          <Input
            type='number'
            value={guests}
            readOnly
            sx={{
              width: '50px',
              textAlign: 'center',
              paddingLeft: '20px',
              color: 'red',
            }}
          />
          <IconButton onClick={decrementGuests} size='small' color='primary'>
            <Remove />
          </IconButton>
        </Box>
      </FormControl>

      <FormControl>
        <FormLabel
          id='table'
          sx={{
            fontWeight: 'bold',
          }}
        >
          Table Number
        </FormLabel>
        <Select
          value={selectedTable}
          onChange={handleTableChange}
          sx={{
            borderRadius: '4px',
            width: '810px',
          }}
        >
          <MenuItem value='0'>Select Table</MenuItem>
          <MenuItem value='1'>Table 1</MenuItem>
          <MenuItem value='2'>Table 2</MenuItem>
          <MenuItem value='3'>Table 3</MenuItem>
          <MenuItem value='4'>Table 4</MenuItem>
          <MenuItem value='5'>Table 5</MenuItem>
        </Select>
      </FormControl>

      <FormControl>
        <FormLabel
          id='occasion'
          sx={{
            fontWeight: 'bold',
          }}
        >
          Occasion
        </FormLabel>
        <Select
          value={selectedOccasion}
          onChange={handleOccasionChange}
          sx={{
            borderRadius: '4px',
            width: '810px',
          }}
        >
          <MenuItem value='birthday'>Birthday</MenuItem>
          <MenuItem value='anniversary'>Anniversary</MenuItem>
          <MenuItem value='engagement'>Engagement</MenuItem>
          <MenuItem value='other'>Other</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}

export default TableForm
