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
                        <p className={s.sub} >{useColorModeValue("Ourondo", "Inspecteur")}</p>
                    </section>


                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/o7rzz9cbqtexhsw2dz556/2.jpg?rlkey=khno4cc1mmz8czp5p387ea4aa&raw=1" target="_blank">
                        <Image className={s.onethirdportimage} src={pic5}></Image> </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/euuidb1hwnar3qbr0urpw/4.jpg?rlkey=05b8domg29jxlyf06uk3v2lc3&raw=1" target="_blank">
                        <Image className={s.onethirdportimage} src={pic6}></Image>
                        </a>
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