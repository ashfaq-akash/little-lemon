export default {
  formId: 'reservationForm',
  formField: {
    date: {
      name: 'date',
      label: 'Date*',
      required: true,
      requiredErrorMsg: 'Date is required',
    },
    time: {
      name: 'time',
      label: 'Time*',
      required: true,
      requiredErrorMsg: 'Time is required',
    },
    numberOfPeople: {
      name: 'numberOfPeople',
      label: 'Number of People*',
      required: true,
      requiredErrorMsg: 'Number of People is required',
    },
    tableNumber: {
      name: 'tableNumber',
      label: 'Table Number*',
      required: true,
      requiredErrorMsg: 'Table Number is required',
    },
    occasion: {
      name: 'occasion',
      label: 'Occasion',
    },
    firstName: {
      name: 'firstName',
      label: 'First Name*',
      required: true,
      requiredErrorMsg: 'First Name is required',
    },
    lastName: {
      name: 'lastName',
      label: 'Last Name*',
      required: true,
      requiredErrorMsg: 'Last Name is required',
    },
    phoneNumber: {
      name: 'phoneNumber',
      label: 'Phone Number',
      required: true,
      requiredErrorMsg: 'Phone Number is required',
    },
    email: {
      name: 'email',
      label: 'Email*',
      required: true,
      requiredErrorMsg: 'Email is required',
    },
    comment: {
      name: 'comment',
      label: 'Comment',
    },
  },
}
