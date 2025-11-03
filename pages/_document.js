import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'


import theme from '../lib/theme'

export default class Document extends NextDocument{
    render () {
        return(
            <Html lang="en"  margin="0" padding="0" height="100%" width="100%">
                <Head />
                <body margin="0" padding="0" height="100%" width="100%">
                    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
