import React from 'react'
import { Box, Button, HStack, Heading, Input, Stack, Text, VStack } from '@chakra-ui/react'
import { AiOutlineSend } from 'react-icons/ai'
import {  FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
        <Stack direction={['column', 'row']}>
            <VStack alignItems={'stretch'} w={'full'} px={'4'}>
                <Heading size="md" textTransform={"uppercase"} textAlign={['center','left']}>
                    Subscribe to get Updates
                </Heading>
                <HStack borderBottom={'2px solid white'} py='2'>
                    <Input 
                    placeholder='Enter your Email...'
                    border={'none'}
                    borderRadius={'none'}
                    outline={'none'}
                    focusBorderColor='none'
                    />
                    <Button
                    p={'0'}
                    colorScheme='purple'
                    variant={'ghost'}
                    borderRadius={'0 20px 20px 0'}

                    >
                        <AiOutlineSend size={20}/>
                    </Button>
                </HStack>
            </VStack>
            <VStack w={'full'} borderLeft={['none', '1px solid white']}>
                <Heading textTransform={'uppercase'} textAlign={'center'}>VIDEO Adda</Heading>
                <Text>All Rights Received</Text>


            </VStack>
            <VStack w={'full'} >
                <Heading size={'md'} textTransform={'uppercase'}>Social Media</Heading>
                <Button variant={'link'} colorScheme='white'>
                    <a href="https://youtube.com"target='black'><FaYoutube size={'30px'}/></a>

                </Button>
                  <Button variant={'link'} colorScheme='white'>
                    <a href="https://www.instagram.com/_bibek___007/"target='black'><FaInstagram size={'30px'}/></a>

                </Button>
                  <Button variant={'link'} colorScheme='white'>
                    <a href="https://github.com/BibekChaudhary007"target='black'><FaGithub size={'30px'}/></a>

                </Button>


            </VStack>

        </Stack>

    </Box>
  )
}

export default Footer
