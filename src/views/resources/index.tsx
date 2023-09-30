import React, { useState } from 'react';
import boxBg from 'assets/img/resources-main-screen.jpg';
import { Box, Flex, Heading, useDisclosure, Text, Spinner, Center } from '@chakra-ui/react';
import Layout from 'layout';
import ResourceCard from 'components/resourceCard';
import darkBg from 'assets/img/dark-bg.png';
import resourcesBg from 'assets/img/resources-bg.png';
import ResourceDetail from 'components/resourceDetail';
import { useGetResources } from 'utils/apis/resources.api';

export default function Resources() {
    const [resourceId, setResourceId] = useState('');
    const { isOpen, onClose, onOpen } = useDisclosure();

    const { data: resourcesList, isLoading } = useGetResources();

    const handleOpenResource = (id: string) => {
        setResourceId(id);
        onOpen();
    };

    return (
        <Layout>
            <Box
                bg={`url(${boxBg}) no-repeat center`}
                bgSize="cover"
                rounded="4px"
                position="relative"
            >
                <ResourceDetail id={resourceId} isShow={isOpen} onClose={onClose} />
                {!isOpen && (
                    <Heading
                        as="h2"
                        fontSize="20px"
                        bg="black"
                        p="5px"
                        position="absolute"
                        top="50px"
                        right="0"
                    >
                        Resources - Homeworld
                    </Heading>
                )}
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
                {isLoading ? (
                    <Center minH="240px" w="100%">
                        <Spinner />
                    </Center>
                ) : (
                    resourcesList?.map(item => (
                        <ResourceCard
                            key={item?.id}
                            resource={item}
                            showResource={handleOpenResource}
                        />
                    ))
                )}
            </Flex>
        </Layout>
    );
}
