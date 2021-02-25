import React from 'react'
import { useColorMode, Heading, Text, Flex, Stack } from '@chakra-ui/react'

import Timeline from '../components/Timeline'
import Container from '../components/Container'
/*
 * import BlogPost from "../components/BlogPost";
 * import Subscribe from "../components/Subscribe";
 */
import ProjectCard from '../components/ProjectCard'
import KrishnamurtiIcon from '../components/icons/KrishnamurtiIcon'
import WagelistIcon from '../components/icons/WagelistIcon'

/*
 * import { frontMatter as styleGuides } from "./blog/style-guides-component-libraries-design-systems.mdx";
 * import { frontMatter as stripeDesign } from "./blog/how-stripe-designs-beautiful-websites.mdx";
 * import { frontMatter as monorepo } from "./blog/monorepo-lerna-yarn-workspaces.mdx";
 */

const Index = () => {
  const { colorMode } = useColorMode()
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400'
  }

  return (
    <Container>
      <Stack
        as="main"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
            Hey, I’m Michael Boland
          </Heading>
          <Text color={secondaryTextColor[colorMode]}>
            I’m a developer, writer, and creator living in Des Moines, IA.
          </Text>
        </Flex>
        {/* <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
          mt={8}
        >
          <Heading letterSpacing="tight" mb={4} size="xl" fontWeight={700}>
            Most Popular
          </Heading>
          <BlogPost {...styleGuides} />
          <BlogPost {...stripeDesign} />
          <BlogPost {...monorepo} />
        </Flex> */}
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          <Heading letterSpacing="tight" mb={4} size="xl" fontWeight={700}>
            Projects
          </Heading>
          <ProjectCard
            title="The Wagelist"
            description="A crowd-sourced salary archive of companies and start-ups throughout the Des Moines metro area."
            href="https://wagelist.onl/"
            icon={WagelistIcon}
          />
          <ProjectCard
            title="Krishnamurti Center"
            description="A platform to access the collected life works, biographies, and personal writings of Jiddu Krishnamurti."
            href="https://krishnamurti.onl/"
            icon={KrishnamurtiIcon}
          />
        </Flex>
        <Timeline />
        {/* <Subscribe /> */}
      </Stack>
    </Container>
  )
}

export default Index
