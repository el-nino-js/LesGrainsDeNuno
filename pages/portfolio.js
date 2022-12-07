/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/no-unknown-property */
import { Container, Heading, SimpleGrid} from '@chakra-ui/react'
import Layout from '../components/layouts/article' 
import Paragraph from '../components/paragraph'
import s from './components/style.module.css'
import pic1 from '../public/images/img/photography-1.png'
import pic2 from '../public/images/img/photography-2.png'
import pic3 from '../public/images/img/photography-3.png'
import pic4 from '../public/images/img/photography-4.png'
import pic5 from '../public/images/img/photography-5.png'
import pic6 from '../public/images/img/photography-6.png'
import Image from 'next/image'

const Portfolio = () => (
    <Layout title="Portfolio">
        <Container >
            <a name="about"/>
        <div className={s.clearfix}></div>
            <section className={s.leftcolumn}>
                <h2 className={s.h2}>À Propos</h2>
                <Paragraph text-indent={6} className={s.p}>Dev Stop Fix Dev Stop Fix Dev Stop Fix Dev Stop Fix Dev Stop Fix Dev Stop Fix
                Dev Stop Fix Dev Stop Fix Dev Stop Fix Dev Stop Fix Dev Stop Fix Dev Stop Fix Dev Stop Fix Dev Stop Fix 
                Dev Stop Fix Dev Stop Fix Dev Stop Fix Dev Stop Fix Dev Stop Fix 
                </Paragraph>
            </section>
            <section className={s.sidebar}>
                <img className={s.img} src="https://static.pexels.com/photos/50567/girl-female-model-pretty-50567.jpeg"></img>
            </section>
            <div className={s.clearfix}></div>
                <a name="port"></a>
                    <h2 className={s.h2}>My Portfolio</h2>
                    <section className={s.onethirdport}>
                        <a href="https://static.pexels.com/photos/246368/pexels-photo-246368.jpeg" target="_blank">
                        <Image className={s.onethirdportimage} src={pic1}></Image>
                        </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://static.pexels.com/photos/246368/pexels-photo-246368.jpeg" target="_blank">
                        <Image className={s.onethirdportimage} src={pic2}></Image>
                        </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://static.pexels.com/photos/246368/pexels-photo-246368.jpeg" target="_blank">
                        <Image className={s.onethirdportimage} src={pic3}></Image></a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://static.pexels.com/photos/246368/pexels-photo-246368.jpeg" target="_blank">
                        <Image className={s.onethirdportimage} src={pic4}></Image> </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://static.pexels.com/photos/246368/pexels-photo-246368.jpeg" target="_blank">
                        <Image className={s.onethirdportimage} src={pic5}></Image> </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://static.pexels.com/photos/246368/pexels-photo-246368.jpeg" target="_blank">
                        <Image className={s.onethirdportimage} src={pic6}></Image>
                        </a>
    
                    </section>
                    <div className={s.clearfix}></div>
                        <a name="serv">
                    
                        </a>
                        <section>
                            <h2 className={s.h2}>Mes Services</h2>
                            <Paragraph>Dev Stop Fix Dev Stop Fix Dev Stop Fix Dev Stop Fix Dev Stop Fix Dev Stop Fix
                                 Dev Stop Fix Dev Stop Fix Dev Stop Fix Dev Stop Fix Dev Stop Fix Dev Stop Fix Dev Stop Fix Dev Stop Fix 
                                 Dev Stop Fix Dev Stop Fix Dev Stop Fix Dev Stop Fix Dev Stop Fix 
                            </Paragraph>
                        </section>
                      
                    <div className={s.clearfix}></div>
                        <a name="contact"></a>
                        <section className={s.parallax}>
                            <div className={s.parallaxinner}>
                            </div>
                        </section>
                    <div className={s.clearfix}></div>
                        <h2 className={s.h2}>Contacter-moi</h2>
                        <section className={s.contact}>
                            <p className={s.contactp}>Mon nom  <br className={s.break}></br> <a href="nuno.silva-pinto@outlook.com"></a><br className={s.break}></br> 1-800-888-888</p>
                            <p className={s.contactp}>123 Rue des Penis</p><br className={s.break}></br> <p className={s.contactp}> Montreal</p><br className={s.break}></br> <p className={s.contactp} >Quebec</p>
                        </section>
                    <div className={s.clearfix}></div>
        </Container>
    </Layout>
)
export default Portfolio