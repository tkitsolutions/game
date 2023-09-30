import React from 'react';
import planet1 from 'assets/img/planet.png';
import planet2 from 'assets/img/planet2.png';
import { Box, Image, Text, Grid } from '@chakra-ui/react';
import darkBg from 'assets/img/dark-bg.png';

export default function Planets() {
    return (
        <Box maxW="180px" w="100%">
            <Box
                bg={`url(${darkBg}) no-repeat top left`}
                bgSize="cover"
                boxShadow="0px 0px 2px 3px rgba(0,0,0,0.75)"
                borderRadius="3px"
                p="7px"
            >
                <Text fontWeight="600" textAlign="center">
                    1/1 Planet
                </Text>
            </Box>
            {[planet1, planet2]?.map(item => (
                <Grid
                    as="a"
                    href="#"
                    mt="20px"
                    key={item}
                    textAlign="center"
                    _hover={{ img: { boxShadow: '0px 0px 5px 5px rgba(214,155,80,1)' } }}
                >
                    <Image mx="auto" rounded="32px" src={item} />
                    <Text as="span" mt="5px">
                        planet 1
                    </Text>
                </Grid>
            ))}
        </Box>
    );
}
