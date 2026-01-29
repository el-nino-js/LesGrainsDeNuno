import Head from 'next/head'
import Navbar from '../navbar'
import dynamic from 'next/dynamic'
import { Box, Container } from '@chakra-ui/react'

import VoxelDogLoader from  '../voxel-dog loader'

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const Main = ({children, router}) => {
    return (
        <Box as="main" pb={8}>
            <Head>
            <meta charSet="utf-8" />
	        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <title>Grão de Prata - Page Principale</title>
            </Head>

            <Navbar path={router.asPath} />

            <Container maxW="container.md" pt={14}>
               
                    <LazyVoxelDog />
                
                {children}
      </Container>
    </Box>
    )
}

export default Main