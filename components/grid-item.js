import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title, thumbnail }) => (
    <Box w="100%" align="center">
        <LinkBox cursor ="pointer">
            <Image src={thumbnail}
            alt={title}
            className="grid-item-thumbnail"
            placeholder="blur"
            loading="lazy"
            />
        <LinkOverlay href={href} target="_blank">
            <Text mt={2}>{title}</Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
        </LinkBox>
    </Box>
)

export const ArticleGridItem = ({children, id, title, thumbnail}) => (
    <Box w="100%" align="center">
        <NextLink href={`/articles/${id}`}>
            <LinkBox cursor="pointer">
                <Image 
                    src={thumbnail}
                    alt={title}
                    className="grid-item-thumbnail"
                    placeholder="blur"
                />
                <LinkOverlay href={`/articles/${id}`} >
                    <Text  mt={2} fontSize={20}>
                        {title}
                    </Text>
                </LinkOverlay>
                <Text fontSize={14}>{children}</Text>
            </LinkBox>
        </NextLink>
    </Box>    
)

export const BlogueGridItem = ({children, id, title, thumbnail}) => (
    <Box w="100%" align="center">
        <NextLink href={`/blogue/${id}`}>
            <LinkBox cursor="pointer">
                <Image 
                    src={thumbnail}
                    alt={title}
                    className="grid-item-thumbnail"
                    placeholder="blur"
                />
                <LinkOverlay href={`/blogue/${id}`} >
                    <Text  mt={2} fontSize={20}>
                        {title}
                    </Text>
                </LinkOverlay>
                <Text fontSize={14}>{children}</Text>
            </LinkBox>
        </NextLink>
    </Box>    
)

export const ArticleGridItemExt = ({children,link, title, thumbnail}) => (
    <Box w="100%" align="center">
            <LinkBox cursor="pointer">
            <a title="Chats"
                        href={link}
                         target="_blank" rel="noreferrer">
                        <Image  src= {thumbnail}></Image> </a> 
                <LinkOverlay href={link} >
                    <Text  mt={2} fontSize={20}>
                        {title}
                    </Text>
                </LinkOverlay>
                <Text fontSize={14}>{children}</Text>
            </LinkBox>
        
    </Box>    
)

export const GridItemStyle = () => (
    <Global styles={`
        .grid-item-thumbnail {
            border-radius: 12px;
        }
    `}
    />
)