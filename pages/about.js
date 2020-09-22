import React from "react";
import { NextSeo } from "next-seo";
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Link,
  Icon,
} from "@chakra-ui/core";

import Container from "../components/Container";
import { CustomLink } from "../components/MDXComponents";

const url = "https://boland.onl/about";
const title = "About Me – Michael Boland";

const About = () => {
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: "gray.700",
    dark: "gray.400",
  };

  return (
    <>
      <NextSeo
        title={title}
        canonical={url}
        openGraph={{
          url,
          title,
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
              About Me
            </Heading>
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              Hey, I’m Michael. I live in Des Moines, IA and I’m a Software
              Engineer at&nbsp;
              <CustomLink href="https://innovate.hy-vee.com">Hy-Vee</CustomLink>
              , a $10B grocery tech company in the Midwest. As a web and mobile
              engineer, my primary focus is developing Aisles Online, Hy-Vee’s
              e-commerce grocery shopping platform – which serves millions of
              customers every year.
            </Text>
            {/* <Text color={secondaryTextColor[colorMode]} mb={4}>
              At the beginning of 2020, I launched my most ambitious project – a
              50+ lesson video course on React and Next.js. It’s called&nbsp;
              <CustomLink href="https://masteringnextjs.com">
                Mastering Next.js
              </CustomLink>
              , and it’s been my most successful solo-endeavor so far. I'm now
              building a new course called&nbsp;
              <CustomLink href="https://react2025.com">React 2025.</CustomLink>
            </Text> */}
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              I’ve spoken across the U.S. and Europe at conferences,
              universities, and meet-ups about web development, design, and
              blockchain technology. I also actively contribute to my blog,
              writing about both technical and non-technical topics.
            </Text>
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              I grew up in small-town Illinois and went to school at Arizona
              State University, graduating with a degree in Business and
              Anthropology. I came to tech from a non-traditional background,
              with academic research focuses in business anthropology and
              cyberpsychology.
            </Text>
            <Heading letterSpacing="tight" mt={8} mb={4} as="h2" size="xl">
              Talks & Lectures
            </Heading>
            <Heading size="md" as="h3" mb={2} fontWeight="medium">
              {/* <Link
                display="flex"
                href="https://prisma.zoom.us/rec/share/6PwuN4zqyn9Of4XE-kvOUbUeF7i7T6a81yYbr_RZxEaE6v9ctLqFon6y4vLj2lxn"
                isExternal
              > */}
              <Flex align="center">
                Human-Centered Design & Humane Technology
                {/* <Icon name="external-link" mx={2} size="16px" /> */}
              </Flex>
              {/* </Link> */}
            </Heading>
            <Text color={secondaryTextColor[colorMode]} mb={6}>
              Reactor Innovation Hub - Porto, Portugal{" "}
              <span role="img" aria-label="Portugal">
                🇵🇹
              </span>
              &nbsp;&nbsp;| 2019
            </Text>
            <Text color={secondaryTextColor[colorMode]} mb={8}>
              During this workshop, I facilitated group work focused on the
              side-effects of unethical and unhealthy design systems, a lack of
              trust and comradery in company cultures, and practical baby steps
              that can be taken to build trust networks and organic communities
              with colleagues and co-workers in the workplace and the greater
              industry.
            </Text>
            <Heading size="md" as="h3" mb={2} fontWeight="medium">
              {/* <Link
                display="flex"
                href="https://prisma.zoom.us/rec/share/6PwuN4zqyn9Of4XE-kvOUbUeF7i7T6a81yYbr_RZxEaE6v9ctLqFon6y4vLj2lxn"
                isExternal
              > */}
              <Flex align="center">
                The History & Future of Cryptocurrencies
                {/* <Icon name="external-link" mx={2} size="16px" /> */}
              </Flex>
              {/* </Link> */}
            </Heading>
            <Text color={secondaryTextColor[colorMode]} mb={6}>
              South East European University - Skopje, North Macedonia{" "}
              <span role="img" aria-label="North Macedonia">
                🇲🇰
              </span>
              &nbsp;&nbsp;| 2017
            </Text>
            <Text color={secondaryTextColor[colorMode]} mb={8}>
              I taught a lecture about the historical origins and future
              trajectory of cryptocurrencies, starting with the creation of
              Bitcoin. The course investigated the underlying technologies that
              power blockchains, the problems they currently solve as well as
              those they aspire to solve, and the future of finance and
              decentralized payment transactions.
            </Text>
            <Heading size="md" as="h3" mb={2} fontWeight="medium">
              {/* <Link
                display="flex"
                href="https://prisma.zoom.us/rec/share/6PwuN4zqyn9Of4XE-kvOUbUeF7i7T6a81yYbr_RZxEaE6v9ctLqFon6y4vLj2lxn"
                isExternal
              > */}
              <Flex align="center">
                Internal Training & Furthering Education
                {/* <Icon name="external-link" mx={2} size="16px" /> */}
              </Flex>
              {/* </Link> */}
            </Heading>
            <Text color={secondaryTextColor[colorMode]} mb={6}>
              Tirana Business Park - Tirana, Albania{" "}
              <span role="img" aria-label="Albania">
                🇦🇱
              </span>
              &nbsp;&nbsp;| 2017
            </Text>
            <Text color={secondaryTextColor[colorMode]} mb={8}>
              This talk covered methods in which companies and incubators can
              further train staff to facilitate the development start-up
              ecosystems, accelerate successful launches and growth rates, and
              empower the broader community with technology workshops,
              code-alongs, educational experiences, and industry leader keynotes
              and mentorship.
            </Text>
          </Flex>
        </Stack>
      </Container>
    </>
  );
};

export default About;
