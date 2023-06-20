import React from 'react'
import {
  Container,
  Typography,
  Link,
  Grid,
  Box,
  List,
  ListItem,
} from '@mui/material'
import { Facebook, Instagram, Twitter, YouTube } from '@mui/icons-material'
import logo from '../assets/images/Logo2.png'
import { Link as RouterLink } from 'react-router-dom'

function Footer() {
  const handleClick = (anchor) => (event) => {
    event.preventDefault()
    const id = `${anchor}-section`
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }
  return (
    <Container
      id='footer-section'
      maxWidth='1280px'
      sx={{ bgcolor: 'grey', height: '25vh' }}
    >
      <Grid container spacing={4}>
        <Grid item xs={12} sm={3}>
          <div
            style={{ display: 'flex', alignItems: 'center', marginTop: '35px' }}
          >
            <img src={logo} alt='Logo' noWrap style={{ marginRight: '10px' }} />
            {/* Add more logo elements or customize the logo styling */}
          </div>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography variant='h6' color='#3d5afe'>
            Navigation
          </Typography>
          <List>
            <ListItem disablePadding>
              <Link
                component={RouterLink}
                to='/'
                underline='hover'
                onClick={handleClick('home')}
                sx={{ my: 0.25, color: 'white' }}
              >
                Home
              </Link>
            </ListItem>
            <ListItem disablePadding>
              <Link
                component={RouterLink}
                to='/'
                underline='hover'
                onClick={handleClick('aboutus')}
                sx={{ my: 0.25, color: 'white' }}
              >
                About
              </Link>
            </ListItem>
            <ListItem disablePadding>
              <Link
                component={RouterLink}
                to='/'
                underline='hover'
                onClick={handleClick('menu')}
                sx={{ my: 0.5, color: 'white' }}
              >
                Menu
              </Link>
            </ListItem>
            <ListItem disablePadding>
              <Link
                component={RouterLink}
                to='/'
                underline='hover'
                // onClick={handleClick('home')}
                sx={{ my: 0.25, color: 'white' }}
              >
                Order Online
              </Link>
            </ListItem>
            <ListItem disablePadding>
              <Link
                component={RouterLink}
                to='/'
                underline='hover'
                // onClick={handleClick('home')}
                sx={{ my: 0.25, color: 'white' }}
              >
                Login
              </Link>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography variant='h6' color='#3d5afe' gutterBottom>
            Contact Us
          </Typography>
          <Typography variant='body2' color='#212121'>
            20 Linden Aveneue,Punchbowl-2196,Australia
          </Typography>
          <Typography variant='body2' color='#212121'>
            Email: ashfaq.akash55@gmail.com
          </Typography>
          <Typography variant='body2' color='#212121'>
            Phone: 0424733228
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography variant='h6' color='#3d5afe' gutterBottom>
            Follow Us
          </Typography>
          <Link href='https://www.facebook.com/' color='#01579b'>
            <Facebook />
          </Link>
          <Link
            href='https://www.instagram.com/'
            color='#ff7043'
            sx={{ pl: 1, pr: 1 }}
          >
            <Instagram />
          </Link>
          <Link
            href='https://www.twitter.com/'
            color='#81d4fa'
            sx={{ pl: 1, pr: 1 }}
          >
            <Twitter />
          </Link>
          <Link href='https://www.youtube.com/' color='#bf360c'>
            <YouTube />
          </Link>
        </Grid>
      </Grid>
      <Box mt={5}>
        <Typography variant='body2' color='text.secondary' align='center'>
          {'Copyright © '}
          <Link color='inherit' href='https://your-website.com/'>
            Ashfaq Ahmad
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Box>
    </Container>
  )
}

export default Footer
