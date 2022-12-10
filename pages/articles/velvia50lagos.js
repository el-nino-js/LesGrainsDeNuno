import { Container, Badge, Heading, Link, List, ListItem} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ArticleImage, Meta } from '../../components/article'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/paragraph'

import s from '../components/style.module.css'
import pic1 from '../../public/images/2018/velvia50lagos/1.jpg'
import pic2 from '../../public/images/2018/velvia50lagos/2.jpg'
import pic3 from '../../public/images/2018/velvia50lagos/3.jpg'
import pic4 from '../../public/images/2018/velvia50lagos/4.jpg'
import pic5 from '../../public/images/2018/velvia50lagos/5.jpg'
import pic6 from '../../public/images/2018/velvia50lagos/6.jpg'
import pic7 from '../../public/images/2018/velvia50lagos/7.jpg'
import pic8 from '../../public/images/2018/velvia50lagos/8.jpg'
import pic9 from '../../public/images/2018/velvia50lagos/9.jpg'
import pic10 from '../../public/images/2018/velvia50lagos/10.jpg'
import pic11 from '../../public/images/2018/velvia50lagos/11.jpg'
import pic12 from '../../public/images/2018/velvia50lagos/12.jpg'
import pic13 from '../../public/images/2018/velvia50lagos/13.jpg'
import pic14 from '../../public/images/2018/velvia50lagos/14.jpg'
import pic15 from '../../public/images/2018/velvia50lagos/15.jpg'
import pic16 from '../../public/images/2018/velvia50lagos/16.jpg'
import pic17 from '../../public/images/2018/velvia50lagos/17.jpg'
import pic18 from '../../public/images/2018/velvia50lagos/18.jpg'
import pic19 from '../../public/images/2018/velvia50lagos/19.jpg'
import pic20 from '../../public/images/2018/velvia50lagos/20.jpg'
import pic21 from '../../public/images/2018/velvia50lagos/21.jpg'


import Image from 'next/image'

const Article = () => {
    return (
        <Layout Title="JacobLeCoq">
            <Container>
            <Title>
              Velvia 50 - Lagos <Badge>2018</Badge>
            </Title>
                <P>Planifier d'un point A au point B, repassant par les rails du Comboio du Portugal. Peter Pan et Crochet sont gagas
                    de vivre un véritable monde imaginaire. Le long trajet sous le soleil chaud de l'Andalousie s'accompagne de vidéo en .mp4 d'un combat épique
                    entre Madara et les 5 Kages, ou bien de l'amant du Porto qui s'évade étoufé de colère, ou des deux étudiantes qui préparent la rentrée
                    des nouveaux arrivants en génie logiciel de l'École Polytechnique, ou enfin entre deux patnès de la 67 qui apprécie
                    leur amitié traverser une nouvelle épreuve.
                </P>
                
                <a name="about"/>
        <div className={s.clearfix}></div>
            <section className={s.leftcolumn}>
                <Heading as="h2" className={s.h2}>À Propos</Heading>
                <Paragraph text-indent={6} className={s.p}> 
                La plage est un lieu qui reconnecte, ,réalise, disparaît, oublie.
                </Paragraph>
            </section>
            <section className={s.sidebar}>
                <Image className={s.img} src={pic6}></Image>
            </section>
            <div className={s.clearfix}></div>
                <a name="port"></a>
                    <h2 className={s.h2}>Mon Portfolio</h2>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/azh4dcvjne6rgie/Image%201%20%2033%20%282%29.jpg?raw=1" target="_blank">
                        <Image className={s.onethirdportimage} src={pic1}></Image>
                        </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/f3a1m3858rqflgr/portra400-seville162.jpg?raw=1" target="_blank">
                        <Image className={s.onethirdportimage} src={pic2}></Image>
                        </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/jpgnefdkr0g0606/portra400-seville165.jpg?raw=1" target="_blank">
                        <Image className={s.onethirdportimage} src={pic3}></Image></a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/3j1wnsobwx8l9fj/portra400-seville166.jpg?raw=1" target="_blank">
                        <Image className={s.onethirdportimage} src={pic4}></Image> </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/4d3spsgfwa2m4t1/portra400-seville170.jpg?raw=1" target="_blank">
                        <Image className={s.onethirdportimage} src={pic5}></Image> </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/eufo4e7e3plmthb/portra400-seville172.jpg?raw=1" target="_blank">
                        <Image className={s.onethirdportimage} src={pic6}></Image>
                        </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/8tv8mvmefbsn6bu/portra400-seville173.jpg?raw=1" target="_blank">
                        <Image className={s.onethirdportimage} src={pic7}></Image>
                        </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/upnwwxyqwgwo9he/velvia50175.jpg?raw=1" target="_blank">
                        <Image className={s.onethirdportimage} src={pic8}></Image>
                        </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/t1loo45qadyi111/velvia50176.jpg?raw=1" target="_blank">
                        <Image className={s.onethirdportimage} src={pic9}></Image></a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/1r4vcc3liogedqw/velvia50179.jpg?raw=1" target="_blank">
                        <Image className={s.onethirdportimage} src={pic10}></Image> </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/vdn3bfd0gdidnmq/velvia50180.jpg?raw=1" target="_blank">
                        <Image className={s.onethirdportimage} src={pic11}></Image> </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/db2vmg9fxj841tn/velvia50181.jpg?raw=1" target="_blank">
                        <Image className={s.onethirdportimage} src={pic12}></Image>
                        </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/s0oj518yrno30bt/velvia50183.jpg?raw=1" target="_blank">
                        <Image className={s.onethirdportimage} src={pic13}></Image>
                        </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/dsybpjmj3g091ri/velvia50184.jpg?raw=1" target="_blank">
                        <Image className={s.onethirdportimage} src={pic14}></Image>
                        </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/m45sxg74i9ft2h2/velvia50186.jpg?raw=1" target="_blank">
                        <Image className={s.onethirdportimage} src={pic15}></Image></a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/r25i2fsb3bzhofu/velvia50187.jpg?raw=1" target="_blank">
                        <Image className={s.onethirdportimage} src={pic16}></Image> </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/49l030209adti8t/velvia50188.jpg?raw=1" target="_blank">
                        <Image className={s.onethirdportimage} src={pic17}></Image> </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/mhbix4ifopf371a/velvia50191.jpg?raw=1" target="_blank">
                        <Image className={s.onethirdportimage} src={pic18}></Image>
                        </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/mgbdr354s0pw8qx/velvia50194.jpg?raw=1" target="_blank">
                        <Image className={s.onethirdportimage} src={pic19}></Image> </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/6xzbmj5op0bwhvy/velvia50195.jpg?raw=1" target="_blank">
                        <Image className={s.onethirdportimage} src={pic20}></Image> </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/gqnz15oyuew7f25/velvia50197.jpg?raw=1" target="_blank">
                        <Image className={s.onethirdportimage} src={pic21}></Image>
                        </a>
    
                    </section>
                    <div className={s.clearfix}></div>
                        <a name="serv">
                    
                        </a>
                        <section>
                            <h2 className={s.h2}>Nota Bene</h2>
                            <Paragraph>Arrivederci
                            </Paragraph>
                        </section>
            </Container>
        </Layout>
    )
}

export default Article