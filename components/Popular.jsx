import React from 'react'
import {
  Box,
  Image,
  Container,
  Heading,
  Grid,
  Link,
  Divider,
  useColorMode,
} from '@chakra-ui/react'

const popular = '/assets/popular-image.jpg'

const Popular = () => {
  const { colorMode } = useColorMode()

  return (
    <Box mt={'20'}>
      <Container maxW={'container.xl'}>
        <Box
          mb={'7'}
          d='flex'
          alignItems={'center'}
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
            <Heading
              fontWeight={'bold'}
              alignItems='center'
              as={'h3'}
              size='lg'
            >
              گروه های محبوب
            </Heading>
          </Box>

          <Box>
            <Link fontWeight={'semibold'} color='teal.500'>
              گروه های بیشتری را کاوش کنید
            </Link>
          </Box>
        </Box>

        <Grid
          templateColumns={{
            sm: 'repeat(1, 1fr)',
            md: 'repeat(3, 1fr)',
            lg: 'repeat(3, 1fr)',
            xl: 'repeat(3, 1fr)',
            base: 'repeat(1, 1fr)',
          }}
          gap='6'
        >
          <Box
            border={'1px'}
            borderRadius='lg'
            borderColor='gray.200'
            p={'15px'}
            width='100%'
          >
            <Box d='flex' alignItems={'center'}>
              <Image
                position={'relative'}
                w='50px'
                src={popular}
                alt='brand'
                ml='15px'
              />

              <Heading
                alignItems={'center'}
                as='h6'
                fontWeight={'medium'}
                size='md'
              >
                گروه ملاقات والدین جدید و منتظر مرکز شهر
              </Heading>
            </Box>

            <Divider my={'3'} mb='2' />

            <Box
              py={'2'}
              color='#877457'
              textTransform={'uppercase'}
              fontWeight='bold'
            >
              جمعه، 18 مارس، ساعت 5:30 عصر اول وقت
            </Box>

            <Box
              fontWeight={'medium'}
              color={colorMode === 'light' ? '#212121' : '#fff'}
            >
              کلاس ماساژ نوزادان
            </Box>
          </Box>

          <Box
            border={'1px'}
            borderRadius='lg'
            borderColor='gray.200'
            p={'15px'}
            width='100%'
          >
            <Box d='flex' alignItems={'center'}>
              <Image
                position={'relative'}
                w='50px'
                src={popular}
                alt='brand'
                ml='15px'
              />

              <Heading
                alignItems={'center'}
                as='h6'
                fontWeight={'bold'}
                size='md'
              >
                مسافران مجازی جهان: دوستداران باستان شناسی، هنر و تاریخ
              </Heading>
            </Box>

            <Divider my={'3'} mb='2' />

            <Box
              py={'2'}
              color='#877457'
              textTransform={'uppercase'}
              fontWeight='bold'
            >
              شنبه، 12 مارس، ساعت 1:00 صبح اول وقت
            </Box>

            <Box
              fontWeight={'medium'}
              color={colorMode === 'light' ? '#000' : '#fff'}
            >
              رایگان - ملکه های مصر: هتشپسوت
            </Box>
          </Box>

          <Box
            border={'1px'}
            borderRadius='lg'
            borderColor='gray.200'
            p={'15px'}
            width='100%'
          >
            <Box d='flex' alignItems={'center'}>
              <Image
                position={'relative'}
                w='50px'
                src={popular}
                alt='brand'
                ml='15px'
              />

              <Heading
                alignItems={'center'}
                as='h6'
                fontWeight={'bold'}
                size='md'
              >
                تاریخ و فرهنگ نیویورک - نیویورک و جهان را تجربه کنید
              </Heading>
            </Box>

            <Divider my={'3'} mb='2' />

            <Box
              py={'2'}
              color='#877457'
              textTransform={'uppercase'}
              fontWeight='medium'
            >
              شنبه، 12 مارس، ساعت 4:30 صبح اول وقت
            </Box>

            <Box
              fontWeight={'bold'}
              color={colorMode === 'light' ? '#000' : '#fff'}
            >
              موزه هنر متروپولیتن - تور جریان مستقیم رنوار و امپرسیونیسم (11
              مارس)
            </Box>
          </Box>
        </Grid>
      </Container>
    </Box>
  )
}

export default Popular
