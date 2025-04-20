/* eslint-disable react/no-unescaped-entities */
import { Container, Badge, Heading, Link} from '@chakra-ui/react'
import { Title } from '../../components/article'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/paragraph'
import NextLink from 'next/link'

import s from '../components/style.module.css'
import pic1 from '../../public/images/2025/wrapped.PNG'
import pic3 from '../../public/images/2022/vanessa/4.jpg'
import pic4 from '../../public/images/2022/vanessa/5.jpg'
import pic5 from '../../public/images/2022/vanessa/6.jpg'
import pic6 from '../../public/images/2022/vanessa/7.jpg'
import pic7 from '../../public/images/2022/vanessa/8.jpg'
import pic8 from '../../public/images/2022/vanessa/9.jpg'
import pic9 from '../../public/images/2022/vanessa/10.jpg'
import pic10 from '../../public/images/2022/vanessa/11.jpg'



import Image from 'next/image'

const Article = () => {
    return (
        <Layout Title="JacobLeCoq">
            <Container>
            <Title>
              Hasta la vista, spotify! <Badge>2025</Badge>
            </Title>
                <P> Ma quête de vie privée devant notre globe hyperconnecté poursuis sa quête. 2025 m'indique être une bonne année pour m'y mettre. <br></br>
                    
                    La rapidité de la <NextLink href="https://www.nytimes.com/2025/04/18/us/politics/trump-national-security.html">
                            <Link href="https://www.nytimes.com/2025/04/18/us/politics/trump-national-security.html"> merdification des politiques gouvernementales</Link>
                        </NextLink>, bat son plein avec un <NextLink href="https://arstechnica.com/gadgets/2024/05/microsofts-new-recall-feature-will-record-everything-you-do-on-your-pc/">
                            <Link href="https://arstechnica.com/gadgets/2024/05/microsofts-new-recall-feature-will-record-everything-you-do-on-your-pc/"> monopole de surveillance. </Link>
                        </NextLink>
                    S'il nous est invraisemblable de partager nos émotions les plus intimes à nos proches, le paradoxe survient lorsqu'on songe à la dépendance que
                    nous faisons des applications auxquelles nous ouvrons nos âmes pour prédire nos émotions.<br></br> </P><Image src={pic1}></Image> Ce <i>capitaleavesdrop</i> se base sur les données, récupérer d'autres applications depuis notre activité en ligne, pour le transmettre
                    à ce magna de la diffusion de musique. Ironiquement, c'est avec brio que Spotify fait un beau travaille en
                    instaurant un marketing aussi plaisant qu'un <NextLink href="https://www.wired.com/story/spotify-wrapped-user-data/">
                            <Link href="https://www.wired.com/story/spotify-wrapped-user-data/"> Wrapped </Link>
                        </NextLink> annuel qui fait du mieux qu'elle peut pour
                    prédire nos émotions, mais aussi influencer nos goûts musicaux, quittent à produire ses propres <NextLink href="https://harpers.org/archive/2025/01/the-ghosts-in-the-machine-liz-pelly-spotify-musicians/">
                            <Link href="https://harpers.org/archive/2025/01/the-ghosts-in-the-machine-liz-pelly-spotify-musicians/">artistes fantomnes</Link>
                        </NextLink>. Plus encore, devant
                    l'écran de Big Brother, nous ne participons pas seulement à l'invasion de notre vie privé, mais la glorifions et la partageons au reste du monde.
                    
                    <br></br><br></br>
         <Heading as="h2" className={s.h2}>Par où commencer?</Heading>
                    

                    Ma dépendance envers ce média est aussi tenace vu l'aisance d'utilisation qu'elle me procure.
                    J'ai tenté différente solution. Aucun d'elle me plaisait et résultait ensuite à une flemme et une méthodologie pénible sans que cela me rapporte grand-chose. <br></br>
                    En tombant sur un blogue, une solution palpable vers l'auto-suffisance : Jellyfin. Ce serveur multimédia libre et gratuit me permet de partager mes séries et films sur mon réseau. Par contre, et c'est aussi une autre beauté, elle permet le partage de musique !
                    <br></br><br></br>

                    J'ai commencé à rassembler tous mes fichiers musicaux ( mp3, ou flac) sur mon ordinateur, à travers des groupes discords et spotDL. Je suppose que les lecteurs de musique sont passés de mode, et la technologie de lecture locale des fichiers n'a pas beaucoup évolué ces derniers temps. Pendant quelques jours, j'ai utilisé le bon vieux lecteur VLC, mais j'ai été surpris de constater à quel point il est médiocre pour gérer flacles fichiers.

                    J'ai tenté MusicBees, mais sa connexion entre mon cellulaire et le PC est pesante. Il m'aurait fallut réaliser deux configurations sur deux appareils. Ce que je désirais, c'était une synchronisation avec un serveur.  Sans internet ni ordinateur portable allumé pour héberger le serveur, je ne pouvais pas écouter de musique sur mon téléphone, ce qui rendait certains vols particulièrement longs.
                    Mon dernier recours, et l'option que j'ai finalement le plus utilisée, a été l'application Musique d'Apple. C'est un programme surchargé, avec des vestiges d'iTunes. Il s'efforce de vendre son service d'abonnement, mais malgré tout cela, il propose un lecteur de musique plutôt pas mal. Il offre toutes sortes de fonctions de tri et une interface moderne. Vous pouvez synchroniser votre bibliothèque musicale avec votre téléphone ou d'autres appareils, sans problème hors ligne. Fini les trajets en train ennuyeux !
                    La vidéo dont j'ai mis le lien explique comment Jellyfin peut remplacer Disney+ ou Netflix, mais aussi Spotify. Il possède toutes les fonctionnalités que je recherchais ! Son seul inconvénient par rapport à Spotify : il faut l'héberger soi-même.

L'auto-hébergement peut paraître intimidant pour certains, et bien sûr, je ne le recommande pas à tout le monde. Mais je vous garantis que vous pouvez installer Jellyfin sans trop de difficultés, même sans être programmeur ! Pour cela, nul besoin d'acheter un NAS ou un équipement supplémentaire sophistiqué. Si vous avez un vieil ordinateur, il fera probablement l'affaire comme serveur domestique.

L'auto-hébergement peut paraître intimidant pour certains, et bien sûr, je ne le recommande pas à tout le monde. Mais je vous garantis que vous pouvez installer Jellyfin sans trop de difficultés, même sans être programmeur ! Pour cela, nul besoin d'acheter un NAS ou un équipement supplémentaire sophistiqué. Si vous avez un vieil ordinateur, il fera probablement l'affaire comme serveur domestique.

Jellyfin a tout ce que j'espérais, et même plus. J'ai d'abord essayé de l'exécuter localement sur mon ordinateur et j'ai été surpris de sa simplicité d'installation. Puis j'ai découvert qu'il existe des applications qui communiquent avec votre serveur Jellyfin et vous permettent de télécharger de la musique depuis votre bibliothèque pour une écoute hors ligne. Fintunes , Manet , Finamp , et j'en passe . Finamp est celle que j'ai finalement intégrée à mon téléphone quotidiennement.
Une capture d'écran de ma bibliothèque musicale Jellyfin dans le navigateur

Ces derniers mois, le monde a commencé à changer radicalement, et j'ai donc voulu franchir une nouvelle étape dans mon parcours vers l'autonomie numérique. J'ai acheté un mini-PC pour commencer à auto-héberger des applications comme Jellyfin depuis chez moi. L'expérience a été si positive que j'ai commencé à chercher d'autres applications que je pourrais auto-héberger, et j'utilise maintenant Immich . Immich est une version bien plus performante de Google Photos, mais ce sera une autre histoire.

Si vous avez lu jusqu'ici et que l'auto-hébergement vous intéresse, je vous encourage à l'essayer ! Cela ne prend pas beaucoup de temps et c'est tout à fait faisable comme hobby ou projet annexe. Avec quelques notions d'utilisation d'un terminal, vous n'aurez aucun mal à le configurer. Une fois lancé, vous pourrez profiter de toute votre bibliothèque depuis n'importe quel appareil, où que vous soyez.
Une capture d'écran de mon Jellyfin avec un album d' un groupe que vous devriez connaître .

Si des logiciels comme celui-ci continuent de s'améliorer, j'imagine un avenir où nous n'aurons plus besoin de dépendre des ordinateurs d'autrui pour accéder à notre musique, nos films, nos photos ou nos souvenirs. Il nous suffit de simplifier et d'améliorer les choses, comme le fait toujours l'open source. Cela prendra peut-être du temps, mais j'en suis sûr.



               
                <section className={s.sidebar}>
                
            </section>

        <div className={s.clearfix}></div>
            <section className={s.leftcolumn}>
                
                <Paragraph text-indent={6} className={s.p}> 
                <NextLink href="https://www.vanessamassera.com ">
                    <Link href="https://www.vanessamassera.com ">Vanessa Massera</Link>
                </NextLink>
                , spécialisée en éléctroacoustique, exprime ses idées poétiques. Elles sont ancrées à travers les différents
                 milieux auxquels elle s'en retrouve inspirée.

                </Paragraph>
            </section>
            
            <div className={s.clearfix}></div>
                <a name="port"></a>
                    <h2 className={s.h2}>Expo</h2>
                    
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/6vi7nowdpelydwf/Vanessa-6.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic5}></Image> </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/ys3f9syjaxu9uk0/Vanessa-9.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic8}></Image> </a>
                    </section>
                    
                    
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/ngt44e6k0iyxceh/Vanessa-4.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic3}></Image> </a>
                    </section>
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/qoyqp6kq2ww3rpu/Vanessa-8.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic7}></Image> </a>
                    </section>
                    
                    
                    <section className={s.onethirdport}>
                        <a href="https://www.dropbox.com/s/lvnfbwal6fl3zwj/Vanessa-11.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic10}></Image> </a>
                    </section>
                    
                    
                    <div className={s.clearfix}></div>
                        <a name="serv">
                    
                        </a>
                        <section>
                            <h2 className={s.h2}>Nota Bene</h2>
                            <Paragraph>
                            Obrigado por esses momentos lindos. Saudades com a tua alfacinha de Lisboa. 
                            </Paragraph>
                        </section>
                      
               
            
            </Container>
        </Layout>
    )
}

export default Article