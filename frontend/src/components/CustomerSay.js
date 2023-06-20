import React from 'react'
import {
  Container,
  Typography,
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Box,
  Rating,
} from '@mui/material'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import review1Image from '../assets/images/review.png'

const reviews = [
  {
    image: review1Image,
    name: 'Leo',
    position: 'Lead Designer',
    rating: 4.5,
    title: 'It was a very good experience',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.',
  },
  {
    image: review1Image,
    name: 'John',
    position: 'Product Manager',
    rating: 5,
    title: 'Great service and delicious food',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.',
  },
  {
    image: review1Image,
    name: 'Emily',
    position: 'Customer',
    rating: 3.5,
    title: 'Decent experience overall',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.',
  },
  {
    image: review1Image,
    name: 'Sarah',
    position: 'Marketing Executive',
    rating: 4,
    title: 'Excellent food and service',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.',
  },
]

function CustomerSay() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    appendDots: (dots) => (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        {dots.map((dot, index) => (
          <span
            key={index}
            style={{
              backgroundColor: 'red', // Change this to the desired color
              borderRadius: '50%',
              width: '10px',
              height: '10px',
              display: 'inline-block',
              margin: '0 5px',
              cursor: 'pointer',
            }}
            // onClick={() => dot.click()}
          />
        ))}
      </Box>
    ),
  }

  return (
    <Container
      maxWidth='1080px'
      sx={{ backgroundColor: '#1a237e', height: '75vh' }}
    >
      <div id='testimonial-section'>
        <Typography
          variant='h2'
          sx={{ paddingTop: '25px', textAlign: 'center', color: '#009688' }}
        >
          What Our Clients Say About Us
        </Typography>
      </div>
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div key={index}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                maxWidth: 450,
                margin: '0 auto', // Center the cards horizontally
                marginTop: '100px',
              }}
            >
              <CardHeader
                avatar={<Avatar alt={review.name} src={review.image} />}
                title={review.name}
                subheader={review.position}
                action={
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Rating value={review.rating} precision={0.5} readOnly />
                  </Box>
                }
              />
              <CardContent>
                <Box>
                  <Typography variant='h5' sx={{ mb: '8px' }}>
                    {review.title}
                  </Typography>
                  <Typography>{review.description}</Typography>
                </Box>
              </CardContent>
            </Card>
          </div>
        ))}
      </Slider>
    </Container>
  )
}

export default CustomerSay
