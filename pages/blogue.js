import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { ArticleGridItem, BlogueGridItem, ArticleGridItemExt } from '../components/grid-item'

import spotifythumbnail from '../public/images/ArticlesThumbnail/spotifythumbnail.png'
import oursthumbnail from '../public/images/ArticlesThumbnail/oursthumbnail.jpg'


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
                <BlogueGridItem id="spotify" title="Self-host" thumbnail={spotifythumbnail}>
                  Hasta la vista Spofity
                </BlogueGridItem>
            </Section>
            <Section delay={0.3}>
                <BlogueGridItem id="ours" title=" Divers Nation" thumbnail={oursthumbnail}>
                  L'histoire de Petit Ours et Grand Ours
                </BlogueGridItem>
            </Section>
            
        </SimpleGrid>


     
    </Container>
    )
}

export default Articles