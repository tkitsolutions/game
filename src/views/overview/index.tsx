import React from 'react';
import boxBg from 'assets/img/overview-bg.jpg';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Layout from 'layout';
import darkBg from 'assets/img/dark-bg.png';
import resourcesBg from 'assets/img/resources-bg.png';

export default function OverView() {
    return (
        <Layout>
            <Box
                bg={`url(${boxBg}) no-repeat center`}
                bgSize="cover"
                minH="330px"
                rounded="4px"
                position="relative"
            >
                <Heading
                    as="h2"
                    fontSize="20px"
                    bg="black"
                    p="5px"
                    position="absolute"
                    top="50px"
                    right="0"
                >
                    Overview - Homeworld
                </Heading>
            </Box>
            <Flex bg={`url(${resourcesBg})`} wrap="wrap" p="10px" mt="14px" rounded="4px">
                <Box
                    bg={`url(${darkBg}) no-repeat top left`}
                    bgSize="cover"
                    w="100%"
                    textAlign="center"
                    p="8px"
                    mb="10px"
                    rounded="4px"
                >
                    <Text as="span">Buildings</Text>
                </Box>
            </Flex>
        </Layout>
    );
}
