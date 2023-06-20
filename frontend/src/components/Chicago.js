import React from 'react'
import { Container, Grid, Typography, Box } from '@mui/material'
import logo from '../assets/images/Logo3.png'
import banner from '../assets/images/banner2.png'

function Chicago() {
  return (
    <Container maxWidth='1280px' sx={{ bgcolor: '#3d5afe', height: '50vh' }}>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={6}>
          <div
            id='aboutus-section'
            style={{
              display: 'flex',
              alignItems: 'center',
              marginTop: '35px',
              marginLeft: '15px',
            }}
          >
            <img src={logo} alt='Logo' noWrap />
            {/* Add more logo elements or customize the logo styling */}
          </div>
          <Box
            sx={{
              width: 500,
              height: 100,
              marginLeft: '15px',
              paddingTop: '20px',
            }}
          >
            <Typography variant='h6' color='white'>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet. Amet minim mollit
              non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <img src={banner} alt='Banner' height='350px' width='447px' />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Chicago
