/* eslint-disable react/no-unescaped-entities */
import { Container, Badge, Heading, Link, useColorModeValue} from '@chakra-ui/react'
import { Title } from '../../components/article'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/paragraph'
import NextLink from 'next/link'

import s from '../components/style.module.css'
import pic0 from '../../public/images/2026/fujifilm400/01.jpg'
import pic1 from '../../public/images/2026/fujifilm400/02.jpg'
import pic2 from '../../public/images/2026/fujifilm400/03.jpg'
import pic3 from '../../public/images/2026/fujifilm400/04.jpg'
import pic4 from '../../public/images/2026/fujifilm400/05.jpg'
import pic5 from '../../public/images/2026/fujifilm400/06.jpg'
import pic6 from '../../public/images/2026/fujifilm400/07.jpg'
import pic7 from '../../public/images/2026/fujifilm400/08.jpg'
import pic8 from '../../public/images/2026/fujifilm400/09.jpg'
import pic9 from '../../public/images/2026/fujifilm400/10.jpg'
import pic10 from '../../public/images/2026/fujifilm400/11.jpg'
import pic11 from '../../public/images/2026/fujifilm400/12.jpg'


//eta 30 min
//ajouter liens dropbox pour les pics
//thumbnail

import Image from 'next/image'

const Article = () => {
    return (
        <Layout Title="FujiFilm 400 - Que jeunesse pousse">
            <Container>
            <Title>
            Que jeunesse pousse ! <Badge>2026</Badge>
            </Title>
            Depuis mes premières expériences avec Fujifilm, j'ai associé ces pellicules à un mélange particulier de nuances verdâtres, à une esthétique japonaise discrète et à un grain fin.
            Malheureusement, ces caractéristiques emblématiques semblaient étonnamment absentes des deux nouvelles pellicules que jai eu l'occasion d'essayer. 
            J'évoque également les rumeurs selon lesquelles Fujifilm commercialiserait des pellicules Kodak reconditionnées sous sa propre marque.
             Je trouve cette hypothèse peu probable, étant donné que le prix de vente conseillé ne semble pas correspondre à celui des références Kodak évoquées.
              Je vais toutefois laisser mon expérience personnelle guider mon évaluation.
               Pour être franc, je n'ai utilisé cette pellicule qu'aux Açores, alors que je commençais à manquer de rouleaux.
               Au final, j’ai scanné cette pellicule avec satisfaction. <br></br> <br></br>

La différence avec la génération précédente : la vieille Fujifilm présente des tonalités plus vertes, particulièrement dans les ombres, tandis que la nouvelle Fujifilm 400 offre une palette plus jaune et chaude.
 Elle semble davantage adaptée aux tons de peau, évoquant le rendu de la Portra 400 sur mes sujets floraux. La pellicule reproduit des couleurs riches, 
 particulièrement lorsque les photos sont prises à la lumière naturelle du soleil. Je comprends donc assezles appréhensions de nombreux photographes à l'égard de ces nouvelles pellicules Fujifilm,
  surtout lorsqu'on les compare à leurs anciennes versions. <br></br> <br></br>

Franchement, je trouve que les anciennes pellicules sont meilleures. Ça ne veut pas dire qu'il faille surfer sur le passée.  J'ajouterai à cet article quelques anciennes photos afin de vous proposer un comparatif.
 Cela ne devrait toutefois pas vous empêcher d'explorer ces nouvelle pousse. Parmis plusieurs plusieurs films 35mm, il peut être dur de faire un choix. Cela va autant pour trouver la couleur de ses convictions politiques. N'en déplaise à celles et ceux qui
              ont trouvés leur attachement vers une vague <span style={{ color: "red", fontWeight: "bold" }}>rouuuuge</span>, même si le passé nous rappellera des enveloppes brunes qui  <span style={{ color: "brown", fontWeight: "bold" }}>bouuuugent</span>.<br></br> <br></br>

Mes préférences vont vers une vague d'espoir. En cette période de révolte, avec une jeunesse plus que polarisée. Elle nous montre aussi loin de ses DMs, une cri du coeur devant l'hypocrisie des adultes. Ceux qui leur disait de
sacrifier leur jeunese dehors en s'enfermant pour leur grands-parents. Ces mêmes qui ont vôtées pour des politiciens anti-gouvernements et des lois favorisant des innovations techno-polluantes. C'est alors ces jeunes qu'on
traite de cringe pour leur bataille d'aura, leur manque de libido, leur consommation de fast-fashion et de matchas, alors que l'humilation devrait se rendre à l'ère de la normalisation des violences sexuelles.
On retire les conditions de ses écoles, mais on augmente le budget des centres de données. Comme quoi il plus facile de frapper l'immigré, le prolétaire ou cette relève qui n'a pas encore assez comprise la dûreté de la vie...  <br></br> <br></br>


              
            
             <a name="about"/>
        <div className={s.clearfix}></div>
            <section className={s.leftcolumn}>
                <Heading as="h2" className={s.h2}>À propos</Heading>
                <Paragraph text-indent={6} className={s.p}> 
                Obéissez, encore il faut se serrer la ceinture. Pour votre avenir? Oui, faites nous encore confiance.
                 On le fait pour vous. Maintenant ranges ton cell pendant que j'envois des mêmes AI Gen à mes contribuables éduqués et salariés. Ti-moune, regardes moi quand je te parle et non l'itinérant à
côté. Tu vois des junkies en double? Je suis l'adulte pana-ptit-con qui te surveille.

                </Paragraph>
            </section>
            <section className={s.sidebar}>
                <Image className={s.img} src={pic5}></Image>
            </section>
            <br/>
           
 <div className={s.clearfix}></div>
                <a name="port"></a>
                    <h2 className={s.h2}>Petite Mousse</h2>
                    
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/rluay53vpcki738kextz9/01.jpg?rlkey=sxtxge0dt0fk6947585taczru&st=lmdqyb31&raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic0}></Image> </a>
                    </section>

                     <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/4g4eumo8xdwk1mbf9iasp/02.jpg?rlkey=vent0yeal9gg5a9wfiabu0noe&st=u1qq26d9&raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic1}></Image> </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/enw8vj5ilda8rj2pxszja/03.jpg?rlkey=agpeaw7fn4h37w1a7z5puha1h&st=0dz6b8w2&raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic2}></Image> </a>
                    </section>
                     <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/jj2togrnzcv8740j45stu/04.jpg?rlkey=f9nn27r9fwvcotxu6ybx6yai5&st=5yalnvum&raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic3}></Image> </a>
                    </section>
                     <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/euwjwzx8950v22gvgiwvd/05.jpg?rlkey=pmmsk18j4g3wqqpop0i27ucbg&st=uzeh8fwq&raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic4}></Image> </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/k1a53r0eijqivu5gkbi1f/06.jpg?rlkey=v6otyd7fm13j0yjcmhocoplai&st=pj9ug2z4&raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic5}></Image> </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/7d3nndh5t9borsg1fbk5r/07.jpg?rlkey=gy509aa7ryvwk4z2f7eokr5fp&st=d0pxp8r0&raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic6}></Image> </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/kl6n6dj5bbips9so4ydv1/08.jpg?rlkey=bgge827z5fli1p28p55zfbxto&st=b242hldy&aw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic7}></Image> </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/zeflipr1tdyuv644p1k32/09.jpg?rlkey=4tu8xb78imh67wr7ygrimdf73&st=zam3lgpi&raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic8}></Image> </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/shf5jli5quku8bti7xnw6/10.jpg?rlkey=a1m4yqnmkzb18f91wqn263zac&st=a0hvkl31&raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic9}></Image> </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/lkhli6jjoalcl8w656ngw/11.jpg?rlkey=cmqsg4jw2ux04lusyvzhledg8&st=v9sk33uq&raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic10}></Image> </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/ixawpfl9s6zxhzs9ullde/12.jpg?rlkey=pu44l86ymzf0afmgpmzging3y&st=c4w9vqvd&raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic11}></Image> </a>
                    </section>

                   
                    
                    



                    <div className={s.clearfix}></div>
                        <a name="serv">
                    
                        </a>
                        <section>
                            <h2 className={s.h2}>Nota Bene</h2>
                            <p>
                            «Rencontrer des gens de toutes sortes, en apprendre davantage sur leurs valeurs et leurs perspectives, enrichir son esprit et son cœur en découvrant ce qui fait vibrer notre âme… Je pense que c’est ainsi que nous construisons qui nous sommes. <br></br> <br></br> Pourtant, n’arrive pas à voir cela en lui. Peut-être est-ce parce qu’il est en train de tout vivre avec lui-même.» -Go with the Clouds, North-by-Northwest
                            </p>
                        </section>
            </Container>
        </Layout>
    )
}

export default Article