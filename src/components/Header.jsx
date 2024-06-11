import React from 'react'

import { Drawer, DrawerBody, DrawerOverlay, DrawerContent, DrawerCloseButton, Button, useDisclosure, DrawerHeader, VStack, HStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import {BiMenuAltLeft} from 'react-icons/bi'

const Header = () => {

  const {isOpen, onOpen, onClose} = useDisclosure()
  return (
    <>
      <Button pos={'fixed'}
      zIndex={'overlay'}
      top={'4'}
      left={'4'}
      colorScheme='purple'
      p={'0'}
      w={'10'}
      h={'10'}
      borderRadius={'full'}
      onClick={onOpen}>
        <BiMenuAltLeft size={20}/>
      </Button>

      <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
        <DrawerOverlay/>
        <DrawerContent>
         <DrawerCloseButton/>
         <DrawerHeader>VIDEO ADDA</DrawerHeader>

          <DrawerBody>
          <VStack alignItems={'flex-start'}>
            <Button variant={'ghost'} colorScheme='purple' onClick={onClose}>
              <Link to={'/'}>Home</Link>
            </Button>
             <Button variant={'ghost'} colorScheme='purple' onClick={onClose}>
              <Link to={'/videos'}>videos</Link>
            </Button>

             <Button variant={'ghost'} colorScheme='purple' onClick={onClose}>
              <Link to={'/vidos?category=free'}>Free Videos</Link>
            </Button>

             <Button variant={'ghost'} colorScheme='purple'onClick={onClose} >
              <Link to={'/upload'}>Upload Videos</Link>
            </Button>
          </VStack>


          <HStack bottom={'10'} pos={'absolute'} left={'0'}  justifyContent={"space-evenly"} w={'full'}>
            <Button colorScheme='purple'>
              <Link to={'/login'}>Log In</Link>
            </Button>
             <Button colorScheme='purple' variant={'outline'}>
              <Link to={'/signup'}>Sign Up</Link>
            </Button>
          </HStack>
        </DrawerBody>
        </DrawerContent>
      </Drawer>

       


    </>
  )
}

export default Header
