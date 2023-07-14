import React from 'react'
import { useField } from 'formik'
import { TextField } from '@mui/material'

function InputField(props) {
  const { errorText, ...rest } = props
  const [field, meta] = useField(props)

  function _renderHelperText() {
    const touched = meta.touched
    const error = meta.error

    if (touched && error) {
      return error
    }
  }

  return (
    <TextField
      type='text'
      id='standard-required'
      label='standard'
      error={meta.touched && meta.error && true}
      helperText={_renderHelperText()}
      {...field}
      {...rest}
    />
  )
}

export default InputField
