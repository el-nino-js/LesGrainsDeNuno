/* eslint-disable react/no-unescaped-entities */
import { Container, Badge, Heading, Link, useColorModeValue} from '@chakra-ui/react'
import { Title } from '../../components/article'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/paragraph'
import NextLink from 'next/link'

import s from '../components/style.module.css'
import pic0 from '../../public/images/2023/fp4/1.jpg'
import pic1 from '../../public/images/2023/fp4/2.jpg'
import pic2 from '../../public/images/2023/fp4/3.jpg'
import pic3 from '../../public/images/2023/fp4/4.jpg'
import pic4 from '../../public/images/2023/fp4/5.jpg'
import pic5 from '../../public/images/2023/fp4/6.jpg'
import pic6 from '../../public/images/2023/fp4/7.jpg'
import pic7 from '../../public/images/2023/fp4/8.jpg'
import pic8 from '../../public/images/2023/fp4/9.jpg'
import pic9 from '../../public/images/2023/fp4/10.jpg'
import pic10 from '../../public/images/2023/fp4/11.jpg'


import Image from 'next/image'

const Article = () => {
    return (
        <Layout Title="Iflord FP4 400 - Bon Retour">
            <Container>
            <Title>
              Iflord FP4 400 - Voyage de Maître Partie 7/7 <Badge>2023</Badge>
            </Title>
            Oublier ses films de voyage à Saint-Germain-en-Laye n'est pas fameux. En attendant leur retour au bercail, autant présenter ce périple à reculons avec les films que j'ai en ma disposition.
            <br/> <br/>
            Quoi de mieux qu'une bonne Ilford FP4+ ben fine, pour bien achever ça avec une belle pluie printanière. Cette escale de 10 heures à Lisbonne m'aura 
            fait voir cette ville sous un battement de cil différent, puisque les pluies sont rares à cette période de l'année. On pardonnera cette balade pluvieuse comme la FP4 pardonne facilement de mauvaises conditions de développement ou de 
            température.
            <br/> <br/>
            Les derniers jours à Paris se sont résumés à une visite du nord vers Belleville. Pour se garder en forme, on se fait une petite grimpe sur St-Denis. 
            Les essentiels pour une bonne journée sont: livre de poche, clope, terrasse et limonade. Dîner poutine et câlin sur Pablito le chat dans le coin de Nanterre pour
            réchauffer son âme. 


                <a name="about"/>
        <div className={s.clearfix}></div>
            <section className={s.leftcolumn}>
                <Heading as="h2" className={s.h2}>À propos</Heading>
                <Paragraph text-indent={6} className={s.p}> 
                Des gens beaux à Paris! Des jambons à Lisbonne!
                </Paragraph>
            </section>
            <section className={s.sidebar}>
                <Image className={s.img} src={pic3}></Image>
            </section>
            <br/>
           
            <div className={s.clearfix}></div>
                <a name="port"></a>
                    <h2 className={s.h2}>Vasco</h2>
                   
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/bhfvddrttbul4om/FP4PARIS%207.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic0}></Image> </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/tgk312z3tqn2p6x/FP4PARIS%208.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic1}></Image> </a>
                    </section>
                    
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/5p7ahqyqjy3yutt/FP4PARIS%209.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic2}></Image> </a>
                    </section>
                    
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/5kjzionbckx4z3o/FP4PARIS%2010.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic3}></Image> </a>
                    </section>

                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/ckqrkfq545lcxq5/5.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic4}></Image> </a>
                    </section>

                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/su22kp2nwmcivyt/6.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic5}></Image> </a>
                    </section>

                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/kjdrviw1ui6efj5/7.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic6}></Image> </a>
                    </section>

                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/ahmulpi4ifwptmv/8.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic7}></Image> </a>
                    </section>

                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/yoixkbbqdybd1yj/9.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic8}></Image> </a>
                    </section>

                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/ekkiaza2s3egjzu/10.jpg?" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic9}></Image> </a>
                    </section>

                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/7xu4hq5gj8y5t9z/11.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic10}></Image> </a>
                    </section>

                    <div className={s.clearfix}></div>
                        <a name="serv">
                    
                        </a>
                        <section>
                            <h2 className={s.h2}>Nota Bene</h2>
                            <p>
                            «Escrevo, triste, no meu quarto quieto, sozinho como sempre tenho sido, sozinho como sempre serei. E penso se a minha voz, aparentemente tão pouca coisa, não encarna a substância de milhares de vozes, a fome de dizerem-se de milhares de vidas, a paciência de milhões de almas submissas como a minha ao destino quotidiano, ao sonho inútil, à esperança sem vestígios. Nestes momentos meu coração pulsa mais alto por minha consciência dele. Vivo mais porque vivo maior.» - Fernando Pessoa
                            </p>
                        </section>
            </Container>
        </Layout>
    )
}

export default Article