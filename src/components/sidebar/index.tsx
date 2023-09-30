import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { MENU } from 'utils/constants';

export default function SideBar() {
    return (
        <Box as="nav" maxW="180px" w="100%">
            {MENU?.map(({ label, path }) => (
                <Text as={NavLink} to={path} key={path} variant="link" mb="8px">
                    {label}
                </Text>
            ))}
        </Box>
    );
}
