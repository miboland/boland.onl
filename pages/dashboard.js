import React from "react";
import { NextSeo } from "next-seo";
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  SimpleGrid,
} from "@chakra-ui/react";

import Analytics from "../components/metrics/Analytics";
import Buttondown from "../components/metrics/Buttondown";
import Container from "../components/Container";
import GitHub from "../components/metrics/Github";
import Gumroad from "../components/metrics/Gumroad";
import Unsplash from "../components/metrics/Unsplash";
import YouTube from "../components/metrics/Youtube";
import { CustomLink } from "../components/MDXComponents";

const url = "https://boland.onl/dashboard";
const title = "Michael Boland";
const description =
  "My personal dashboard, built with Next.js API routes deployed as serverless functions.";

const Dashboard = () => {
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: "gray.700",
    dark: "gray.400",
  };

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description,
          images: [
            {
              url: "https://boland.onl/static/images/dashboard.jpg",
              alt: description,
              width: 1280,
              height: 720,
            },
          ],
        }}
      />
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
              Dashboard
            </Heading>
            <Text color={secondaryTextColor[colorMode]}>
              This is my personal dashboard, built with Next.js API routes
              deployed as serverless functions.
            </Text>
            <Text color={secondaryTextColor[colorMode]}>
              I use this dashboard to track various metrics across platforms.
            </Text>
          </Flex>
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
            mt={8}
          >
            {/* <Unsplash />
            <YouTube /> */}
            <SimpleGrid columns={[1, 1, 2]} spacing={4} mb={4}>
              <Analytics />
              <GitHub />
            </SimpleGrid>
            <SimpleGrid columns={[1, 1, 2]} spacing={4} mb={4}>
              {/* <Gumroad />
              <Buttondown /> */}
            </SimpleGrid>
          </Flex>
        </Stack>
      </Container>
    </>
  );
};

export default Dashboard;
