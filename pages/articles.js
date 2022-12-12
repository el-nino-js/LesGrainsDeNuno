import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { ArticleGridItem } from '../components/grid-item'

import velvia50lagosthumbnail from '../public/images/2018/velvia50lagos/lagothumbnail.png'
import vanessanuthumbnail from '../public/images/2022/vanessa/vanessa_article.png'

import fjordthumbnail from '../public/images/2018/velvia50lagos/fjord.png'
import ir200thumbnail from '../public/images/2018/velvia50lagos/ir200.png'
import fragmentthumbnail from '../public/images/2018/velvia50lagos/fragment.png'


import thumbBaby from '../public/images/2021/baby.jpg'
import thumbCat from '../public/images/2022/cat/cathumbnail.png'

import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Global } from '@emotion/react'

const Articles = () => {
return (
    <Container>
        <Heading as="h3" fontSize={20} mb={4}>
            Articles 
        </Heading>

        <SimpleGrid columns={[1,1,2]} gap={6}>
            <Section delay={0.3}>
                <ArticleGridItem id="velvia50lagos" title="Velvia 50" thumbnail={velvia50lagosthumbnail}>
                    Praias de Lagos
                </ArticleGridItem>
            </Section>
            <Section delay={0.4}>
                <ArticleGridItem id="vanessa" title="Vanessa" thumbnail={vanessanuthumbnail}>
                    Tout ce qui repose provient de la lumière de l'autre
                </ArticleGridItem>
            </Section>
        </SimpleGrid>

        <SimpleGrid columns={[1,1,2]} gap={6}>
            <Section delay={0.3}>
                <ArticleGridItem id="washix" title="Fragment d'automne" thumbnail={fragmentthumbnail}>
                    Washi X - Fragments d'automne
                </ArticleGridItem>
            </Section>
            <Section delay={0.4}>
                <ArticleGridItem id="rolleiir200" title="Rollei Infrared 200" thumbnail={ir200thumbnail}>
                    La cerise sur le Fundão
                </ArticleGridItem>
            </Section>
        </SimpleGrid>

        <SimpleGrid columns={[1,1,2]} gap={6}>
            <Section delay={0.3}>
                <ArticleGridItem id="Ektar 100" title="Fjord" thumbnail={fjordthumbnail}>
                    Ektar 100 - Fjord
                </ArticleGridItem>
            </Section>
            
        </SimpleGrid>

        <Section delay={0.2}>
            <Divider my={6} />
                <Heading as="h3" fontSize={20} mb={4}>
                    Collaborations
                </Heading>
        </Section>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
            <Section>
                <ArticleGridItem id="baby" title="Baby" thumbnail={thumbBaby}>
                    1001 astuces pour être un kawaii baby (づ｡◕‿‿◕｡)づ
                </ArticleGridItem>
            </Section>
            <Section delay={0.5}>
                <ArticleGridItem id="chats" title="Chats" thumbnail={thumbCat}>
                    Palmarès des plus beaux chats
                </ArticleGridItem>
            </Section>    
        </SimpleGrid>
    </Container>
    )
}

export default Articles