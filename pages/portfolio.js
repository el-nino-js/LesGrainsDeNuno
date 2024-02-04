/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/no-unknown-property */
import { Container, Heading, SimpleGrid} from '@chakra-ui/react'
import Layout from '../components/layouts/article' 
import Paragraph from '../components/paragraph'
import s from './components/style.module.css'
import pic0 from '../public/images/nunobnw.jpg'
import pic1 from '../public/images/2022/lumnyc/1.jpg'
import pic2 from '../public/images/2023/fp4/1.jpg'
import pic3 from '../public/images/2023/ouronolum/8.jpg'
import pic4 from '../public/images/Portofolio/thumbnail.jpg'
import pic5 from '../public/images/Portofolio/2.jpg'
import pic6 from '../public/images/Portofolio/4.jpg'
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
                <Image className={s.img} src={pic0}></Image>
            </section>
            <div className={s.clearfix}></div>
                <a name="port"></a>
                    <h2 className={s.h2}>Mon Portfolio</h2>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/mcbtz6b1fpksmoo/11.jpg?raw=1" target="_blank">
                        <Image className={s.onethirdportimage} src={pic1}></Image>
                        </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/bhfvddrttbul4om/FP4PARIS%207.jpg?raw=1" target="_blank">
                        <Image className={s.onethirdportimage} src={pic2}></Image>
                        </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/hbyocakqm16gzerv98xjg/8.jpg?rlkey=7hmgnfgglbbfn9qxf3cvxkefl&raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic3}></Image> </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/3h420kmd24d5vjx/thumbnail.jpg?raw=1" target="_blank">
                        <Image className={s.onethirdportimage} src={pic4}></Image> </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/o7rzz9cbqtexhsw2dz556/2.jpg?rlkey=khno4cc1mmz8czp5p387ea4aa&raw=1" target="_blank">
                        <Image className={s.onethirdportimage} src={pic5}></Image> </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/euuidb1hwnar3qbr0urpw/4.jpg?rlkey=05b8domg29jxlyf06uk3v2lc3&raw=1" target="_blank">
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
                            <p className={s.contactp}>123 Fake Street</p><br className={s.break}></br> <p className={s.contactp}> Montreal</p><br className={s.break}></br> <p className={s.contactp} >Quebec</p>
                        </section>
                    <div className={s.clearfix}></div>
        </Container>
    </Layout>
)
export default Portfolio