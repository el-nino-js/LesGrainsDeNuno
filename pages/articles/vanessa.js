/* eslint-disable react/no-unescaped-entities */
import { Container, Badge, Heading, Link} from '@chakra-ui/react'
import { Title } from '../../components/article'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/paragraph'
import NextLink from 'next/link'

import s from '../components/style.module.css'
import pic1 from '../../public/images/2022/vanessa/2.jpg'
import pic3 from '../../public/images/2022/vanessa/4.jpg'
import pic4 from '../../public/images/2022/vanessa/5.jpg'
import pic5 from '../../public/images/2022/vanessa/6.jpg'
import pic6 from '../../public/images/2022/vanessa/7.jpg'
import pic7 from '../../public/images/2022/vanessa/8.jpg'
import pic8 from '../../public/images/2022/vanessa/9.jpg'
import pic9 from '../../public/images/2022/vanessa/10.jpg'
import pic10 from '../../public/images/2022/vanessa/11.jpg'



import Image from 'next/image'

const Article = () => {
    return (
        <Layout Title="JacobLeCoq">
            <Container>
            <Title>
              Numérique - Vanessa <Badge>2022</Badge>
            </Title>
                <P>Tu voulais qu'on collabore ensemble, un projet plus intimes pour nous exposer. Je préfère montrer mon pellage de caribou sur Instagram et que cela
                    serve de subterfuge pour recréer l'essentiel de l'intimité. Ma maladresse fut de trop en montrer. Mon allégresse fut que nos récits se soient réuni. 

                </P>
                
                <a name="about"/>
        <div className={s.clearfix}></div>
            <section className={s.leftcolumn}>
                <Heading as="h2" className={s.h2}>À Propos</Heading>
                <Paragraph text-indent={6} className={s.p}> 
                <NextLink href="https://www.vanessamassera.com ">
                    <Link href="https://www.vanessamassera.com ">Vanessa Massera</Link>
                </NextLink>
                , spécialisée en éléctro-acoustique, exprime ses idées poétiques. Elles sont ancrées à travers les différents
                 milieux auquel elle s'en retrouve inspirée.

                </Paragraph>
            </section>
            <section className={s.sidebar}>
                <Image className={s.img} src={pic1}></Image>
            </section>
            <div className={s.clearfix}></div>
                <a name="port"></a>
                    <h2 className={s.h2}>Expo</h2>
                    
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/6vi7nowdpelydwf/Vanessa-6.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic5}></Image> </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/ys3f9syjaxu9uk0/Vanessa-9.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic8}></Image> </a>
                    </section>
                    
                    
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/ngt44e6k0iyxceh/Vanessa-4.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic3}></Image> </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/qoyqp6kq2ww3rpu/Vanessa-8.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic7}></Image> </a>
                    </section>
                    
                    
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/lvnfbwal6fl3zwj/Vanessa-11.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic10}></Image> </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/gsrycbpiu4vcp9f/Vanessa-7.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic6}></Image> </a>
                    </section>
                    
                    <div className={s.clearfix}></div>
                        <a name="serv">
                    
                        </a>
                        <section>
                            <h2 className={s.h2}>Nota Bene</h2>
                            <Paragraph>
                            Obrigado por esses momentos lindos. Saudades com a tua alfacinha de Lisboa. 
                            </Paragraph>
                        </section>
                      
               
            
            </Container>
        </Layout>
    )
}

export default Article