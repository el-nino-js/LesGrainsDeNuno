/* eslint-disable react/no-unescaped-entities */
import { Container, Badge, Heading, Link, useColorModeValue} from '@chakra-ui/react'
import { Title } from '../../components/article'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/paragraph'
import NextLink from 'next/link'

import s from '../components/style.module.css'
import pic0 from '../../public/images/2023/sucre/1.jpg'
import pic1 from '../../public/images/2023/sucre/2.jpg'
import pic2 from '../../public/images/2023/sucre/3.jpg'
import pic3 from '../../public/images/2023/sucre/4.jpg'
import pic4 from '../../public/images/2023/sucre/5.jpg'
import pic5 from '../../public/images/2023/sucre/6.jpg'
import pic6 from '../../public/images/2023/sucre/7.jpg'
import pic7 from '../../public/images/2023/sucre/8.jpg'
import pic8 from '../../public/images/2023/sucre/9.jpg'
import pic9 from '../../public/images/2023/sucre/10.jpg'
import pic10 from '../../public/images/2023/sucre/11.jpg'
import pic11 from '../../public/images/2023/sucre/12.jpg'


import Image from 'next/image'

const Article = () => {
    return (
        <Layout Title="Adox Mission Color 400">
            <Container>
            <Title>
              Luminaire 100 - Qualité Sucré <Badge>2023</Badge>
            </Title>
                <P>
                Une expérience tangible, du grain, des couleurs uniques, un monopole détenu par Kodak, des discontinuités... cela n'aura pas pris longtemps
                à la Luminaire 100, un des seuls films encore abordables, pour voir ses stocks disparaître en ce printemps. Alors que l'argentique attire de plus en plus de néophytes, cette saison aura marqué
                son lot de déception avec le prix des rouleaux ayant augmenté de 3.49% selon Analog Café.  <br></br><br></br>

                N'étant pas un fan de pellicules expirées finissant en soupe, j'ai préféré utiliser mes Luminaire à leur meilleur jour, au plus sacrant. Certe, conserver
                des films au frigot les feraient tenir plus longtemps. Toutefois, les couleurs champagnes du temps des sucres vibre devant les troncs qui coulent.
                 Il me plait davantage de tenir une tire d'érable côte à côte au tempo de mon index sur la gâchette plutôt que d'avoir le regard inquiet devant ce qui s'installe chez Kodak. On fait avec ce que l'on a, tant qu'on s'y met.<br></br><br></br>
                </P>
                <br/> <br/>
                <a name="about"/>
        <div className={s.clearfix}></div>
            <section className={s.leftcolumn}>
                <Heading as="h2" className={s.h2}>À propos</Heading>
                <Paragraph text-indent={6} className={s.p}> 
                Je suis tacheté noir et blanc et je n'ai pas froid au yeux pour m'approprier leurs territoires. Je n'hésite pas à tasser ces autres félins de mon chemin. Carmen, voici comment on me surnomme. 
                </Paragraph>
            </section>
            <section className={s.sidebar}>
                <Image className={s.img} src={pic5}></Image>
            </section>
            <br/>
           
            <div className={s.clearfix}></div>
                <a name="port"></a>
                    <h2 className={s.h2}>Didgeridoo</h2>
                    
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/s8wwlpbn0shm907/1.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic0}></Image> </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/yfamsdwyw7h63fn/2.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic1}></Image> </a>
                    </section>
                    
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/589ehnhr7i1e0qf/3.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic2}></Image> </a>
                    </section>
                    
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/7cd6akf1bi5lg8t/4.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic3}></Image> </a>
                    </section>

                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/q0uq0bcxj90q70l/5.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic4}></Image> </a>
                    </section>

                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/4bzatjf939ct9m6/6.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic5}></Image> </a>
                    </section>
                    
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/pkt2o00f2gg1xu2/7.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic6}></Image> </a>
                    </section>

                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/j52uz4ikn2ijz32/8.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic7}></Image> </a>
                    </section>

                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/rh8yntmy8kw6vdb/9.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic8}></Image> </a>
                    </section>

                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/kjmm077i1mf4pr4/10.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic9}></Image> </a>
                    </section>

                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/jcjx7g7p6oemibg/11.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic10}></Image> </a>
                    </section>

                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/51imx4hlhppln9n/12.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic11}></Image> </a>
                    </section>



                    <div className={s.clearfix}></div>
                        <a name="serv">
                    
                        </a>
                        <section>
                            <h2 className={s.h2}>Nota Bene</h2>
                            <p>
                            Un tronc qui veut des caresses, un tronc qui veut se faire jouer
                            </p>
                        </section>
            </Container>
        </Layout>
    )
}

export default Article