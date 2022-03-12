import React from 'react'
import { Box, Image, Container, Heading } from '@chakra-ui/react'

const deviceLeft = '/assets/device-left.webp'
const deviceRight = '/assets/device-right.webp'
const meetupLogo = '/assets/meetup-logo.svg'
const androidBtn = '/assets/Google_Play_Store_badge_EN.svg.png'
const iosBtn = '/assets/download-on-the-app-store.svg'

const Connected = () => {
  return (
    <Box my={'20'}>
      <Container maxW={'container.xl'}>
        <Box
          display={'flex'}
          pos='relative'
          justifyContent={'space-between'}
          alignItems='center'
        >
          <Box
            d={{
              sm: 'none',
              md: 'block',
              lg: 'block',
              xl: 'block',
              base: 'none',
            }}
          >
            <Image src={deviceLeft} alt='mobile' w={'260px'} />
          </Box>

          <Box pos={'relative'} mx='auto' align='center'>
            <Image w={'80px'} left='0' src={meetupLogo} alt='meetup logo' />
            <Heading as={'h6'} size='md' my={'7'}>
              وصل بمون. <br /> برنامه را دانلود کنید.
            </Heading>
            <Box d='flex'>
              <Image w={'180px'} p='5' src={androidBtn} alt='android btn' />
              <Image w={'180px'} p='5' src={iosBtn} alt='ios btn' />
            </Box>
          </Box>

          <Box
            d={{
              sm: 'none',
              md: 'block',
              lg: 'block',
              xl: 'block',
              base: 'none',
            }}
          >
            <Image src={deviceRight} alt='mobile' w={'260px'} />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Connected
