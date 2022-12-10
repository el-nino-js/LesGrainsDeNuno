import NextLink from 'next/link'
import { Button, Container, Box, Heading, Image, Link, List, ListItem, useColorModeValue, SimpleGrid, Icon, Audio } from "@chakra-ui/react"
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout, { article } from '../components/layouts/article'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'

const Page = () => {
    const angelIG = "https://www.instagram.com/nuninho.js/"
    const devilIG = "https://www.instagram.com/djizzkstra/"
    return (
        <Layout>
            <Container>
                
                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} align="center">
                <i><b>Aucune histoire ne bat le <br></br> talent inébranlable du Japon. - Nuno-G S-Pinto</b> <br></br> «Propos pris hors-contexte par Kenny N.»</i>
                </Box>
                <br/>
                <Box display={{md: 'flex'}}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Nuno Silva-Pinto
                        </Heading>
                        <i>Aspirant à l'ingénierie logiciel <br/> M.Sc.A en Génie Informatique Cyber-Sec (en cours) <br/> Détenteur d'un doctorat en clanchage à Mario-Kart <br/> Grimpeur intermédiaire V3-V6 <br/>  Wannabe barista pseudo-notoire </i>
                    </Box>
                    <Box flexShrink={0}
                        mt={{ base: 4, md: 0 }}
                        ml={{ md: 6 }}
                        paddingTop={30}
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
                    Bonjour / Oi
                    </Heading>
                    <Paragraph>
                        Autant faire un «à propos» puisque je suis doué avec les causes perdues. Alors, j'apprécie la photographie et surtout la photographie
                        argentique. Visages de longue date ou éphémères, même engorgées de grains, mon coeur rebondit de ces faces sur le papier. Encore mieux, s'il s'agit 
                        d'un ancien colloque lituanien avec un beau sourire hypnotisant, la gorge immaculée de sang après avoir mal
                        débouché une Super Bock le jour de son anniversaire. Abraço si tu me lis Julius.
                        <br></br><br></br>
                        &nbsp; Je peux sinon vous faire perdurer ce{' '}
                        <NextLink href="http://www.nihongonosekai.com/newspapers/Japanese_Naturally/articles/19930822jn.htm">
                            <Link href="http://www.nihongonosekai.com/newspapers/Japanese_Naturally/articles/19930822jn.htm">jiko manzoku</Link>
                        </NextLink>,
                        en vous décrivant  mon amour pour la {' '}
                         <NextLink href="https://www.imdb.com/name/nm0234237/?ref_=tt_ov_st">
                            <Link href="https://www.imdb.com/name/nm0234237/?ref_=tt_ov_st">soupe à la tomate</Link>
                        </NextLink>, 
                         de mon mémoire sur papirus de 20 pages sur «Pourquoi {' '}
                         <NextLink href="https://myanimelist.net/profile/nunudes">
                            <Link href="https://myanimelist.net/profile/nunudes">B... </Link>
                        </NextLink>
                         est un Masterpiece»
                         
                         , de mon timey wimey {' '} 
                        <NextLink href="https://www.youtube.com/watch?v=M7EXlS9-XpU">
                            <Link href="https://www.youtube.com/watch?v=M7EXlS9-XpU">queer </Link>
                        </NextLink>
                        
                         spectrum,
                        de mon Top 10 des recettes de {' '}
                        <NextLink href="https://www.ricardocuisine.com/">
                            <Link href="https://www.ricardocuisine.com/">Ricardo mon boy</Link>
                        </NextLink>
                        , ou de ma religion assumée en tant que fervant disciple de l'{' '}
                        <NextLink href="https://encredemine.wordpress.com/">
                            <Link href="https://encredemine.wordpress.com/">Asatoïsme</Link>
                        </NextLink>.
                        <br></br><br></br>
                        &nbsp; Voilà, pour le reste, vous pouvez visiter mes clichés. Le plus y a du grain, le plus c'est «real».
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
                            Né à Montréal/Mooniyang, Québec.  
                        </BioSection>
                        <BioSection>
                            <BioYear>2021</BioYear>
                            Complète un Baccalauréat en Génie Logiciel à l'École Polytechnique Montréal
                        </BioSection>
                        <BioSection>
                            <BioYear>2023</BioYear>
                            Tel l'élargissement d'une station de métro montréalaise sur la ligne bleu, le retard pour cette section ne vous quittera plus.
                        </BioSection>
                </Section>
                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        J'♥
                    </Heading>
                        <BioSection>
                            {' '}
                        <NextLink href="/articles/chats">
                            <Link href="/articles/chats">Les chats</Link>
                        </NextLink>
                      
                        </BioSection>
                </Section> 
                <Section delay={0.3} >
                    <Heading as="h3" variant="section-title">
                        Sur la toile
                    </Heading>
                    <List>
                        <ListItem>
                            <Link href="https://github.com/el-nino-js" target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub} />}>
                                    @elNino.js
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            
                            <Link href={useColorModeValue(angelIG, devilIG)} target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoInstagram} />}>
                                {useColorModeValue('@nuninho.js', '@djizzkstra')}
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://www.twitter.com/nuninho.js/" target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoTwitter} />}>
                                    @elNino.js
                                </Button>
                            </Link>
                        </ListItem>
                    </List>
                </Section>
            </Container>
        </Layout>
    )
}

export default Page