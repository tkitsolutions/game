import React from 'react';
import {
    Box,
    Flex,
    Text,
    Image,
    Button,
    SlideFade,
    IconButton,
    Center,
    Spinner,
} from '@chakra-ui/react';
import resourcesBg from 'assets/img/resources-bg.png';
import metalMine from 'assets/img/metal-mine.jpg';
import { SmallCloseIcon } from '@chakra-ui/icons';
import metal from 'assets/img/metal.jpg';
import crystal from 'assets/img/crystal.jpg';
import fuel from 'assets/img/fule.jpg';
import darkBg from 'assets/img/dark-bg.png';
import { useGetResourceDetail, useUpdateResource } from 'utils/apis/resources.api';

export default function ResourceDetail({
    isShow,
    onClose,
    id,
}: {
    isShow: boolean;
    onClose: () => void;
    id: string;
}) {
    const { data, isLoading } = useGetResourceDetail(id);
    const { mutate: updateResource, isLoading: levelUpdating } = useUpdateResource();

    console.log('data', data);

    return (
        <SlideFade in={isShow} offsetY="100px" style={{ zIndex: '2' }}>
            <Box
                rounded="4px"
                bg={`url(${resourcesBg})`}
                minH="320px"
                maxH="320px"
                h="100%"
                zIndex="2"
                position="relative"
            >
                {isLoading ? (
                    <Center minH="320px">
                        <Spinner />
                    </Center>
                ) : (
                    <>
                        <Flex>
                            <Image
                                rounded="4px"
                                border="2px solid"
                                borderColor="black"
                                maxW="200px"
                                minH="200px"
                                src={metalMine}
                            />
                            <Box borderBottom="2.5px solid #151f29" flex="1">
                                <Flex
                                    bg={`url(${darkBg}) no-repeat top left`}
                                    bgSize="cover"
                                    p="4px 6px"
                                    border="2px solid"
                                    borderColor="black"
                                    justify="space-between"
                                >
                                    <Text variant="primary" fontSize="13px" fontWeight="600">
                                        {data?.name}
                                    </Text>
                                    <Flex align="center" gap="6px">
                                        <Text variant="primary" fontSize="13px" fontWeight="600">
                                            Level: {data?.level || 0}
                                        </Text>
                                        <IconButton
                                            onClick={onClose}
                                            aria-label="close"
                                            icon={<SmallCloseIcon />}
                                            variant="unstyled"
                                            minW="max-content"
                                            h="max-content"
                                        />
                                    </Flex>
                                </Flex>
                                <Box p="10px">
                                    <Text variant="secondary" fontSize="12px">
                                        Duration: <Text as="span">{data?.productionTime}s</Text>
                                    </Text>
                                    <Text variant="secondary" fontSize="12px">
                                        {data?.production && (
                                            <>
                                                Production:{' '}
                                                <Text as="span">{data?.production}</Text>
                                            </>
                                        )}
                                        {data?.energyNeeded && (
                                            <>
                                                Energy Needed:{' '}
                                                <Text as="span">{data?.energyNeeded}</Text>
                                            </>
                                        )}
                                    </Text>
                                    <Text mt="20px" variant="secondary" fontSize="12px">
                                        Required to Improve;
                                    </Text>
                                    <Flex justify="space-between" mt="8px">
                                        <Flex gap="10px">
                                            <ResourceUtil amount={data?.metal} index={0} />
                                            <ResourceUtil amount={data?.crystal} index={1} />
                                            <ResourceUtil amount={data?.fuel} index={2} />
                                        </Flex>
                                        <Button
                                            isLoading={levelUpdating}
                                            onClick={() => updateResource(id)}
                                        >
                                            Improve
                                        </Button>
                                    </Flex>
                                </Box>
                            </Box>
                        </Flex>
                        <Text variant="secondary" fontSize="13px" p="10px">
                            {data?.description}
                        </Text>
                    </>
                )}
            </Box>
        </SlideFade>
    );
}

function ResourceUtil({ amount, index }: { amount?: number; index: number }) {
    return amount ? (
        <Box textAlign="center">
            <Image
                shadow="0px 0px 2px 3px rgba(0,0,0,0.5)"
                maxW="48px"
                h="36px"
                objectFit="cover"
                rounded="3px"
                src={[metal, crystal, fuel][index]}
            />
            <Text mt="4px" as="span" fontSize="12px">
                {amount}
            </Text>
        </Box>
    ) : null;
}
