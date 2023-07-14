import { Grid, Button, Box, Typography } from '@mui/material'
import InputField from '../FormFields/InputField'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

const UserForm = (props) => {
  const handleSubmit = (values) => {
    props.next(values)
  }

  const userformValidationSchema = Yup.object({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().required('Email is required').email('Invalid email'),
  })
  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      sx={{ width: '620px', marginLeft: '575px' }}
    >
      <Formik
        validationSchema={userformValidationSchema}
        initialValues={props.data}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant='h6' gutterBottom textAlign='center'>
                  User Details
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <InputField
                  name='firstName'
                  label='First Name'
                  variant='outlined'
                  size='small'
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <InputField
                  name='lastName'
                  label='Last Name'
                  variant='outlined'
                  size='small'
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <InputField
                  name='email'
                  label='Email'
                  variant='outlined'
                  type='phone'
                  fullWidth
                  size='small'
                />
              </Grid>
              <Grid item xs={12}>
                <InputField
                  name='phone'
                  label='Phone'
                  variant='outlined'
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <InputField
                  name='comment'
                  label='Comment'
                  multiline
                  rows={4}
                  fullWidth
                />
              </Grid>
            </Grid>
            <Grid item xs={12} container sx={{ marginLeft: '475px' }}>
              <Button
                type='button'
                variant='contained'
                sx={{ marginTop: '10px', marginRight: '5px' }}
                onClick={() => props.prev(values)}
              >
                Back
              </Button>
              <Button
                type='submit'
                variant='contained'
                sx={{ marginTop: '10px' }}
              >
                Next
              </Button>
            </Grid>
          </Form>
        )}
      </Formik>
    </Box>
  )
}

export default UserForm
