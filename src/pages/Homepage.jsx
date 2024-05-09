import { 
  Heading,
  Text,
  useColorModeValue,Circle,
  Flex,Container,Stack,Button,Icon,Box,Image,
} from '@chakra-ui/react'
import React from 'react'
import { Layout } from '../components/Layout'
import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom';
import ImagesGallery from '../components/Image-gallery/ImagesGallery';
import heroImage from '../images/heroimage.jpg';
import chatbotImage from '../images/chatbot.jpg';
import logoImage from '../images/logo.png';
import boyImage from '../images/boy.jpeg';
import leafImage from '../images/leaf.jpg';


export default function Homepage() {
  const {currentUser}= useAuth()
  const navigate = useNavigate()

  return (
    <Layout>
      
      {/*Hero Section */}
      <Container maxW={'5xl'}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}>

        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'80%'}>
          Free Online{' '}
        <Text as={'span'} color={'red.500'} >
          AI Image Generator
        </Text>
        <Box>
        <Text as={'span'} color={'blue.400'} display="block" fontSize="lg"fontWeight="bold">
        Welcome to Text2Pic, where imagination meets Education! 
        </Text>
        </Box>
        </Heading>

        <Text color={'gray.500'} maxW={'3xl'}fontSize="lg">
        Watch words come to life in vibrant illustrations, making English learning a delightful adventure!
        </Text>

        
      </Stack>
      </Container>

      {/*Hero Image */}
      <Container maxW={'7xl'}>
  <Stack>
      <Flex
        flex={1}
        justify={'center'}
        align={'center'}
        position={'relative'}
        w={'full'}>
         
      <Box
        position={'relative'}
        height={'400px'}
        rounded={'2xl'}
        boxShadow={'2xl'}
        width={'600px'}
        overflow={'hidden'}>

            <Image
              alt={'Hero Image'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src={heroImage}
            />
            <Image/>
          </Box>
        </Flex>
        </Stack>
      </Container>

      {/*Introducing text2pic */}
      <Container maxW={'7xl'}>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}>

       <Flex
          flexDirection={'column'}
          justifyContent={'space-around'}
          alignItems={'center'}
          width={'10px'} 
          bg={useColorModeValue('transparent', 'transparent')} 
        >
          <Circle size={'10px'} bg={'red.400'} mb={2} />
          <Circle size={'10px'} bg={'red.400'} mb={2} />
          <Circle size={'10px'} bg={'red.400'} mb={2} />
          <Circle size={'10px'} bg={'red.400'} mb={2} />
          <Circle size={'10px'} bg={'red.400'} mb={2} />
          <Circle size={'10px'} bg={'red.400'} mb={2} />
        </Flex>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}>
          
          <Box
            position={'relative'}
            height={'300px'}
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
              src={logoImage}
            />
          </Box>
        </Flex>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              >
              Introducing
            </Text>
            <br />
            <Text as={'span'} color={'red.400'}>
              Text2Pic
            </Text>
          </Heading>
          <Text color={'gray.500'} fontSize="lg">
          Text2Pic is an innovative tool designed to enhance children's English learning experience.<br/>
          Text2Pic allows children to create their own image-based vocabulary, categorize them, and access them anytime, anywhere. 
          Best of all, it's completely free! <br/>
          Start exploring the world of language through captivating images with Text2Pic today!
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: 'column', sm: 'row' }}>
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              colorScheme={'red'}
              bg={'red.400'}
              _hover={{ bg: 'red.500' }}
              onClick={() => navigate('/login')}>
              Get Started
            </Button>
          </Stack>
        </Stack>
      </Stack>
      </Container>

      {/* Interactive chatbot */ }
      <Container maxW={'7xl'}>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}>
                  <Flex
          flexDirection={'column'}
          justifyContent={'space-around'}
          alignItems={'center'}
          width={'10px'} 
          bg={useColorModeValue('transparent', 'transparent')} 
        >
          <Circle size={'10px'} bg={'blue.400'} mb={2} />
          <Circle size={'10px'} bg={'blue.400'} mb={2} />
          <Circle size={'10px'} bg={'blue.400'} mb={2} />
          <Circle size={'10px'} bg={'blue.400'} mb={2} />
          <Circle size={'10px'} bg={'blue.400'} mb={2} />
          <Circle size={'10px'} bg={'blue.400'} mb={2} />
        </Flex>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>

          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              >
              Interactive Chatbot
            </Text>
            <br />
            <Text as={'span'} color={'blue.400'}>
            Making communication effortless!
            </Text>
          </Heading>
          <Text color={'gray.500'} fontSize="lg">
          If you feel like creating your own image instead of using one of our 140+ million stock images, 
          you can certainly do that with our text-to-image AI.
          <br/>
          Thanks to artificial intelligence, 
          you now have the power to turn your words and ideas into images!   
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
            height={'500px'}
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
              src={chatbotImage}
            />
            <Image/>
          </Box>
        </Flex>
        
      </Stack>
      
      
      </Container>

      {/*Easy-to-use */}
      <Container maxW={'7xl'}>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}>

        <Flex
          flexDirection={'column'}
          justifyContent={'space-around'}
          alignItems={'center'}
          width={'10px'} 
          bg={useColorModeValue('transparent', 'transparent')} 
        >
          <Circle size={'10px'} bg={'orange.300'} mb={2} />
          <Circle size={'10px'} bg={'orange.300'} mb={2} />
          <Circle size={'10px'} bg={'orange.300'} mb={2} />
          <Circle size={'10px'} bg={'orange.300'} mb={2} />
          <Circle size={'10px'} bg={'orange.300'} mb={2} />
          <Circle size={'10px'} bg={'orange.300'} mb={2} />
        </Flex>

        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}>
          
          <Box
            position={'relative'}
            height={'500px'}
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
              src={boyImage}
            />
          </Box>
        </Flex>

        

        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              >
              Easy-to-use
            </Text>
            <br />
            <Text as={'span'} color={'orange.300'}>
            Text to Image
            </Text>
          </Heading>
          <Text color={'gray.500'} fontSize="lg">
          Say goodbye to complicated instructions and external tools. 
          <br/> With our easy-to-use interface, children can learn English through the power of images. 
          <br/> Simply express your idea in simple terms and navigate through our preset styles, colors, and camera angles to create captivating images. 
          <br/> Spark creativity, reinforce vocabulary, and make learning fun with our intuitive image generation tool. 
          <br/> <br/> Let's make English learning an immersive and enjoyable experience for kids!
          </Text>
          
        </Stack>

      </Stack>
      </Container>

      {/* Generate photorealistic pictures */ }
      <Container maxW={'7xl'}>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}>
          <Flex
          flexDirection={'column'}
          justifyContent={'space-around'}
          alignItems={'center'}
          width={'10px'} 
          bg={useColorModeValue('transparent', 'transparent')} 
        >
          <Circle size={'10px'} bg={'green.400'} mb={2} />
          <Circle size={'10px'} bg={'green.400'} mb={2} />
          <Circle size={'10px'} bg={'green.400'} mb={2} />
          <Circle size={'10px'} bg={'green.400'} mb={2} />
          <Circle size={'10px'} bg={'green.400'} mb={2} />
          <Circle size={'10px'} bg={'green.400'} mb={2} />
        </Flex>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              >
              Generate
            </Text>
            <br />
            <Text as={'span'} color={'green.400'}>
            photorealistic pictures
            </Text>
          </Heading>
          <Text color={'gray.500'} fontSize="lg">
          Experience the magic of turning your imagination into reality with our advanced photo generation technology. 
          <br/> Create stunning, lifelike images that look like they were captured by a professional photographer. 
          <br/> Whether you're designing for a project, enhancing your presentations, or simply unleashing your creativity, our tool empowers you to generate photorealistic pictures with ease. 
          <br/> <br/> Dive into a world of endless possibilities and bring your ideas to life with just a few clicks.
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
            height={'500px'}
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
              src={leafImage}
            />
            <Image/>
          </Box>
          
        </Flex>

        
      </Stack>
       
      </Container>

      {/* GALLERY */}
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
            fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              >
              Visit our Gallery
            </Text>
            <br />
            
          </Heading>
        </Stack>
      </Stack>
      <ImagesGallery/>  
       </Container>


    </Layout>
  )
}

{/* STYLES*/}
export const Blob = (props) => {
  return (
    <Icon
      width={'100%'}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  );
};




