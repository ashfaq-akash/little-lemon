import { AppBar, Toolbar, Link } from '@mui/material'
import Button from 'react-bootstrap/Button'
import React from 'react'
import logo from '../assets/images/Logo.png'
import { Link as RouterLink } from 'react-router-dom'

const Header = () => {
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
    <AppBar position='fixed'>
      <Toolbar sx={{ backgroundColor: '#1a237e' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt='Logo' noWrap style={{ marginRight: '10px' }} />
          {/* Add more logo elements or customize the logo styling */}
        </div>
        <div style={{ marginLeft: 'auto', marginRight: '50px' }}>
          <Link
            component={RouterLink}
            to='/'
            underline='hover'
            onClick={handleClick('home')}
            sx={{ my: 1, mx: 1.5, color: 'white' }}
          >
            Home
          </Link>
          <Link
            component={RouterLink}
            to='/about-us'
            underline='hover'
            onClick={handleClick('aboutus')}
            sx={{ my: 1, mx: 1.5, color: 'white' }}
          >
            About
          </Link>
          <Link
            component={RouterLink}
            to='/menu'
            underline='hover'
            sx={{ my: 1, mx: 1.5, color: 'white' }}
            onClick={handleClick('menu')}
          >
            Menu
          </Link>
          <Link
            component={RouterLink}
            to='/order-online'
            underline='hover'
            sx={{ my: 1, mx: 1.5, color: 'white' }}
            onClick={handleClick('footer')}
          >
            Contact
          </Link>
          <Button href='#' variant='primary' className='ms-2'>
            Login
          </Button>
          {/* Add more components, such as buttons or icons, on the right side */}
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Header
