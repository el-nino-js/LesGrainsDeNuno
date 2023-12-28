/* eslint-disable react/no-unescaped-entities */
import { Container, Badge, Heading, Link, useColorModeValue} from '@chakra-ui/react'
import { Title } from '../../components/article'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/paragraph'
import NextLink from 'next/link'

import s from '../components/style.module.css'
import pic0 from '../../public/images/2023/ektar100suisse/1.jpg'
import pic1 from '../../public/images/2023/ektar100suisse/2.jpg'
import pic2 from '../../public/images/2023/ektar100suisse/3.jpg'
import pic3 from '../../public/images/2023/ektar100suisse/4.jpg'
import pic4 from '../../public/images/2023/ektar100suisse/5.jpg'
import pic5 from '../../public/images/2023/ektar100suisse/6.jpg'
import pic6 from '../../public/images/2023/ektar100suisse/7.jpg'
import pic7 from '../../public/images/2023/ektar100suisse/8.jpg'
import pic8 from '../../public/images/2023/ektar100suisse/9.jpg'
import pic9 from '../../public/images/2023/ektar100suisse/10.jpg'
import pic10 from '../../public/images/2023/ektar100suisse/11.jpg'
import pic11 from '../../public/images/2023/ektar100suisse/12.jpg'

import Image from 'next/image'

const Article = () => {
    return (
        <Layout Title="Ektar100">
            <Container>
            <Title>
              Ektar 100 - Le gruyère c'est pas pour les bébés <Badge>2023</Badge>
            </Title>
                <P>
                L'émulsion d'Ektar a tout d'exceptionnelle. Son nom même est une appellation que Kodak réserve pour ses produits Premium depuis 1936. Avec son rendu de couleurs, sa bande dynamique et évidement son grain fin, elle peut
                s'offrir le luxe de regarder du haut de sa tour d'ivoire, plusieurs de ses compétiteurs. Apprivoiser ce film, des résultats séduisants en resortiront. L'automne 2022, j'ai sorti un de ces bijoux lors d'une escapade d'une fin de semaine à l'Anse Saint-Jean.
                
                <br/> <br/>
                J'ai conservé un deuxième rouleau d'Ektar pour cet été. Les résultats ont été mitigés en raison de quelques erreurs de ma part. Tout d'abord, ce film, ayant déjà des tons de rouge, a transformé les couleurs du port de Marseille en un gigantesque crabe. Deuxièmement, j'ai été trop laxiste avec le posemètre de ma FM2, ce que l'intransigeance de l'Ektar 100 ne pardonne guère. Le traitement sur Silverfast a été fastidieux. Néanmoins, la nature verdoyante de la Suisse a été mise en valeur. Quelques petits effets mats sur le vert renforcent sa complémentarité avec le rouge.

                <br/> <br/>
                Son émulsion a été conçue pour développer de nettes photos, sans grains et avec fort contraste et saturation. Toutefois, Ektar n'est pas radin, ni facile. De facto,
                on se doit d'être habile lors de sa digitalisation. L'exposition doit être juste à un stop près et il faut rester vigilant à une coulée bleu dans les ombres, lorsque votre logiciel omet de le faire pour vous.  
                <br/> <br/>
                Il s'agit d'un de mes films préférés. Je la conserve pour des occasions spéciales, prévoyant capturer de charmant paysages. Il s'agit selon moi d'un bon choix pour 
                des photos de jour, puisque son ISO s'adapte à  𝒇8/500, une combinaison rendant des images plus <i>sharp</i> chez la plupart des films. Enfin, avec un objectif supportant un petite vitesse d'obturation, on peut l'apporter vers les ombres sans trepied.
                
                </P>
                <br/> <br/>
                <a name="about"/>
            <div className={s.clearfix}></div>
                <section className={s.leftcolumn}>
                    <Heading as="h2" className={s.h2}>À propos</Heading>
                    <Paragraph text-indent={6} className={s.p}> 
                    « Laissez l'eau salé de vos tracas se diluer dans le doux lac de ma compassion.» <br/> - Ridge T. ISH
                    </Paragraph>
                </section>
            <section className={s.sidebar}>
                <Image className={s.img} src={pic1}></Image>
            </section>
            <br/>
           
            <div className={s.clearfix}></div>
                <a name="port"></a>
                    <h2 className={s.h2}>Vacas</h2>
                    
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/hekacsb0fcfwthhoa0vnk/1.jpg?rlkey=3lyz5r9uvwd6qdzjaaurm2ano&raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic0}></Image> </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/deuez4oeqba6bnx6dj0du/2.jpg?rlkey=fq7we9n8p19ca2p4v0zz77kx6&raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic1}></Image> </a>
                    </section>
                    
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/7uvc1ovkyz0v3v9b3um4h/3.jpg?rlkey=kxot1wu9pzngqdujed6tc8hvf&raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic2}></Image> </a>
                    </section>

                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/2i2onpx18bgjy7fq4bo3u/4.jpg?rlkey=lpe2x43g90guo74pg590qr2wp&raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic3}></Image> </a>
                    </section>
                    
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/wy1o82aqtu2qrghh0i0zs/5.jpg?rlkey=hwautl4bhkpgk1q5y5v0fohyk&raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic4}></Image> </a>
                    </section>

                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/po29ee95pr96ykq66mtvb/6.jpg?rlkey=yh7g9casok5n47hri865boabg&raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic5}></Image> </a>
                    </section>

                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/2fczfgupuqsl8r2rsaoq8/7.jpg?rlkey=agni88agxlljcmdx7l1rbh271&raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic6}></Image> </a>
                    </section>
                    
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/lkicv243ga1l5q0a2qm1u/8.jpg?rlkey=s6o56xod9ps0z30amt391dmn7&raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic7}></Image> </a>
                    </section>

                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/cod69xmmoofxchfkant0m/9.jpg?rlkey=5mrbaqcfn2t1n5nfq4bzgpfe1&raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic8}></Image> </a>
                    </section>

                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/y72qk7ncewxvojhunlr3j/10.jpg?rlkey=8igixedv4p3h7mbc24p2ujxxy&raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic9}></Image> </a>
                    </section>

                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/qx3oj2x045j5oz92vj6te/11.jpg?rlkey=wrrj7lkbcbtxiaegzs4v172he&raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic10}></Image> </a>
                    </section>

                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/3sg1o029k9aw8zmhyt2om/12.jpg?rlkey=gkdz0606j8lcypo59jinho3p6&raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic11}></Image> </a>
                    </section>


                    <div className={s.clearfix}></div>
                        <a name="serv">
                    
                        </a>
                        <section>
                            <h2 className={s.h2}>Nota Bene</h2>
                            <p>
                            Sweet Mooh Mooh feat. Franche-Comté 🐮
                            </p>
                        </section>
            </Container>
        </Layout>
    )
}

export default Article