/* eslint-disable react/no-unescaped-entities */
import { Container, Badge, Heading, Link, useColorModeValue} from '@chakra-ui/react'
import { Title } from '../../components/article'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/paragraph'
import NextLink from 'next/link'

import s from '../components/style.module.css'
import pic0 from '../../public/images/2023/sudfrance/1.jpg'
import pic1 from '../../public/images/2023/sudfrance/2.jpg'
import pic2 from '../../public/images/2023/sudfrance/3.jpg'
import pic3 from '../../public/images/2023/sudfrance/4.jpg'
import pic4 from '../../public/images/2023/sudfrance/5.jpg'
import pic5 from '../../public/images/2023/sudfrance/6.jpg'
import pic6 from '../../public/images/2023/sudfrance/7.jpg'
import pic7 from '../../public/images/2023/sudfrance/8.jpg'
import pic8 from '../../public/images/2023/sudfrance/9.jpg'
import pic9 from '../../public/images/2023/sudfrance/10.jpg'
import pic10 from '../../public/images/2023/sudfrance/11.jpg'
import pic11 from '../../public/images/2023/sudfrance/12.jpg'
import pic12 from '../../public/images/2023/sudfrance/13.jpg'
import pic13 from '../../public/images/2023/sudfrance/14.jpg'



import Image from 'next/image'

const Article = () => {
    return (
        <Layout Title="Portra160 - Le train n'est pas à destination de Paris, mais bien de Bandol!">
            <Container>
            <Title>
              Portra160 - Le train n'est pas à destination de Paris, mais bien de Bandol ! <Badge>2023</Badge>
            </Title>
            La balance des couleurs et les contrastes n'ont besoin que de peu de changement, tout est là, avec peu de traitement.
            Authentique et proche de la réalité, la portra 160 documente adéquatement un traducteur de bande dessinée, sur son île déserte, qui se fait prendre par Les Grandes Marées. 
            <br></br> <br></br>
            À faible grain, faible contraste, faible ISO, ses paysages nuageux ressortent avec un vert plaisant et
            les teints de peau sous un magenta-orange campé. Une versatilité qui n'est toutefois pas autant au rendez-vous que pour la Portra 400.
            L'élégance prédéterminée est venu s'enrober à l'émulsion, sans la palette multifonction de la 400.
            <br></br> <br></br>
            Deux amertumes ressortent de mon rendu. Tout d'abord, les couleurs pour des paysages ressortent assez fades, contrairement aux portraits.
            Un peu dommage, puisque ma bobine à surtout côtoyée des randonnées. Ensuite, plusieurs des photos prises mériteraient un stop en plus. Erreur humaine d'évaluation du posemètre ? Peut-être.
            En tout cas, le ISO sera réglé à 120 la prochaine fois.  

            
                <br/> <br/>
                <a name="about"/>
        <div className={s.clearfix}></div>
            <section className={s.leftcolumn}>
                <Heading as="h2" className={s.h2}>À propos</Heading>
                <Paragraph text-indent={6} className={s.p}> 
                La patience en toute voie, garde la clef de toute joie <br></br> - SNCF
                </Paragraph>
            </section>
            <section className={s.sidebar}>
                <Image className={s.img} src={pic9}></Image>
            </section>
            <br/>
           
            <div className={s.clearfix}></div>
                <a name="port"></a>
                    <h2 className={s.h2}>A pour Apéro</h2>
                    <Paragraph><b>Acte I</b></Paragraph>
                <P>
            Chasse sur le soleil qui quitte l'horizon, presque aussi vite que le gâteau basque qui a rejoint mon bedon! L'eurasier dubitatif et curieux admire ce sprint.           

               <br></br><br></br>
                </P>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/2a9yp7dnu44zzthl7w08q/1.jpg?rlkey=3v306ukfpb4bluezmwflas1ve&raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic0}></Image> </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/r1j4cs1mjxwl8rcorp6ek/2.jpg?rlkey=ssrk1eju6vrxtd5i4n6cy3gcy&raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic1}></Image> </a>
                    </section>
                    
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/s5p16en2isw860l8jxysx/3.jpg?rlkey=1yl65wiuattza1jzr6e826r8c&raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic2}></Image> </a>
                    </section>
                    
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/57br00djgapgckyh88qi1/4.jpg?rlkey=48u647kgpjgzy5nh860yhfnt9&raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic3}></Image> </a>
                    </section>

                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/j6oy0nuw5u40021rw625q/5.jpg?rlkey=ktwg1szamyfqb1z4gh7b3gwld&raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic4}></Image> </a>
                    </section>

                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/vwq3b1nvtnokd602cy912/6.jpg?rlkey=bc0q8qaoi45u027m5kgfh5qqg&raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic5}></Image> </a>
                    </section>
                    
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/p9vsnqapcieztobb9ip20/7.jpg?rlkey=bs9pmp6p00i9t7e2ujt6ycr69&raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic6}></Image> </a>
                    </section>

                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/sryv57kg0loeer1vqqqda/11.jpg?rlkey=zw2eybytb01oebph18n6kaf22&raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic10}></Image> </a>
                    </section>

<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
<Paragraph><b>Acte II</b></Paragraph>
                <P>
                N pour Nudiste.
                <br></br><br></br>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/kz9y64lm6fmy63x1y3zqg/8.jpg?rlkey=mh2ufxcop4lkne1cmukyksibl&raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic7}></Image> </a>
                    </section>

                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/z38w3yvcg7uq34xj2t16q/9.jpg?rlkey=eobww38737cf1en86lviqko61&raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic8}></Image> </a>
                    </section>

                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                <Paragraph><b>Acte III</b></Paragraph>
                <P>
                La condensation s'est emparée des calanques. Dans une bâtisse, le café italien nous garde au chaud.</P>
                <br></br>
                <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/m5ypwlqltz34wscxqgrev/12.jpg?rlkey=vjhh5j3etvcwyx2d8wlju9zg8&raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic11}></Image> </a>
                    </section>

                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/ngnkm9pkj94sxaiu5ait5/13.jpg?rlkey=66pe0so9wlqvbq5qrbzko72ax&raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic12}></Image> </a>
                    </section>

                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/swd7xg00xq21hgvn371ib/14.jpg?rlkey=6nscvux0frufb86wgiy1l4bwa&raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic13}></Image> </a>
                    </section>
                    
<br></br><br></br><br></br><br></br><br></br><br></br>

                    <div className={s.clearfix}></div>
                        <a name="serv">
                        </a>
                        <section>
                            <h2 className={s.h2}>Nota Bene</h2>
                            <p>
                            L pour l'Olympique de Marseille. À jamais les premiers!  
                            </p>
                        </section>
                        </P> 
            </Container>
        </Layout>
    )
}

export default Article