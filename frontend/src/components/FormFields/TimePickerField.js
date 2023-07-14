import React, { useEffect, useState } from 'react'
import { useField } from 'formik'
import { Grid, TextField } from '@mui/material'
import { DesktopTimePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import dayjs from 'dayjs'

function TimePickerField({ label, ...props }) {
  const [field, meta, helper] = useField(props)
  const { touched, error } = meta
  const { setValue } = helper
  const isError = touched && error && true
  const { value } = field
  const [selectedTime, setSelectedTime] = useState('')

  useEffect(() => {
    if (value) {
      const date = new Date(value)
      setSelectedTime(date)
    }
  }, [value])

  function _onChange(time) {
    if (time) {
      setSelectedTime(time)
      try {
        const ISODateString = time.toISOString()
        setValue(ISODateString)
      } catch (error) {
        setValue(time)
      }
    } else {
      setValue(time)
    }
  }

  return (
    <Grid container>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopTimePicker
          skipDisabled
          sx={{ width: '100%' }}
          //value={value || null}
          minTime={dayjs('2022-04-17T17:00')}
          onChange={_onChange}
          minutesStep={30}
          ampm={false}
          invalidDateMessage={isError && error}
          helperText={isError && error}
        />
      </LocalizationProvider>
    </Grid>
  )
}

export default TimePickerField
