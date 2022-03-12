import React from 'react'
import {
  Box,
  Container,
  Heading,
  Link,
  Grid,
  Image,
  useColorMode,
} from '@chakra-ui/react'

const upcommingOne = '/assets/upcomming-one.png'
const upcommingTwo = '/assets/upcomming-two.jpg'
const upcommingThree = '/assets/upcomming-three.jpg'
const upcommingFour = '/assets/upcomming-four.jpg'

const Upcomming = () => {
  const { colorMode } = useColorMode()

  return (
    <Box mt='20'>
      <Container maxW='container.xl'>
        <Box
          mb='7'
          d='flex'
          alignItems='center'
          justifyContent='space-between'
          flexDir={{
            sm: 'column',
            md: 'row',
            lg: 'row',
            xl: 'row',
            base: 'column',
          }}
        >
          <Box>
            <Heading alignItems='center' as='h3' size='lg'>
              رویدادهای آنلاین آینده
            </Heading>
          </Box>
          <Box>
            <Link fontWeight='semibold' color='teal.500'>
              رویدادهای بیشتری را کاوش کنید
            </Link>
          </Box>
        </Box>

        <Grid
          templateColumns={{
            sm: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(4, 1fr)',
            xl: 'repeat(4, 1fr)',
            base: 'repeat(1, 1fr)',
          }}
          gap='6'
        >
          <Box width='100%' align='right'>
            <Box position='relative'>
              <Image src={upcommingOne} alt='brand' w='100%' />

              <Box
                position='absolute'
                d='flex'
                alignItems='center'
                borderRadius='5px'
                top='0'
                background='#fff'
                fontSize='sm'
                m='2'
                px='3'
                py='1'
              >
                <svg
                  data-swarm-icon='true'
                  width='18'
                  height='18'
                  fill='#757575'
                  ml='4'
                  d='block'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M11.5 4.5A1.5 1.5 0 0113 6v1.4L16 5v8l-3-2.4V12a1.5 1.5 0 01-1.5 1.5h-8A1.5 1.5 0 012 12V6a1.5 1.5 0 011.5-1.5h8z'></path>
                </svg>

                <Box mr='2' color='#757575' fontWeight='semibold'>
                  رویداد آنلاین
                </Box>
              </Box>
            </Box>

            <Box mt={'3'} color={'#877457'} fontWeight={'semibold'}>
              یکشنبه، 13 مارس، ساعت 1:30 بامداد اول وقت
            </Box>

            <Heading
              alignItems={'center'}
              as={'h6'}
              mt='1'
              fontWeight={'bold'}
              size='sm'
            >
              قهوه یا نوشیدنی خود را بخورید و با یکدیگر آشنا شوید!
            </Heading>

            <Box my={'3'} size='xs'>
              دسی در اینجا اجتماعی است
            </Box>

            <Box d='flex' alignItems={'center'} justifyContent='space-between'>
              <Box d={'flex'} alignItems='center'>
                <Image
                  src='https://secure-content.meetupstatic.com/images/classic-member/309182925/30x30.jpg?w=30'
                  alt='Segun Adebayo'
                  borderRadius={'full'}
                  border='1px'
                  borderColor={'gray.200'}
                  boxSize='35px'
                  mr={'-8px'}
                />

                <Image
                  src='https://secure-content.meetupstatic.com/images/classic-member/309182925/30x30.jpg?w=30'
                  alt='Segun Adebayo'
                  borderRadius={'full'}
                  border='1px'
                  borderColor={'gray.200'}
                  boxSize='35px'
                  mr={'-8px'}
                />

                <Image
                  src='https://secure-content.meetupstatic.com/images/classic-member/309182925/30x30.jpg?w=30'
                  alt='Segun Adebayo'
                  borderRadius={'full'}
                  border='1px'
                  borderColor={'gray.200'}
                  boxSize='35px'
                  mr={'-8px'}
                />

                <Box mr={'16px'} color='#757575'>
                  91
                </Box>
              </Box>

              <Box>
                <svg
                  data-swarm-icon='true'
                  height='18'
                  width='18'
                  viewBox='0 0 18 18'
                  fill={colorMode === 'light' ? '#000' : '#fff'}
                >
                  <path d='M8 3.415L6.707 4.707a1 1 0 01-1.414-1.414l3.003-3a1 1 0 011.414 0l2.997 3a1 1 0 11-1.414 1.414L10 3.413V9a1 1 0 11-2 0V3.415zM13.5 9a1 1 0 010-2H15a1 1 0 011 1v7.5a1 1 0 01-1 1H3a1 1 0 01-1-.989l-.085-7.5a1 1 0 011-1.011H4.55a1 1 0 110 2h-.624l.063 5.5H14V9h-.5z'></path>
                </svg>
              </Box>
            </Box>
          </Box>

          <Box width='100%' align='right'>
            <Box position='relative'>
              <Image src={upcommingTwo} alt='brand' w='100%' />

              <Box
                position='absolute'
                d='flex'
                alignItems='center'
                borderRadius='5px'
                top='0'
                background='#fff'
                fontSize='sm'
                m='2'
                px='3'
                py='1'
              >
                <svg
                  data-swarm-icon='true'
                  width='18'
                  height='18'
                  fill='#757575'
                  ml='4'
                  d='block'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M11.5 4.5A1.5 1.5 0 0113 6v1.4L16 5v8l-3-2.4V12a1.5 1.5 0 01-1.5 1.5h-8A1.5 1.5 0 012 12V6a1.5 1.5 0 011.5-1.5h8z'></path>
                </svg>

                <Box mr='2' color='#757575' fontWeight='semibold'>
                  رویداد آنلاین
                </Box>
              </Box>
            </Box>

            <Box mt={'3'} color={'#877457'} fontWeight={'semibold'}>
              دوشنبه، 21 مارس، ساعت 2:00 بعد از ظهر اول وقت
            </Box>

            <Heading
              alignItems={'center'}
              as={'h6'}
              mt='1'
              fontWeight={'bold'}
              size='sm'
            >
              یوگا صبحگاهی
            </Heading>

            <Box my={'3'} size='xs'>
              گروه ملاقات یوگا صبح نیویورک
            </Box>

            <Box d='flex' alignItems={'center'} justifyContent='space-between'>
              <Box d={'flex'} alignItems='center'>
                <Image
                  src='https://secure-content.meetupstatic.com/images/classic-member/309182925/30x30.jpg?w=30'
                  alt='Segun Adebayo'
                  borderRadius={'full'}
                  border='1px'
                  borderColor={'gray.200'}
                  boxSize='35px'
                  mr={'-8px'}
                />

                <Image
                  src='https://secure-content.meetupstatic.com/images/classic-member/309182925/30x30.jpg?w=30'
                  alt='Segun Adebayo'
                  borderRadius={'full'}
                  border='1px'
                  borderColor={'gray.200'}
                  boxSize='35px'
                  mr={'-8px'}
                />

                <Image
                  src='https://secure-content.meetupstatic.com/images/classic-member/309182925/30x30.jpg?w=30'
                  alt='Segun Adebayo'
                  borderRadius={'full'}
                  border='1px'
                  borderColor={'gray.200'}
                  boxSize='35px'
                  mr={'-8px'}
                />

                <Box mr={'16px'} color='#757575'>
                  16
                </Box>
              </Box>

              <Box>
                <svg
                  data-swarm-icon='true'
                  height='18'
                  width='18'
                  viewBox='0 0 18 18'
                  fill={colorMode === 'light' ? '#000' : '#fff'}
                >
                  <path d='M8 3.415L6.707 4.707a1 1 0 01-1.414-1.414l3.003-3a1 1 0 011.414 0l2.997 3a1 1 0 11-1.414 1.414L10 3.413V9a1 1 0 11-2 0V3.415zM13.5 9a1 1 0 010-2H15a1 1 0 011 1v7.5a1 1 0 01-1 1H3a1 1 0 01-1-.989l-.085-7.5a1 1 0 011-1.011H4.55a1 1 0 110 2h-.624l.063 5.5H14V9h-.5z'></path>
                </svg>
              </Box>
            </Box>
          </Box>

          <Box width='100%' align='right'>
            <Box position='relative'>
              <Image src={upcommingThree} alt='brand' w='100%' />

              <Box
                position='absolute'
                d='flex'
                alignItems='center'
                borderRadius='5px'
                top='0'
                background='#fff'
                fontSize='sm'
                m='2'
                px='3'
                py='1'
              >
                <svg
                  data-swarm-icon='true'
                  width='18'
                  height='18'
                  fill='#757575'
                  ml='4'
                  d='block'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M11.5 4.5A1.5 1.5 0 0113 6v1.4L16 5v8l-3-2.4V12a1.5 1.5 0 01-1.5 1.5h-8A1.5 1.5 0 012 12V6a1.5 1.5 0 011.5-1.5h8z'></path>
                </svg>

                <Box mr='2' color='#757575' fontWeight='semibold'>
                  رویداد آنلاین
                </Box>
              </Box>
            </Box>

            <Box mt={'3'} color={'#877457'} fontWeight={'semibold'}>
              پنج‌شنبه، 17 مارس، ساعت 2:30 صبح اول وقت
            </Box>

            <Heading
              alignItems={'center'}
              as={'h6'}
              mt='1'
              fontWeight={'bold'}
              size='sm'
            >
              گروه ملاقات مسیحی برانکس
            </Heading>

            <Box my={'3'} size='xs'>
              گروه ملاقات مسیحی برانکس
            </Box>

            <Box d='flex' alignItems={'center'} justifyContent='space-between'>
              <Box d={'flex'} alignItems='center'>
                <Image
                  src='https://secure-content.meetupstatic.com/images/classic-member/309182925/30x30.jpg?w=30'
                  alt='Segun Adebayo'
                  borderRadius={'full'}
                  border='1px'
                  borderColor={'gray.200'}
                  boxSize='35px'
                  mr={'-8px'}
                />

                <Image
                  src='https://secure-content.meetupstatic.com/images/classic-member/309182925/30x30.jpg?w=30'
                  alt='Segun Adebayo'
                  borderRadius={'full'}
                  border='1px'
                  borderColor={'gray.200'}
                  boxSize='35px'
                  mr={'-8px'}
                />

                <Image
                  src='https://secure-content.meetupstatic.com/images/classic-member/309182925/30x30.jpg?w=30'
                  alt='Segun Adebayo'
                  borderRadius={'full'}
                  border='1px'
                  borderColor={'gray.200'}
                  boxSize='35px'
                  mr={'-8px'}
                />

                <Box mr={'16px'} color='#757575'>
                  95
                </Box>
              </Box>

              <Box>
                <svg
                  data-swarm-icon='true'
                  height='18'
                  width='18'
                  viewBox='0 0 18 18'
                  fill={colorMode === 'light' ? '#000' : '#fff'}
                >
                  <path d='M8 3.415L6.707 4.707a1 1 0 01-1.414-1.414l3.003-3a1 1 0 011.414 0l2.997 3a1 1 0 11-1.414 1.414L10 3.413V9a1 1 0 11-2 0V3.415zM13.5 9a1 1 0 010-2H15a1 1 0 011 1v7.5a1 1 0 01-1 1H3a1 1 0 01-1-.989l-.085-7.5a1 1 0 011-1.011H4.55a1 1 0 110 2h-.624l.063 5.5H14V9h-.5z'></path>
                </svg>
              </Box>
            </Box>
          </Box>

          <Box width='100%' align='right'>
            <Box position='relative'>
              <Image src={upcommingFour} alt='brand' w='100%' />

              <Box
                position='absolute'
                d='flex'
                alignItems='center'
                borderRadius='5px'
                top='0'
                background='#fff'
                fontSize='sm'
                m='2'
                px='3'
                py='1'
              >
                <svg
                  data-swarm-icon='true'
                  width='18'
                  height='18'
                  fill='#757575'
                  ml='4'
                  d='block'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M11.5 4.5A1.5 1.5 0 0113 6v1.4L16 5v8l-3-2.4V12a1.5 1.5 0 01-1.5 1.5h-8A1.5 1.5 0 012 12V6a1.5 1.5 0 011.5-1.5h8z'></path>
                </svg>

                <Box mr='2' color='#757575' fontWeight='semibold'>
                  رویداد آنلاین
                </Box>
              </Box>
            </Box>

            <Box mt={'3'} color={'#877457'} fontWeight={'semibold'}>
              چهارشنبه، 16 مارس، ساعت 11:30 عصر اول وقت
            </Box>

            <Heading
              alignItems={'center'}
              as={'h6'}
              mt='1'
              fontWeight={'bold'}
              size='sm'
            >
              جلسه کشف BNI مارس 2022
            </Heading>

            <Box my={'3'} size='xs'>
              جلسه گروه علاقه مندی شبکه کسب و کار NJ
            </Box>

            <Box d='flex' alignItems={'center'} justifyContent='space-between'>
              <Box d={'flex'} alignItems='center'>
                <Image
                  src='https://secure-content.meetupstatic.com/images/classic-member/309182925/30x30.jpg?w=30'
                  alt='Segun Adebayo'
                  borderRadius={'full'}
                  border='1px'
                  borderColor={'gray.200'}
                  boxSize='35px'
                  mr={'-8px'}
                />

                <Image
                  src='https://secure-content.meetupstatic.com/images/classic-member/309182925/30x30.jpg?w=30'
                  alt='Segun Adebayo'
                  borderRadius={'full'}
                  border='1px'
                  borderColor={'gray.200'}
                  boxSize='35px'
                  mr={'-8px'}
                />

                <Image
                  src='https://secure-content.meetupstatic.com/images/classic-member/309182925/30x30.jpg?w=30'
                  alt='Segun Adebayo'
                  borderRadius={'full'}
                  border='1px'
                  borderColor={'gray.200'}
                  boxSize='35px'
                  mr={'-8px'}
                />

                <Box mr={'16px'} color='#757575'>
                  134
                </Box>
              </Box>

              <Box>
                <svg
                  data-swarm-icon='true'
                  height='18'
                  width='18'
                  viewBox='0 0 18 18'
                  fill={colorMode === 'light' ? '#000' : '#fff'}
                >
                  <path d='M8 3.415L6.707 4.707a1 1 0 01-1.414-1.414l3.003-3a1 1 0 011.414 0l2.997 3a1 1 0 11-1.414 1.414L10 3.413V9a1 1 0 11-2 0V3.415zM13.5 9a1 1 0 010-2H15a1 1 0 011 1v7.5a1 1 0 01-1 1H3a1 1 0 01-1-.989l-.085-7.5a1 1 0 011-1.011H4.55a1 1 0 110 2h-.624l.063 5.5H14V9h-.5z'></path>
                </svg>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Container>
    </Box>
  )
}

export default Upcomming
