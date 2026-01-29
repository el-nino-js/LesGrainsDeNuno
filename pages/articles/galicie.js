/* eslint-disable react/no-unescaped-entities */
import { Container, Badge, Heading} from '@chakra-ui/react'

import { Title } from '../../components/article'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/paragraph'

import s from '../components/style.module.css'
import pic1 from '../../public/images/2022/velvia100/thumbnail-1.jpg'
import pic2 from '../../public/images/2022/velvia100/thumbnail-2.jpg'
import pic3 from '../../public/images/2022/velvia100/thumbnail-3.jpg'
import pic4 from '../../public/images/2022/velvia100/thumbnail-4.jpg'
import pic5 from '../../public/images/2022/velvia100/thumbnail-5.jpg'
import pic6 from '../../public/images/2022/velvia100/thumbnail-6.jpg'
import pic7 from '../../public/images/2022/velvia100/thumbnail-7.jpg'
import pic8 from '../../public/images/2022/velvia100/thumbnail-8.jpg'
import pic9 from '../../public/images/2022/velvia100/thumbnail-9.jpg'
import pic10 from '../../public/images/2022/velvia100/thumbnail-10.jpg'
import pic11 from '../../public/images/2022/velvia100/thumbnail-11.jpg'
import pic12 from '../../public/images/2022/velvia100/thumbnail-12.jpg'
import pic13 from '../../public/images/2022/velvia100/thumbnail-13.jpg'
import pic14 from '../../public/images/2022/velvia100/thumbnail-14.jpg'
import pic15 from '../../public/images/2022/velvia100/thumbnail-15.jpg'
import pic16 from '../../public/images/2022/velvia100/thumbnail-16.jpg'
import pic17 from '../../public/images/2022/velvia100/thumbnail-17.jpg'
import pic18 from '../../public/images/2022/velvia100/thumbnail-18.jpg'
import pic19 from '../../public/images/2022/velvia100/thumbnail-19.jpg'
import pic20 from '../../public/images/2022/velvia100/thumbnail-20.jpg'
import pic21 from '../../public/images/2022/velvia100/thumbnail-21.jpg'


import Image from 'next/image'

const Article = () => {
    return (
        <Layout Title="Velvia100">
            <Container>
            <Title>
              Velvia 100 - Péninsule Ibérique <Badge>2022</Badge>
            </Title>
                <P>
                On s'est lancé dans une partie de «Attrape-moi si tu peux». Sous la chaleur du sable chaud de Péniche, jusqu'aux pluies intermittentes
                de la Galicie. À l'entrée de la ville de Vigo, un géant panneau publicitaire du magasin «ToySexShop Vigo».
                La fête sainte de l'Assomption n'aura offerte comme courbe que des devantures vérouillées. 
                </P>
                
                <a name="about"/>
        <div className={s.clearfix}></div>
            <section className={s.leftcolumn}>
                <Heading as="h2" className={s.h2}>À Propos</Heading>
                <Paragraph text-indent={6} className={s.p}> 
                Mobile, je reconnais le plaisir que je chasse.
                </Paragraph>
            </section>
            <section className={s.sidebar}>
                <Image className={s.img} src={pic14}></Image>
            </section>
            <div className={s.clearfix}></div>
                <a name="port"></a>
                    <h2 className={s.h2}>Trivago</h2>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/avebfat4skkn8x3/1.jpg??raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic1}></Image>
                        </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/2wr4nhkjyt9zt0q/2.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic2}></Image>
                        </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/5p6rblqc8ky66ox/3.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic3}></Image></a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/ohuerk22sflrge1/4.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic4}></Image> </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/ww9b5zwv3ve4wpi/5.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic5}></Image> </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/0qamamxijk0nu65/6.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic6}></Image>
                        </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/fzgfibiri7ila8q/7.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic7}></Image>
                        </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/1ljx1dtxattsvt6/8.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic8}></Image>
                        </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/qi6yi0hi5yofs07/9.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic9}></Image></a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/b6hezrg4dyucei4/10.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic10}></Image> </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/nstqvmb5k2h7waz/11.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic11}></Image> </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/5cmnuuns7re2qrk/12.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic12}></Image>
                        </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/5260hyimbspzj0x/13.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic13}></Image>
                        </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/tz0fbwpyp90chq6/14.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic14}></Image>
                        </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/gj6vpp5bksnvdml/15.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic15}></Image></a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/nfonjmg2nmfxwk8/16.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic16}></Image> </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/z34mtbvjks5xei0/17.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic17}></Image> </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/k8osd7aytl44c9k/18.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic18}></Image>
                        </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/r61pr0y6fswj0yx/19.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic19}></Image> </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/bwcuznoas7qejxn/20.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic20}></Image> </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/bmjf76etdfluug3/21.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic21}></Image>
                        </a>
    
                    </section>
                    <div className={s.clearfix}></div>
                        <a name="serv">
                    
                        </a>
                        <section>
                            <h2 className={s.h2}>Nota Bene</h2>
                            <Paragraph>
                            Entrain d'écouter 🎵 Westfall - Okkervil Rivwer 🎵 
                            </Paragraph>
                        </section>
                      
                    <div className={s.clearfix}></div>
                        <a name="contact"></a>
                        <section className={s.parallax}>
                            <div className={s.parallaxinner}>
                            </div>
                        </section>
                    <div className={s.clearfix}></div>
                      
                    <div className={s.clearfix}></div>
            
            </Container>
        </Layout>
    )
}

export default Article