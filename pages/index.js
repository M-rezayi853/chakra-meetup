import { Box, Image } from '@chakra-ui/react'

import Banner from '../components/Banner'
import ItWorks from '../components/ItWorks'
import Upcomming from '../components/Upcomming'
import Popular from '../components/Popular'
import Connected from '../components/Connected'
import Stories from '../components/Stories'
import FooterBottom from '../components/FooterBottom'

const bgImage = '/assets/bg.svg'

export default function Home() {
  return (
    <>
      <Box position={'absolute'} left='0' top={'0'} right='0'>
        <Banner />
        <ItWorks />
        <Upcomming />
        <Popular />
        <Connected />
        <Stories />
        <FooterBottom />
      </Box>

      <Box
        position={'relative'}
        top='0'
        bottom={'0'}
        right='0'
        left={'0'}
        height='0'
        zIndex={'-1'}
      >
        <Image
          w={'100%'}
          m='auto'
          objectFit={'cover'}
          sizes='300'
          src={bgImage}
          alt='bg '
        />
      </Box>
    </>
  )
}
