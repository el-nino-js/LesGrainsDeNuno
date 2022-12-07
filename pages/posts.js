import { Container, Heading, SimpleGrid, Box, AspectRatio} from '@chakra-ui/react'
import Layout from '../components/layouts/article' 
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import thumbSaucisse from '../public/images/saucisse.png'

const Posts = () => (
    <Layout title="Posts">
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Popular Posts
            </Heading>
            <Section delay={0.1}>
                <SimpleGrid column={[1,2,2]} gap={6}>
                <Box mx={4} mb={4}>
                <Box
                    
                /><AspectRatio maxW='560px' ratio={1}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/v9ImDjnIiKk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </AspectRatio>
                </Box>
                </SimpleGrid>
                
            </Section>
          
           
        </Container>
    </Layout>

)

export default Posts