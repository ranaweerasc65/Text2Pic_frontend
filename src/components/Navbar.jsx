import {
  Box,
  HStack,
  IconButton,
  Spacer,
  Image,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import React from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import Navlink from './Navlink'
import logo from '../images/logo_navbar.png';

import { Link as RouterLink } from 'react-router-dom';


export function Navbar() {
  const { toggleColorMode } = useColorMode()

  return (
    <Box
      borderBottom='2px'
      borderBottomColor={useColorModeValue('gray.100', 'gray.700')}
      mb={4}
    >
      <HStack py={4} justifyContent='flex-end' maxW='container.lg' mx='auto'>

        <RouterLink to='/'>
          <Image w="100px" src={logo} alt="Company Logo" />
        </RouterLink>
        
        <Spacer />

        <Navlink to='/login' name='Login' />
        <Navlink to='/register' name='Register' />
        <Navlink to='/profile' name='Profile' />
        <Navlink to='/dashboard' name='Dashboard' />
        <Navlink
          to='/logout'
          name='Logout'
          onClick={async e => {
            e.preventDefault()
            // handle logout
            alert('logout user')
          }}
        />
        <IconButton
          variant='outline'
          icon={useColorModeValue(<FaSun />, <FaMoon />)}
          onClick={toggleColorMode}
          aria-label='toggle-dark-mode'
        />
      </HStack>
    </Box>
  )
}
