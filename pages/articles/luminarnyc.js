/* eslint-disable react/no-unescaped-entities */
import { Container, Badge, Heading, Link, useColorModeValue} from '@chakra-ui/react'
import { Title } from '../../components/article'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/paragraph'
import NextLink from 'next/link'

import s from '../components/style.module.css'
import pic0 from '../../public/images/2022/lumnyc/1.jpg'
import pic1 from '../../public/images/2022/lumnyc/2.jpg'
import pic2 from '../../public/images/2022/lumnyc/3.jpg'
import pic3 from '../../public/images/2022/lumnyc/4.jpg'
import pic4 from '../../public/images/2022/lumnyc/5.jpg'
import pic5 from '../../public/images/2022/lumnyc/6.jpg'
import pic6 from '../../public/images/2022/lumnyc/7.jpg'

import Image from 'next/image'

const Article = () => {
    return (
        <Layout Title="Ektar100">
            <Container>
            <Title>
              Luminar 100 - Some like it hot <Badge>2022</Badge>
            </Title>
                <P>
                {' '}
                        <NextLink href="https://popho.ca/fr/products/popho-luminar-100-color-negative-film-35mm-36exp">
                            <Link href="https://popho.ca/fr/products/popho-luminar-100-color-negative-film-35mm-36exp"> Popho Luminar 100</Link>
                        </NextLink>,
                ce nouveau film négatif couleur équilibré à la lumière du jour à vitesse ISO de 100. Aussi connu sous le nom de Santa Color ou 
                Washi X (auquel j'ai déjà soumis un 
                
                        <NextLink href="https://poussindesforets.com/articles/washix">
                            <Link href="https://poussindesforets.com/articles/washix"> article</Link>
                        </NextLink> dessus ),
                de nombreux distributeurs sont présentement entrain d'engendrer sa renaissance. Respect à Popho Co. qui prend comme valeur l'honnêteté
                en rappelant qu'il s'agit en fait de Kodak Aerocolor IV 2460 reconditionnée en film de surveillance. 
                Ce film offre, d'après le site du distributeur, une saturation et un contraste moyens. Le film présente également des tons chauds, une sensibilité au rouge améliorée et une large plage dynamique. 

                <br></br> <br></br>

                La saison hivernale offre des résultats beaucoup moins intéressants que l'orange pétant de l'automne. La jungle urbaine demeure tout de même un lieu
                où les guirlandes, les néons et la nightlife sont légion, surtout en hiver. Bref, je vous recommande de vous munir d'un trepied et de partir à la chasse à la luminothérapie entre amis.
                
                </P>
                <br/> <br/>
                <a name="about"/>
        <div className={s.clearfix}></div>
            <section className={s.leftcolumn}>
                <Heading as="h2" className={s.h2}>À propos</Heading>
                <Paragraph text-indent={6} className={s.p}> 
                How to New York? <br/> Rule #1 : Jaywalk
                </Paragraph>
            </section>
            <section className={s.sidebar}>
                <Image className={s.img} src={pic6}></Image>
            </section>
            <br/>
           
            <div className={s.clearfix}></div>
                <a name="port"></a>
                    <h2 className={s.h2}>Popho</h2>
                    
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/mcbtz6b1fpksmoo/11.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic0}></Image> </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/t84xou7mdixvpc0/22.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic1}></Image> </a>
                    </section>
                    
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/5pgvotqahr6u22i/33.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic2}></Image> </a>
                    </section>

                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/twiiq8a2db9i0hz/44.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic3}></Image> </a>
                    </section>
                    
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/xm4beb62sr09hwq/55.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic4}></Image> </a>
                    </section>

                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/fm7ys03ufhx5e7z/66.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic5}></Image> </a>
                    </section>

                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/2g5hl0wb49pb00q/77.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic6}></Image> </a>
                    </section>
                    
                    <div className={s.clearfix}></div>
                        <a name="serv">
                    
                        </a>
                        <section>
                            <h2 className={s.h2}>Nota Bene</h2>
                            <p>
                            Ladies, Al. is single
                            </p>
                        </section>
            </Container>
        </Layout>
    )
}

export default Article