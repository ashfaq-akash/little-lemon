import reservationFormModel from './reservationFormModel'

const {
  formField: {
    date,
    time,
    numberOfPeople,
    tableNumber,
    occasion,
    firstName,
    lastName,
    phoneNumber,
    email,
    comment,
  },
} = reservationFormModel

export default {
  [date.name]: '',
  [time.name]: '',
  [numberOfPeople.name]: '',
  [tableNumber.name]: '',
  [occasion.name]: '',
  [firstName.name]: '',
  [lastName.name]: '',
  [phoneNumber.name]: '',
  [email.name]: '',
  [comment.name]: '',
}
