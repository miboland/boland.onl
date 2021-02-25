import React, { useState } from "react";
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Button,
  List,
  ListItem,
  Stack,
  Divider,
  ListIcon,
} from "@chakra-ui/react";
import {CheckCircleIcon, ChevronDownIcon} from "@chakra-ui/icons"

const YearDivider = () => {
  const { colorMode } = useColorMode();
  const borderColor = {
    light: "gray.200",
    dark: "gray.600",
  };

  return <Divider borderColor={borderColor[colorMode]} my={8} w="100%" />;
};

const TimelineStep = ({ title, children }) => {
  const { colorMode } = useColorMode();
  const color = {
    light: "gray.700",
    dark: "gray.400",
  };

  return (
    <ListItem>
      <Stack ml={2} mb={4}>
        <Flex align="center">
          <ListIcon as={CheckCircleIcon} mr={2} color="whatsapp.500" />
          <Text fontWeight="medium">{title}</Text>
        </Flex>
        <Text color={color[colorMode]} ml={6}>
          {children}
        </Text>
      </Stack>
    </ListItem>
  );
};

const FullTimeline = () => (
  <>
    <YearDivider />
    <Heading as="h3" size="lg" fontWeight="bold" mb={4} letterSpacing="tighter">
      2018
    </Heading>
    <List>
      <TimelineStep title="Joined Fastpath">
        Left the consulting life at Capgemini to help Fastpath build an
        impressive SAAS product.
      </TimelineStep>
      <TimelineStep title="Co-Founded a Research Center">
        Began development on the David Bohm Center for Dialogue in partnership
        with Arizona State University.
      </TimelineStep>
      <TimelineStep title="Moved to Des Moines 🌆">
        Moved home from Europe to start a full-time position at Capgemini as a
        web consultant.
      </TimelineStep>
    </List>
    <YearDivider />
    <Heading as="h3" size="lg" fontWeight="bold" mb={4} letterSpacing="tighter">
      2017
    </Heading>
    <List>
      <TimelineStep title="Became an Entrepreneur in Residence">
        Moved to the Balkan Peninsula to consult with companies and universities
        developing digital products.
      </TimelineStep>
      <TimelineStep title="Graduated Grad School 🍻">
        Completed my dissertation on higher education alternatives, technology
        vocations, and the future of communities.
      </TimelineStep>
      <TimelineStep title="Moved to Portugal 🇵🇹">
        Moved from Brighton to Porto to complete my dissertation at The New
        Digital School.
      </TimelineStep>
    </List>
    <YearDivider />
    <Heading as="h3" size="lg" fontWeight="bold" mb={4} letterSpacing="tighter">
      2016
    </Heading>
    <List>
      <TimelineStep title="Committed Fully to Javascript">
        Decided to go all in on Javascript, sparked while competing at the
        Blocksmith's blockchain hackathon.
      </TimelineStep>
      <TimelineStep title="Started Digital Melon">
        Started a digital studio, providing UX and web development services to
        clients in the U.K. and Western Europe.
      </TimelineStep>
      <TimelineStep title="Moved to England 🏴󠁧󠁢󠁥󠁮󠁧󠁿">
        Moved to Brighton, England to pursue a Master's degree in Applied
        Psychology with a focus on disruptive technology.
      </TimelineStep>
    </List>
    <YearDivider />
    <Heading as="h3" size="lg" fontWeight="bold" mb={4} letterSpacing="tighter">
      2015
    </Heading>
    <List>
      <TimelineStep title="Backpacked Central America">
        Spent the summer traveling and hiking throughout Mexico, Belize, and
        Guatemala.
      </TimelineStep>
      <TimelineStep title="Graduated College 🎓">
        Intended to pursue a PhD in psychology or anthropology. Then life
        happened.
      </TimelineStep>
    </List>
  </>
);

const Timeline = () => {
  const [isShowingFullTimeline, showFullTimeline] = useState(false);

  return (
    <Flex
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      maxWidth="700px"
      mt={8}
    >
      <Heading letterSpacing="tight" mb={4} size="xl" fontWeight="bold">
        Recent Timeline
      </Heading>
      <Heading
        as="h3"
        size="lg"
        fontWeight="bold"
        mb={4}
        letterSpacing="tighter"
      >
        2020
      </Heading>
      <List>
        <TimelineStep title="Joined Hy-Vee">
          Joined Hy-Vee as a full-stack software engineer to work with the web
          and mobile teams on the Aisles Online e-commerce app.
        </TimelineStep>
        <TimelineStep title="Got engaged 💍">
          Figured again, Covid, the time warp, global chaos. There was no better
          time to ask my partner-in-crime, Melanie, to marry me.
        </TimelineStep>
        <TimelineStep title="Brought home a Puppy 🐶">
          Figured a dog would be nice. Covid, remote work, what even is time?
          Everything is a blur.
        </TimelineStep>
      </List>
      <YearDivider />
      <Heading
        as="h3"
        size="lg"
        fontWeight="bold"
        mb={4}
        letterSpacing="tighter"
      >
        2019
      </Heading>
      <List>
        <TimelineStep title="Joined Mogul e-Sports 🕹️">
          Worked with the talented start-up team at Mogul out of Australia to
          create the future of online e-sports tournaments.
        </TimelineStep>
        <TimelineStep title="Spoke at Reactor Innovation Hub 🎤">
          Spoke to entrepreneurs, freelancers, and creatives about the need to
          foster healthy communication, trust, and more humanity in tech.
        </TimelineStep>
        <TimelineStep title="Revisited Portugal 🛫">
          Returned to Portugal to help some close friends build a human-centered
          design agency called The Human Toolbox.
        </TimelineStep>
      </List>
      {isShowingFullTimeline ? (
        <FullTimeline />
      ) : (
        <Button
          my={4}
          mx="auto"
          fontWeight="medium"
          rightIcon={<ChevronDownIcon />}
          variant="ghost"
          onClick={() => showFullTimeline(true)}
        >
          See More
        </Button>
      )}
    </Flex>
  );
};

export default Timeline;
