import React from 'react'
import { Box, Image, Container, Heading, Grid, Link } from '@chakra-ui/react'

const storyOne = '/assets/story-one.jpg'
const storyTwo = '/assets/story-two.jpg'
const storyThree = '/assets/story-three.jpg'

const Stories = () => {
  return (
    <Box mt={'10'}>
      <Container maxW={'container.xl'}>
        <Box
          mb={'7'}
          d='flex'
          alignItems={'center'}
          justifyContent='space-between'
        >
          <Box align='center' w={'100%'}>
            <Heading alignItems={'center'} as='h3' size={'lg'} pb='2'>
              داستان هایی از Meetup
            </Heading>

            <Box maxW={'700px'}>
              افراد حاضر در Meetup جامعه را پرورش داده‌اند، مهارت‌های جدیدی را
              آموخته‌اند، کسب‌وکار را راه‌اندازی کرده‌اند و دوستان مادام‌العمر
              پیدا کرده‌اند. یاد بگیرند که چگونه.
            </Box>
          </Box>
        </Box>

        <Grid
          mt={'10'}
          mb='40'
          templateColumns={{
            sm: 'repeat(1, 1fr)',
            md: 'repeat(3, 1fr)',
            lg: 'repeat(3, 1fr)',
            xl: 'repeat(3, 1fr)',
            base: 'repeat(1, 1fr)',
          }}
          gap='6'
        >
          <Box width={'100%'}>
            <Link>
              <Image
                src={storyOne}
                alt='story on'
                _hover={{ opacity: '0.8' }}
                ml='15px'
                width={'100%'}
              />

              <Box d='flex' flexDir={'column'}>
                <Heading
                  alignItems={'center'}
                  as='h6'
                  fontWeight={'extrabold'}
                  size='md'
                  pt={'4'}
                  pb='4'
                >
                  سه راه برای ایجاد دوستی با همکار در حین کار از خانه
                </Heading>
              </Box>
            </Link>

            <Box>
              نیازی نیست دوستی های کاری فقط به این دلیل که از راه دور کار می
              کنید از بین برود. در اینجا سه راه سرگرم کننده وجود دارد که می
              توانید با همکاران خود آشنا شوید.
            </Box>
          </Box>

          <Box width={'100%'}>
            <Link>
              <Image
                src={storyTwo}
                alt='story on'
                _hover={{ opacity: '0.8' }}
                ml='15px'
                width={'100%'}
              />

              <Box d='flex' flexDir={'column'}>
                <Heading
                  alignItems={'center'}
                  as='h6'
                  fontWeight={'extrabold'}
                  size='md'
                  pt={'4'}
                  pb='4'
                >
                  پنج راه برای احساس ارتباط بیشتر
                </Heading>
              </Box>
            </Link>

            <Box>
              از زمانی که Meetup نزدیک به 20 سال پیش شروع شد، ما ارتباط بین بیش
              از 50 میلیون نفر را در 190 کشور در سراسر جهان تقویت کرده ایم. در
              اینجا پنج استراتژی ساده وجود دارد که به شما کمک می کند احساس
              ارتباط بیشتری داشته باشید و رفاه خود را بهبود بخشید.
            </Box>
          </Box>

          <Box width={'100%'}>
            <Link>
              <Image
                src={storyThree}
                alt='story on'
                _hover={{ opacity: '0.8' }}
                ml='15px'
                width={'100%'}
              />

              <Box d='flex' flexDir={'column'}>
                <Heading
                  alignItems={'center'}
                  as='h6'
                  fontWeight={'extrabold'}
                  size='md'
                  pt={'4'}
                  pb='4'
                >
                  چگونه بهترین زندگی اجتماعی خود را داشته باشید میباشد.
                </Heading>
              </Box>
            </Link>

            <Box>
              تعامل اجتماعی بخش کلیدی هر سبک زندگی سالم است. انواع مختلفی از
              رویدادها را کشف کنید که به شما در حفظ یک زندگی اجتماعی سرگرم کننده
              و رضایت بخش کمک می کند.
            </Box>
          </Box>
        </Grid>
      </Container>
    </Box>
  )
}

export default Stories
