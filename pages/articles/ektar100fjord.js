/* eslint-disable react/no-unescaped-entities */
import { Container, Badge, Heading, Link, useColorModeValue} from '@chakra-ui/react'
import { Title } from '../../components/article'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/paragraph'
import NextLink from 'next/link'

import s from '../components/style.module.css'
import pic0 from '../../public/images/2022/ektar100fjord/1.jpg'
import pic1 from '../../public/images/2022/ektar100fjord/2.jpg'
import pic2 from '../../public/images/2022/ektar100fjord/3.jpg'
import pic3 from '../../public/images/2022/ektar100fjord/4.jpg'
import pic4 from '../../public/images/2022/ektar100fjord/5.jpg'
import pic5 from '../../public/images/2022/ektar100fjord/6.jpg'
import pic6 from '../../public/images/2022/ektar100fjord/7.jpg'
import pic7 from '../../public/images/2022/ektar100fjord/8.jpg'
import pic8 from '../../public/images/2022/ektar100fjord/9.jpg'
import pic9 from '../../public/images/2022/ektar100fjord/10.jpg'
import pic10 from '../../public/images/2022/ektar100fjord/11.jpg'
import pic11 from '../../public/images/2022/ektar100fjord/12.jpg'

import Image from 'next/image'

const Article = () => {
    return (
        <Layout Title="Ektar100">
            <Container>
            <Title>
              Ektar 100 - Fjord di Latte <Badge>2022</Badge>
            </Title>
                <P>
                L'émulsion d'Ektar a tout d'exceptionnelle. Son nom même est une appellation que Kodak réserve pour ses produits Premium depuis 1936. Avec son rendu de couleurs, sa bande dynamique et évidement son grain fin, elle peut
                s'offrir le luxe de regarder du haut de sa tour d'ivoire, plusieurs de ses compétiteurs. Apprivoiser ce film, des résultats séduisants en resortiront. Cet automne, j'ai sorti un de ces bijoux lors d'une escapade d'une fin de semaine à l'Anse Saint-Jean.
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
                « Laissez le fleuve de vos tracas se déverser dans le fjord de ma compassion.» <br/> - Ridge T.   
                </Paragraph>
            </section>
            <section className={s.sidebar}>
                <Image className={s.img} src={pic3}></Image>
            </section>
            <br/>
           
            <div className={s.clearfix}></div>
                <a name="port"></a>
                    <h2 className={s.h2}>Ficello</h2>
                    
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/zow0o6lopqjr85e/fjord-1.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic0}></Image> </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/1m5az6nlw84zbon/fjord-2.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic1}></Image> </a>
                    </section>
                    
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/181a7rkq2e9543r/fjord-3.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic2}></Image> </a>
                    </section>

                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/k3n3tbtho0b94kd/fjord-4.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic3}></Image> </a>
                    </section>
                    
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/xrx12h7d8wfi680/fjord-5.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic4}></Image> </a>
                    </section>

                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/15yqz0za6mmm7yo/fjord-6.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic5}></Image> </a>
                    </section>

                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/b5ptbzb6hfmpfjk/fjord-7.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic6}></Image> </a>
                    </section>
                    
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/y8lh4k7dlfrabnm/fjord-8.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic7}></Image> </a>
                    </section>

                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/03npop4zeh13klj/fjord-9.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic8}></Image> </a>
                    </section>

                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/xim1dpj8vk2ga9n/fjord-10.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic9}></Image> </a>
                    </section>

                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/4l68ja9ysd208dt/fjord-11.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic10}></Image> </a>
                    </section>

                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/f9nkkod7jeb27sr/fjord-12.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic11}></Image> </a>
                    </section>


                    <div className={s.clearfix}></div>
                        <a name="serv">
                    
                        </a>
                        <section>
                            <h2 className={s.h2}>Nota Bene</h2>
                            <p>
                            Crazy Chicken feat. Metallica 🐔
                            </p>
                        </section>
            </Container>
        </Layout>
    )
}

export default Article