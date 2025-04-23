/* eslint-disable react/no-unescaped-entities */
import { Container, Badge, Heading, Link} from '@chakra-ui/react'
import { Title } from '../../components/article'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/paragraph'
import NextLink from 'next/link'

import s from '../components/style.module.css'
import pic1 from '../../public/images/2025/wrapped.PNG'
import pic2 from '../../public/images/2025/wrapped1.PNG'
import pic3 from '../../public/images/2025/wrapped3.PNG'




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
                    nous faisons des applications auxquelles nous ouvrons nos âmes pour prédire nos émotions.<br></br> </P>
                    <br></br><Image src={pic1}></Image> <br></br> Ce <i>capitaleavesdrop</i> se base sur les données, récupérer d'autres applications depuis notre activité en ligne, pour le transmettre
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
                    J'ai tenté différentes solutions. Aucune d'elle ne me plaisait et a résulté vers une flemme de la méthodologie pénible sans que cela me rapporte grand-chose. <br></br>
                    Ce
                    <NextLink href="https://coppolaemilio.com/entries/i-left-spotify-what-happened-next/">
                            <Link href="https://coppolaemilio.com/entries/i-left-spotify-what-happened-next/"> blogue</Link>
                    </NextLink> répondait exactement à mes besoins vers l'auto-suffisance : utiliser Jellyfin. Il s'agit d'un serveur multimédia libre et gratuit qui me permet de partager mes séries et films sur mon réseau. Par contre, et c'est aussi sa beauté, elle permet le partage de musique !
                    <br></br><br></br>

                    J'ai ainsi commencé à rassembler tous mes fichiers musicaux (mp3, ou flac) sur mon ordinateur, à travers des groupes Discords. 
                    Les lecteurs de musique sont passés de mode, mais la technologie de lecture locale des fichiers n'a pas beaucoup évolué ces derniers temps.
                    J'ai tenté MusicBees en 2024, mais sa gestion entre mon cellulaire et le PC est pesante. Il m'aurait fallut réaliser deux configurations sur deux appareils. Ce que je désirais, c'était surtout une synchronisation avec un serveur.
                    Mais sans internet ni ordinateur portable allumé pour héberger le serveur, je ne pouvais pas écouter de musique sur mon téléphone, ce qui rendrait certains voyages de plusieurs semaines particulièrement longs.
                    
                    
                    <br></br><br></br>
                    <Image src={pic2}></Image>
                    <br></br><br></br>
                    
                    <Heading as="h2" className={s.h2}>Place au streaming mobile</Heading><br></br>
                    Jellyfin, lui, remplace Disney+ ou Netflix, mais aussi Spotify. Il possède toutes les fonctionnalités que je recherche !
                    Son seul inconvénient par rapport à Spotify : il faut l'héberger soi-même.
                    L'auto-hébergement peut paraître intimidant pour certains, et bien sûr, je ne le recommande pas à tout le monde.
                    Mais je vous assure que vous pouvez installer Jellyfin sans trop de difficultés, même sans de fortes bases en TI !
                    Pour cela, nul besoin d'acheter un NAS ou un équipement supplémentaire sophistiqué. Si vous avez un vieil ordinateur, il fera probablement l'affaire comme serveur domestique.
                    Si comme moi, votre connexion peut manquer de fiabilité, branche votre serveur à un câble ethernet. 
                    
                    
                    
                    Puis j'ai découvert qu'il existe des applications qui communiquent avec le serveur Jellyfin et permettent de télécharger
                     de la musique depuis votre bibliothèque pour une écoute hors ligne.
                      Fintunes , Manet , Finamp , et j'en passe. Finamp est celle que j'ai finalement intégrée à mon téléphone quotidiennement. Manet n'est pas mal non plus, mais j'ai une préférence pour
                      la gratuité et l'efficacité de l'interface de Finamp.

                      <br></br>
                    <Image src={pic3}></Image>
                    <br></br><br></br>

                    Merci de t'être rendu jusqu'ici pis que l’idée de t’auto-héberger te parle, ben go, lance-toi ! C’est pas si long que ça à mettre en place, et c’est bien faisable comme projet de côté. Si t’as déjà un petit peu d’expérience avec un terminal, t’auras pas trop de misère à le configurer. Une fois que c’est en marche, tu vas pouvoir accéder à toute ta bibliothèque, peu importe t’es où pis sur n’importe quel appareil. 
                    Avec des logiciels comme ça qui n'arrêtent pas de s’améliorer, je vois un futur sans besoin de dépendre des serveurs de compagnies pour écouter notre musique, regarder nos films ou garder nos souvenirs. On a juste à continuer de simplifier les choses et pousser l’open source dans l’bon sens du poil !



               
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
                        <a href="https://www.dropbox.com/s/lvnfbwal6fl3zwj/Vanessa-11.jpg?raw=1" target="_blank" rel="noreferrer">
                        <Image className={s.onethirdportimage} src={pic1}></Image> </a>
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