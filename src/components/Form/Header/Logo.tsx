import {
    Text,
} from '@chakra-ui/react'

export function Logo() {
    return (
        <Text
            fontSize={["2xl", "3xl", "4xl"]}
            fontWeight="bold"
            letterSpacing="tight"
            width="64"
        >
            dashgo
            <Text color="pink.500" as="span" marginLeft="1">.</Text>
        </Text>
    )
}
