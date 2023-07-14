import React from 'react'
import { Grid, Typography, Box, Button } from '@mui/material'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import InputField from '../FormFields/InputField'
import TimePickerField from '../FormFields/TimePickerField'
import SelectField from '../FormFields/SelectField'
import DatePickerField from '../FormFields/DatePickerField'

const TableForm = (props) => {
  const handleSubmit = (values) => {
    props.next(values)
  }

  const tableformValidationSchema = Yup.object({
    date: Yup.date().required('Date is required'),
    time: Yup.string().required('Time is required'),
    tableNumber: Yup.string().required('Table number is required'),
    numberOfPeople: Yup.number()
      .integer('Must be an integer')
      .min(1, 'Must be at least 1')
      .required('Number of people is required'),
  })

  const tables = [
    {
      value: undefined,
      label: 'None',
    },
    {
      value: '1',
      label: 'Table 1',
    },
    {
      value: '2',
      label: 'Table 2',
    },
    {
      value: '3',
      label: 'Table 3',
    },
  ]

  const occasions = [
    {
      value: undefined,
      label: 'None',
    },
    {
      value: '11',
      label: 'Birthday',
    },
    {
      value: '22',
      label: 'Anniversary',
    },
    {
      value: '33',
      label: 'Engagement',
    },
  ]

  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      sx={{ width: '620px', marginLeft: '575px' }}
    >
      <Formik
        initialValues={props.data}
        validationSchema={tableformValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant='h6' gutterBottom textAlign='center'>
                  Table Details
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <DatePickerField
                  name='date'
                  label='Date'
                  format='MM/DD/YYYY'
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TimePickerField
                  name='time'
                  label='Time'
                  format='HH:mm'
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <InputField
                  name='numberOfPeople'
                  label='Number of People'
                  variant='outlined'
                  type='number'
                  fullWidth
                  size='small'
                />
              </Grid>
              <Grid item xs={12}>
                <SelectField
                  name='tableNumber'
                  label='Table Number'
                  data={tables}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <SelectField
                  name='occasion'
                  label='Occasion'
                  data={occasions}
                  fullWidth
                />
              </Grid>
            </Grid>
            <Button
              variant='contained'
              type='submit'
              sx={{ marginTop: '10px', marginLeft: '600px' }}
            >
              Next
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  )
}

export default TableForm
