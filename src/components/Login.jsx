import React from 'react'
import { Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
        <form>
            <VStack
            alignItems={'stretch'}
            spacing={'8'}
            w={['full', '96']}
            m={'auto'}
            my={'16'}
            >
                <Heading>Welcome Back</Heading>
                <Input
                placeholder='email'
                type={'email'}
                required
                focusBorderColor={'purple.500'}
                />



                 <Input
                placeholder='password'
                type={'password'}
                required
                focusBorderColor={'purple.500'}
                />
                <Button alignSelf={'flex-end'} variant={'link'}>
                    <Link to={'/forgetpassword'}>Forget Password?</Link>
                </Button>
                <Button colorScheme={'purple'} type={'submit'}>Log In</Button>


                <Text textAlign={'right'}>New User?{' '}
                      <Button colorScheme={'purple'} variant={'link'}>
                    <Link to={'/signup'}>Sign Up</Link>
                </Button>
                </Text>



            </VStack>
        </form>
      
    </Container>
  )
}

export default Login
