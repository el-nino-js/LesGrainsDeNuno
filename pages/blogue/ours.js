/* eslint-disable react/no-unescaped-entities */
import { Container, Badge, Heading, Link, Button} from '@chakra-ui/react'
import { Title } from '../../components/article'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/paragraph'
import NextLink from 'next/link'

import s from '../components/style.module.css'
import pic0 from '../../public/images/2026/kodacolor200/1.jpg'
import pic1 from '../../public/images/2026/kodacolor200/2.jpg'
import pic2 from '../../public/images/2026//kodacolor200/3.jpg'
import pic3 from '../../public/images/2026//kodacolor200/4.jpg'
import pic4 from '../../public/images/2026//kodacolor200/5.jpg'
import pic5 from '../../public/images/2026//kodacolor200/6.jpg'

import pic10 from '../../public/images/2026/kodacolor100/1.jpg'
import pic11 from '../../public/images/2026/kodacolor100/2.jpg'
import pic12 from '../../public/images/2026//kodacolor100/3.jpg'
import pic13 from '../../public/images/2026//kodacolor100/4.jpg'
import pic14 from '../../public/images/2026//kodacolor100/5.jpg'


//eta 30 min
//ajouter liens dropbox pour les pics
//thumbnail

import Image from 'next/image'

const Article = () => {
    return (
        <Layout Title="Kodacolor 200 - On São Roque !">
            <Container>
            <Title>
            On São Roque ! <Badge>2026</Badge>
            </Title>
            Sortie avec sa soeur jumelle la Kodakcolor 100, cette petite 200 rayonne le début d'un chapitre de Kodak. On aura eu droit à un bref moment de nouvelle couleur. Puis, Kodak lança son rebranding avec de nouveaux logos. Son prix et ses couleurs, certes agréables, on retrouve peu de 
            nouveauté de ce que nous a sorti Kodak. Les images restent cohérentes à ce qui existe déjà. Si les aspirations n'auront que fait peu rêver, on peut voir de Kodak qu'il préserve sa cohérence des primaires.
            Il s'agit de Kodak sans s'écliser.
             <a name="about"/>
        <div className={s.clearfix}></div>
            <section className={s.leftcolumn}>
                <Heading as="h2" className={s.h2}>À propos</Heading>
                <Paragraph text-indent={6} className={s.p}> 
                Notre vie commence en perdant ou en gagnant quelque chose.
                </Paragraph>
            </section>
            <section className={s.sidebar}>
                <Image className={s.img} src={pic5}></Image>
            </section>
            <br/>
           
 <div className={s.clearfix}></div>
                <a name="port"></a>
                    <h2 className={s.h2}>Abacaxi</h2>
                    <Paragraph><b>Acte I - Kodacolor 200 - São Roque</b></Paragraph>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/q940gbt6i8dgb65cignef/1.jpg?rlkey=2nbbze7gqxrxz92yhmymohu2i&st=jqguiesu&?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic0}></Image> </a>
                    </section>

                     <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/wasej0rax3d1djxbm6ub4/2.jpg?rlkey=76rfkt5lpft6t9e1gzn69ewx1&st=sf1qvdq1&?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic1}></Image> </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/bch6tl8hzv95vqb54zm6v/3.jpg?rlkey=8i5b7teimfpfa8okgm1k9jqc1&st=zxpknkc6&?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic2}></Image> </a>
                    </section>
                     <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/https://www.dropbox.com/scl/fi/skvv6anjm7hanghiztypk/4.jpg?rlkey=e5ahkohw14r156n0l3qpzg57g&st=y6ccffqi&raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic3}></Image> </a>
                    </section>
                     <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/wav6fqx2pnsklme5imena/5.jpg?rlkey=1ajhczly0qhbanuvqtoqv78ba&st=t9xyclkb&raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic4}></Image> </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fo/uiuhmjx7senxkvbxao0d6/ABMLbpnMIx8lWUAEReLQaBQ?rlkey=qji04m4bjai0oq931uijeuqid&st=ltik6i8w&raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic5}></Image> </a>
                    </section>

                   <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>

                <Paragraph><b>Acte II - Kodacolor 100 - L'hibernation</b></Paragraph>
                <P>
                   <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/7nzbw5zlinjj0po5mb081/1-5.jpg?rlkey=8709qfdmgdmyzw4avwslfam48&st=i4shaubw&raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic14}></Image> </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/ceetg8ktewy7rfwgyzlw4/1-2.jpg?rlkey=ilp8us3oxphr89w4j6c5uivtv&st=iu4uul8d&aw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic11}></Image> </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/0s1up0s53x14p2ygkjwvt/1-4.jpg?rlkey=5yv5zqtcsv4mpfvj821lwrsh0&st=ak8fk43j&raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic13}></Image> </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/dvg1s5uie1hpm71fw0yqm/1-1.jpg?rlkey=3uoq065m8uj3lzyzcz7z4ch83&st=3d2vwpcz&raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic10}></Image> </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/scl/fi/4n5spkuueodsrse8olbl1/1-3.jpg?rlkey=zwvdy3hpwmb5j37687ojkc2f1&st=n98rm72z&raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic12}></Image> </a>
                    </section>
<br></br><br></br><br></br><br></br>
<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>

                     Devant la beauté que l'automne passagé apporte à Charlevoix, son air frais m'aura amener sa brise de réconfort. Le record de vitesse en skateboard a été conquis cette été sur la route longeant le traversier de l'île-aux-coudres. 
                    Ce même été, un record de chaleur à été gagné, cette fois par la Terre.                    
                    <br></br><br></br>
                    Du côté de la France, les couleurs <span style={{ color: "red", fontWeight: "bold" }}>rouuuuges</span> ont pris un autre tournant. La colère s'est enflammée et ce ne sont plus les pauvres qui sortent en France pour manifester.
                    Même devant ce cris d'espoir, la chutte de leur pouvoir d'achat est aussi prévisible par l'économiste Philippe Aghion que par un québécois moyen qui voit son ramassage de feuilles pour arriver.
                    Devant le mouvement du <NextLink href="https://ici.radio-canada.ca/nouvelle/2293425/france-manifestation-colere-jeunes">
                            <b>17 Octobre 2026</b>
                        </NextLink>, je ne peux qu'espèrer une France responsable devant une hausse quasi ininterrompue de la dette qui est passée d'environ 20 % du PIB au milieu des années 1960 à 120 % aujourd'hui.
                    <br></br><br></br>
                    Devant les deux propositions des deux pôles, sans vouloir défendre un laisse-faire centriste, je vois mal le problème se résoudre ces prochaines années.
                    Sous-exposer un problème en « brûlant une partie de la dette » et faire un bras d'honneur aux créanciers, tout en augmentant encore les dépenses publiques, n'a rien de responsable. Surexposer l'aide sociale à un déficit en supprimant son budget, c'est rentrer le couteau dans la plaie chez une population victime des maux de son État.
                    <br></br><br></br>
                    Du côté du Brésil, un autre combat fait est à son apogé. Deux adversaires clashent entre eux, alors qu'un 3e <NextLink href="https://www.letemps.ch/monde/au-bresil-meta-doit-prouver-en-24-heures-la-neutralite-de-ses-reseaux-envers-lula-et-bolsonaro">
                            <b>hyperlien</b>
                        </NextLink> rentre sur le ring, nommé Meta,
                     qui censure avec favoritisme les commentaires pro-Lula. Je veux espérer cee pays aller pour le mieux à travers ses manifestants gostosos,
                      ce qui me plairait encore plus, ce serait que d'en voir d'aussi bien bâtis, mais aussi violents qu'en France, détruire la Silicon Valley, 
                      devant les plus grands techno-fascistes influençant les mouvements sociaux pour favoriser leurs intérêts.
                    <br></br><br></br>
                    365 000 milliards de dettes, un poids relatif presque équivalent à la <NextLink href="https://www.ledevoir.com/economie/1017797/monde-est-rattrape-dettes?">
                            <b>2e Guerre Mondiale</b>
                        </NextLink>, alors qu'on subit des hausses massives des dépenses militaires,
                     les effets du vieillissement de la population et des bouleversements climatiques. S'ensuit cette magnifique ruée vers l'IA
                      qui fait rêver d'investissements et qui est rendue un <NextLink href="isaiprofitable.com">
                            <b>too good to fail</b>
                        </NextLink>.
                      <br></br><br></br>
                       La planète remerciera les PDG de l'IA qui sonnent
                       l'alarme au moment parfait pour eux de poser des réglementations Regulatory Capture choisies pour les favoriser plutôt que des modèles d'outre-mer ou indépendants.
                        Ces dirigeants seraient sûrement fans de Louis-Jean Cormier : « Mais où sont les règles du jeu qu'on y mette le feu ».
                    <br></br><br></br>
                    Devant ce blogue axé sur la photographie surtout, j'en ai perdu ma balance interne et fait sortir mes températures plus chaudes.
                     Je veux tout de même apporter un espoir avec ce conte.<br></br><br></br>
                     <i>C'est l'histoire de Grand Ours, qui vécut une année difficile. Les arbres ont brûlés et les rivières se sont asséchées.
                         Désormais, c'est l'hiver et son anxiété l'empêche d'hiberner en paix. 
                         <br></br><br></br>
                         Son ami Petit Ours arriva lorsque Grand Ours était en proie d'idées sombres dans son esprit. Il ouvrit grand ses petits bras et lui dit : « Je ne sais comment on va résoudre ça, Grand Ours, mais nous n'avons pas besoin de traverser toutes ces tempêtes la même journée. Nous prendrons le temps qu'il faudra, ensemble. Nous nous réchaufferons et reprendrons des forces, mais nous avancerons vers notre Praxis en Ours libres et non comme ces fous du bus de Rhinocéros.»
                         <br></br><br></br>
                          Alors Petit Ours se blottit contre son grand ventre tout chaud. Grand Ours l'enveloppa de ses pattes, comme un voile touffu. 
                          Dehors, l'hiver pouvait bien geler tout sur son passage. Pour l'instant, il y avait leur chaleur, leur présence et leur certitude de se blottir ensemble.
                           Les deux ours s'endormirent serrés l'un contre l'autre, laissant le monde essayer de se rebâtir avant la venue du printemps... 
                    
                           <br></br><br></br></i>
                           Bon, ces personnages provenaient d'un insight avec mes bons chums durant notre chalet à Charlevoix. En vrai, je n'ai pas de solution. Tout ce que je peux offrir, ce sont les paroles d'un gars ordinaire qui vous dit de passer du temps avec les gens que vous aimez et de vous entourer du monde qui vous font sentir bien, qui acceptent les différentes facettes loufoques de qui vous êtes, et sans retenue. 
                           <br></br><br></br>
                           C'était l'histoire de l'hibernation de Petit Ours et de Grand Ours <br></br>🐻🤎🐻
                </P>
                <br></br>
                



                    <div className={s.clearfix}></div>
                        <a name="serv">
                    
                        </a>
                        <section>
                            <h2 className={s.h2}>Nota Bene</h2>
                            <p>
                            Even if you get lost in the dark. You'll surely reach it someday! So snap !
                            </p>
                        </section>
            </Container>
        </Layout>
    )
}

export default Article