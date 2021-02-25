import React from 'react'
import NextLink from 'next/link'
import { parseISO, format } from 'date-fns'
import { useColorMode, Link, ListItem } from '@chakra-ui/react'

const NewsletterLink = (frontMatter) => {
  const { colorMode } = useColorMode()
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400'
  }

  const slug = frontMatter.__resourcePath.replace('.mdx', '')

  return (
    <ListItem mb={2}>
      <NextLink href={slug} passHref>
        <Link color={secondaryTextColor[colorMode]} href={slug}>
          {format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')}
        </Link>
      </NextLink>
    </ListItem>
  )
}

export default NewsletterLink
