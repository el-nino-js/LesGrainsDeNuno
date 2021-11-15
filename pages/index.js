import { Container, Box, Heading } from "@chakra-ui/react"
const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg="pink" p={3} align="center">
                Hello, I&apos;m a full-stack developper kawaii based in Montreal UwU
            </Box>

            <Box display={{md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Nuno Silva-Pinto
                    </Heading>
        <p>Analog Photographer</p>
            </Box>
                </Box>
        </Container>
    )
}

export default Page