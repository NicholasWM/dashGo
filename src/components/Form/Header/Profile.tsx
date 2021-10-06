import {
    Flex,
    Text,
    Avatar,
    Box
} from '@chakra-ui/react'

interface ProfileProps{
    showProfileData: boolean
}

export function Profile({showProfileData = true }: ProfileProps) {
    return (
        <Flex align="center">
            {showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>NicholasWM</Text>
                    <Text color="gray.300" fontSize="small">nwm@gmail.com</Text>
                </Box>
            )}

            <Avatar size="md" name="Nicholas WM" src="https://avatars.githubusercontent.com/u/82908859?v=4"/>
        </Flex>
    )
}