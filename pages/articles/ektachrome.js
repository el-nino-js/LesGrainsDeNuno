/* eslint-disable react/no-unescaped-entities */
import { Container, Badge, Heading, Link, useColorModeValue} from '@chakra-ui/react'
import { Title } from '../../components/article'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/paragraph'
import NextLink from 'next/link'

import s from '../components/style.module.css'
import pic0 from '../../public/images/2023/ektachrome/1.jpg'
import pic1 from '../../public/images/2023/ektachrome/2.jpg'
import pic2 from '../../public/images/2023/ektachrome/3.jpg'
import pic3 from '../../public/images/2023/ektachrome/4.jpg'
import pic4 from '../../public/images/2023/ektachrome/5.jpg'
import pic5 from '../../public/images/2023/ektachrome/6.jpg'
import pic10 from '../../public/images/2023/ektachrome/10.jpg'
import pic11 from '../../public/images/2023/ektachrome/11.jpg'
import pic12 from '../../public/images/2023/ektachrome/12.jpg'
import pic13 from '../../public/images/2023/ektachrome/13.jpg'
import pic14 from '../../public/images/2023/ektachrome/14.jpg'
import pic16 from '../../public/images/2023/ektachrome/16.jpg'
import pic17 from '../../public/images/2023/ektachrome/17.jpg'
import pic18 from '../../public/images/2023/ektachrome/18.jpg'




import Image from 'next/image'

const Article = () => {
    return (
        <Layout Title="Cinestill 800t">
            <Container>
            <Title>
              Ektachrome - Studs, Yo! <Badge>2023</Badge>
            </Title>
                <P>
                Rendu à photographier du slide en plein studio, je peux presque me sentir rentrer dans la cour des grands. Enfin presque. Se mettre la barre haute n'atteint que la haute plage dynamique de l'Ektachrome E100. Alors que la<NextLink href="https://poussindesforets.com/articles/galicie">
                            <Link href="https://poussindesforets.com/articles/galicie"> Velvia 100</Link>
                        </NextLink>, aurait punit, sans coquinerie, des photographes mal exposé.e.s, l'Ektachrome fait preuve de
davantage de clémence. Sa versatilité la rend comparable au film négatif. Prendre les détails dans les ombres ou surexposer son Ektachrome se fait heureusement
graduellement et dans la grâce. <br/> <br/>

Son grain est de plus très fin, ce qui peut donner des images de haute qualité. Bien exposé à la lumière du jour, elle compose des images proches de ce que l'œil humain voit. Attention toutefois aux tons chauds de la sous-exposition et aux tons froids de la sur-exposition. <br/> <br/>

J'ai été surpris à quel point l'Ektachrome rendait l'image naturelle sous les flashs d'un studio et pour de la photo de nuit. Sa versatilité la rend idéale pour du paysage, de la photo de rue, comme pour des portraits. Peu de correction de couleur est à prévoir, de quoi offrir un traitement rapide.

                </P>
                <br/> <br/>
                <a name="about"/>
        <div className={s.clearfix}></div>
            <section className={s.leftcolumn}>
                <Heading as="h2" className={s.h2}>À propos</Heading>
                <Paragraph text-indent={6} className={s.p}> 
                20h00: Le lait est rouge, tout est rouge, c'est ma période rouge, je vois du rouge, je prend du rouge, je danse du rouge.
                </Paragraph>
            </section>
            <section className={s.sidebar}>
                <Image className={s.img} src={pic1}></Image>
            </section>
            <br/>
           
            <div className={s.clearfix}></div>
                <a name="port"></a>
                    <h2 className={s.h2}>Studio</h2>
                    
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/a711n6j5o96w8sm/1.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic0}></Image> </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/fu5kup44l0v1akv/2.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic1}></Image> </a>
                    </section>
                    
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/u2orfs2ex2snde8/3.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic2}></Image> </a>
                    </section>

                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/nf8szb5wtxxc4zp/4.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic3}></Image> </a>
                    </section>
                    
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/kvbeqq9gul87wk8/5.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic4}></Image> </a>
                    </section>

                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/44l8f77nvl75mp7/6.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic5}></Image> </a>
                    </section>
                    <br/> <br/>   <br/> <br/>   <br/> <br/>   <br/> <br/>   <br/> <br/>   <br/> <br/>   <br/> <br/>

                    <h2 className={s.h2}>Road Trip</h2>
                    
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/mm4zt0c41i7z3hes9om64/10.jpg?rlkey=83ioz3unkbivclupo4dr4gsta&st=d2u1j5si&raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic10}></Image> </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/tqu1mob6xb0ecodzji2bu/11.jpg?rlkey=7mhdxc7x042xded9km19p6k0j&st=uuib2r1i&raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic11}></Image> </a>
                    </section>
                    
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/ropvjxo5dqtd256fi6fnn/12.jpg?rlkey=wi10kza2t6c0t2dkk60e2swb5&st=73h9f3k5&raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic12}></Image> </a>
                    </section>

                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/yf630jewf6m5a2ap1bzxr/13.jpg?rlkey=rxlsogztmjj41zschwiqyzk9v&st=8cpkv2fy&raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic13}></Image> </a>
                    </section>
                    
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/4c18iyx5uymtih7bg66i0/14.jpg?rlkey=jgrm9hewb8e00tf4cbkvocc8n&st=sm5b5a5t&raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic14}></Image> </a>
                    </section>

                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/ich5gl6cx6cpcmxwd8mbh/16.jpg?rlkey=28yr76n5bugtt2zr3llr1ba6w&st=0u8yemn4&raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic16}></Image> </a>
                    </section>

                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/iz6nnx98fqsbz01lu179w/17.jpg?rlkey=ph9li659yn41ect3adzxskprs&st=fr55o76p&raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic17}></Image> </a>
                    </section>

                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/iz4gsyvs0htjzove7i6fz/18.jpg?rlkey=7u2xco9hrmjhiwbe099g4fl74&st=l0wtcmja&raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic18}></Image> </a>
                    </section>
                    
                    <div className={s.clearfix}></div>
                        <a name="serv">
                        </a>
                        <section>
                            <h2 className={s.h2}>Nota Bene</h2>
                            <p>
                            When there's nothing left to burn, you have to set yourself on fire 🔥
                            </p>
                        </section>
            </Container>
        </Layout>
    )
}

export default Article