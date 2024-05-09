import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  useColorModeValue,
  HStack,
  Avatar,
  AvatarBadge,
  IconButton,
  Center,chakra, Container, Heading,
} from '@chakra-ui/react';
import { SmallCloseIcon } from '@chakra-ui/icons';
import React from 'react'
import { Layout } from '../components/Layout'
import { useAuth } from '../contexts/AuthContext'

export default function Profilepage() {
  const { currentUser } = useAuth()
  return (
    <Layout>
      
      {/*
      <Container maxW='container.lg' overflowX='auto' py={4}>
        <chakra.pre p={4}>
          {currentUser && <pre> {JSON.stringify(currentUser, null, 2)}</pre>}
        </chakra.pre>
      </Container>

       */}
      
      <Flex
  minH={'100vh'}
  align={'center'}
  justify={'center'}
  bg={useColorModeValue('gray.50', 'gray.800')}
>
  <Stack
    spacing={4}
    w={'full'}
    maxW={'md'}
    bg={useColorModeValue('white', 'gray.700')}
    rounded={'xl'}
    boxShadow={'lg'}
    p={6}
    my={12}
  >
    <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
      User Profile
    </Heading>
    
    <FormControl id="userName" isRequired>
      <FormLabel>User name</FormLabel>
      <Input
        placeholder="UserName"
        _placeholder={{ color: 'gray.500' }}
        type="text"
        value={currentUser && currentUser.displayName}
      />
    </FormControl>
    <FormControl id="email" isRequired>
      <FormLabel>Email address</FormLabel>
      <Input
        placeholder="your-email@example.com"
        _placeholder={{ color: 'gray.500' }}
        type="email"
        value={currentUser && currentUser.email}
      />
    </FormControl>
    <FormControl id="password" isRequired>
      <FormLabel>Password</FormLabel>
      <Input
        placeholder="password"
        _placeholder={{ color: 'gray.500' }}
        type="password"
      />
    </FormControl>
    <Stack spacing={6} direction={['column', 'row']}>
      <Button
        bg={'red.400'}
        color={'white'}
        w="full"
        _hover={{
          bg: 'red.500',
        }}
      >
        Cancel
      </Button>
      <Button
        bg={'blue.400'}
        color={'white'}
        w="full"
        _hover={{
          bg: 'blue.500',
        }}
      >
        Submit
      </Button>
    </Stack>
  </Stack>
</Flex>

    </Layout>
  )
}