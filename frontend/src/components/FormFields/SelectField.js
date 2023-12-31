import React from 'react'
import PropTypes from 'prop-types'
import { useField } from 'formik'
import {
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  FormHelperText,
} from '@mui/material'

function SelectField(props) {
  const { label, data, ...rest } = props
  const [field, meta] = useField(props)
  const { value: selectedValue, name } = field
  const { touched, error } = meta
  const isError = touched && error && true

  function renderHelperText() {
    if (isError) {
      return <FormHelperText>{error}</FormHelperText>
    }
    return null
  }

  return (
    <FormControl {...rest} error={isError}>
      <InputLabel>{label}</InputLabel>
      <Select {...field} value={selectedValue || ''}>
        {data.map((item, index) => (
          <MenuItem key={`${name}-${index}`} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
      {renderHelperText()}
    </FormControl>
  )
}

SelectField.defaultProps = {
  data: [],
}

SelectField.propTypes = {
  data: PropTypes.array.isRequired,
}

export default SelectField
