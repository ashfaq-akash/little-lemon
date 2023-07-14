import { Typography, List, ListItem, ListItemText, Button } from '@mui/material'
import moment from 'moment'

const BookingForm = (props) => {
  const handleBack = () => {
    props.prev(props.data)
  }

  const handleSubmit = (values) => {
    props.next(values, true)
  }

  const formattedDate = moment(props.data.date).format('DD/MM/YYYY')
  const formattedTime = moment(props.data.time).format('HH:mm')

  return (
    <>
      <Typography variant='overline' sx={{ marginLeft: '15px' }}>
        Booking Details
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary='First Name' secondary={props.data.firstName} />
        </ListItem>
        <ListItem>
          <ListItemText primary='Last Name' secondary={props.data.lastName} />
        </ListItem>
        <ListItem>
          <ListItemText primary='Email' secondary={props.data.email} />
        </ListItem>
        <ListItem>
          <ListItemText
            primary='Table Number'
            secondary={props.data.tableNumber}
          />
        </ListItem>
        <ListItem>
          <ListItemText primary='Date' secondary={formattedDate} />
        </ListItem>
        <ListItem>
          <ListItemText primary='Time' secondary={formattedTime} />
        </ListItem>
      </List>
      <Button
        variant='contained'
        onClick={handleBack}
        sx={{ marginRight: '5px' }}
      >
        Back
      </Button>
      <Button variant='contained' type='submit' onClick={handleSubmit}>
        Submit
      </Button>
    </>
  )
}

export default BookingForm
