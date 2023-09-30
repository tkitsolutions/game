import React, { useCallback, useEffect } from 'react';
import { Container, Flex, Image, Avatar, Box, Text } from '@chakra-ui/react';
import metal from 'assets/img/metal.jpg';
import crystal from 'assets/img/crystal.jpg';
import fuel from 'assets/img/fule.jpg';
import energy from 'assets/img/energy.jpg';
import logo from 'assets/img/logo.png';
import commander1 from 'assets/img/commander1.png';
import { useGetProfile, useUpdateAssets } from 'utils/apis/user.api';
import { useProductionMine } from 'hooks';
import { type UserAsset } from 'utils/types/user.type';
const images = {
    metal,
    crystal,
    fuel,
    energy,
};

export default function Header() {
    const { data: profile } = useGetProfile();

    return (
        <Container maxW="1080px">
            <Flex justify="space-between" py="24px">
                <Image maxW="150px" objectFit="contain" src={logo} />
                <Flex gap="16px">
                    {profile?.assets?.map(item => (
                        <DisplayUserAsset key={item?.id} assets={item} />
                    ))}
                </Flex>
                <Flex wrap="wrap" maxW="280px" gap="10px" justify="flex-end">
                    {[...Array(8)]?.map((item, i) => (
                        <Avatar
                            src={commander1}
                            key={i}
                            w="32px"
                            h="32px"
                            shadow="0px 0px 2px 3px rgba(0,0,0,0.5)"
                            rounded="3px"
                        />
                    ))}
                </Flex>
            </Flex>
        </Container>
    );
}

function DisplayUserAsset({ assets }: { assets: UserAsset }) {
    const { value } = useProductionMine(
        Number(localStorage.getItem(assets?.name)) || assets?.currentValue,
        assets?.available,
        assets?.storage,
    );
    const { mutate: updateAsset } = useUpdateAssets();

    useEffect(() => {
        localStorage.setItem(assets?.name, `${value}`);
    }, [value]);

    useEffect(() => {
        return () => {
            update();
        };
    }, []);

    const update = useCallback(() => {
        if (value) {
            console.log(
                'unmount value',
                localStorage.getItem(assets?.name),
                value,
                assets?.currentValue,
            );
            updateAsset([{ ...assets, currentValue: Number(localStorage.getItem(assets?.name)) }]);
        }
    }, []);

    return (
        <Box textAlign="center">
            <Image
                shadow="0px 0px 2px 3px rgba(0,0,0,0.5)"
                maxW="48px"
                h="36px"
                objectFit="cover"
                rounded="3px"
                src={images[assets?.name]}
            />
            <Text mt="4px" as="span" fontSize="12px">
                {value}
            </Text>
        </Box>
    );
}
