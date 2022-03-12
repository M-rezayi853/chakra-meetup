import React from 'react'
import {
  Box,
  Button,
  Container,
  Grid,
  Heading,
  Image,
  Link,
  Text,
} from '@chakra-ui/react'

const joinaGroup = '/assets/joinagroup.svg'
const ticket = '/assets/ticket.svg'
const startGroup = '/assets/start-group.svg'

const ItWorks = () => {
  return (
    <Box>
      <Container maxW='container.xl' my='20'>
        <Heading as='h3' textAlign='center' size='lg' pb='2'>
          Meetup چگونه کار می کند
        </Heading>

        <Box textAlign='center' maxW='700px' mx='auto' pb='10'>
          با افراد جدیدی آشنا شوید که علایق شما را از طریق رویدادهای آنلاین و
          حضوری به اشتراک می گذارند. ایجاد حساب کاربری رایگان است.
        </Box>

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
          <Box align='center' mx='auto'>
            <Image w='100%' boxSize='160px' src={joinaGroup} alt='brand' />

            <Heading as='h5' size='md'>
              <Link color='blue.100'>
                <Box pb='4'>به یک گروه بپیوندید</Box>
              </Link>
            </Heading>
            <Text>
              کاری را که دوست دارید انجام دهید، با دیگرانی که آن را دوست دارند
              ملاقات کنید، جامعه خود را پیدا کنید. بقیه اش تاریخ است!
            </Text>
          </Box>

          <Box align='center' mx='auto'>
            <Image w='100%' boxSize='160px' src={ticket} alt='brand' />

            <Heading as='h5' size='md'>
              <Link color='blue.100'>
                <Box pb='4'>یک رویداد پیدا کنید</Box>
              </Link>
            </Heading>
            <Text>
              رویدادها تقریباً در مورد هر موضوعی که فکرش را بکنید، از بازی‌های
              آنلاین و عکاسی گرفته تا یوگا و پیاده‌روی، رخ می‌دهند.
            </Text>
          </Box>

          <Box align='center' mx='auto'>
            <Image w='100%' boxSize='160px' src={startGroup} alt='brand' />

            <Heading as='h5' size='md'>
              <Link color='blue.100'>
                <Box pb='4'>یک گروه راه اندازی کنید</Box>
              </Link>
            </Heading>
            <Text>
              برای جمع آوری افراد و کشف علایق مشترک، لازم نیست متخصص باشید.
            </Text>
          </Box>
        </Grid>

        <Box>
          <Box mt='16' align='center'>
            <Button
              _hover={{ opacity: '0.8' }}
              bg='blue.100'
              color='#fff'
              fontWeight='normal'
              size='md'
            >
              به Meetup بپیوندید
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default ItWorks
