import Logo from './logo'
import NextLink from 'next/link'
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue
}   from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'

const LinkItem = ({ href, path, children}) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
    return (
        <NextLink href={href}>
            <Link
                p={2}
                bg={active ? 'glasseTeal' : undefined}
                color={active ? '#202023' : inactiveColor}
            >
                {children}
            </Link>
        </NextLink>
    )
}

const Navbar = props => {
    const { path } = props

    return (
        <Box
        position="fixed"
        as="nav"
        w="100%"
        bg={useColorModeValue('#ffffff40', '#20202380')}
        style={{backdropFilter:'blur(10px'}}
        zIndex={1}
        {...props}
        >
            <Container
                display="flex"
                p={2}
                maxW="container.md"
                wrap="wrap"
                align="center"
                justify="space-between"
            >
                <Flex align = "center" mr={5}>
            <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                <Logo />  
            </Heading> 
                </Flex>
                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    display={{ base: 'none', md: 'flex' }}
                    width={{ base: 'full', md: 'auto' }}
                    alignItems="center"
                    flexGrow={1}
                    mt={{ base: 4, md: 0 }}
                >
                <LinkItem href="/portfolios" path={path}>
                Portfolios
                </LinkItem>
                <LinkItem href="/articles" path={path}>
                📸 Argentique
                </LinkItem>
                <LinkItem href="/blogue" path={path}>
                📝Blogue
                </LinkItem>
                <LinkItem href="/menu" path={path}>
                ☕ La Graine à Nuno 
                </LinkItem>
                
                </Stack>
        <Box flex={1} align="right">
        <LinkItem href="/villeroyaume-canada" path={path}>
                🏰
                </LinkItem>
            <ThemeToggleButton />
            <Box ml={2} display={{base: 'inline-block', md:'none'}}>
                <Menu>
                <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink>
                <NextLink href="/portfolios" passHref>
                  <MenuItem as={Link}>Portfolio</MenuItem>
                </NextLink>
                <NextLink href="/articles" passHref>
                  <MenuItem as={Link}>Articles</MenuItem>
                </NextLink>
                <NextLink href="/posts" passHref>
                  <MenuItem as={Link}>Posts</MenuItem>
                </NextLink>
                <NextLink href="/menu" passHref>
                  <MenuItem as={Link}>La Graine à Nuno ☕</MenuItem>
                </NextLink>
                
              </MenuList>
                </Menu>
            </Box>
            </Box>
            </Container>
        </Box>
    )
}

export default Navbar