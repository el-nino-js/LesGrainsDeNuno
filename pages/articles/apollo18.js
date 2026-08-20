/* eslint-disable react/no-unescaped-entities */
import { Container, Badge, Heading, Link, useColorModeValue} from '@chakra-ui/react'
import { Title } from '../../components/article'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/paragraph'
import NextLink from 'next/link'

import s from '../components/style.module.css'
import pic0 from '../../public/images/2026/Apollo18/01.jpg'
import pic1 from '../../public/images/2026/Apollo18/02.jpg'
import pic2 from '../../public/images/2026/Apollo18/03.jpg'
import pic3 from '../../public/images/2026/Apollo18/04.jpg'
import pic4 from '../../public/images/2026/Apollo18/05.jpg'
import pic5 from '../../public/images/2026/Apollo18/06.jpg'
import pic6 from '../../public/images/2026/Apollo18/07.jpg'
import pic7 from '../../public/images/2026/Apollo18/08.jpg'


//eta 30 min
//ajouter liens dropbox pour les pics
//thumbnail

import Image from 'next/image'

const Article = () => {
    return (
        <Layout Title="Apollo 18 - Comment louer une Odyssée ?">
            <Container>
            <Title>
            Comment louer une Odyssée ? ! <Badge>2026</Badge>
            </Title>
            Apollo 18 est un film couleur C-41 à vitesse 400. Ce film offre 18 expositions normales, soit 36 expositions pour votre appareil à demi-format.

        L'aubaine de la réduflation ! Les légères tonalités chaudes donnent aux photos un aspect rétro tout en offrant des images nettes.

        Il y a un moment pour beaucoup de mots, et il y a aussi un moment pour le sommeil. Devant cette tentative, j'aurais rendu  un grand service à mon pays... et à l'humanité.  <br/> <br/>

        Après être allé voir l'Odyssée comme Nolan le voulait, l'envie de plonger dans l'œuvre qui m'avait si marquée lorsque j'apprenais à lire est venue me recaptiver.<br/> <br/> L'allégorie de la caverne du cyclope fait bien les choses, lorsque la beauté des poèmes de cette œuvre grecque est venue tourmenter mon appréciation du film que je ne peux désormais voir que comme une pâle copie imbriquée d'amertume.

        Bon, sous une vision plus optimiste, dans le laid ou le beau, même les tons sont à dompter.

        La composition n'est en soi surtout importante quand elle vient de l'auteur, puisqu'il n'y a pas plus fier qu'un travail réalisé par soi-même.  
            
             <a name="about"/>
        <div className={s.clearfix}></div>
            <section className={s.leftcolumn}>
                <Heading as="h2" className={s.h2}>À propos</Heading>
                <Paragraph text-indent={6} className={s.p}> 
                De blâmer les Dieux, de causer ses souffrances, la folie elle, ne fait que la croître. Je préfère plutôt viser à ne pas devenir quelqu'un que je déteste. Parce que la joie fini vite draînée par des fous comme ça...

                </Paragraph>
            </section>
            <section className={s.sidebar}>
                <Image className={s.img} src={pic5}></Image>
            </section>
            <br/>
           
 <div className={s.clearfix}></div>
                <a name="port"></a>
                    <h2 className={s.h2}>Mare</h2>
                    
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/rluay53vpcki738kextz9/01.jpg?rlkey=sxtxge0dt0fk6947585taczru&st=lmdqyb31&raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic0}></Image> </a>
                    </section>

                     <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/en75qyfhqjmb0ilh6z8mh/02.jpg?rlkey=4q0bvl1lb3lpraxn52g88l3rf&st=79h1o4hz&raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic1}></Image> </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/ln5iz0nfjocvhgt0oti2f/03.jpg?rlkey=o5mq5buhjewb3amfytq5he12s&st=3zy062iv&raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic2}></Image> </a>
                    </section>
                     <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/https://www.dropbox.com/scl/fi/skvv6anjm7hanghiztypk/4.jpg?rlkey=e5ahkohw14r156n0l3qpzg57g&st=y6ccffqi&raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic3}></Image> </a>
                    </section>
                     <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/pp2genc5xyr48uwui5zgd/05.jpg?rlkey=yx0bpcokmvibe1mq05k8tg93f&st=e87z02wr&raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic4}></Image> </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/ty29913hvxvrnorbw72b8/06.jpg?rlkey=el1l5yj8s60ey6x3uft0xs1e4&st=ag27ufdp&raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic5}></Image> </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/dbmwio4t8mdcnpriw28f8/07.jpg?rlkey=84xe1ot6jsxe3fqfhehu70r68&st=9g9i16bx&raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic6}></Image> </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/qxa4hffqtivpi4v5i2zhc/08.jpg?rlkey=t74mkntum9curh6m06x36xvkt&st=9johj71g&raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic7}></Image> </a>
                    </section>

                   
                    
                    



                    <div className={s.clearfix}></div>
                        <a name="serv">
                    
                        </a>
                        <section>
                            <h2 className={s.h2}>Nota Bene</h2>
                            <p>
                            Naviguer pour se rendre à Mon Vaisseau.
                            </p>
                        </section>
            </Container>
        </Layout>
    )
}

export default Article