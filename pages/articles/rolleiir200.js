/* eslint-disable react/no-unescaped-entities */
import { Container, Badge, Heading, Link, useColorModeValue} from '@chakra-ui/react'
import { Title } from '../../components/article'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/paragraph'
import NextLink from 'next/link'

import s from '../components/style.module.css'
import pic0 from '../../public/images/2022/ir/0.jpg'
import pic1 from '../../public/images/2022/ir/1.jpg'
import pic2 from '../../public/images/2022/ir/2.jpg'
import pic3 from '../../public/images/2022/ir/3.jpg'
import pic4 from '../../public/images/2022/ir/4.jpg'
import pic5 from '../../public/images/2022/ir/5.jpg'
import pic6 from '../../public/images/2022/ir/6.jpg'
import pic7 from '../../public/images/2022/ir/7.jpg'
import pic8 from '../../public/images/2022/ir/8.jpg'
import pic9 from '../../public/images/2022/ir/9.jpg'


import Image from 'next/image'

const Article = () => {
    return (
        <Layout Title="RolleiIR200">
            <Container>
            <Title>
              Rollei INFRARED 200 - La cerise sur le Fundão <Badge>2022</Badge>
            </Title>
                <P>J'expérimente mon premier film infrarouge avec un filtre R72 en me baladant dans le petit village d'Ourondo au Portugal, là où mon père a grandi.
                    
                    Mes résultats pour la Rolleil IR
                     sont mitigés. Je note trois caveats pour mes prochaines fois: <br/> <br/>
                    #1. Pris à 25 ISO, <b>les matins et les fins de journées sont souvent très concentrés en lumière IR</b> ce qui peut mener à de la surexposition. L'ISO 50 serait à préconiser. Mes
                    résultats les plus optimaux ont été sous des arbres ou durant le zénith. <br/>
                    #2. <b>La lumière IR ne focus pas sur le même point que la lumière visible</b>, elle le fait plutôt sur
                    un point appelé l'<i>infrared focus shift</i> (IFS). Les plus vieilles caméras et lentilles
                    sont souvent meilleurs pour de la photo IR, elles auront une ligne rouge ou un «R» pour aider à s'ajuster à l'IFS. Détail que je n'ai
                    appris qu'après avoir shooter mon film ({useColorModeValue('il', 'iel')} pleure et s'affesse dans un coin). <br/>
                    #3. <b>Le révélateur Rodinal offre des résultats granuleux décevants.</b> Je vois déjà ses détracteurs jubiler leurs babines. De ce que j'en lis en ligne, il n'est pas recommandé pour de l'IR. Mes recherches pour un
                    bon révélateur IR disponible en magasin sont encore en cours... <br/>
                    <br/>
                    Pour davantage d'information, le site de 
                        <NextLink href="https://www.markcassino.com/b2evolution/index.php/rollei_ir_400_first_impressions?blog=2">
                            <Link href="https://www.markcassino.com/b2evolution/index.php/rollei_ir_400_first_impressions?blog=2"> Mark Cassino</Link>
                        </NextLink> vulgarise d'intéressants rendus.
                </P>
                <br/> <br/>
                <a name="about"/>
        <div className={s.clearfix}></div>
            <section>
                <Heading as="h2" className={s.h2}>Guide touristique</Heading>
                <Paragraph text-indent={6} className={s.p}> 
                Il y a peu d'activités à faire dans le coin d'Ourondo. On peut quand même bien profiter de sa journée d'août en sortant 
                    cueillir des mûres, visiter un poulailler, se baigner dans la rivière, aller au bar manger des escargots ou jouer à la
                    pétanque avec la panoplie de touristes Occitans qui visitent leur grand-parent. 
                </Paragraph>
            </section>
            <br/>
           
            <div className={s.clearfix}></div>
                <a name="port"></a>
                    <h2 className={s.h2}>Infravermelho</h2>
                    
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/87ity8fh3hx1n55/0.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic0}></Image> </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/6w2ba5r5c7xtqhg/1.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic1}></Image> </a>
                    </section>
                    
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/b1561c9xscjc7xg/2.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic2}></Image> </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/6wvwke2r5zwc1gh/3.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic3}></Image> </a>
                    </section>
                    
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/6wvwke2r5zwc1gh/4.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic4}></Image> </a>
                    </section>

                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/4bjxj3lsp86mf0z/5.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic5}></Image> </a>
                    </section>

                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/7pr0u2ee703yr0h/6.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic6}></Image> </a>
                    </section>
                    
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/wsk24fsi69vvxx6/7.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic7}></Image> </a>
                    </section>

                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/82gzzygm62s0t0p/8.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic8}></Image> </a>
                    </section>

                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/ph35xfy1yd071wp/9.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic9}></Image> </a>
                    </section>
                    
                    <div className={s.clearfix}></div>
                        <a name="serv">
                    
                        </a>
                        <section>
                            <h2 className={s.h2}>Nota Bene</h2>
                            <p>
                            <b>Playlist de la fête du vendredi:</b> <br/>
                            - 10h00-0h00: Quim Barreiros <br/>
                            - 0h00-Xh00: Pop Américaine <br/>
                            - Xh00: Chant des 🐓 qui se réveillent
                            </p>
                        </section>
            </Container>
        </Layout>
    )
}

export default Article