/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/no-unknown-property */
import { Container, Heading, SimpleGrid, Badge, Link, useColorModeValue} from '@chakra-ui/react'
import Layout from '../components/layouts/article' 
import Paragraph from '../components/paragraph'
import { Title } from '../components/article'


import NextLink from 'next/link'
import s from './components/style.module.css'
import pic0 from '../public/images/nunobnw.jpg'
import pic1 from '../public/images/2022/lumnyc/1.jpg'
import pic2 from '../public/images/2023/fp4/1.jpg'
import pic3 from '../public/images/2023/ouronolum/8.jpg'
import pic4 from '../public/images/Portofolio/thumbnail.jpg'
import pic5 from '../public/images/Portofolio/2.jpg'
import pic6 from '../public/images/Portofolio/4.jpg'
import pic7 from '../public/images/Portofolio/5.jpg'
import pic8 from '../public/images/Portofolio/6.jpg'
import pic9 from '../public/images/Portofolio/5-2.jpg'
import pic17 from '../public/images/2023/gold200/18.jpg'

//Couleur
import pic20 from '../public/images/Portofolio/20.JPG'
import pic21 from '../public/images/Portofolio/21.JPG'
import pic22 from '../public/images/Portofolio/22.JPG'

//Bnw
import pic10 from '../public/images/Portofolio/10.JPG'
import pic11 from '../public/images/Portofolio/11.JPG'
import pic12 from '../public/images/Portofolio/12.JPG'
import pic13 from '../public/images/Portofolio/13.JPG'
import pic14 from '../public/images/Portofolio/14.JPG'

import Image from 'next/image'

const Portfolio = () => (
    <Layout title="Portfolios">
        <Container >
            <a name="about"/>
        <div className={s.clearfix}></div>
  
            <div className={s.clearfix}></div>
                <a name="port"></a>
                    <h2 className={s.h2}>Mon Portfolio</h2>
                
                    <section className={s.onethirdport}>
                        <a 
                        href={useColorModeValue("https://www.dropbox.com/s/mcbtz6b1fpksmoo/11.jpg?raw=1"
                        , "https://www.dropbox.com/s/bhfvddrttbul4om/FP4PARIS%207.jpg?raw=1")} target="_blank" rel="noreferrer">
                        <Image  className={s.onethirdportimage} src= {useColorModeValue(pic1, pic2)}></Image> </a> 
                        <p className={s.sub} >{useColorModeValue("Jaywalker", "Escale")}</p>
                    </section>
                    <section className={s.onethirdport}>
                        <a 
                        href={useColorModeValue("https://www.dropbox.com/scl/fi/hbyocakqm16gzerv98xjg/8.jpg?rlkey=7hmgnfgglbbfn9qxf3cvxkefl&raw=1"
                        , "https://www.dropbox.com/s/g54m97mzzuhuhxy/1.jpg?raw=1")} target="_blank" rel="noreferrer">
                        <Image  className={s.onethirdportimage} src= {useColorModeValue(pic3, pic7)}></Image> </a> 
                        <p className={s.sub} >{useColorModeValue("Ourondo", "Dorsal")}</p>
                    </section>

                    <section className={s.onethirdport}>
                        <a 
                        href={useColorModeValue("https://www.dropbox.com/s/3h420kmd24d5vjx/thumbnail.jpg?raw=1"
                        , "https://www.dropbox.com/scl/fi/nojqb4126w6xhuzcoevjm/545.jpg?rlkey=k74b6tvpkse7h99hxfuw9qwy8&raw=1")} target="_blank" rel="noreferrer">
                        <Image  className={s.onethirdportimage} src= {useColorModeValue(pic4, pic8)}></Image> </a> 
                        <p className={s.sub} >{useColorModeValue("Orange", "Inspecteur")}</p>
                    </section>

                    <section className={s.onethirdport}>
                        <a 
                        href={useColorModeValue("https://www.dropbox.com/scl/fi/o7rzz9cbqtexhsw2dz556/2.jpg?rlkey=khno4cc1mmz8czp5p387ea4aa&raw=1"
                        , "https://www.dropbox.com/scl/fi/xq3x0nbszjub98px95mk9/delta400-carleton86.jpg?rlkey=oyq0z6g6mwp2a4q800pt1n8hh&st=6ha07adz&raw=1")} target="_blank" rel="noreferrer">
                        <Image  className={s.onethirdportimage} src= {useColorModeValue(pic5, pic9)}></Image> </a> 
                        <p className={s.sub} >{useColorModeValue("Mooh", "Praia")}</p>
                    </section>

                    <section className={s.onethirdport}>
                        <a 
                        href={useColorModeValue("https://www.dropbox.com/scl/fi/euuidb1hwnar3qbr0urpw/4.jpg?rlkey=05b8domg29jxlyf06uk3v2lc3&raw=1"
                        , "https://www.dropbox.com/scl/fi/1k4880bseuzxhw2y7zmkb/raw0022.JPG?rlkey=ta24rpcpde9ko02nutk0f6u21&st=pv1fqfvr&raw=1")} target="_blank" rel="noreferrer">
                        <Image  className={s.onethirdportimage} src= {useColorModeValue(pic6, pic10)}></Image> </a> 
                        <p className={s.sub} >{useColorModeValue("Oeil de crystal", "Alegria")}</p>
                    </section>

                    <section className={s.onethirdport}>
                        <a 
                        href={useColorModeValue("https://www.dropbox.com/scl/fi/7yex6ozspk3imnjo4mwsx/118.jpg?rlkey=fmx9rvi2y5xm929ed8kh4myg8&st=6rg6wjf4&raw=1"
                        , "https://www.dropbox.com/scl/fi/w0y1czs5k9vzoo6uikwaz/Bordeaux.JPG?rlkey=zhgruru9iembk4725fj7ftl43&st=uzwjqyt9&raw=1")} target="_blank" rel="noreferrer">
                        <Image  className={s.onethirdportimage} src= {useColorModeValue(pic17, pic11)}></Image> </a> 
                        <p className={s.sub} >{useColorModeValue("Shack Dog", "Dyptique")}</p>
                    </section>

                    <section className={s.onethirdport}>
                        <a 
                        href={useColorModeValue("https://www.dropbox.com/scl/fi/zuhteco236ppx79qu63vr/raw0011.JPG?rlkey=d800noymxqksod4xaejo3y2fy&st=ttfyl7jk&raw=1"
                        , "https://www.dropbox.com/scl/fi/wc8g3getsepfjwqz0xwzs/raw0004-4.JPG?rlkey=slqxyld572t0mbioz9mhad062&st=1eqyadcx&raw=1")} target="_blank" rel="noreferrer">
                        <Image  className={s.onethirdportimage} src= {useColorModeValue(pic20, pic12)}></Image> </a> 
                        <p className={s.sub} >{useColorModeValue("Dança", "Onda")}</p>
                    </section>

                    <section className={s.onethirdport}>
                        <a 
                        href={useColorModeValue("https://www.dropbox.com/scl/fi/mmtaoaclm9kyd7niozrll/raw0033.JPG?rlkey=ejr0yg3ykec84zfnsf2d08h03&st=b8afy08a&raw=1"
                        , "https://www.dropbox.com/scl/fi/li4zeqdse25y3e5rq7l8j/delta3200-paris019.JPG?rlkey=y6cnreui5xvksjl9t1r1mkazk&st=j43y27wz&raw=1")} target="_blank" rel="noreferrer">
                        <Image  className={s.onethirdportimage} src= {useColorModeValue(pic21, pic13)}></Image> </a> 
                        <p className={s.sub} >{useColorModeValue("Fixe", "Jen")}</p>
                    </section>

                    <section className={s.onethirdport}>
                        <a 
                        href={useColorModeValue("https://www.dropbox.com/scl/fi/4isnstu5x4w7lfzxwx2m4/raw0013-2.JPG?rlkey=resybdv4uy3e4a6b6u1fb6ro1&st=3b7ci86c&raw=1"
                        , "https://www.dropbox.com/scl/fi/wvk2qfgi3nljak5vxfhdd/raw0001-7.JPG?rlkey=rnvk8g6vtsdh8hm7udk5ktbs5&st=i9yicqo5&raw=1")} target="_blank" rel="noreferrer">
                        <Image  className={s.onethirdportimage} src= {useColorModeValue(pic22, pic14)}></Image> </a> 
                        <p className={s.sub} >{useColorModeValue("Madeira", "Refroidissement")}</p>
                    </section>
                
                    <div className={s.clearfix}></div>
                        <a name="serv">
                    
                        </a>
                        <section>
                            <h2 className={s.h2}>Mes Services</h2>
                            <Paragraph>
Photographe passionné, je capture des moments avec une esthétique propre à ma personne. Engagé avant tout dans la photographie argentique, mon portfolio se veut comme des fragments de moments ayant capturés mes émotions comme mon sujet.
 Que ce soit lors d'événements ou en studio, je m'efforce de créer des images qui racontent cette symbiose.
                            </Paragraph>
                        </section>
                      
                    <div className={s.clearfix}></div>
                        <a name="contact"></a>
                        <section className={s.parallax}>
                            <div className={s.parallaxinner}>
                            </div>
                        </section>
                    <div className={s.clearfix}></div>
                        <h2 className={s.h2}>Contacter-moi</h2>
                        <section className={s.contact}>
                         <p className={s.contactp}>Nuno Silva-Pinto<br className={s.break}></br></p> <p className={s.contactp}>nuno.silva-pinto@outlook.com</p> 
                             <p className={s.contactp}> Montréal</p><p className={s.contactp} >Québec</p>
                            </section> 
                    <div className={s.clearfix}></div>
        </Container>
    </Layout>
)
export default Portfolio