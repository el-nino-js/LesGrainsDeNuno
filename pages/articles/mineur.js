/* eslint-disable react/no-unescaped-entities */
import { Container, Badge, Heading, Link, useColorModeValue} from '@chakra-ui/react'
import { Title } from '../../components/article'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/paragraph'
import NextLink from 'next/link'

import s from '../components/style.module.css'
import pic0 from '../../public/images/2022/minas/1.jpg'
import pic1 from '../../public/images/2022/minas/2.jpg'
import pic2 from '../../public/images/2022/minas/3.jpg'
import pic3 from '../../public/images/2022/minas/4.jpg'
import pic4 from '../../public/images/2022/minas/5.jpg'
import pic5 from '../../public/images/2022/minas/6.jpg'
import pic6 from '../../public/images/2022/minas/7.jpg'
import pic7 from '../../public/images/2022/minas/8.jpg'
import pic8 from '../../public/images/2022/minas/9.jpg'


import Image from 'next/image'

const Article = () => {
    return (
        <Layout Title="Adox Mission Color 400">
            <Container>
            <Title>
              Adox Mission Color - Démineur du Wolfram <Badge>2022</Badge>
            </Title>
                <P>
                Les couleurs frappantes et le fort contraste de ce film allemand peuvent donner un rendu intéressant. Leur saudade leur donne un
                petit air de « photos d'été que mes parents aurait pris jadis ». Ironique vu qu'elles proviennent du village où a grandi ma mère. Minas
                 da panasquera est une vile qui était réputée pour produire du Wolfram. Les conditions étaient souvent insalubres et brutales. L'urbanisation
                 a été fait pour favoriser les ouvriers à se rendre aux mines. Une vision assez classiste puisque les gens avec métiers plus « éduqués », tel les
                 professeurs où les ingénieurs vivaient dans des quartiers plus loin des mines. Néanmoins, son architecture opressante, possède
                un côté vivant et nostalgique qui me rend contemplatif de sa beauté. <br></br><br></br>
                
                 Sa chaleur presque rouge capture les ondes sulfurées de l'été. Ce film semble de plus aimer les journées ensoleillés
                  et la lumière directe. Assez grainy, sa netteté demeure surprenamment bonne. Tel la Ektar 100 toutefois, ce film peut donner des tons rouge tomate à la peau. À vrai dire, je dois admettre avoir des sentiments
                mitigés avec ce film. Ses verts à palette de menthe se campent mal avec la balance des blancs et les bleus sortent assez fades. <br></br><br></br>

                Cependant, sous un côté plus éthique, je suis satisfait d'avoir pu acheter ce film et supporter un petit producteur de film autre que
                Kodak. Idéalement, cela entrainera de nouvelles productions à l'avenir.
                </P>
                <br/> <br/>
                <a name="about"/>
        <div className={s.clearfix}></div>
            <section className={s.leftcolumn}>
                <Heading as="h2" className={s.h2}>À propos</Heading>
                <Paragraph text-indent={6} className={s.p}> 
                É um espaço arquitectónico brutal, imenso, que oprime. Mas de uma beleza estonteante.
                 É um espaço carregado de memória e, abandonado como está, é de facto muito cinematográfico
                </Paragraph>
            </section>
            <section className={s.sidebar}>
                <Image className={s.img} src={pic7}></Image>
            </section>
            <br/>
           
            <div className={s.clearfix}></div>
                <a name="port"></a>
                    <h2 className={s.h2}>Minus Déminos</h2>
                    
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/sn26qlhczicwd2g/1.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic0}></Image> </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/kke9rscigx1rlx3/2.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic1}></Image> </a>
                    </section>
                    
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/x0h8j4wscv4zfkp/3.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic2}></Image> </a>
                    </section>
                    
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/o8sef2cv8rf58re/4.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic3}></Image> </a>
                    </section>

                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/ifljjsubac73gxz/5.jpg?raw=0" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic4}></Image> </a>
                    </section>

                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/5twbsooptfj7j0m/6.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic5}></Image> </a>
                    </section>
                    
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/pzcvxon4tlpdq6a/7.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic6}></Image> </a>
                    </section>

                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/usinsz8jjcmku4s/8.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic7}></Image> </a>
                    </section>

                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/a8dh0bl8zflej1w/9.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic8}></Image> </a>
                    </section>



                    <div className={s.clearfix}></div>
                        <a name="serv">
                    
                        </a>
                        <section>
                            <h2 className={s.h2}>Nota Bene</h2>
                            <p>
                            Vous écoutez présentemement a musica popular de Verdum.
                            </p>
                        </section>
            </Container>
        </Layout>
    )
}

export default Article