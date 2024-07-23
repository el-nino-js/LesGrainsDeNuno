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
import pic5 from '../../public/images/2023/gold200/6.jpg'
import pic6 from '../../public/images/2023/gold200/7.jpg'
import pic7 from '../../public/images/2023/gold200/8.jpg'
import pic8 from '../../public/images/2023/gold200/9.jpg'
import pic9 from '../../public/images/2023/gold200/10.jpg'
import pic10 from '../../public/images/2023/gold200/11.jpg'
import pic11 from '../../public/images/2023/gold200/12.jpg'
import pic12 from '../../public/images/2023/gold200/13.jpg'
import pic13 from '../../public/images/2023/gold200/14.jpg'
import pic14 from '../../public/images/2023/gold200/15.jpg'
import pic15 from '../../public/images/2023/gold200/16.jpg'
import pic16 from '../../public/images/2023/gold200/17.jpg'
import pic17 from '../../public/images/2023/gold200/18.jpg'


//eta 30 min
//ajouter liens dropbox pour les pics
//thumbnail

import Image from 'next/image'

const Article = () => {
    return (
        <Layout Title="Kodak Gold 200 - Saint-Germain-en-Lait">
            <Container>
            <Title>
            Gold 200 - Génies en herbe <Badge>2023/2024</Badge>
            </Title>
            <b>Juin 2023 </b>
            Les tons chauds de la Kodak Gold 200 lui valent son coup de coeur. Sa balance est légèrement poussée vers le jaune,
             ses couleurs sont plutôt saturées, ce qui en fait une excellente pellicule pour les photos en extérieur, lors de journées ensoleillées. 
             Un moment où la Kodak Gold excelle c'est définitivement lors du golden hour.  <br></br> C'est là que ses teintes chaudes ressortent
            des couleurs dorées resplendissantes. La ville de Paris, en cet instant, devient un véritable havre de paix. Avec
            ses longs couchées de soleil, elle dégage, avec chauvinisme, son titre de Ville Lumière. 

            <br></br><br></br>
            <b>Juin 2024 </b>
            On plit bagage pour une aventure vers notre beau Québec. Le road-trip débute en destination d'un camping à Rivière-du-loup. Ce périple est à midi au Normandin, chaîne de restaurant québécoise
            omniprésente sauf dans les recoins de Montréal. Après un petit déjeuner délicieux comme sale, malheur soit mes mains d'ourson en peluche, on roule vers la microbrasserie des têtes d'allumettes.
            Du soleil, de la bière et des chiens, que demander mieux? Au camping, on fait là rencontre d'un renard au visage curieux. Le lendemain matin, on se réveille avec une amie. Il s'agit de Cristine. C'est le nom que nous 
            avons donné à notre voisine la poule. 

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
                        <a href="https://www.dropbox.com/scl/fi/e9oaqduq0m3lagh5o6gmv/6.jpg?rlkey=3e71xdw2ikgrunqo41ypsp776&raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic5}></Image> </a>
                    </section>

                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/887tbkyht9kh3y1utg9mg/7.jpg?rlkey=9fc5i2mae1g1ssbzm5nqkpyra&raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic6}></Image> </a>
                    </section>

                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/1j5o1pslo793epe95qiag/8.jpg?rlkey=jzjtzgilhzetfoauq6o77lnmq&raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic7}></Image> </a>
                    </section>

                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/1kz73fwia1acgu3m2lwpq/9.jpg?rlkey=isqn2sx0aaifaubbwpga00s1t&raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic8}></Image> </a>
                    </section>

                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/umvablygzkf8fh74djufo/10.jpg?rlkey=rr5at556rplertpjbkoafslw5&raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic9}></Image> </a>
                    </section>

                    <div className={s.clearfix}></div>
                        <a name="serv">
                    
                        </a>
                        <section>
                            <h2 className={s.h2}>Nota Bene</h2>
                            <p>
                            Salut, ça va, pis toi? Meeeeuh
                            </p>

                            <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/7h5kszivlh4p70r2llrjl/111.jpg?rlkey=x9oanwff7wokfyxp9yfn4bxzm&st=betak4ym&raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic14}></Image> </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/bf247b1zgpl8d0iip9fij/112.jpg?rlkey=m7csmwx9pg62tar968884jvx1&st=efvzeu3u&raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic10}></Image> </a>
                    </section>
                    
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/fuzex65ioggm9stbynvyr/113.jpg?rlkey=r55m3pkf7r901edg6h18x3sxw&st=hlrw14bp&raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic11}></Image> </a>
                    </section>
                    
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/uauztm28eg9a79nx5dwzg/114.jpg?rlkey=oapeu88jwm3sfyy8f6ci4k7nc&st=mjzk2blb&raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic12}></Image> </a>
                    </section>

                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/ubc8xg7q5cdrgmds91k9o/115.jpg?rlkey=pz8an8uagv96u2u5sh6fmk2v4&st=n2r075uu&raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic13}></Image> </a>
                    </section>

                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/n6fq8l56jjpx1u03r3263/116.jpg?rlkey=g5v9l7slysfzd7mg99tsnboo4&st=rbo1txv4&raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic15}></Image> </a>
                    </section>

                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/iecmi6tpmx7zr7vafc9vy/117.jpg?rlkey=5n3can7zp0e7geim16h97lzwq&st=u8ejpj9k&raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic16}></Image> </a>
                    </section>

                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/7yex6ozspk3imnjo4mwsx/118.jpg?rlkey=fmx9rvi2y5xm929ed8kh4myg8&st=6rg6wjf4&raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic17}></Image> </a>
                    </section>


                        </section>            <br></br><br></br>
            </Container>
        </Layout>
    )
}

export default Article