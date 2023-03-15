/* eslint-disable react/no-unescaped-entities */
import { Container, Badge, Heading, Link, useColorModeValue} from '@chakra-ui/react'
import { Title } from '../../components/article'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/paragraph'
import NextLink from 'next/link'

import s from '../components/style.module.css'
import pic0 from '../../public/images/2022/cinestill800tnyc/1.jpg'
import pic1 from '../../public/images/2022/cinestill800tnyc/2.jpg'
import pic2 from '../../public/images/2022/cinestill800tnyc/3.jpg'
import pic3 from '../../public/images/2022/cinestill800tnyc/4.jpg'
import pic4 from '../../public/images/2022/cinestill800tnyc/5.jpg'
import pic5 from '../../public/images/2022/cinestill800tnyc/6.jpg'
import pic6 from '../../public/images/2022/cinestill800tnyc/7.jpg'
import pic7 from '../../public/images/2022/cinestill800tnyc/8.jpg'
import pic8 from '../../public/images/2022/cinestill800tnyc/9.jpg'
import pic9 from '../../public/images/2022/cinestill800tnyc/10.jpg'


import Image from 'next/image'

const Article = () => {
    return (
        <Layout Title="Cinestill 800t">
            <Container>
            <Title>
              Cinestill 800t - Some like to Jaywalk <Badge>2023</Badge>
            </Title>
                <P>
                Une nouvelle année pleine de couleurs. Roulant ma bobine dans ma nikon FM2 dans un bar à pétanque. Après avoir perdu 5x dans une machine à pince dans l'espoir de gagner le toutou du Kirby Gourmet. 
                
                Halation et haute vitesse ont mené plusieurs photographes à se jeter sur de la photo de nuit sous Cinestill 800T (Kodak Vision 3 500T). Attention
                à ne pas se limiter. On peut prendre le temps d'apprécier des portraits en studio ou en lumière du jour. Résultats surprenants, colorés, parfois controversés, mais quand bien même uniques! On lui laisse sa touche de S-E-X-Y-ish.
                </P>
                <br/> <br/>
                <a name="about"/>
        <div className={s.clearfix}></div>
            <section className={s.leftcolumn}>
                <Heading as="h2" className={s.h2}>À propos</Heading>
                <Paragraph text-indent={6} className={s.p}> 
                How to New York? <br/> Rule #2 : Claw machines are a scam worthy of your bills
                </Paragraph>
            </section>
            <section className={s.sidebar}>
                <Image className={s.img} src={pic1}></Image>
            </section>
            <br/>
           
            <div className={s.clearfix}></div>
                <a name="port"></a>
                    <h2 className={s.h2}>Néo</h2>
                    
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/85zpfsvuyw2dzg4/1.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic0}></Image> </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/sk9ity3et0jxvg1/2.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic1}></Image> </a>
                    </section>
                    
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/c3joj6uzwizn5xj/3.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic2}></Image> </a>
                    </section>

                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/41ujt6yzb4jetar/4.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic3}></Image> </a>
                    </section>
                    
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/b9s804ckxfn16lz/5.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic4}></Image> </a>
                    </section>

                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/j0v6wwvgzcy6e20/6.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic5}></Image> </a>
                    </section>

                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/0jladmf2k0rkpe3/7.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic6}></Image> </a>
                    </section>

                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/961ocz00epytclx/8.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic7}></Image> </a>
                    </section>

                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/nf459colw4z5ypy/9.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic8}></Image> </a>
                    </section>

                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/6sv079avh9wx20h/10.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic9}></Image> </a>
                    </section>
                    
                    <div className={s.clearfix}></div>
                        <a name="serv">
                    
                        </a>
                        <section>
                            <h2 className={s.h2}>Nota Bene</h2>
                            <p>
                            For a year covered of Grinch C.
                            </p>
                        </section>
            </Container>
        </Layout>
    )
}

export default Article