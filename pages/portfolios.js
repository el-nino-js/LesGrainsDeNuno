 /* eslint-disable @next/next/no-img-element */
 /* eslint-disable react/jsx-no-target-blank */
 /* eslint-disable react/no-unknown-property */
import { Container, Heading, SimpleGrid, Badge, Link, useColorModeValue} from '@chakra-ui/react'
import Layout from '../components/layouts/article' 
import Paragraph from '../components/paragraph'
import { Title } from '../components/article'


import NextLink from 'next/link'
import s from './components/style.module.css'
import pic0 from '../public/images/nunobnw.jpg'
import pic1 from '../public/images/2022/lumnyc/1.jpg'
import pic2 from '../public/images/2023/fp4/1.jpg'
import pic3 from '../public/images/2023/ouronolum/8.jpg'
import pic4 from '../public/images/Portofolio/1-1.JPG'
import pic5 from '../public/images/Portofolio/2.jpg'
import pic6 from '../public/images/Portofolio/4.jpg'
import pic7 from '../public/images/Portofolio/5.jpg'
import pic8 from '../public/images/Portofolio/6.jpg'
import pic9 from '../public/images/Portofolio/5-2.jpg'
import pic17 from '../public/images/2023/gold200/18.jpg'

//Couleur
import pic20 from '../public/images/Portofolio/20.JPG'
import pic21 from '../public/images/Portofolio/21.JPG'
import pic22 from '../public/images/Portofolio/22.JPG'
import pic23 from '../public/images/Portofolio/23.JPG'
import pic25 from '../public/images/Portofolio/25.JPG'
import pic27 from '../public/images/Portofolio/27.JPG'
import pic29 from '../public/images/Portofolio/29.PNG'
import pic31 from '../public/images/Portofolio/31.JPG'
import pic33 from '../public/images/Portofolio/33.JPG'
import pic35 from '../public/images/Portofolio/35.JPG'
import pic37 from '../public/images/Portofolio/37.JPG'
import pic39 from '../public/images/Portofolio/39.JPG'

//Bnw
import pic10 from '../public/images/Portofolio/10.JPG'
import pic11 from '../public/images/Portofolio/11.JPG'
import pic12 from '../public/images/Portofolio/12.JPG'
import pic13 from '../public/images/Portofolio/13.JPG'
import pic14 from '../public/images/Portofolio/14.JPG'
import pic24 from '../public/images/Portofolio/24.JPG'
import pic26 from '../public/images/Portofolio/26.JPG'
import pic28 from '../public/images/Portofolio/28.JPG'
import pic30 from '../public/images/Portofolio/30.JPG'
import pic32 from '../public/images/Portofolio/32.JPG'
import pic34 from '../public/images/Portofolio/34.JPG'
import pic36 from '../public/images/Portofolio/36.JPG'
import pic38 from '../public/images/Portofolio/38.JPG'
import pic40 from '../public/images/Portofolio/40.JPG'
import pic41 from '../public/images/Portofolio/41.JPG'
import pic42 from '../public/images/Portofolio/42.JPG'
import pic43 from '../public/images/Portofolio/43.JPG'
import pic44 from '../public/images/Portofolio/44.JPG'
import pic45 from '../public/images/Portofolio/45.JPG'
import pic46 from '../public/images/Portofolio/46.JPG'

import Image from 'next/image'

const Portfolios = () => (
   <Layout title="Portfolios">
        <Container >
            <a name="about"/>
        <div className={s.clearfix}></div>
  
            <div className={s.clearfix}></div>
                <a name="port"></a>
                    <h2 className={s.h2}>Mon Portfolio</h2>
                    <br></br><Paragraph><b>Cliquez sur le mode sombre pour les photos en noir et blanc.</b></Paragraph> <br></br>
             
                    <section className={s.onethirdport}>
                        <a 
                        href={useColorModeValue("https://www.dropbox.com/s/mcbtz6b1fpksmoo/11.jpg?raw=1"
                        , "https://www.dropbox.com/s/bhfvddrttbul4om/FP4PARIS%207.jpg?raw=1")} target="_blank" rel="noreferrer">
                        <Image  className={s.onethirdportimage} src= {useColorModeValue(pic1, pic2)}></Image> </a> 
                        <p className={s.sub} >{useColorModeValue("Jaywalker", "Escale")}</p>
                    </section>
                    <section className={s.onethirdport}>
                        <a 
                        href={useColorModeValue("https://www.dropbox.com/scl/fi/hbyocakqm16gzerv98xjg/8.jpg?rlkey=7hmgnfgglbbfn9qxf3cvxkefl&raw=1"
                        , "https://www.dropbox.com/s/g54m97mzzuhuhxy/1.jpg?raw=1")} target="_blank" rel="noreferrer">
                        <Image  className={s.onethirdportimage} src= {useColorModeValue(pic3, pic7)}></Image> </a> 
                        <p className={s.sub} >{useColorModeValue("Ourondo", "Dorsal")}</p>
                    </section>
                     <section className={s.onethirdport}>
                        <a 
                        href={useColorModeValue("https://www.dropbox.com/scl/fi/2p2v6s3c36ppe3dofhmgw/11-1-7.JPG?rlkey=oyfu6bzz962jo520ycem60uu3&st=7gsdpqe3&raw=1"
                        , "https://www.dropbox.com/scl/fi/nojqb4126w6xhuzcoevjm/545.jpg?rlkey=k74b6tvpkse7h99hxfuw9qwy8&raw=1")} target="_blank" rel="noreferrer">
                        <Image  className={s.onethirdportimage} src= {useColorModeValue(pic4, pic8)}></Image> </a> 
                        <p className={s.sub} >{useColorModeValue("Amour", "Inspecteur")}</p>
                    </section>
                     <section className={s.onethirdport}>
                        <a 
                        href={useColorModeValue("https://www.dropbox.com/scl/fi/o7rzz9cbqtexhsw2dz556/2.jpg?rlkey=khno4cc1mmz8czp5p387ea4aa&raw=1"
                        , "https://www.dropbox.com/scl/fi/xq3x0nbszjub98px95mk9/delta400-carleton86.jpg?rlkey=oyq0z6g6mwp2a4q800pt1n8hh&st=6ha07adz&raw=1")} target="_blank" rel="noreferrer">
                        <Image  className={s.onethirdportimage} src= {useColorModeValue(pic5, pic9)}></Image> </a> 
                        <p className={s.sub} >{useColorModeValue("Mooh", "Praia")}</p>
                    </section>
                    <section className={s.onethirdport}>
                        <a 
                        href={useColorModeValue("https://www.dropbox.com/scl/fi/euuidb1hwnar3qbr0urpw/4.jpg?rlkey=05b8domg29jxlyf06uk3v2lc3&raw=1"
                        , "https://www.dropbox.com/scl/fi/1k4880bseuzxhw2y7zmkb/raw0022.JPG?rlkey=ta24rpcpde9ko02nutk0f6u21&st=pv1fqfvr&raw=1")} target="_blank" rel="noreferrer">
                        <Image  className={s.onethirdportimage} src= {useColorModeValue(pic6, pic10)}></Image> </a> 
                        <p className={s.sub} >{useColorModeValue("Oeil de crystal", "Alegria")}</p>
                    </section>

                    <section className={s.onethirdport}>
                        <a 
                        href={useColorModeValue("https://www.dropbox.com/scl/fi/7yex6ozspk3imnjo4mwsx/118.jpg?rlkey=fmx9rvi2y5xm929ed8kh4myg8&st=6rg6wjf4&raw=1"
                        , "https://www.dropbox.com/scl/fi/w0y1czs5k9vzoo6uikwaz/Bordeaux.JPG?rlkey=zhgruru9iembk4725fj7ftl43&st=uzwjqyt9&raw=1")} target="_blank" rel="noreferrer">
                        <Image  className={s.onethirdportimage} src= {useColorModeValue(pic17, pic11)}></Image> </a> 
                        <p className={s.sub} >{useColorModeValue("Shack Dog", "Dyptique")}</p>
                    </section>
                    <section className={s.onethirdport}>
                        <a 
                        href={useColorModeValue("https://www.dropbox.com/scl/fi/zuhteco236ppx79qu63vr/raw0011.JPG?rlkey=d800noymxqksod4xaejo3y2fy&st=ttfyl7jk&raw=1"
                        , "https://www.dropbox.com/scl/fi/wc8g3getsepfjwqz0xwzs/raw0004-4.JPG?rlkey=slqxyld572t0mbioz9mhad062&st=1eqyadcx&raw=1")} target="_blank" rel="noreferrer">
                        <Image  className={s.onethirdportimage} src= {useColorModeValue(pic20, pic12)}></Image> </a> 
                        <p className={s.sub} >{useColorModeValue("Dança", "Onda")}</p>
                    </section>

                    <section className={s.onethirdport}>
                        <a 
                        href={useColorModeValue("https://www.dropbox.com/scl/fi/mmtaoaclm9kyd7niozrll/raw0033.JPG?rlkey=ejr0yg3ykec84zfnsf2d08h03&st=b8afy08a&raw=1"
                        , "https://www.dropbox.com/scl/fi/li4zeqdse25y3e5rq7l8j/delta3200-paris019.JPG?rlkey=y6cnreui5xvksjl9t1r1mkazk&st=j43y27wz&raw=1")} target="_blank" rel="noreferrer">
                        <Image  className={s.onethirdportimage} src= {useColorModeValue(pic21, pic13)}></Image> </a> 
                        <p className={s.sub} >{useColorModeValue("Fixe", "Jen")}</p>
                    </section>

                    <section className={s.onethirdport}>
                        <a 
                        href={useColorModeValue("https://www.dropbox.com/scl/fi/4isnstu5x4w7lfzxwx2m4/raw0013-2.JPG?rlkey=resybdv4uy3e4a6b6u1fb6ro1&st=3b7ci86c&raw=1"
                        , "https://www.dropbox.com/scl/fi/wvk2qfgi3nljak5vxfhdd/raw0001-7.JPG?rlkey=rnvk8g6vtsdh8hm7udk5ktbs5&st=i9yicqo5&raw=1")} target="_blank" rel="noreferrer">
                        <Image  className={s.onethirdportimage} src= {useColorModeValue(pic22, pic14)}></Image> </a> 
                        <p className={s.sub} >{useColorModeValue("Madeira", "Refroidissement")}</p>
                    </section>

                    <section className={s.onethirdport}>
                        <a 
                        href={useColorModeValue("https://www.dropbox.com/scl/fi/i24ol5angm3s7pvuabxxa/23.JPG?rlkey=p3as4ulk1x5n9cdxka0bhkxjn&st=s441wbjb&raw=1"
                        , "https://www.dropbox.com/scl/fi/r8jpdic7ebane3cfvwbiy/24.JPG?rlkey=ns6f1jec3g7xnukouaf70s1cz&st=2dohlsux&raw=1")} target="_blank" rel="noreferrer">
                        <Image  className={s.onethirdportimage} src= {useColorModeValue(pic23, pic24)}></Image> </a> 
                        <p className={s.sub} >{useColorModeValue("Fulgurante", "PolyJam")}</p>
                    </section>

                    <section className={s.onethirdport}>
                        <a 
                        href={useColorModeValue("https://www.dropbox.com/scl/fi/eo10rm1u7559oejb93l28/25.JPG?rlkey=f2n0c89xvykmxf3j5wuzcq5lt&st=5itjfppg&raw=1"
                        , "https://www.dropbox.com/scl/fi/xm3c3f5ylkwr9mdr04z6t/26.JPG?rlkey=829du3ky1y84gfpk2zbgx363z&st=57c9gjaq&raw=1")} target="_blank" rel="noreferrer">
                        <Image  className={s.onethirdportimage} src= {useColorModeValue(pic25, pic26)}></Image> </a> 
                        <p className={s.sub} >{useColorModeValue("Texugo", "Texugo")}</p>
                    </section>

                    <section className={s.onethirdport}>
                        <a 
                        href={useColorModeValue("https://www.dropbox.com/scl/fi/0y4qbac3c9no17hwv9fp2/27.JPG?rlkey=iowuuqtkk8ykjgybvnw2emeo3&st=26nwulpe&raw=1"
                        , "https://www.dropbox.com/scl/fi/x179s5cs5knk26eaakw4l/28.JPG?rlkey=vcwu3hdqiqy7ahg9royrlwr3r&st=tzx4yr0s&raw=1")} target="_blank" rel="noreferrer">
                        <Image  className={s.onethirdportimage} src= {useColorModeValue(pic27, pic28)}></Image> </a> 
                        <p className={s.sub} >{useColorModeValue("Balade", "Face à la mer")}</p>
                    </section>

                    <section className={s.onethirdport}>
                        <a 
                        href={useColorModeValue("https://www.dropbox.com/scl/fi/p3nhrtas2fa8tnb7utoog/29.JPG?rlkey=owrt49h1scnu6m37097ypaw06&st=uo7k14ci&raw=1"
                        , "https://www.dropbox.com/scl/fi/pzro7747vcoilidkwkbl6/30.JPG?rlkey=b0fjgh8l46y766botkszpod8n&st=b79v9nkx&raw=1")} target="_blank" rel="noreferrer">
                        <Image  className={s.onethirdportimage} src= {useColorModeValue(pic29, pic30)}></Image> </a> 
                        <p className={s.sub} >{useColorModeValue("Andalousia", "Silvares")}</p>
                    </section>

                    <section className={s.onethirdport}>
                        <a 
                        href={useColorModeValue("https://www.dropbox.com/scl/fi/v9rmhtuldsdcp9ndnylub/31.JPG?rlkey=fogx7g3wod6t2ft724610x8uz&st=la52kj8p&raw=1"
                        , "https://www.dropbox.com/scl/fi/yaiealgdkr9uuf8vsyemu/32.JPG?rlkey=yzrbxu3pc3bly3tqmf9coj0i2&st=oz6ya2qk&raw=1")} target="_blank" rel="noreferrer">
                        <Image  className={s.onethirdportimage} src= {useColorModeValue(pic31, pic32)}></Image> </a> 
                        <p className={s.sub} >{useColorModeValue("Pinhão", "Nazaré")}</p>
                    </section>

                    <section className={s.onethirdport}>
                        <a 
                        href={useColorModeValue("https://www.dropbox.com/scl/fi/cyom0yhzmkigo16lmrsr4/33.JPG?rlkey=snr14v3f6m35pm4t7ph6wtzpq&st=4h6oio5y&raw=1"
                        , "https://www.dropbox.com/scl/fi/pqtqnrb51fu3fye2q3kak/34.JPG?rlkey=t0s5rdldo13lxqlfxad2udqbp&st=10rcogbz&raw=1")} target="_blank" rel="noreferrer">
                        <Image  className={s.onethirdportimage} src= {useColorModeValue(pic33, pic34)}></Image> </a> 
                        <p className={s.sub} >{useColorModeValue("Pulpe", "Pulpe")}</p>
                    </section>

                    <section className={s.onethirdport}>
                        <a 
                        href={useColorModeValue("https://www.dropbox.com/scl/fi/wdtl4e38ghi05decwrhfv/35.JPG?rlkey=uf6wc4ojzpgjh99lm65vwkvao&st=sehu7fdn&raw=1"
                        , "https://www.dropbox.com/scl/fi/hsxb04ubhkn9p2ntx2zbn/36.JPG?rlkey=iemnndjbyw3bjgdz9xnmanou3&st=7xgefvp5&raw=1")} target="_blank" rel="noreferrer">
                        <Image  className={s.onethirdportimage} src= {useColorModeValue(pic36, pic35)}></Image> </a> 
                        <p className={s.sub} >{useColorModeValue("Pallacanestro", "Pallacanestro")}</p>
                    </section>

                    <section className={s.onethirdport}>
                        <a 
                        href={useColorModeValue("https://www.dropbox.com/scl/fi/j1cutuzjh4niefwrtj7kh/37.JPG?rlkey=o3mdfh2rb0lx20zv6bxpwdvut&st=zgnyrqwj&&raw=1"
                        , "https://www.dropbox.com/scl/fi/ozzmo4grdfe4od7k1cv07/38.JPG?rlkey=e0meixbjhpwv8y7buzeo1at07&st=79d75udg&raw=1")} target="_blank" rel="noreferrer">
                        <Image  className={s.onethirdportimage} src= {useColorModeValue(pic37, pic38)}></Image> </a> 
                        <p className={s.sub} >{useColorModeValue("Bonifacio", "Nazaré 2")}</p>
                    </section>

                    <section className={s.onethirdport}>
                        <a 
                        href={useColorModeValue("https://www.dropbox.com/scl/fi/n93s29ogn6b4b63ph6zsj/39.JPG?rlkey=ayjiufbymmaykzfs1njmdeya3&st=y7agunf4&raw=1"
                        , "https://www.dropbox.com/scl/fi/8dtvnbmbh2rgve8ikp573/40.JPG?rlkey=a4ie1bkkm9ccum79at1oes340&st=2rr3cusq&raw=1")} target="_blank" rel="noreferrer">
                        <Image  className={s.onethirdportimage} src= {useColorModeValue(pic39, pic40)}></Image> </a> 
                        <p className={s.sub} >{useColorModeValue("Sé", "Lua")}</p>
                    </section>

                    <section className={s.onethirdport}>
                        <a 
                        href={useColorModeValue("https://www.dropbox.com/scl/fi/k7vnlxt730d2tl3bazdkm/45.jpg?rlkey=hdpb0uul6ufgqj55btlj42xig&st=pxr0b12q&raw=1"
                        , "https://www.dropbox.com/scl/fi/trvppt3lnanxg8x8vqvai/46.jpg?rlkey=qjcjeavqkeke1uawy96c4xodz&st=v2yni5e9&raw=1")} target="_blank" rel="noreferrer">
                        <Image  className={s.onethirdportimage} src= {useColorModeValue(pic45, pic46)}></Image> </a> 
                        <p className={s.sub} >{useColorModeValue("Stage", "Exit")}</p>
                    </section>

                    <section className={s.onethirdport}>
                        <a 
                        href={useColorModeValue("https://www.dropbox.com/scl/fi/8dtvnbmbh2rgve8ikp573/40.jpg?rlkey=a4ie1bkkm9ccum79at1oes340&st=oxrsvedn&raw=1"
                        , "https://www.dropbox.com/scl/fi/6fl6t0em3922j3ia4dfw7/41.jpg?rlkey=x7whf469ls3yzg9dvnvcinout&st=f4fgy1fi&raw=1")} target="_blank" rel="noreferrer">
                        <Image  className={s.onethirdportimage} src= {useColorModeValue(pic41, pic42)}></Image> </a> 
                        <p className={s.sub} >{useColorModeValue("Heat", "Gaz")}</p>
                    </section>

                    <section className={s.onethirdport}>
                        <a 
                        href={useColorModeValue("https://www.dropbox.com/scl/fi/xase8dp703w3h9xqqwno6/42.jpg?rlkey=rjcxieebj16j5l54h864676gz&st=5koxwyg3&raw=1"
                        , "https://www.dropbox.com/scl/fi/4wpwdr2cn56b7bgftpy92/43.jpg?rlkey=7g6mc3luq6nplq1ky8mxj9168&st=90lksk5n&raw=1")} target="_blank" rel="noreferrer">
                        <Image  className={s.onethirdportimage} src= {useColorModeValue(pic43, pic44)}></Image> </a> 
                        <p className={s.sub} >{useColorModeValue("Spotlight", "Insight")}</p>
                    </section>

                    

                    
                
                    <div className={s.clearfix}></div>
                        <a name="serv">
                   
                        </a>
                        <section>
                            <h2 className={s.h2}>Mes Services</h2>
                            
                            <Paragraph>
Photographe par passion, je capture des moments avec une esthétique propre à ma personne. Engagé avant tout dans la photographie argentique, mon portfolio se veut comme des fragments de moments ayant capturés mes émotions autant que mon sujet.
Je publie depuis 2023.<Paragraph></Paragraph> Certains m'ont connu sous différentes itérations: étudiant en maîtrise optimiste, voyageuse techno libertine notoire, barista wannabe-bobo superficiel, nerd de jeux de société compétitif à Mario Kart, extrêmiste de la vie privé, etc.
</Paragraph>
<br></br>
<Paragraph>
Après plusieurs années à prendre des photos, je me réinvente à travers ce site web pour donner de ma présence encore une fois. Je me vois comme revenant chez moi, même si plusieurs versions parcourt les Internets et les bases de données
des GAFAMs. Je vis ma vie dans une équipe d'informatique à Montréal au jour le jour et je jouis de mes rencontres et de mes passions le soir. 
<Paragraph></Paragraph><br></br>
En journée, je nage, je grimpe, je pitonne, j'aime mes proches, je bois du chimarrão, je lis les nouvelles, je discute de la société ou de n'importe quoi. Je prépare des projets de photos, tire en chambre noire, joue à un jeux vidéo indie, cuisine et bois du vin. En gros, je projete mon existance.
</Paragraph>
<Paragraph>
<br></br>
Je profite de ma nouvelle vie de salarié, pour programmer mon quotidien comme je le souhaite. Je filtre encore ma vie et compile qui je souhaite être. Des efforts sont entreprit pour fixer quelques bogues avant un prochain déploiement. Je reste toutefois fier de qui je suis et du chemin que j'ai traversé.
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
                         <p className={s.contactp}>Nuneautilus<br className={s.break}></br></p> <p className={s.contactp}>c.rumble785@simplelogin.com</p> 
                             <p className={s.contactp}> Montréal</p><p className={s.contactp} >Québec</p>
                            </section> 
<br></br>
                    <p className={s.contactp}>Envoyez moi un message par courriel. J'essaierai de vous répondre dans les plus brefs délais!</p>
                    <div className={s.clearfix}></div>
        </Container>
    </Layout>
)
export default Portfolios