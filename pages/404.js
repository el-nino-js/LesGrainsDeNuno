import NextLink from 'next/link'
import {
    Box,
    Heading,
    Container,
    Text,
    Divider,
    Button
} from '@chakra-ui/react'

const NotFound = () => {
    return (
        <Container>
            <Heading as="h1">Not Found</Heading>
        <Text>La page que vous recherchez n&apos;existe pas</Text>
        <Divider my={6} />
        <Box my={6} align="center">
            <NextLink href="/">
                <Button colorScheme="teal">Retourner à l&apos;écran d'accueil</Button>
            </NextLink>
        </Box>
        </Container>
    )
}

export default NotFound

