import { Heading, Container, Stack,Text,Flex,Box, Image } from '@chakra-ui/react'
import React from 'react'
import { Layout } from '../components/Layout'
import dashboardImage from '../images/dashboard.jpg';


export default function ProtectedPage() {
  return (
    <Layout>
      
      <Container maxW={'7xl'}>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}>
                  
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>

          <Heading
            lineHeight={1.1}
            fontWeight={600}
            >
            <Text as={'span'} color={'red.400'}fontSize={{ base: '2xl', sm: '3xl', lg: '4xl' }}>
              How it works
            </Text>
            <br />

            <Text as={'span'} color={'blue.400'}fontSize={{ base: 'xl', sm: 'xl', lg: '2xl' }}>
            Engage with our chatbot powered by OpenAI API
            </Text>

          </Heading>

          <Text color={'gray.500'} fontSize="lg">
          1. Input your desired image description.
          <br/> 2. The chatbot interprets and generates a relevant image.
          <br/> 3. Review and refine until satisfied.
          <br/> 4. Download your high-quality image, tailored to your specifications!
          </Text>  
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}>
    
          <Box
            position={'relative'}
            height={'325px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}>

            <Image
              alt={'Hero Image'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src={dashboardImage}
            />
            <Image/>
          </Box>
        </Flex>
        
      </Stack>
      
      
      </Container>
    </Layout>
  )
}
