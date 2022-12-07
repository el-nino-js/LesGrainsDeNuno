import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { ArticleGridItem } from '../components/grid-item'

import velvia50lagosthumbnail from '../public/images/2018/velvia50lagos/21.jpg'
import vanessanuthumbnail from '../public/images/2018/velvia50lagos/21.jpg'
import thumbBaby from '../public/images/2021/baby.jpg'

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
                <ArticleGridItem id="velvia50lagos" title="Velvia50Lagos" thumbnail={velvia50lagosthumbnail}>
                    Diapositive Velvia 50 - Praias de Lagos
                </ArticleGridItem>
            </Section>
            <Section delay={0.4}>
                <ArticleGridItem id="vanessa" title="Vanessa" thumbnail={vanessanuthumbnail}>
                    Tout ce qui repose provient de la lumière de l'autre
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
                <ArticleGridItem id="lena" title="Lena" thumbnail={thumbBaby}>
                    Pourquoi Lena est tout simplement la meilleure waifu?
                </ArticleGridItem>
            </Section>    
        </SimpleGrid>
    </Container>
    )
}

export default Articles