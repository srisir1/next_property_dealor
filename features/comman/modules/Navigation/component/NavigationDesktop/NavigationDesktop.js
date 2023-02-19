import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import { HiHomeModern } from 'react-icons/hi2'
import { NavigationLink } from "../../NavigationConsts";

const NavigationDesktop = () => {
  return (
    <>
      <Box color='blue.600' paddingY='2rem' background={'white'} display={{ base: 'none', md: 'block' }}>
        <Box maxWidth={'1200px'} margin='0 auto'>
          <Flex alignItems={'center'} justifyContent='space-between'>
            <Link href={'/'}>
              <Box display={'flex'} alignItems='center' gap={'12px'}>
                <HiHomeModern size={'30'} />
                <Text fontSize='2xl' fontWeight={'black'}>CASAZ</Text>
              </Box>
            </Link>
            <Flex gap='12' alignItems='center' fontWeight='medium' >
              {
                NavigationLink.map((item, i) => (
                  <NavigationLinks key={i} {...item} />
                ))
              }

              <Button padding={'1.5rem'} colorScheme='twitter' fontSize={'0.8rem'} fontWeight='medium'>CREATE LISTING</Button>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </>
  )
}

export default NavigationDesktop;

const NavigationLinks = ({ title, link, icon }) => {
  return (
    <Link href={link}>
      <Flex alignItems={'center'} gap='0.5rem'>
        {icon}
        {title}
      </Flex>
    </Link>
  )
}