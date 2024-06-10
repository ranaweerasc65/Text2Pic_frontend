import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
  } from '@chakra-ui/react'
  import React from 'react'
  import { Layout } from '../components/Layout'
  import { useAuth } from '../contexts/AuthContext'
  import pavith from '../images/Pavith.jpg'
  import supun from '../images/Supun.jpg'
  import sachini from '../images/Sachini.jpg'
  
  const Testimonial = ({ children }) => {
    return <Box>{children}</Box>;
  };
  
  const TestimonialContent = ({ children }) => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'lg'}
        p={8}
        rounded={'xl'}
        align={'center'}
        pos={'relative'}
        _after={{
          content: `""`,
          w: 0,
          h: 0,
          borderLeft: 'solid transparent',
          borderLeftWidth: 16,
          borderRight: 'solid transparent',
          borderRightWidth: 16,
          borderTop: 'solid',
          borderTopWidth: 16,
          borderTopColor: useColorModeValue('white', 'gray.800'),
          pos: 'absolute',
          bottom: '-16px',
          left: '50%',
          transform: 'translateX(-50%)',
        }}>
        {children}
      </Stack>
    );
  };
  
  const TestimonialHeading = ({ children }) => {
    return (
      <Heading as={'h3'} fontSize={'xl'}>
        {children}
      </Heading>
    );
  };
  
  const TestimonialText = ({ children }) => {
    return (
      <Text
        textAlign={'center'}
        color={useColorModeValue('gray.600', 'gray.400')}
        fontSize={'sm'}>
        {children}
      </Text>
    );
  };
  
  const TestimonialAvatar = ({ src, name, title }) => {
    return (
      <Flex align={'center'} mt={8} direction={'column'}>
        <Avatar src={src} alt={name} mb={2} />
        <Stack spacing={-1} align={'center'}>
          <Text fontWeight={600}>{name}</Text>
          <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
            {title}
          </Text>
        </Stack>
      </Flex>
    );
  };
  

  export default function MeetTheTeamPage() {
    const {currentUser}= useAuth()
    return (
      <Layout>
        
        <Box bg={useColorModeValue('gray.100', 'gray.700')}>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading>Meet the Team</Heading>
          <Text>Get to Know the Faces Behind Our Success</Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>

            {/* Supun */}
          <Testimonial>
            <TestimonialContent>
              
              <TestimonialText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                neque sed imperdiet nibh lectus feugiat nunc sem.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={supun}
              name={'Supun Thilakshana'}
              title={
                <div style={{ textAlign: 'center' }}>
                  Undergraduate <br /> Faculty of Engineering <br/> University of Ruhuna
                </div>
              }
            />
          </Testimonial>

           {/* Pavith */}
          <Testimonial>
            <TestimonialContent>
              
              <TestimonialText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                neque sed imperdiet nibh lectus feugiat nunc sem.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={pavith}
              name={'Tharuka Pavith'}
              title={
                <div style={{ textAlign: 'center' }}>
                  Undergraduate <br /> Faculty of Engineering <br/> University of Ruhuna
                </div>
              }
            />
          </Testimonial>

           {/* Sachini */}
          <Testimonial>
            <TestimonialContent>
              
              <TestimonialText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                neque sed imperdiet nibh lectus feugiat nunc sem.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={sachini}
              name={'Sachini Ranaweera'}
              title={
                <div style={{ textAlign: 'center' }}>
                  Undergraduate <br /> Faculty of Engineering <br/> University of Ruhuna
                </div>
              }
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  
  
  
      </Layout>
    )
  }
  

  {/*<TestimonialHeading>Job</TestimonialHeading> */}