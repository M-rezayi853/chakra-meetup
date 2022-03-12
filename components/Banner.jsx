import React from 'react'
import {
  Box,
  Image,
  Button,
  Container,
  Heading,
  Grid,
  Badge,
  FormControl,
  Input,
  IconButton,
  useColorMode,
  Text,
} from '@chakra-ui/react'
import { ArrowBackIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'

const brandLogo = '/assets/brand-logo.svg'
const illustration = '/assets/illustration.svg'
const imageOne = '/assets/image-one.jpg'
const imageTwo = '/assets/image-two.jpg'
const imageThree = '/assets/image-three.jpg'

const Banner = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
      <header>
        <Box
          d='flex'
          justifyContent='space-between'
          alignItems='center'
          ml='6'
          mr='6'
        >
          <Box>
            <Image src={brandLogo} alt='brand logo' boxSize='90px' />
          </Box>

          <Box d='flex'>
            <Button
              ml='3'
              pl={'2'}
              pr={'2'}
              colorScheme='gray.600'
              variant={'link'}
              fontSize='sm'
              d='flex'
              flexDir={'row'}
              alignItems='center'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 24 24'
                fill={colorMode === 'light' ? '#000' : '#fff'}
                data-src='https://secure.meetupstatic.com/next/images/design-system-icons/globe-outline.svg'
                xmlnsXlink='http://www.w3.org/1999/xlink'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M12 20.5C12.923 20.5 14.0148 19.8686 14.9564 18.2993C15.2318 17.8404 15.4801 17.3207 15.6931 16.75H8.30689C8.51988 17.3207 8.76824 17.8404 9.0436 18.2993C9.98519 19.8686 11.077 20.5 12 20.5ZM7.85918 15.25C7.62983 14.2559 7.5 13.1607 7.5 12C7.5 10.8393 7.62983 9.74411 7.85918 8.75H16.1408C16.3702 9.74411 16.5 10.8393 16.5 12C16.5 13.1607 16.3702 14.2559 16.1408 15.25H7.85918ZM17.2812 16.75C16.939 17.8048 16.4863 18.7455 15.949 19.5289C17.1985 18.8722 18.2645 17.9136 19.05 16.75H17.2812ZM19.8565 15.25H17.676C17.886 14.231 18 13.1377 18 12C18 10.8623 17.886 9.76896 17.676 8.75H19.8565C20.2712 9.75122 20.5 10.8489 20.5 12C20.5 13.1511 20.2712 14.2488 19.8565 15.25ZM6.32399 15.25H4.14345C3.72882 14.2488 3.5 13.1511 3.5 12C3.5 10.8489 3.72882 9.75122 4.14345 8.75H6.32399C6.114 9.76896 6 10.8623 6 12C6 13.1377 6.114 14.231 6.32399 15.25ZM4.95003 16.75H6.71877C7.06103 17.8048 7.51372 18.7455 8.05102 19.5289C6.80154 18.8722 5.73554 17.9136 4.95003 16.75ZM8.30689 7.25H15.6931C15.4801 6.67932 15.2318 6.1596 14.9564 5.70068C14.0148 4.13136 12.923 3.5 12 3.5C11.077 3.5 9.98519 4.13136 9.0436 5.70068C8.76824 6.1596 8.51988 6.67932 8.30689 7.25ZM17.2812 7.25H19.05C18.2645 6.08642 17.1985 5.12778 15.949 4.47106C16.4863 5.25453 16.939 6.1952 17.2812 7.25ZM8.05102 4.47106C7.51372 5.25454 7.06102 6.1952 6.71877 7.25H4.95002C5.73554 6.08642 6.80154 5.12778 8.05102 4.47106ZM12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2Z'
                ></path>
              </svg>
              <Text mr={'1.5'}>فارسی</Text>
            </Button>

            <Button
              ml='3'
              pl={'2'}
              pr={'2'}
              colorScheme='gray.600'
              fontSize='sm'
              variant='link'
            >
              ورود به حساب
            </Button>
            <Button
              ml={'3'}
              pl={'2'}
              pr={'2'}
              colorScheme='gray.600'
              fontSize='sm'
              variant='link'
            >
              ثبت نام کنید
            </Button>

            <IconButton
              icon={colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
              onClick={toggleColorMode}
              isRound='true'
              size={'md'}
              ml='3'
            ></IconButton>
          </Box>
        </Box>
      </header>

      {/* main puch line */}
      <Box>
        <Container maxW='container.xl'>
          <Box
            d='grid'
            alignItems='center'
            py='20'
            gridTemplateColumns={{
              sm: 'repeat(1, 1fr)',
              md: 'repeat(1, 1fr)',
              lg: 'repeat(2, 1fr)',
              xl: 'repeat(2, 1fr)',
              base: 'repeat(1, 1fr)',
            }}
          >
            <Box ml='6'>
              <Heading as='h1' size='xl'>
                <Box fontWeight='black'>جشن 20 سال ارتباط واقعی در Meetup</Box>
              </Heading>

              <Box mt='6' fontWeight='medium'>
                هر کاری که امسال می‌خواهید انجام دهید، Meetup می‌تواند به شما
                کمک کند. به مدت 20 سال، مردم برای ملاقات با افراد، پیدا کردن
                دوستان، یافتن حمایت، رشد کسب و کار و کشف علایق خود به Meetup روی
                می آورند. هزاران رویداد هر روز در حال رخ دادن است - به سرگرمی
                بپیوندید.
              </Box>
            </Box>

            <Box
              w='100%'
              mt={{
                sm: '10',
                md: '0',
                lg: '0',
                xl: '0',
                base: '4',
              }}
            >
              <Image src={illustration} alt='illustration' w='100%' />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* three boxes */}
      <Container maxW='container.xl' mt='10'>
        <Grid
          templateColumns={{
            sm: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(2, 1fr)',
            xl: 'repeat(3, 1fr)',
            base: 'repeat(1, 1fr)',
          }}
          gap='6'
        >
          <Box>
            <Image
              w='100%'
              borderRadius='lg'
              src={imageOne}
              alt='image three'
            />
            <Button colorScheme='teal' variant='link' mt='5'>
              دوستان جدیدی پیدا کنید
              <ArrowBackIcon w='5' h='5' mr='2' />
            </Button>
          </Box>

          <Box>
            <Image
              w='100%'
              borderRadius='lg'
              src={imageTwo}
              alt='image three'
            />
            <Button colorScheme='teal' variant='link' mt='5'>
              در فضای باز کاوش کنید
              <ArrowBackIcon w='5' h='5' mr='2' />
            </Button>
          </Box>

          <Box>
            <Image
              w='100%'
              borderRadius='lg'
              src={imageThree}
              alt='image three'
            />
            <Button colorScheme='teal' variant='link' mt='5'>
              از طریق فناوری متصل شوید
              <ArrowBackIcon w='5' h='5' mr='2' />
            </Button>
          </Box>
        </Grid>
      </Container>

      {/* pills */}
      <Container maxW='container.xl'>
        <Box
          d='flex'
          flexDirection='row'
          flexWrap='wrap'
          justifyContent='space-between'
          my='10'
        >
          <Badge
            borderRadius='3xl'
            px='4'
            py='2'
            ml='4'
            mb='4'
            textTransform='normal'
            color='#fff'
            bg='blue.100'
          >
            حرفه خود را تقویت کنید
          </Badge>

          <Badge
            borderRadius='3xl'
            px='4'
            py='2'
            ml='4'
            mb='4'
            textTransform='normal'
            color='#fff'
            bg='blue.100'
          >
            ذن خود را پیدا کنید
          </Badge>

          <Badge
            borderRadius='3xl'
            px='4'
            py='2'
            ml='4'
            mb='4'
            textTransform='normal'
            color='#fff'
            bg='blue.100'
          >
            حرکت کنید
          </Badge>

          <Badge
            borderRadius='3xl'
            px='4'
            py='2'
            ml='4'
            mb='4'
            textTransform='normal'
            color='#fff'
            bg='blue.100'
          >
            زبان + فرهنگ را به اشتراک بگذارید
          </Badge>

          <Badge
            borderRadius='3xl'
            px='4'
            py='2'
            ml='4'
            mb='4'
            textTransform='normal'
            color='#fff'
            bg='blue.100'
          >
            با دوستان بخوانید
          </Badge>

          <Badge
            borderRadius='3xl'
            px='4'
            py='2'
            ml='4'
            mb='4'
            textTransform='normal'
            color='#fff'
            bg='blue.100'
          >
            با هم بنویسید
          </Badge>

          <Badge
            borderRadius='3xl'
            px='4'
            py='2'
            ml='0'
            mb='4'
            textTransform='normal'
            color='#fff'
            bg='blue.100'
          >
            کاردستی خود را تقویت کنید
          </Badge>
        </Box>
      </Container>

      {/* last header section */}
      <Container maxW='container.xl' mt='20'>
        <Grid
          templateColumns={{
            sm: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(2, 1fr)',
            xl: 'repeat(2, 1fr)',
            base: 'repeat(1, 1fr)',
          }}
          gap='6'
        >
          <Box>
            <Heading as='h3' size='lg' mb='7'>
              میخوای چیکار کنی؟
            </Heading>

            <Box
              d='flex'
              alignItems='center'
              flexDirection={{
                sm: 'column',
                md: 'row',
                lg: 'row',
                xl: 'row',
                base: 'column',
              }}
              w='100%'
            >
              <Box
                flexBasis={{
                  sm: '100%',
                  md: '50%',
                  lg: '50%',
                  xl: '50%',
                  base: '100%',
                }}
                w='100%'
                ml={{
                  sm: '0',
                  md: '2',
                  lg: '2',
                  xl: '2',
                  base: '0',
                }}
              >
                <FormControl>
                  <Box pos='relative'>
                    <Input
                      pl='8'
                      placeholder='جستجو برای "تنیس"'
                      type='text'
                      w='100%'
                      borderColor={
                        colorMode === 'light' ? 'gray.300' : 'gray.700'
                      }
                      bg={colorMode === 'light' ? 'white' : 'gray.700'}
                    />
                    <Box pos='absolute' top='3' left='2'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='18'
                        height='18'
                        viewBox='0 0 20 20'
                        fill='#d9d9d9'
                      >
                        <path
                          fillRule='evenodd'
                          d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </Box>
                  </Box>
                </FormControl>
              </Box>

              <Box
                flexBasis={{
                  sm: '100%',
                  md: '50%',
                  lg: '50%',
                  xl: '50%',
                  base: '50%',
                }}
                w='100%'
                mr={{
                  sm: '0',
                  md: '2',
                  lg: '2',
                  xl: '2',
                  base: '0',
                }}
                mt={{
                  sm: '2',
                  md: '0',
                  lg: '0',
                  xl: '0',
                  base: '2',
                }}
              >
                <FormControl>
                  <Box pos='relative'>
                    <Input
                      pl='8'
                      placeholder='محل'
                      type='text'
                      w='100%'
                      borderColor={
                        colorMode === 'light' ? 'gray.300' : 'gray.700'
                      }
                      bg={colorMode === 'light' ? 'white' : 'gray.700'}
                    />
                    <Box pos='absolute' top='3' left='2'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='18'
                        height='18'
                        viewBox='0 0 20 20'
                        fill='#d9d9d9'
                      >
                        <path
                          fillRule='evenodd'
                          d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </Box>
                  </Box>
                </FormControl>
              </Box>
            </Box>

            <Button
              _hover={{ opacity: '0.8' }}
              mt='5'
              pt='6'
              pb='6'
              w='100%'
              color='#fff'
              bg='red.200'
              fontSize='lg'
            >
              جستجو کردن
            </Button>
          </Box>

          <Box>
            <Box>
              <Heading as='h3' size='lg' mb='7'>
                ببینید چه اتفاقی می افتد
              </Heading>
            </Box>

            <Box d='flex' flexWrap='wrap' justifyContent='flex-start'>
              <Badge
                borderRadius='3xl'
                px='5'
                py='2'
                ml='4'
                mb='4'
                textTransform='normal'
                color='#fff'
                bg='blue.100'
              >
                به زودی شروع می شود
              </Badge>

              <Badge
                borderRadius='3xl'
                px='5'
                py='2'
                ml='4'
                mb='4'
                textTransform='normal'
                color='#fff'
                bg='blue.100'
              >
                امروز
              </Badge>

              <Badge
                borderRadius='3xl'
                px='5'
                py='2'
                ml='4'
                mb='4'
                textTransform='normal'
                color='#fff'
                bg='blue.100'
              >
                فردا
              </Badge>

              <Badge
                borderRadius='3xl'
                px='5'
                py='2'
                ml='4'
                mb='4'
                textTransform='normal'
                color='#fff'
                bg='blue.100'
              >
                این هفته
              </Badge>

              <Badge
                borderRadius='3xl'
                px='5'
                py='2'
                ml='4'
                mb='4'
                textTransform='normal'
                color='#fff'
                bg='blue.100'
              >
                آنلاین
              </Badge>

              <Badge
                borderRadius='3xl'
                px='5'
                py='2'
                ml='4'
                mb='4'
                textTransform='normal'
                color='#fff'
                bg='blue.100'
              >
                به صورت حضوری
              </Badge>

              <Badge
                borderRadius='3xl'
                px='5'
                py='2'
                ml='0'
                mb='4'
                textTransform='normal'
                color='#fff'
                bg='blue.100'
              >
                پرطرفدار در نزدیکی شما
              </Badge>
            </Box>
          </Box>
        </Grid>
      </Container>
    </>
  )
}

export default Banner
