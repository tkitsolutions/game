import React from 'react';
import { Card, Flex, Image, Text } from '@chakra-ui/react';
import metalMine from 'assets/img/metal-mine.jpg';
import { UserResource } from 'utils/types/resources.typs';

export default function ResourceCard({
    showResource,
    resource,
}: {
    resource: UserResource;
    showResource: (id: string) => void;
}) {
    const isEnabled = resource?.resourcesId?.statusDefault;
    return (
        <Card
            bg="black"
            onClick={() => showResource(resource?.id)}
            pointerEvents={isEnabled ? 'all' : 'none'}
            maxW="128px"
        >
            <Image
                filter={isEnabled ? 'none' : 'grayscale(1)'}
                minH="120px"
                maxH="150px"
                objectFit="cover"
                src={metalMine}
            />
            <Flex p="4px 8px" textAlign="right" justify="space-between">
                <Text variant="primary" as="span" fontSize="12px">
                    {resource?.resourcesId?.name}
                </Text>
                <Text variant="primary" as="span" fontSize="12px">
                    {resource?.level}
                </Text>
            </Flex>
        </Card>
    );
}
