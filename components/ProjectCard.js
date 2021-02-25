import React from 'react'
// import * as Fathom from "fathom-client";
import { Flex, Link, Heading, Text, Stack, Icon, useColorMode } from '@chakra-ui/react'

/*
 * const trackGoal = (title) => {
 *   const goalCodes = {
 *     "React 2025": "5WGDOKV0",
 *     "Mastering Next.js": "HV9HDL0O",
 *     jamstackfns: "LRXBPLZS",
 *   };
 */

/*
 *   Fathom.trackGoal(goalCodes[title], 0);
 * };
 */

const ProjectCard = ({ title, description, href, icon }) => {
  const { colorMode } = useColorMode()
  const borderColor = {
    light: 'gray.200',
    dark: 'gray.600'
  }
  const iconColor = {
    light: 'gray.1000',
    dark: 'white'
  }

  return (
    <Link
      mb={4}
      href={href}
      // onClick={() => trackGoal(title)}
      title={title}
      isExternal
      _hover={{
        boxShadow:
          colorMode === 'light'
            ? '0px 4px 20px rgba(0, 0, 0, 0.05)'
            : '0px 4px 20px rgba(255, 255, 255, 0.15)',
        textDecoration: 'none'
      }}
    >
      <Flex
        align="center"
        border="1px solid"
        borderColor={borderColor[colorMode]}
        borderRadius={4}
        p={4}
      >
        <Icon
          aria-label="Project Icon"
          as={icon}
          color={iconColor[colorMode]}
          size="32px"
          w={6}
          h={6}
          ml={2}
          mr={4}
        />
        <Stack>
          <Heading as="h4" size="md" fontWeight="bold" mb={1} letterSpacing="tighter">
            {title}
          </Heading>
          <Text color={colorMode === 'light' ? '#2D3748' : '#A0AEC0'} lineHeight="1.3">
            {description}
          </Text>
        </Stack>
      </Flex>
    </Link>
  )
}

export default ProjectCard
