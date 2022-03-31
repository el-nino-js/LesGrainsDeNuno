import { Container, Box, Heading, Image, useColorModeValue } from "@chakra-ui/react"
import Section from "../components/section"
const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} align="center">
                Hello, I&apos;m a full-stack developper kawaii based in Montreal UwU
            </Box>

            <Box display={{md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Nuno Silva-Pinto
                    </Heading>
            <p>Analog Photographer</p>
                </Box>
                <Box flexShrink={0}
                    mt={{ base: 4, md: 0 }}
                    ml={{ md: 6 }}
                    textAlign="center">
                <Image 
                    borderColor="whiteAlpha.800"
                    borderWidth={2}
                    borderStyle="solid"
                    maxWidth="100px"
                    display="inline-block"
                    borderRadius="full"
                    src="/images/nuno.jpg"
                    alt="Profile Image"
                />
                </Box>
            </Box>
        <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
        Travail
        </Heading>
        <p>Paragraph</p>   
        </Section>
        </Container>
    )
}

export default Page