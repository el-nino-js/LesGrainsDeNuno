import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { ArticleGridItem, BlogueGridItem, ArticleGridItemExt } from '../components/grid-item'

import spotifythumbnail from '../public/images/ArticlesThumbnail/spotifythumbnail.png'


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
            
        </SimpleGrid>


     
    </Container>
    )
}

export default Articles