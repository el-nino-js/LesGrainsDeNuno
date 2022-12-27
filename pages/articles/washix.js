/* eslint-disable react/no-unescaped-entities */
import { Container, Badge, Heading, Link, useColorModeValue} from '@chakra-ui/react'
import { Title } from '../../components/article'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/paragraph'
import NextLink from 'next/link'

import s from '../components/style.module.css'
import pic0 from '../../public/images/2022/washix/1.jpg'
import pic1 from '../../public/images/2022/washix/2.jpg'
import pic2 from '../../public/images/2022/washix/3.jpg'
import pic3 from '../../public/images/2022/washix/4.jpg'
import pic4 from '../../public/images/2022/washix/5.jpg'
import pic5 from '../../public/images/2022/washix/6.jpg'
import pic6 from '../../public/images/2022/washix/7.jpg'
import pic7 from '../../public/images/2022/washix/8.jpg'
import pic8 from '../../public/images/2022/washix/9.jpg'
import pic9 from '../../public/images/2022/washix/10.jpg'
import pic10 from '../../public/images/2022/washix/11.jpg'



import Image from 'next/image'

const Article = () => {
    return (
        <Layout Title="RolleiIR200">
            <Container>
            <Title>
              Washi X - Fragments d'automne <Badge>2022</Badge>
            </Title>
                <P>
                    Ce film Washi offre avec son absence de masque orange des tons chauds et une forte saturation qui apparement rappelle les premiers négatifs couleurs des années 40 & 50.
                    J'opte pour un développement en C41 plutôt qu'en E6 (considéré comme compatible). C'est un choix personnel que j'ai pris en observant leur deux rendus. Je recommande ce film
                    pour vos photo-randos d'automne! Elle fut alléchante pour capter la fuite de chlorophylle qu'offre ce que je considère être ma saison préféré. <br/> <br/>

                    Je fut bien satisfait de pouvoir capturer plusieurs souvenirs à travers X. On eu droit à une brève, mais belle randonnée à l'Anse Saint-Jean en chaude compagnie, même si
                    elle ne fut pas autant ardante que ce mal de gorge qui n'en finissait plus. S'en suit une subite virée photo vêtue d'une braise de confiance et de vulnérabilité. Puis la froideur de novembre
                    qui me ramène à me tourner vers mes racines pour me réchauffer. On termine enfin avec une tchass 🔥 sur deux Têtes Dures. 
                </P>
                <br/> <br/>
                <a name="about"/>
        <div className={s.clearfix}></div>
            <section>
                <Heading as="h2" className={s.h2}>À propos</Heading>
                <Paragraph text-indent={6} className={s.p}> 
                Cette saison s'accompagne d'un potage de sentiments. Incorporé avec ceux de mes voisin.e.s et cela ressemble plus à une fondue chinoise.  
                </Paragraph>
            </section>
            <br/>
           
            <div className={s.clearfix}></div>
                <a name="port"></a>
                    <h2 className={s.h2}>Outono</h2>
                    
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/aaxve3226hzy0nw/1.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic0}></Image> </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/lspy3bs4eudi0cv/2.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic1}></Image> </a>
                    </section>
                    
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/9oanufdrp95uyp1/3.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic2}></Image> </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/oyv2v4pxpfbwk4j/4.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic3}></Image> </a>
                    </section>
                    
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/7asobp7xv8dj4e8/5.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic4}></Image> </a>
                    </section>

                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/vs52jmeygocxb7h/6.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic5}></Image> </a>
                    </section>

                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/olp9u33a05cil7f/7.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic6}></Image> </a>
                    </section>
                    
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/xnym7srsapcebxx/8.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic7}></Image> </a>
                    </section>

                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/87p3awm9pe1j8d6/10.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic8}></Image> </a>
                    </section>

                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/syuyrwr0af3hhdc/12.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic9}></Image> </a>
                    </section>

                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/8li07hoveyq6wan/11.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic10}></Image> </a>
                    </section>
                    
                    <div className={s.clearfix}></div>
                        <a name="serv">
                    
                        </a>
                        <section>
                            <h2 className={s.h2}>Nota Bene</h2>
                            <p>
                            Les deux font la paire. Ou trois, ou quatre. Qui a jamais trop de paires?
                            </p>
                        </section>
            </Container>
        </Layout>
    )
}

export default Article