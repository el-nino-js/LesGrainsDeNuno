/* eslint-disable react/no-unescaped-entities */
import { Container, Badge, Heading, Link, useColorModeValue} from '@chakra-ui/react'
import { Title } from '../../components/article'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/paragraph'
import NextLink from 'next/link'

import s from '../components/style.module.css'
import pic0 from '../../public/images/2026/kodacolor200/1.jpg'
import pic1 from '../../public/images/2026/kodacolor200/2.jpg'
import pic2 from '../../public/images/2026//kodacolor200/3.jpg'
import pic3 from '../../public/images/2026//kodacolor200/4.jpg'
import pic4 from '../../public/images/2026//kodacolor200/5.jpg'
import pic5 from '../../public/images/2026//kodacolor200/6.jpg'


//eta 30 min
//ajouter liens dropbox pour les pics
//thumbnail

import Image from 'next/image'

const Article = () => {
    return (
        <Layout Title="Kodacolor 200 - On São Roque !">
            <Container>
            <Title>
            Camerodrome <Badge>2026</Badge>
            </Title>
            Sortie avec sa soeur jumelle la Kodakcolor 100, cette petite 200 était censé rayonner le début d'un nouveau chapitre de Kodak. Au final, on aura eu droit à un bref moment de gloire. Son prix et ses couleurs, certe agréables, on retrouve peu de 
            nouveauté de ce que nous a sorti Kodak. Les images restent cohérentes à ce qui existe déjà. Si les aspirations n'auront que fait peu rêver, on peut voir de Kodak qu'il préserve sa cohérence en terme de couleur.
            Il s'agit de Kodak sans s'écliser. Son résultat est assez banal, mais son ambition demeure.
             <a name="about"/>
        <div className={s.clearfix}></div>
            <section className={s.leftcolumn}>
                <Heading as="h2" className={s.h2}>À propos</Heading>
                <Paragraph text-indent={6} className={s.p}> 
                Notre vie commence en perdant ou en gagnant quelque chose.
                </Paragraph>
            </section>
            <section className={s.sidebar}>
                <Image className={s.img} src={pic5}></Image>
            </section>
            <br/>
           
 <div className={s.clearfix}></div>
                <a name="port"></a>
                    <h2 className={s.h2}>Néo</h2>
                    
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/q940gbt6i8dgb65cignef/1.jpg?rlkey=2nbbze7gqxrxz92yhmymohu2i&st=jqguiesu&?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic0}></Image> </a>
                    </section>

                     <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/wasej0rax3d1djxbm6ub4/2.jpg?rlkey=76rfkt5lpft6t9e1gzn69ewx1&st=sf1qvdq1&?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic1}></Image> </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/bch6tl8hzv95vqb54zm6v/3.jpg?rlkey=8i5b7teimfpfa8okgm1k9jqc1&st=zxpknkc6&?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic2}></Image> </a>
                    </section>
                     <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/https://www.dropbox.com/scl/fi/skvv6anjm7hanghiztypk/4.jpg?rlkey=e5ahkohw14r156n0l3qpzg57g&st=y6ccffqi&raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic3}></Image> </a>
                    </section>
                     <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/wav6fqx2pnsklme5imena/5.jpg?rlkey=1ajhczly0qhbanuvqtoqv78ba&st=t9xyclkb&raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic4}></Image> </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fo/uiuhmjx7senxkvbxao0d6/ABMLbpnMIx8lWUAEReLQaBQ?rlkey=qji04m4bjai0oq931uijeuqid&st=ltik6i8w&raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic5}></Image> </a>
                    </section>

                   
                    
                    



                    <div className={s.clearfix}></div>
                        <a name="serv">
                    
                        </a>
                        <section>
                            <h2 className={s.h2}>Nota Bene</h2>
                            <p>
                            Even if you get lost in the dark. You'll surely reach it someday! So snap !
                            </p>
                        </section>
            </Container>
        </Layout>
    )
}

export default Article