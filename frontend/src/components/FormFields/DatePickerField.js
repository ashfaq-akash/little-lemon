import React, { useState, useEffect } from 'react'
import { useField } from 'formik'
import { Grid } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import dayjs from 'dayjs'

function DatePickerField(props) {
  const [field, meta, helper] = useField(props)
  const { touched, error } = meta
  const { setValue } = helper
  const isError = touched && error && true
  const { value } = field
  const [selectedDate, setSelectedDate] = useState('')

  useEffect(() => {
    if (value) {
      const date = new Date(value)
      setSelectedDate(date)
    }
  }, [value])

  function _onChange(date) {
    if (date) {
      setSelectedDate(date)
      try {
        const ISODateString = date.toISOString()
        setValue(ISODateString)
      } catch (error) {
        setValue(date)
      }
    } else {
      setValue(date)
    }
  }

  return (
    <Grid container>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          sx={{ width: '100%' }}
          disablePast
          {...field}
          {...props}
          value={dayjs(selectedDate).format('DD/MM/YYYY')}
          onChange={_onChange}
          error={false}
          invalidDateMessage={isError && error}
          helperText={isError && error}
        />
      </LocalizationProvider>
    </Grid>
  )
}

export default DatePickerField
