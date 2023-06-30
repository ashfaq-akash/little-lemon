import React from 'react'
import { Button, Image } from 'react-bootstrap'
import logo from '../assets/images/Logo4.png'
import banner from '../assets/images/banner.jpg'
import { Container, Grid, Typography, Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function Main() {
  const navigate = useNavigate()

  function handleClick() {
    navigate('/table-booking')
  }

  return (
    <Container
      component='main'
      maxWidth='1280px'
      sx={{
        position: 'relative',
        backgroundColor: '#1a237e',
        height: '75vh',
      }}
    >
      <Grid container>
        <Grid item xs={12} sm={6}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginTop: '100px',
              marginLeft: '200px',
            }}
          >
            <img src={logo} alt='Logo' noWrap />
            {/* Add more logo elements or customize the logo styling */}
          </div>
          <Box
            sx={{
              width: 500,
              height: 100,
              marginLeft: '200px',
              paddingTop: '50px',
            }}
          >
            <Typography variant='h6' color='white'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>

            <div className='mt-4'>
              <Button variant='warning' size='lg' onClick={handleClick}>
                Reserve table
              </Button>

              <Button variant='info' size='lg' className='ms-2'>
                Order Online
              </Button>
            </div>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}
        >
          <div style={{ marginTop: '100px' }}>
            <Image
              src={banner}
              alt='banner'
              noWrap
              rounded
              style={{ height: '650px', width: '600px' }}
            />
          </div>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Main
