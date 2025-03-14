import { Container, Badge, Link, List, ListItem} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ArticleImage, Meta } from '../../components/article'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Article = () => {
    return (
        <Layout Title="JacobLeCoq">
            <Container>
            <Title>
              Inkdrop <Badge>2016</Badge>
            </Title>
                <P>
                Un café avec 100+ idée de concoctions pour vous faire rêver de plaisir
                </P>
                <List ml={4} my={4}>

                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://www.inkdrop.app/">
                            https://www.inkdrop.app/ <ExternalLinkIcon mx="2px" />
                    </Link>

                    </ListItem>
                        <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows/macOS/Linux/iOS/Android</span>
                    </ListItem>

                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>NodeJS, Electron, React Native</span>
                    </ListItem>

                    <ListItem>
                        <Meta>Blogpost</Meta>
                        <Link href="https://blog.inkdrop.app/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-7a5b94b8e820">
                            How I’ve Attracted The First 500 Paid Users For My SaaS That Costs
                            $5/mo <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>

                <ArticleImage src="/LesGrainsDeNuno/public/images/nunobnw.jpg" alt="JacobLeCoq" />
                <ArticleImage src="/LesGrainsDeNuno/public/images/nunobnw.jpg" alt="JacobLeCoq" />
            </Container>
        </Layout>
    )
}

export default Article