/* eslint-disable react/no-unescaped-entities */
import { Container, Badge, Heading, Link, useColorModeValue} from '@chakra-ui/react'
import { Title } from '../../components/article'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/paragraph'
import NextLink from 'next/link'

import s from '../components/style.module.css'
import pic0 from '../../public/images/2024/aurora800/1.jpg'
import pic1 from '../../public/images/2024/aurora800/2.jpg'
import pic2 from '../../public/images/2024/aurora800/3.jpg'
import pic3 from '../../public/images/2024/aurora800/4.jpg'
import pic4 from '../../public/images/2024/aurora800/5.jpg'
import pic5 from '../../public/images/2024/aurora800/6.jpg'
import pic6 from '../../public/images/2024/aurora800/7.jpg'
import pic7 from '../../public/images/2024/aurora800/8.jpg'
import pic8 from '../../public/images/2024/aurora800/9.jpg'
import pic9 from '../../public/images/2024/aurora800/10.jpg'
import pic10 from '../../public/images/2024/aurora800/11.jpg'
import pic11 from '../../public/images/2024/aurora800/12.jpg'

//eta 30 min
//ajouter liens dropbox pour les pics
//thumbnail

import Image from 'next/image'

const Article = () => {
    return (
        <Layout Title="Aurora 800 - Ouvre tes yeux!">
            <Container>
            <Title>
            Aurora 800 - Ouvre tes yeux! <Badge>2024</Badge>
            </Title>
            Aurora 800, à ne pas confondre avec le 8x8, est sorti de FlicFilm d'on ne sait où encore. Des théories, quant à une nouvelle émulsion, fustige déjà sur le Web.  <br></br><br></br>
            <i>Presumably Kodak Gold 800. It's the stuff they used to? put into their FunSaver disposable cameras.</i> - Bronson Dugnutt USA <br></br><br></br>

            D'autres internautes avancent l'hypothèse d'une Ultramax 800 ou de Lomo 800 rebobinés. N'ayant jamais pris de photos avec ces films, je ne peux donner mon
            avis que sur cette tentative. Avoir une autre option à haut ISO est en soi plaisant dans la capture de sujets en mouvement (fingercrossed pour le retour des 1600 couleurs). <br></br><br></br>
            
            Scanné sur Nikon Coolscan, le grain est assez fin pour son ISO, avec une netteté accrue et des tons chair naturels. La saturation accompagnera vos photos. Bémol, la palette jaune peut donner aux photos un rendu un peu trop saturé durant un «golden hour». C'est donc pourquoi je qualifie
            la Aurora 800 comme une  Gold 200 boosté sur une tarte au sucre. On peut apprécier son fort contraste. Le film ne pardonnera toutefois que de très peu les écarts d'exposition, sous-ex comme sur-ex. <br></br> 

                <a name="about"/>
        <div className={s.clearfix}></div>
            <section className={s.leftcolumn}>
                <Heading as="h2" className={s.h2}>À propos</Heading>
                <Paragraph text-indent={6} className={s.p}> 
                Plus fort que sa condition
                </Paragraph>
            </section>
            <section className={s.sidebar}>
                <Image className={s.img} src={pic1}></Image>
            </section>
            <br/>
           
            <div className={s.clearfix}></div>
                <a name="port"></a>
                    <h2 className={s.h2}>Juego</h2>
                   
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/18v7muzr1umen2ixhuhrp/1.jpg?rlkey=xdcvj35xb8etaddpwtlm2u0op&raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic0}></Image> </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/68ccb5rv10szd2381fysy/2.jpg?rlkey=otdzo4keg07z34nub7q09qjbw&raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic1}></Image> </a>
                    </section>
                    
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/5vmx7o4ejfks0pgygt3q6/3.jpg?rlkey=p4niqiz2y4qos53dq0m1yko09&raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic2}></Image> </a>
                    </section>
                    
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/t2njsgm2nqunfxh8m4lda/4.jpg?rlkey=7bc1cq5fjeb75qjqh8k6loy6n&raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic3}></Image> </a>
                    </section>

                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/8b91e9r231q1ju9s1qmip/5.jpg?rlkey=r0nbtcb2s12qw6k0qvorn2knu&raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic4}></Image> </a>
                    </section>

                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/iiwdl7nn4v25rsn396r40/6.jpg?rlkey=nb1m25a6a2cav94liir6zs2my&raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic5}></Image> </a>
                    </section>

                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/e6liacs34rvd1jq4twm2f/7.jpg?rlkey=cx0jhwywdwv1uyjz7hlyw6ks0&raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic6}></Image> </a>
                    </section>

                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/co93vc5t4cs1rifcy8yas/8.jpg?rlkey=44ghqkn9pegsth04ge53bgpmx&raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic7}></Image> </a>
                    </section>

                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/u59qy00c0e3e6ztmd9c8y/9.jpg?rlkey=f65v1ri1zr1z11f9w84ubfxhk&raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic8}></Image> </a>
                    </section>

                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/wadjzz3zzmtmivw54hh01/10.jpg?rlkey=smbv9yyzl28wy3665zc5tns33&raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic9}></Image> </a>
                    </section>

                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/y19x0lslj2oiyuj9tve80/11.jpg?rlkey=m8fspezw58cb6f57gl9qeqe4m&raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic10}></Image> </a>
                    </section>

                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/s16dv3msyeqthj8z1ifd1/12.jpg?rlkey=30xweqsmn0fey67vltpw90ok9&raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic11}></Image> </a>
                    </section>

                    <div className={s.clearfix}></div>
                        <a name="serv">
                    
                        </a>
                        <section>
                            <h2 className={s.h2}>Nota Bene</h2>
                            <p>
                            Pour le reste, fais c'que tu veux vraiment 🍊
                            </p>
                        </section>
            </Container>
        </Layout>
    )
}

export default Article