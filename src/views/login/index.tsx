import React, { useEffect, useState } from 'react';
import {
    Box,
    Flex,
    FormControl,
    FormErrorMessage,
    Heading,
    Image,
    Input,
    InputGroup,
    Center,
    Button,
    Text,
    InputRightAddon,
} from '@chakra-ui/react';
import loginImg from 'assets/img/login-img.jpg';
import { EmailIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Link, useNavigate } from 'react-router-dom';
import { useLogin } from 'utils/apis/auth.api';
import { useForm } from 'react-hook-form';
import { UserLogin } from 'utils/types/user.type';
export default function Login() {
    const navigate = useNavigate();
    const { mutate: userLogin, isSuccess, isLoading, data: userData } = useLogin();

    const [show, setShow] = useState(false);
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<UserLogin>();

    const onSubmit = (values: UserLogin) => {
        console.log(values);
        userLogin(values);
    };

    useEffect(() => {
        if (isSuccess) {
            localStorage.setItem('token', userData?.tokens?.access?.token);
            localStorage.setItem('userId', userData?.user?.id);
            navigate('/overview');
        }
    }, [isSuccess, userData]);

    return (
        <Flex>
            <Box flex="1">
                <Image minH="100vh" objectFit="cover" w="100%" src={loginImg} />
            </Box>
            <Center flex="1" bg="#263439" flexDirection="column">
                <Box as="form" w="100%" maxW="400px" onSubmit={handleSubmit(onSubmit)}>
                    <Heading fontSize="42px">Log In</Heading>
                    <FormControl mt="40px" isInvalid={Boolean(errors.email)}>
                        <InputGroup borderColor="orange">
                            <Input
                                borderRight="none"
                                _hover={{ borderColor: 'orange' }}
                                _focusVisible={{ boxShadow: 'none' }}
                                autoComplete="off"
                                placeholder="john@email.com"
                                {...register('email', {
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: 'Enter valid email.',
                                    },
                                })}
                            />
                            <InputRightAddon bg="transparent">
                                <EmailIcon />
                            </InputRightAddon>
                        </InputGroup>
                        <FormErrorMessage>
                            {errors?.email && errors?.email?.message}
                        </FormErrorMessage>
                    </FormControl>
                    <FormControl mt="20px" isInvalid={Boolean(errors.password)}>
                        <InputGroup borderColor="orange">
                            <Input
                                placeholder="Password"
                                type={show ? 'text' : 'password'}
                                autoComplete="off"
                                borderRight="none"
                                _hover={{ borderColor: 'orange' }}
                                _focusVisible={{ boxShadow: 'none' }}
                                {...register('password', {
                                    required: 'Password is required',
                                })}
                            />
                            <InputRightAddon
                                onClick={() => setShow(!show)}
                                cursor="pointer"
                                bg="transparent"
                            >
                                {show ? <ViewOffIcon /> : <ViewIcon />}
                            </InputRightAddon>
                        </InputGroup>
                        <FormErrorMessage>
                            {errors.password && errors.password.message}
                        </FormErrorMessage>
                    </FormControl>
                    <Button w="100%" type="submit" mt="45px" isLoading={isLoading}>
                        Log In
                    </Button>
                    <Text textAlign="center" mt="50px">
                        New to wavesonline?{' '}
                        <Button as={Link} to="/signup" variant="link">
                            Create Account
                        </Button>{' '}
                    </Text>
                </Box>
            </Center>
        </Flex>
    );
}
