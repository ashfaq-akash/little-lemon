import React from 'react'
import {
  Container,
  Grid,
  Card,
  Typography,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from '@mui/material'
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining'

const foods = [
  {
    getImageSrc: () => require('../assets/images/salad.png'),
    title: 'Greek salad',
    price: '$12.99',
    description:
      'The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    orderText: 'order now',
    icons: <DeliveryDiningIcon />,
  },
  {
    getImageSrc: () => require('../assets/images/bruchetta.png'),
    title: 'Bruschetta',
    price: '$5.99',
    description:
      'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
    orderText: 'order now',
    icons: <DeliveryDiningIcon />,
  },
  {
    getImageSrc: () => require('../assets/images/dessert.png'),
    title: 'Lemon Dessert',
    price: '$5.00',
    description:
      'This comes straight from grandma recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
    orderText: 'order now',
    icons: <DeliveryDiningIcon />,
  },
]

function Specials() {
  return (
    <Container
      maxWidth='1280px'
      sx={{ backgroundColor: '#3d5afe', height: '75vh', marginTop: '-10px' }}
    >
      <div id='menu-section'>
        <Typography
          variant='h2'
          sx={{
            paddingTop: '25px',
            marginLeft: '35px',
            color: '#ff1744',
          }}
          gutterBottom
        >
          This weeks specials!
        </Typography>
      </div>
      <Grid container spacing={4} justifyContent='center'>
        {foods.map((food) => (
          <Grid item key={food.title} xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                width: '420px',
                marginTop: '50px',
                marginLeft: '50px',
                alignContent: 'center',
              }}
              elevation={4}
            >
              <CardMedia
                component='img'
                alt={food.title}
                height='200'
                image={food.getImageSrc()}
              />
              <CardContent>
                <Typography
                  variant='h6'
                  component='h2'
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <span>{food.title}</span>
                  <span>{food.price}</span>
                </Typography>
                <Typography variant='body2' sx={{ marginTop: '25px' }}>
                  {food.description}
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: 'auto',
                }}
              >
                <Button
                  variant='contained'
                  color='primary'
                  endIcon={food.icons}
                >
                  {food.orderText}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Specials
