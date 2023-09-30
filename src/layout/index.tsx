import React from 'react';
import { Box, Container, Flex } from '@chakra-ui/react';
import mainBg from 'assets/img/main-bg.jpg';
import Header from 'components/header';
import SideBar from 'components/sidebar';
import Planets from 'components/planets';
import UserNotification from 'components/userNotifications';

export default function Layout({ children }: { children?: JSX.Element | JSX.Element[] }) {
    return (
        <Box bg={`url(${mainBg}) no-repeat top left`} bgSize="cover" minH="100vh">
            <Header />
            <Container maxW="1080px">
                <Flex gap="14px">
                    <SideBar />
                    <Box flex="1">
                        <UserNotification />
                        <Box py="14px">{children}</Box>
                    </Box>
                    <Planets />
                </Flex>
            </Container>
        </Box>
    );
}
