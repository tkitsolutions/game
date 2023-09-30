import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { ChatIcon, EmailIcon } from '@chakra-ui/icons';
import darkBg from 'assets/img/dark-bg.png';

export default function UserNotification() {
    return (
        <Flex gap="15px">
            <Flex
                bg={`url(${darkBg}) no-repeat top left`}
                bgSize="cover"
                boxShadow="0px 0px 2px 3px rgba(0,0,0,0.75)"
                borderRadius="3px"
                p="7px 24px"
                gap="14px"
                justify="center"
                w="max-content"
            >
                <ChatIcon fontSize="26px" />
                <EmailIcon fontSize="26px" />
            </Flex>
            <Box
                bg={`url(${darkBg}) no-repeat top left`}
                bgSize="cover"
                boxShadow="0px 0px 2px 3px rgba(0,0,0,0.75)"
                borderRadius="3px"
                p="7px"
                flex="1"
            >
                <Text fontWeight="600" textAlign="center">
                    No Fleet movement
                </Text>
            </Box>
        </Flex>
    );
}
