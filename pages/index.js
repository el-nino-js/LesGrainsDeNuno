import NextLink from 'next/link'
import { Button, Container, Box, Heading, Image, Link, useColorModeValue } from "@chakra-ui/react"
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout, { article } from '../components/layouts/article'

const Page = () => {
    return (
        <Layout>
            <Container>
            <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
                    Hello, I&apos;m a full-stack developper kawaii based in Montreal UwU
                </Box>

                <Box display={{md: 'flex'}}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Nuno Silva-Pinto
                        </Heading>
                        <i>Aucune histoire ne bat le talent inébranlable du Japon.</i>
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
                    <Paragraph>Nuno est un ingénieur logiciel diplômé de l'école Polytechnique Montréal.
                        Il parfait actuellement une maîtrise-recherche en génie informatique qu'il spécialise en cyber-securité.
                        En plus de ce domaine qu'il affectionne, il travail également dans l'avionique et dans les ontologies.
                        Curieux de nature, il a un tour de main pour tout ce qui touche à la photographie argentique. Pour finir, il est un
                        fervant disciple de l'{' '}
                        <NextLink href="https://encredemine.wordpress.com/">
                            <Link href="https://encredemine.wordpress.com/">Asatoïsme</Link>
                        </NextLink>
                        .
                    </Paragraph>
                    <Box aligne="center" my={4}>
                        <NextLink href="/articles">
                            <Button rightIcon={<ChevronRightIcon/> }  colorScheme="teal">
                                Mon Portfolio
                            </Button>
                        </NextLink>
                    </Box>
                </Section>
                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Biographie
                    </Heading>
                        <BioSection>
                            <BioYear>1995</BioYear>
                            Né à Montréal/<strike>Tio'tia:ke</strike>/Mooniyang, Québec.   
                        </BioSection>
                        <BioSection>
                            <BioYear>2020</BioYear>
                            Complété un Baccalauréat en Génie Logiciel; Gradué à l'école Polytechnique Montréal
                        </BioSection>
                </Section>
                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        J'♥
                    </Heading>
                        <BioSection>
                            <BioYear>1995</BioYear>
                            Né à Montréal/<strike>Tio'tia:ke</strike>/Mooniyang, Québec.   
                        </BioSection>
                        <BioSection>
                            <BioYear>2020</BioYear>
                            Complété un Baccalauréat en Génie Logiciel; Gradué à l'école Polytechnique Montréal
                        </BioSection>
                    
                </Section> 
            </Container>
        </Layout>
    )
}

export default Page