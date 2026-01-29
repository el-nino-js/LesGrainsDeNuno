/* eslint-disable react/no-unescaped-entities */
import { Container, Badge, Heading, Link, useColorModeValue} from '@chakra-ui/react'
import { Title } from '../../components/article'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/paragraph'
import NextLink from 'next/link'

import s from '../components/style.module.css'
import pic0 from '../../public/images/2022/jch/1.jpg'
import pic1 from '../../public/images/2022/jch/2.jpg'
import pic2 from '../../public/images/2022/jch/3.jpg'
import pic3 from '../../public/images/2022/jch/4.jpg'
import pic4 from '../../public/images/2022/jch/5.jpg'
import pic5 from '../../public/images/2022/jch/6.jpg'
import pic6 from '../../public/images/2022/jch/7.jpg'
import pic7 from '../../public/images/2022/jch/8.jpg'
import pic8 from '../../public/images/2022/jch/9.jpg'
import pic9 from '../../public/images/2022/jch/10.jpg'
import pic10 from '../../public/images/2022/jch/11.jpg'
import pic11 from '../../public/images/2022/jch/12.jpg'
import pic12 from '../../public/images/2022/jch/13.jpg'
import pic13 from '../../public/images/2022/jch/14.jpg'
import pic14 from '../../public/images/2022/jch/15.jpg'
import pic15 from '../../public/images/2022/jch/16.jpg'

import Image from 'next/image'

const Article = () => {
    return (
        <Layout Title="RolleiIR200">
            <Container>
            <Title>
              JCH StreetPan 400 - Porto Street Camera Hunter <Badge>2022</Badge>
            </Title>
                <P>
                    Pleine de caractères, versatile, contrastée et panchromatique (jusqu'à 750 nm), la JCH StreePan est un film noir et blanc au grain 
                    très fin. Combiné à son ISO, ce film est idéal pour une large game de conditions météos. De plus, avec sa sensibilité 
                    à la lumière rouge, la JCH devient un film optimal pour l'aube, le crépuscule et la photography hivernale.

                    Pour un premier film JCH, le nippon ne m'aura pas déçu. J'y ai pu aprécier les journée nuageuses de Porto, les pluies galiciennes de San Tiago
                    et les nuits froides de Gaia. À vous son rendu.
                </P>
                <br/> <br/>
                <a name="about"/>
        <div className={s.clearfix}></div>
            <section className={s.leftcolumn}>
                <Heading as="h2" className={s.h2}>À propos</Heading>
                <Paragraph text-indent={6} className={s.p}> 
                J'ai vu ma peur et j'ai marché dans la bonne direction. Cave, voilà où moi et un Porto bien entrenu on se situe.    
                </Paragraph>
            </section>
            <section className={s.sidebar}>
                <Image className={s.img} src={pic3}></Image>
            </section>
            <br/>
           
            <div className={s.clearfix}></div>
                <a name="port"></a>
                    <h2 className={s.h2}>São Bento</h2>
                    
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/c2zzqsbq412xkdk/jch-1.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic0}></Image> </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/2ymexaez3i5r9uw/jch-2.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic1}></Image> </a>
                    </section>
                    
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/pyvvafl0qjfbhib/jch-3.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic2}></Image> </a>
                    </section>
                    
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/99fpdvipxg29ox7/jch-5.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic4}></Image> </a>
                    </section>

                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/j9qmqas6h05z8mw/jch-6.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic5}></Image> </a>
                    </section>

                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/00j3detu5y9af20/jch-7.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic6}></Image> </a>
                    </section>
                    
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/i3bfgg7grgox88s/jch-8.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic7}></Image> </a>
                    </section>

                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/8onlw9dz8k0s4uj/jch-9.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic8}></Image> </a>
                    </section>

                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/y6o76kmmdb9poek/jch-10.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic9}></Image> </a>
                    </section>

                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/zy780uewkxpk7jk/jch-11.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic10}></Image> </a>
                    </section>

                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/vbw9cufdvsrss01/jch-12.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic11}></Image> </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/jzhnbn4o8j7x38x/jch-13.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic12}></Image> </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/egsqqql5b3q5v5k/jch-14.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic13}></Image> </a>
                    </section>

                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/c1hnz8fe3g1rbmr/jch-15.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic14}></Image> </a>
                    </section>
                    
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/habwfqve7cu57vb/jch-16.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic15}></Image> </a>
                    </section>

                    <div className={s.clearfix}></div>
                        <a name="serv">
                    
                        </a>
                        <section>
                            <h2 className={s.h2}>Nota Bene</h2>
                            <p>
                            Pour un développement rapide C41 en 30 minutes, ou un nouvel appareil argentique Point-n-Shoot, SLR ou TLR, direction
                            Maquinas de Outros Tempos. Vous pouvez y aller juste pour regarder des centaines de belles caméras argentiques.
                            </p>
                        </section>
            </Container>
        </Layout>
    )
}

export default Article