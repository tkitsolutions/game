import React from 'react';
import { Heading, Center, Button, Text } from '@chakra-ui/react';
import {
    Link,
    // useNavigate
} from 'react-router-dom';

export default function ConnectWallet() {
    return (
        <Center flex="1" bg="#263439" flexDirection="column" minH="100vh">
            <Heading fontSize="42px">Congratulations Email Verified!</Heading>
            <Text textAlign="center" mt="50px">
                Now connect wallet to account, Play and Earn WOT
            </Text>
            <Button w="300px" mt="50px" as={Link} to="/login">
                Connect wallet
            </Button>
        </Center>
    );
}
