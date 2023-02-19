import { Box, Text } from '@chakra-ui/react';
import React from 'react'
import HomeForm from './HomeForm';

const HeroBanner = () => {
   return (
      <>
         <Box
            position={'relative'}
            minHeight={{ base: '110vh', sm: '60vh' }}
            backgroundRepeat='no-repeat'
            backgroundSize='cover'
            backgroundImage={`url("./img/img106.webp")`}
            backgroundAttachment='fixed'
            backgroundPosition={'center'}
         >
            <Box
               position={'absolute'}
               width='100%'
               height={'100%'}
               opacity={0.9}
               backgroundColor={'blue.900'}
            >
               <Box
                  display={'flex'}
                  flexDirection={{ base: 'column', sm: 'row' }}
                  alignItems='center'
                  justifyContent={'center'}
                  maxWidth='1500px'
                  position={'absolute'}
                  color='white'
                  fontWeight={'light'}
                  left='0'
                  right={'0'}
                  bottom='0'
                  top={'0'}
                  margin='0 auto'
                  padding={'2rem'}
               >
                  <Box width={{ base: '100%', sm: '50%' }}>
                     <Text
                        fontSize={{ base: '4xl', sm: '5xl' }}
                        lineHeight='shorter'
                        marginBottom='.5rem'
                     >
                        Download our new <strong>Property Buying Guide</strong>  Today...
                     </Text>
                     <Text fontSize={{ base: 'lg', sm: '2xl' }}>
                        A free PDF with out best secrest for evaluating a property purchase, calculating profit and so much more
                     </Text>
                  </Box>
                  <Box width={{ base: '100%', sm: 'auto' }}>
                     <HomeForm />
                  </Box>
               </Box>
            </Box>
         </Box>
      </>
   )
}

export default HeroBanner;