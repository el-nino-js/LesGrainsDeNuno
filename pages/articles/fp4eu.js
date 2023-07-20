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

                <a name="about"/>
        <div className={s.clearfix}></div>
            <section className={s.leftcolumn}>
                <Heading as="h2" className={s.h2}>À propos</Heading>
                <Paragraph text-indent={6} className={s.p}> 
                En construction, comme sur le boulevard Saint-Laurent
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