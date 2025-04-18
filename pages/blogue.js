import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { ArticleGridItem, BlogueGridItem, ArticleGridItemExt } from '../components/grid-item'

import velvia50lagosthumbnail from '../public/images/2018/velvia50lagos/lagothumbnail.png'
import vanessanuthumbnail from '../public/images/2022/vanessa/vanessa_article.png'

import fjordthumbnail from '../public/images/2018/velvia50lagos/fjord.png'
import swissthumbnail from '../public/images/ArticlesThumbnail/swissthumb.png'
import portra400thumbnail from '../public/images/ArticlesThumbnail/portra400thumbnail.png'
import ir200thumbnail from '../public/images/2018/velvia50lagos/ir200.png'
import fragmentthumbnail from '../public/images/2018/velvia50lagos/fragment.png'
import galiciethumbnail from '../public/images/ArticlesThumbnail/galiciethumbnail.jpg'
import portothumbnail from '../public/images/ArticlesThumbnail//portophoto.jpg'
import pophothumbnail from '../public/images/ArticlesThumbnail//pophothumbnail.png'
import luminarthumbnail from '../public/images/ArticlesThumbnail//luminarnyc.png'
import nycthumbnail from '../public/images/ArticlesThumbnail//cnycthumbnail.png'
import coloremthumbnail from '../public/images/ArticlesThumbnail//coloremThumbnail.jpg'
import ektachromethumbnail from '../public/images/ArticlesThumbnail//ektachromethumbnail.png'
import sucrethumbnail from '../public/images/ArticlesThumbnail//sucrethumbnail.png'
import portra160sudthumbnail from '../public/images/ArticlesThumbnail//portra160sudthumbnail.png'
import cinestill400dlisbayonnethumbnail from '../public/images/ArticlesThumbnail//cinestill400dlisbayonnethumbnail.png'
import gold200paristhumbnail from '../public/images/ArticlesThumbnail//gold200paristhumbnail.png'
import fp4euthumbnail from '../public/images/ArticlesThumbnail//fp4euthumbnail.png'
import aurora800thumbnail from '../public/images/ArticlesThumbnail//aurora800thumbnail.png'
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
                <BlogueGridItem id="spotify" title="Velvia 50" thumbnail={velvia50lagosthumbnail}>
                  Hasta la vista Spofity
                </BlogueGridItem>
            </Section>
            <Section delay={0.4}>
                <BlogueGridItem id="vanessa" title="Vanessa" thumbnail={vanessanuthumbnail}>
                    Tout ce qui repose provient de la lumière de l'autre
                </BlogueGridItem>
            </Section>
        </SimpleGrid>


     
    </Container>
    )
}

export default Articles