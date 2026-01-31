import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'

import {
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
} from '@chakra-ui/menu'

import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'

/* -----------------------------
   Reusable link item
-------------------------------- */
const LinkItem = ({ href, path, children }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')

  return (
    <Link
      as={NextLink}
      href={href}
      p={2}
      bg={active ? 'glasseTeal' : undefined}
      color={active ? '#202023' : inactiveColor}
    >
      {children}
    </Link>
  )
}

/* -----------------------------
   Navbar
-------------------------------- */
const Navbar = props => {
  const { path } = props

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      style={{ backdropFilter: 'blur(10px)' }}
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
        {/* Logo */}
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing="tighter">
            <Logo />
          </Heading>
        </Flex>

        {/* Desktop links */}
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
            📝 Blogue
          </LinkItem>
          <LinkItem href="/menu" path={path}>
            ☕ La Graine à Nuno
          </LinkItem>
        </Stack>

        {/* Right side */}
        <Box flex={1} align="right">
          <LinkItem href="/villeroyaume-canada" path={path}>
            🏰
          </LinkItem>

          <ThemeToggleButton />

          {/* Mobile menu */}
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <MenuItem as={NextLink} href="/">
                  About
                </MenuItem>
                <MenuItem as={NextLink} href="/portfolios">
                  Portfolio
                </MenuItem>
                <MenuItem as={NextLink} href="/articles">
                  Articles
                </MenuItem>
                <MenuItem as={NextLink} href="/posts">
                  Posts
                </MenuItem>
                <MenuItem as={NextLink} href="/menu">
                  La Graine à Nuno ☕
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
