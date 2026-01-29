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

import pic22 from '../../public/images/2024/Velvia50dc/1.jpg'
import pic23 from '../../public/images/2024/Velvia50dc/2.jpg'
import pic24 from '../../public/images/2024/Velvia50dc/3.jpg'
import pic25 from '../../public/images/2024/Velvia50dc/4.jpg'
import pic26 from '../../public/images/2024/Velvia50dc/5.jpg'
import pic27 from '../../public/images/2024/Velvia50dc/6.jpg'
import pic28 from '../../public/images/2024/Velvia50dc/7.jpg'
import pic29 from '../../public/images/2024/Velvia50dc/8.jpg'
import pic30 from '../../public/images/2024/Velvia50dc/9.jpg'
import pic31 from '../../public/images/2024/Velvia50dc/10.jpg'
import pic32 from '../../public/images/2024/Velvia50dc/11.jpg'
import pic33 from '../../public/images/2024/Velvia50dc/12.jpg'




import Image from 'next/image'

const Article = () => {
    return (
        <Layout Title="JacobLeCoq">
            <Container>
            <Title>
              Velvia 50 - Lagos - Washington Dc <Badge>2018</Badge>
            </Title>
                <P>Planifier d'un point A au point B, repassant par les rails du Comboio du Portugal. Peter Pan et Crochet sont gagas
                    de vivre un véritable monde imaginaire. Le long trajet sous le soleil chaud de l'Andalousie s'accompagne de vidéo en .mp4 d'un combat épique
                    entre Madara et les 5 Kages, ou bien de l'amant du Porto qui s'évade étoufé de colère, ou des deux étudiantes qui préparent la rentrée
                    des nouveaux arrivants en génie à l'École Polytechnique, ou enfin entre deux étrangés de la 67 qui ont apprécié voir
                    leur amitié traverser une ultime épreuve.
                </P><br></br><br></br>
                <P>Un avion passe devant le monument. Le centre du monde? Selon une quelconque perspective, il pourrait s'agir d'un mirage auquel la Maison Blanche fait davantage
                    office des rivages de l'au-delà. Le son des moteurs de la ligne grise m'emmène en Virginie. Je sais d'où je viens. Je connais ma maison. Devant ce hangar contenant de multiples vaisseaux, les étoiles je veux les toucher. Arrivé à destination, je sens que mon rêve prend de la distance. J'ai peur de perdre ma flamme. J'ai besoin d'un bol d'air frais. Je prend le métro vers Dupont, là où je peux me sentir un peu plus à la maison. Je suis ok.
                </P>
                
                <a name="about"/>
        <div className={s.clearfix}></div>
            <section className={s.leftcolumn}>
                <Heading as="h2" className={s.h2}>À Propos</Heading>
                <Paragraph text-indent={6} className={s.p}> 
                Reconnecter, ,Réaliser, Disparaître, Oublier... Recommencer?
                </Paragraph>
            </section>
            <section className={s.sidebar}>
                <Image className={s.img} src={pic6}></Image>
            </section>
            <div className={s.clearfix}></div>
                <a name="port"></a>
                    <h2 className={s.h2}>Diapo</h2>
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
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/riw4zk4beyv4mcpmbrcal/1.jpg?rlkey=r8m5u7p0dmsqzixth24ma9rw0&st=8w7xwvyx&raw=1" target="_blank">
                        <Image className={s.onethirdportimage} src={pic22}></Image>
                        </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/xx7tuv3t5bhsrsiodth9i/2.jpg?rlkey=ov1txdy06lxymlebh8gtlb3zm&st=oncau34a&raw=1" target="_blank">
                        <Image className={s.onethirdportimage} src={pic23}></Image>
                        </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/w0t853178a2l313kveya0/3.jpg?rlkey=b0uv50zjp2t8rq6ohehzi8kq2&st=855cqhzj&raw=1" target="_blank">
                        <Image className={s.onethirdportimage} src={pic24}></Image>
                        </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/rg3qy56ufc0eq22hwf7s7/4.jpg?rlkey=zqb9mwheqkzprgb70ii7h46w9&st=wmxxt6rm&raw=1" target="_blank">
                        <Image className={s.onethirdportimage} src={pic25}></Image>
                        </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/0swgo2glgvx2wi1rpa9me/5.jpg?rlkey=rqrpihrjb5jfovzgnht1qh51g&st=qvtdnlb6&raw=1" target="_blank">
                        <Image className={s.onethirdportimage} src={pic26}></Image>
                        </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/azd6772594f9wly60gncb/6.jpg?rlkey=eccpeuuhs4y2dl0lkmsmb285v&st=hsf9byvf&raw=1" target="_blank">
                        <Image className={s.onethirdportimage} src={pic27}></Image>
                        </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/v1xctnvf89w5sl8bue81v/7.jpg?rlkey=fhrhvkgg44c0ga7ip5jeaobdx&st=2hd2avk6&raw=1" target="_blank">
                        <Image className={s.onethirdportimage} src={pic28}></Image>
                        </a>
                    </section>

                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/ommwngmfi471l43smq107/8.jpg?rlkey=g93pu99o86fpemojto3luftrc&st=kjas04dh&raw=1" target="_blank">
                        <Image className={s.onethirdportimage} src={pic29}></Image>
                        </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/gj4efc3l4armm7lhpyh8k/9.jpg?rlkey=f3u5mesau214161hzjqe414j3&st=ahpeancd&raw=1" target="_blank">
                        <Image className={s.onethirdportimage} src={pic30}></Image>
                        </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/hf8w8tow5kav4c561fbkt/10.jpg?rlkey=6g6jdakkqs4u39v6bip90pzwk&st=juq7umm8&raw=1" target="_blank">
                        <Image className={s.onethirdportimage} src={pic31}></Image>
                        </a>
                    </section>

                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/2bv7yczkfng6oohg9s45y/11.jpg?rlkey=oc5szlm25o70ae4ubaes35o35&st=60hhaf5p&raw=1" target="_blank">
                        <Image className={s.onethirdportimage} src={pic32}></Image>
                        </a>
                    </section>

                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/d9c1u2e67ji70rqeiw7oz/12.jpg?rlkey=wiucoukl9mzqnxr7yru3e3ple&st=iiylj755&raw=1" target="_blank">
                        <Image className={s.onethirdportimage} src={pic33}></Image>
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