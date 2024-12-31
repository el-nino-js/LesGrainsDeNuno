import NextLink from 'next/link'
import { Button, Container, Box, Heading, Image, Link, List, ListItem, useColorModeValue, SimpleGrid, Icon, Audio } from "@chakra-ui/react"
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout, { article } from '../components/layouts/article'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoVue, IoLogoSnapchat } from 'react-icons/io5'

const Page = () => {
    const angelIG = "https://www.instagram.com/nuninho.js/"
    const devilIG = "https://www.instagram.com/djizzkstra/"
    return (
        <Layout>
            <Container>
                
                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} align="center">
                <i><b>Fragments de soirées, photos, montages et autres intérêts virvoletant </b></i>
                </Box>
                <br/>
                <Box display={{md: 'flex'}}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Nunautilus 
                        </Heading>
                        <i>SecOps en Cyberdéfense <br/> M.Sc.A en Génie Informatique Cyber-Sec <br/> Grimpeur intermédiaire V3-V6 (jaune-orange) </i>
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
                        Amateur de photographie argentique
                        <br></br><br></br>
                        &nbsp; Je garde ici mon cyber cahier créatif. J'ai tenté divers clichés que je souhaite garder et où j'ai voulu tenter d'y donner un sens.
                        Mes principales passions vont vers la prise de photo, les techniques de chambres noires, l'informatique, la randonnée, l'animation et l'horreur.  
                        
                        Je peux sinon vous faire perdurer ce{' '}
                        <NextLink href="http://www.nihongonosekai.com/newspapers/Japanese_Naturally/articles/19930822jn.htm">
                            <Link href="http://www.nihongonosekai.com/newspapers/Japanese_Naturally/articles/19930822jn.htm">jiko manzoku</Link>
                        </NextLink>,
                        en vous présentant cet 
                        <NextLink href="https://encredemine.wordpress.com/">
                            <Link href="https://encredemine.wordpress.com/"> ami inspirant</Link>
                        </NextLink>.
                        <br></br><br></br>
                        Je prends des milliers de photos argentiques depuis 2017, en couleur, en noir et blanc, ou en diapositive. J'ai constaté un grand intérêt pour ce type de photographie.
Tellement de techniques sont à découvrir ! Le plus je m'engage dans des projets photo, le plus j'en apprends. J'ai appris à réaliser mes propres développements avec des tanks de développement, à mesurer les dillutions de mes produits chimiques, peaufiner mes tirages, évaluer le développement (BnW et C41) et scanner un 35mm ou un moyen format. Le plus difficile reste de demeurer calme et patient. Mes débuts ont été parsemés de frustrations.

                        <br></br><br></br>
                        À ceuzes qui souhaiteraient se lancer, n'ayez pas peur : on apprend vite une fois commencé. Cela peut sembler complexe et décourageant quand on essaie d'intellectualiser tous les concepts dans le cachochon. Se motiver et passer à l’action est bien plus important que de chercher à atteindre l'expertise ou la perfection immédiate. Les erreurs sont inévitables, mais elles font partie du processus d’apprentissage et d’évolution. Soyez bienveillant envers vous-mêmes. Un bon repos avant d'entamer des projets complexes s’avére salutaire. Enfin, surtout, amusez-vous !
                        <br></br><br></br>
                        &nbsp; Pour de plus ample découverte, votre visite est la bienvenue.
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
                            Né au Canada
                        </BioSection>
                        <BioSection>
                            <BioYear>2021</BioYear>
                            Complète un Baccalauréat en Génie Logiciel
                        </BioSection>
                        <BioSection>
                            <BioYear>2024</BioYear>
                            Complète une Maîtrise-Recherche en Génie Informatique
                        </BioSection>
                        <BioSection>
                            <BioYear>2024</BioYear>
                            Intègre l'équipe SecOps
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
                                {useColorModeValue('@nuninh.o', '@djizzkstra')}
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
                        <ListItem>
                            <Link href="https://www.twitter.com/nuninho.js/" target="_blank">
                            <Button variant="ghost" colorScheme="teal" leftIcon={useColorModeValue(<Icon as={IoLogoVue} />, <Icon as={IoLogoSnapchat} />)}>
                                {useColorModeValue('À vous la Vue', 'À moi ton 🍑')}   
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

