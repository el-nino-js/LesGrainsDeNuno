/* eslint-disable react/no-unescaped-entities */
import { Container, Badge, Heading, Link, useColorModeValue} from '@chakra-ui/react'
import { Title } from '../../components/article'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/paragraph'
import NextLink from 'next/link'

import s from '../components/style.module.css'
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
                <NextLink href="https://www.vanessamassera.com ">
                    <Link href="https://www.vanessamassera.com ">Vanessa Massera</Link>
                </NextLink>
                , spécialisée en acoustique, exprime ses idées poétiques ancrées des différents milieux auquel elle se retrouve inspirée.

                </Paragraph>
            </section>
            <section className={s.sidebar}>
                <Image className={s.img} src={pic1}></Image>
            </section>
            <div className={s.clearfix}></div>
                <a name="port"></a>
                    <h2 className={s.h2}>Les {useColorModeValue("minous", "voyous")}</h2>
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
                        href={useColorModeValue("https://www.dropbox.com/s/m12rmf4uxh0n01b/11.jpg?raw=1"
                        , "https://www.dropbox.com/s/q1fdz4mq09x50by/12.jpg?raw=1")} target="_blank" rel="noreferrer">
                        <Image  className={s.onethirdportimage} src= {useColorModeValue(pic11, pic12)}></Image> </a> 
                        <p className={s.sub} >Juan Bautista</p>
                    </section>
                    
                 
                
                   
                    <div className={s.clearfix}></div>
                        <a name="serv">
                    
                        </a>
                        <section>
                            <h2 className={s.h2}>Nota Bene</h2>
                            <Paragraph>
                            Pour une douce dédicace de vos adorables minous, envoyez-moi vos photos à el_psy_congroo@outlook.com
                            </Paragraph>
                        </section>
                      
               
            
            </Container>
        </Layout>
    )
}

export default Article