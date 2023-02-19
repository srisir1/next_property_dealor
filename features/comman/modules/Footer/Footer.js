
import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { HiHomeModern } from 'react-icons/hi2';
import { services, about, workWithUs, ourOffices } from './FooterConsts';
const Footer = () => {
   return (
      <>
         <Box backgroundColor='blue.600'>
            <Box maxWidth='1280px' margin='0 auto' paddingY='3rem' paddingX={{ base: '2rem', sm: '0' }}>
               <SimpleGrid column={4} color='whiteAlpha.700' gap='1.7rem' minChildWidth='150px'>
                  <Flex flexDirection={'column'}>
                     <FooterHeader title='Services' />
                     {services.map((item, i) => (
                        <FoooterLink key={i} {...item} />
                     ))}
                  </Flex>

                  <Flex flexDirection={'column'}>
                     <FooterHeader title='About Us' />
                     {about.map((item, i) => (
                        <FoooterLink key={i} {...item} />
                     ))}
                  </Flex>

                  <Flex flexDirection={'column'}>
                     <FooterHeader title='Work With Us' />
                     {workWithUs.map((item, i) => (
                        <FoooterLink key={i} {...item} />
                     ))}
                  </Flex>

                  <Flex flexDirection={'column'}>
                     <FooterHeader title='Our Offices' />
                     {ourOffices.map((item, i) => (
                        <FoooterLink key={i} {...item} />
                     ))}
                  </Flex>
               </SimpleGrid>
            </Box>
            <Box backgroundColor='blue.900' display='flex' padding='2rem' justifyContent='center'
               alignItems={'center'} flexDirection='column' color='white'>

               <Box display={'flex'} alignItems='center' gap={2}>
                  <HiHomeModern />
                  <Text fontSize={'lg'} fontWeight='black'>CMK CARE</Text>
               </Box>
               <Text marginTop={'1rem '} fontSize='xs'>All rights reserved - copyright@CMK H CARE</Text>

            </Box>
         </Box>
      </>
   )
}

export default Footer;

const FoooterLink = ({ name, link }) => {
   return (
      <Text>
         <Link href={link}>{name}</Link>
      </Text>
   )
}

const FooterHeader = ({ title }) => {
   return (
      <Text as='h4' fontWeight='light' fontSize='xl' marginBottom='1rem'>{title}</Text>
   )
}