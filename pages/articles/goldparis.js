/* eslint-disable react/no-unescaped-entities */
import { Container, Badge, Heading, Link, useColorModeValue} from '@chakra-ui/react'
import { Title } from '../../components/article'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/paragraph'
import NextLink from 'next/link'

import s from '../components/style.module.css'
import pic0 from '../../public/images/2023/gold200/1.jpg'
import pic1 from '../../public/images/2023/gold200/2.jpg'
import pic2 from '../../public/images/2023/gold200/3.jpg'
import pic3 from '../../public/images/2023/gold200/4.jpg'
import pic4 from '../../public/images/2023/gold200/5.jpg'
import pic5 from '../../public/images/2023/fp4/6.jpg'
import pic6 from '../../public/images/2023/fp4/7.jpg'
import pic7 from '../../public/images/2023/fp4/8.jpg'
import pic8 from '../../public/images/2023/fp4/9.jpg'
import pic9 from '../../public/images/2023/fp4/10.jpg'
import pic10 from '../../public/images/2023/fp4/11.jpg'


import Image from 'next/image'

const Article = () => {
    return (
        <Layout Title="Kodak Gold 200 - Saint-Germain-en-Lait">
            <Container>
            <Title>
            Gold 200 - Voyage de Maître Partie 6/7 <Badge>2023</Badge>
            </Title>
            Les tons chauds de la Kodak Gold 200 lui valent coup de coeur. Sa balance est légèrement poussée vers le jaune,
             ses couleurs sont plutôt saturées, ce qui en fait une excellente pellicule pour les photos en extérieur lors de journées ensoleillées. 
             Un moment où la Kodak Gold excelle c'est définitivement lors du golden hour.  <br></br> C’est là que ses teintes chaudes ressortent
            des couleurs dorées resplendissantes. La ville de Paris, en cet instant, devient un véritable havre de paix. Avec
            ses long couchées de soleil, elle peut bien arborer, avec chauvinisme, son titre de Ville Lumière. <br></br><br></br>

                <a name="about"/>
        <div className={s.clearfix}></div>
            <section className={s.leftcolumn}>
                <Heading as="h2" className={s.h2}>À propos</Heading>
                <Paragraph text-indent={6} className={s.p}> 
                Des retrouvailles qui font place à une nostalgie qui survole l'alliénation. Les ailes dorées du phoénix renaîssent encore plus fortes.
                </Paragraph>
            </section>
            <section className={s.sidebar}>
                <Image className={s.img} src={pic3}></Image>
            </section>
            <br/>
           
            <div className={s.clearfix}></div>
                <a name="port"></a>
                    <h2 className={s.h2}>Renault</h2>
                   
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/1suci9h2xz5hzpn/1.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic0}></Image> </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/r3v74x9w8v44wr7/2.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic1}></Image> </a>
                    </section>
                    
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/1xe5pt156hxlxxx/3.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic2}></Image> </a>
                    </section>
                    
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/e9b182vtlr726l5/4.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic3}></Image> </a>
                    </section>

                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/9hnielqpvqyx2ip/5.jpg?raw=1" target="_blank" rel="noreferrer">
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
                            Salut, ça va, pis toi? Meeeeuh
                            </p>
                        </section>
            </Container>
        </Layout>
    )
}

export default Article