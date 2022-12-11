/* eslint-disable react/no-unescaped-entities */
import { Container, Badge, Heading, Link, useColorModeValue} from '@chakra-ui/react'
import { Title } from '../../components/article'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/paragraph'
import NextLink from 'next/link'

import s from '../components/style.module.css'
import cathumb from '../../public/images/2022/cat/catthumb.jpg'
import pic0 from '../../public/images/2022/cat/0.jpg'
import pic1 from '../../public/images/2022/cat/1.jpg'
import pic2 from '../../public/images/2022/cat/2.jpg'
import pic3 from '../../public/images/2022/cat/3.jpg'
import pic4 from '../../public/images/2022/cat/4.jpg'
import pic5 from '../../public/images/2022/cat/5.jpg'
import pic6 from '../../public/images/2022/cat/6.jpg'
import pic7 from '../../public/images/2022/cat/7.jpg'
import pic8 from '../../public/images/2022/cat/8.jpg'
import pic9 from '../../public/images/2022/cat/9.jpg'
import pic10 from '../../public/images/2022/cat/10.jpg'
import pic11 from '../../public/images/2022/cat/11.jpg'
import pic12 from '../../public/images/2022/cat/12.jpg'
import pic13 from '../../public/images/2022/cat/13.jpg'
import pic14 from '../../public/images/2022/cat/14.jpg'




import Image from 'next/image'

const Article = () => {
    return (
        <Layout Title="Chats">
            <Container>
            <Title>
            Palmarès des plus beaux {useColorModeValue("minous", "voyous")}<Badge>2022</Badge>
            </Title>
                <P></P>
                <a name="about"/>
        <div className={s.clearfix}></div>
            <section className={s.leftcolumn}>
                <Heading as="h2" className={s.h2}>Remerciement</Heading>
                <Paragraph  > 
                Dédicace à ces fantastiques owners qui excellent dans l'art de faire ronronner ces précieux matous : 
                <NextLink href="https://www.instagram.com/borismaurice21/">
                    <Link href="https://www.instagram.com/borismaurice21/"> Marie-Anne, </Link>
                </NextLink>

                <NextLink href="https://www.instagram.com/tiny.pixel/">
                    <Link href="https://www.instagram.com/tiny.pixel/">Étienne, </Link>
                </NextLink>

                <NextLink href="https://www.instagram.com/marie_lourioux/">
                    <Link href="https://www.instagram.com/marie_lourioux/">Marie, </Link>
                </NextLink>

                <NextLink href="https://www.youtube.com/watch?v=jw5BDjsgLO8">
                    <Link href="https://www.youtube.com/watch?v=jw5BDjsgLO8">Alex, </Link>
                </NextLink>

                <NextLink href="https://www.instagram.com/mariwavelapierre/8">
                    <Link href="https://www.instagram.com/mariwavelapierre/">Marie-Ève, </Link>
                </NextLink>

                <NextLink href="https://www.instagram.com/joocy_joosteen/">
                    <Link href="https://www.instagram.com/joocy_joosteen/">Justine, </Link>
                </NextLink>

                <NextLink href="https://www.instagram.com/jacklariviere90/">
                    <Link href="https://www.instagram.com/jacklariviere90/">Jacob, </Link>
                </NextLink>

                <NextLink href="https://www.instagram.com/polimodom/">
                    <Link href="https://www.instagram.com/polimodom/">Hector  </Link>
                </NextLink>

                <NextLink href="https://www.instagram.com/ariel.pn/">
                    <Link href="https://www.instagram.com/ariel.pn/">et Ariel.  </Link>
                </NextLink>
                
                
                </Paragraph>
            </section>
            <section className={s.sidebar}>
                <Image className={s.img} src={cathumb}></Image>
            </section>
            <div className={s.clearfix}></div>
                <a name="port"></a>
                    <h2 className={s.h2}>{useColorModeValue("Bisous-Minous", "Canaillous-Voyous")}</h2>
                    <section className={s.onethirdport}>
                        <a 
                        href={useColorModeValue("https://www.dropbox.com/s/g54m97mzzuhuhxy/1.jpg?raw=1"
                        , "https://www.dropbox.com/s/hf01qqwl00qxn5c/0.jpg?raw=1")} target="_blank" rel="noreferrer">
                        <Image  className={s.onethirdportimage} src= {useColorModeValue(pic1, pic0)}></Image> </a> 
                        <p className={s.sub} >Dharma</p>
                    </section>

                    <section className={s.onethirdport}>
                        <a 
                        href={useColorModeValue("https://www.dropbox.com/s/01eygslaumpuanv/2.jpg?raw=1"
                        , "https://www.dropbox.com/s/ii0x9zog1eaxk8m/3.jpg?raw=1")} target="_blank" rel="noreferrer">
                        <Image  className={s.onethirdportimage} src= {useColorModeValue(pic2, pic3)}></Image> </a> 
                        <p className={s.sub} >Ozzy</p>
                    </section>

                    <section className={s.onethirdport}>
                        <a 
                        href={useColorModeValue("https://www.dropbox.com/s/ryuvyc58vxbsknu/4.jpg?raw=1"
                        , "https://www.dropbox.com/s/slcao3wbtq0ptmp/5.jpg?raw=1")} target="_blank" rel="noreferrer">
                        <Image  className={s.onethirdportimage} src= {useColorModeValue(pic4, pic5)}></Image> </a> 
                        <p className={s.sub} >Timi</p>
                    </section>

                    <section className={s.onethirdport}>
                        <a 
                        href={useColorModeValue("https://www.dropbox.com/s/zq1i6n2qlvzsdws/7.jpg?raw=1"
                        , "https://www.dropbox.com/s/bpvg24ks9lw12kz/6.jpg?raw=1")} target="_blank" rel="noreferrer">
                        <Image  className={s.onethirdportimage} src= {useColorModeValue(pic7, pic6)}></Image> </a> 
                        <p className={s.sub} >Veronica</p>
                    </section>

                    <section className={s.onethirdport}>
                        <a 
                        href={"https://www.dropbox.com/s/ojz831xwkas2312/8.jpg?raw=1"} target="_blank" rel="noreferrer">
                        <Image  className={s.onethirdportimage} src= {pic8}></Image> </a> 
                        <p className={s.sub} >Ninja</p>
                    </section>

                    <section className={s.onethirdport}>
                        <a 
                        href={"https://www.dropbox.com/s/masvv1x648m9tu7/9.jpg?raw=1"} target="_blank" rel="noreferrer">
                        <Image  className={s.onethirdportimage} src= {pic9}></Image> </a> 
                        <p className={s.sub} >Babou</p>
                    </section>

                    <section className={s.onethirdport}>
                        <a 
                        href={"https://www.dropbox.com/s/cx5swbw2dv4f1gt/10.jpg?raw=1"} target="_blank" rel="noreferrer">
                        <Image  className={s.onethirdportimage} src= {pic10}></Image> </a> 
                        <p className={s.sub} >Darwin</p>
                    </section>
                
                    <section className={s.onethirdport}>
                        <a 
                        href={useColorModeValue("https://www.dropbox.com/s/q1fdz4mq09x50by/12.jpg?raw=1"
                        , "https://www.dropbox.com/s/m12rmf4uxh0n01b/11.jpg?raw=1")} target="_blank" rel="noreferrer">
                        <Image  className={s.onethirdportimage} src= {useColorModeValue(pic12, pic11)}></Image> </a> 
                        <p className={s.sub} >Juan Bautista</p>
                    </section>

                    <section className={s.onethirdport}>
                        <a 
                        href={useColorModeValue("https://www.dropbox.com/s/ve6n0dckl2cicrd/14.jpg?raw=1"
                        , "https://www.dropbox.com/s/em0jk6zf6lut2vo/13.jpg?raw=1")} target="_blank" rel="noreferrer">
                        <Image  className={s.onethirdportimage} src= {useColorModeValue(pic14, pic13)}></Image> </a> 
                        <p className={s.sub} >Lily</p>
                    </section>
                    
                    
                
                   
                    <div className={s.clearfix}></div>
                        <a name="serv">
                    
                        </a>
                        <section>
                            <h2 className={s.h2}>Nota Bene</h2>
                            <Paragraph>
                            Pour une douce dédicace de votre {useColorModeValue("adorable boule de poils","affreux démon")}, envoyez vos photos à 
                            {''}
                            <NextLink href="mailto:el_psy_congroo@outlook.com">
                                <Link href="mailto:el_psy_congroo@outlook.com"> el_psy_congroo@outlook.com</Link>
                            </NextLink>

                            </Paragraph>
                        </section>
                      
               
            
            </Container>
        </Layout>
    )
}

export default Article