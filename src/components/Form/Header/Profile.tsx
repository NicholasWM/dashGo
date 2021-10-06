import {
    Flex,
    Text,
    Avatar,
    Box
} from '@chakra-ui/react'

export function Profile() {
    return (
        <Flex
            align="center"
         >
        <Box
            mr="4"
            textAlign="right"
        >
            <Text>NicholasWM</Text>
            <Text color="gray.300" fontSize="small">nwm@gmail.com</Text>
        </Box>
        <Avatar size="md" name="Nicholas WM" src="https://avatars.githubusercontent.com/u/82908859?v=4"/>
    </Flex>
    )
}