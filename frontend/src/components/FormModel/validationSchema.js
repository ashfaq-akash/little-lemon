import * as Yup from 'yup'
import reservationFormModel from './reservationFormModel'

const {
  formField: {
    date,
    time,
    numberOfPeople,
    tableNumber,
    firstName,
    lastName,
    phoneNumber,
    email,
  },
} = reservationFormModel

export default [
  Yup.object().shape({
    [date.name]: Yup.string().required(`${date.requiredErrorMsg}`),
    [time.name]: Yup.string().required(`${time.requiredErrorMsg}`),
    [numberOfPeople.name]: Yup.number()
      .integer('Must be an integer')
      .min(1, 'Must be at least 1')
      .required(`${numberOfPeople.requiredErrorMsg}`),
    [tableNumber.name]: Yup.number().required(
      `${tableNumber.requiredErrorMsg}`
    ),
    [firstName.name]: Yup.string().required(`${firstName.requiredErrorMsg}`),
    [lastName.name]: Yup.string().required(`${lastName.requiredErrorMsg}`),
    [phoneNumber.name]: Yup.string().required(
      `${phoneNumber.requiredErrorMsg}`
    ),
    [email.name]: Yup.string()
      .email('Invalid email')
      .required(`${email.requiredErrorMsg}`),
  }),
]
