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
    Icon,
} from '@chakra-ui/react';
import loginImg from 'assets/img/login-img.jpg';
import { EmailIcon, PhoneIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { useSignUp } from 'utils/apis/auth.api';
import { useForm } from 'react-hook-form';
import { UserSignup } from 'utils/types/user.type';
import { showToast } from 'utils/helper';
export default function SignUp() {
    const { mutate: userSignUp, isSuccess, isLoading, reset } = useSignUp();

    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);

    const {
        handleSubmit,
        register,
        watch,
        reset: formReset,
        formState: { errors },
    } = useForm<UserSignup>();

    const onSubmit = (values: UserSignup) => {
        console.log(values);
        delete values.confirmPassword;
        userSignUp(values);
    };

    useEffect(() => {
        if (isSuccess) {
            formReset();
            reset();
            showToast('success', 'Verification Email sent to your email', 'Signup successfully! ');
        }
    }, [isSuccess]);

    const userPassword = watch('password');

    return (
        <Flex>
            <Box flex="1">
                <Image minH="100vh" objectFit="cover" w="100%" src={loginImg} />
            </Box>
            <Center flex="1" bg="#263439" flexDirection="column">
                <Box as="form" w="100%" maxW="400px" onSubmit={handleSubmit(onSubmit)}>
                    <Heading fontSize="42px">Sign Up</Heading>
                    <FormControl mt="40px" isInvalid={Boolean(errors.fullName)}>
                        <InputGroup borderColor="orange">
                            <Input
                                borderRight="none"
                                _hover={{ borderColor: 'orange' }}
                                _focusVisible={{ boxShadow: 'none' }}
                                autoComplete="off"
                                placeholder="Full Name"
                                {...register('fullName', {
                                    required: 'Name is required',
                                })}
                            />
                            <InputRightAddon bg="transparent">
                                <Icon />
                            </InputRightAddon>
                        </InputGroup>
                        <FormErrorMessage>
                            {errors?.fullName && errors?.fullName?.message}
                        </FormErrorMessage>
                    </FormControl>
                    <FormControl mt="20px" isInvalid={Boolean(errors.username)}>
                        <InputGroup borderColor="orange">
                            <Input
                                borderRight="none"
                                _hover={{ borderColor: 'orange' }}
                                _focusVisible={{ boxShadow: 'none' }}
                                placeholder="Username"
                                {...register('username', {
                                    required: 'Username is required',
                                })}
                            />
                            <InputRightAddon bg="transparent">@</InputRightAddon>
                        </InputGroup>
                        <FormErrorMessage>
                            {errors?.username && errors?.username?.message}
                        </FormErrorMessage>
                    </FormControl>
                    <FormControl mt="20px" isInvalid={Boolean(errors.email)}>
                        <InputGroup borderColor="orange">
                            <Input
                                borderRight="none"
                                _hover={{ borderColor: 'orange' }}
                                _focusVisible={{ boxShadow: 'none' }}
                                autoComplete="off"
                                placeholder="john@email.com"
                                type="email"
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
                    <FormControl mt="20px" isInvalid={Boolean(errors.phone)}>
                        <InputGroup borderColor="orange">
                            <Input
                                borderRight="none"
                                _hover={{ borderColor: 'orange' }}
                                _focusVisible={{ boxShadow: 'none' }}
                                autoComplete="off"
                                placeholder="Number"
                                {...register('phone', {
                                    required: 'Phone is required',
                                })}
                            />
                            <InputRightAddon bg="transparent">
                                <PhoneIcon />
                            </InputRightAddon>
                        </InputGroup>
                        <FormErrorMessage>
                            {errors?.phone && errors?.phone?.message}
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
                                    validate: {
                                        isCharacter: (value: string) =>
                                            // eslint-disable-next-line
                                            /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(value) ||
                                            'Must contain one Special character',
                                        // eslint-disable-next-line
                                        isSmall: (value: string) =>
                                            /[a-z]/.test(value) || 'Must contain one Small letter',
                                        isCapital: (value: string) =>
                                            /[A-Z]/.test(value) ||
                                            'Must contain one Capital character',
                                        isDigit: (value: string) =>
                                            /\d/.test(value) || 'Must contain one Digit character',
                                    },
                                    minLength: {
                                        value: 8,
                                        message: 'Minimum length should be 8',
                                    },
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
                    </FormControl>{' '}
                    <FormControl mt="20px" isInvalid={Boolean(errors.confirmPassword)}>
                        <InputGroup borderColor="orange">
                            <Input
                                placeholder="Confirm Password"
                                type={show2 ? 'text' : 'password'}
                                autoComplete="off"
                                borderRight="none"
                                _hover={{ borderColor: 'orange' }}
                                _focusVisible={{ boxShadow: 'none' }}
                                {...register('confirmPassword', {
                                    required: 'Confirm Password is required',
                                    validate: {
                                        isMatch: (value?: string) =>
                                            userPassword === value || 'Password did not match',
                                    },
                                })}
                            />
                            <InputRightAddon
                                onClick={() => setShow2(!show2)}
                                cursor="pointer"
                                bg="transparent"
                            >
                                {show2 ? <ViewOffIcon /> : <ViewIcon />}
                            </InputRightAddon>
                        </InputGroup>
                        <FormErrorMessage>
                            {errors.confirmPassword && errors.confirmPassword.message}
                        </FormErrorMessage>
                    </FormControl>
                    <Button w="100%" type="submit" mt="45px" isLoading={isLoading}>
                        Sign Up
                    </Button>
                    <Text textAlign="center" mt="50px">
                        Already have an account?{' '}
                        <Button as={Link} to="/login" variant="link">
                            Login
                        </Button>
                    </Text>
                </Box>
            </Center>
        </Flex>
    );
}
