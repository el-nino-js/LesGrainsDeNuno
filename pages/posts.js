import { Container, Heading, SimpleGrid} from '@chakra-ui/react'
import Layout from '../components/layouts/article' 
import Section from '../components/section'
import { GridItem } from '../components/grid-item'


import thumbJacobLeCoq from '../public/images/2021/jacob.jpg'
import thumbSantaClaus from '../public/images/2021/camille.jpg'
import thumbBaby from '../public/images/2021/baby.jpg'
import thumbSaucisse from '../public/images/saucisse.png'

const Posts = () => (
    <Layout title="Posts">
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Popular Posts
            </Heading>
            <Section delay={0.1}>
                <SimpleGrid column={[1,2,2]} gap={6}>
                    <GridItem 
                    title="Je suis une saucisse" 
                    thumbnail={thumbSaucisse} 
                    href="https://www.youtube.com/watch?v=v9ImDjnIiKk">

                    </GridItem>
                    
                </SimpleGrid>
                <SimpleGrid column={[1,2,2]} gap={6}>
                    <GridItem 
                    title="Je suis une saucisse" 
                    thumbnail={thumbSaucisse} 
                    href="https://www.youtube.com/watch?v=v9ImDjnIiKk">

                    </GridItem>
                    
                </SimpleGrid>
                
            </Section>
            <Section delay={0.1}>
                <SimpleGrid column={[1,2,2]} gap={6}>
                    <GridItem 
                    title="Je suis une saucisse" 
                    thumbnail={thumbSaucisse} 
                    href="https://www.youtube.com/watch?v=v9ImDjnIiKk">

                    </GridItem>
                    
                </SimpleGrid>
                <SimpleGrid column={[1,2,2]} gap={6}>
                    <GridItem 
                    title="Je suis une saucisse" 
                    thumbnail={thumbSaucisse} 
                    href="https://www.youtube.com/watch?v=v9ImDjnIiKk">

                    </GridItem>
                    
                </SimpleGrid>
                
            </Section>
            <Section delay={0.1}>
                <SimpleGrid column={[1,2,2]} gap={6}>
                    <GridItem 
                    title="Je suis une saucisse" 
                    thumbnail={thumbSaucisse} 
                    href="https://www.youtube.com/watch?v=v9ImDjnIiKk">

                    </GridItem>
                    
                </SimpleGrid>
                <SimpleGrid column={[1,2,2]} gap={6}>
                    <GridItem 
                    title="Je suis une saucisse" 
                    thumbnail={thumbSaucisse} 
                    href="https://www.youtube.com/watch?v=v9ImDjnIiKk">

                    </GridItem>
                    
                </SimpleGrid>
                
            </Section>
        </Container>
    </Layout>

)

export default Posts