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
        <Layout Title="Cinestill 800t">
            <Container>
            <Title>
              Cinestill 800t - Some like to Jaywalk <Badge>2023</Badge>
            </Title>
                <P>
                Une nouvelle année pleine de couleurs. Roulant ma bobine dans ma nikon FM2 dans un bar à pétanque, je m'improvise cinéaste.
                
                Halation et haute vitesse ont mené plusieurs photographes à se jeter sur de la photo de nuit sous Cinestill 800T (Kodak Vision 3 500T). Attention
                à ne pas se limiter. On peut prendre le temps d'apprécier des portraits en studio ou en lumière du jour. Résultats surprenants, colorés parfois controversés, mais quand bien même uniques! On lui laisse sa touche de S-E-X-Y-ish.
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