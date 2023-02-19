import { Box, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import Link from "next/link";
import { HiHomeModern } from 'react-icons/hi2'
import { CgMenu } from 'react-icons/cg'
import { NavigationLink } from "../../NavigationConsts";

const NavigationMobile = () => {
  return (
    <>
      <Box color='blue.600' padding='2rem' backgroundColor={'white'} display={{ base: 'block', md: 'none' }}>
        <Box maxWidth={'1200px'} margin='0 auto'>
          <Flex alignItems={'center'} justifyContent='space-between'>
            <Link href={'/'}>
              <Box display={'flex'} alignItems='center' gap={'12px'}>
                <HiHomeModern size={'30'} />
                <Text fontSize='2xl' fontWeight={'black'}>CASAZ</Text>
              </Box>
            </Link>
            <Menu>
              <MenuButton as={IconButton} aria-label='Options' icon={<CgMenu />} />
              <MenuList>
                {
                  NavigationLink.map((item, i) => (
                    <NavigationLinks key={i} {...item} />
                  ))
                }
              </MenuList>
            </Menu>

          </Flex>
        </Box>
      </Box>
    </>
  )
}

export default NavigationMobile;

const NavigationLinks = ({ title, link, icon }) => {
  return (
    <Link href={link}>
      <MenuItem alignItems={'center'} gap='0.5rem'>
        {icon}
        {title}
      </MenuItem>
    </Link>
  )
}