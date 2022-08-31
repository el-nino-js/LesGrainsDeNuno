import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { ArticleGridItem } from '../components/grid-item'

import thumbJacobLeCoq from '../public/images/2021/jacob.jpg'
import thumbSantaClaus from '../public/images/2021/camille.jpg'
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
                <ArticleGridItem id="jacoblecoq" title="JacobLeCoq" thumbnail={thumbJacobLeCoq}>
                    Un vivifiante sortie avec Jacob le coq!  
                </ArticleGridItem>
            </Section>
            <Section delay={0.4}>
                <ArticleGridItem id="santaclaus" title="SantaClaus" thumbnail={thumbSantaClaus}>
                    Le monde secret du Père Noël avec Cam et Gabriela
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