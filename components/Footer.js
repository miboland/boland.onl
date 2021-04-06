import React from 'react'
import { Flex, Link, IconButton } from '@chakra-ui/react'

import GithubIcon from './icons/GithubIcon'
import MailIcon from './icons/MailIcon'

const Footer = () => (
  <Flex justify="center" mb={4}>
    <Link href="https://github.com/miboland" title="GitHub" isExternal>
      <IconButton
        aria-label="GitHub"
        icon={<GithubIcon />}
        size="lg"
        color="gray.500"
        variant="ghost"
      />
    </Link>
    <Link href="mailto:michael@boland.onl" title="Email" isExternal>
      <IconButton
        aria-label="Email"
        icon={<MailIcon />}
        size="lg"
        color="gray.500"
        variant="ghost"
      />
    </Link>
  </Flex>
)

export default Footer
