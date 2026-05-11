import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import MultiUserIcon from "../../svg/multiUser.svg";
import LockIcon from "../../svg/lockIcon.svg";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "lucide-react";

const Business = () => {
  return (
    <>
      <Box
        gap={{ md: "3rem", base: "1rem" }}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        w={"100%"}
        textAlign={"center"}
        minH={"100vh"}
      >
        <Heading
          fontWeight={"700"}
          lineHeight={"1.2"}
          fontSize={{ md: "1.25rem", base: "0.875rem" }}
          as={"h1"}
          color={"rgba(61,61,145,1)"}
          mt={{ md: "4rem", base: "2rem" }}
        >
          For Businesses
        </Heading>
        <Text
          fontSize={{ md: "2.83rem", base: "1.41rem" }}
          lineHeight={"1.2"}
          fontWeight={"700"}
          as={"h2"}
          color={"#1c1c1c"}
        >
          Enable Customers. Enrich Data.
          <br /> Enhance Business.
        </Text>
        <Text
          color={"#434343"}
          fontWeight={"700"}
          lineHeight={"1.2"}
          fontSize={{ md: "1.5rem", base: "0.875rem" }}
        >
          Revolutionize customer insights, Personalize commerce,
          <br />
          Build deeper connections with your customers' consent and control.
        </Text>

        <Text
          fontWeight={"400"}
          fontSize={{ md: "1rem", base: "0.8rem" }}
          lineHeight={"1.2"}
        >
          Hushh's AI-first platform bridges the gap by empowering customers to
          control their data while <br /> brands unlock new possibilities for
          engagement, trust, and growth.
        </Text>
      </Box>

      <Flex
        direction={{ base: "column", md: "row" }}
        my={{ md: "2.5rem", base: "1.5rem" }}
        gap={{ md: "8rem", base: "2.5rem" }}
        px={{ md: "12rem", base: "1rem" }}
        boxSizing="border-box"
        width={"100%"}
        align="center"
      >
        <Image
          w="100%"
          maxW="474px"
          src="/images/media.png"
          alt="Hushh Eco System"
        />
        <VStack
          flex={1}
          gap={{ md: "1.25rem", base: "0.65rem" }}
          textAlign={{ base: "center", md: "left" }}
          alignItems={{ base: "center", md: "flex-start" }}
        >
          <Text
            fontWeight={"700"}
            lineHeight={"1.2"}
            color={"rgba(28,28,28,1)"}
            fontSize={{ md: "1.5rem", base: "0.875rem" }}
          >
            Hushh Ecosystem
          </Text>
          <Text
            fontWeight={"400"}
            lineHeight={"1.2"}
            color={"rgba(28,28,28,1)"}
            fontSize={{ md: "1rem", base: "0.8rem" }}
          >
            Hushh offers a suite of products designed to revolutionize how
            businesses interact with their customers in the age of personalized
            experiences.
          </Text>
          <Text
            fontWeight={"400"}
            lineHeight={"1.2"}
            color={"rgba(28,28,28,1)"}
            fontSize={{ md: "1rem", base: "0.8rem" }}
          >
            Forget generic marketing and one-size-fits-all approaches.
          </Text>
          <Text
            fontWeight={"400"}
            lineHeight={"1.2"}
            color={"rgba(28,28,28,1)"}
            fontSize={{ md: "1rem", base: "0.8rem" }}
          >
            Hushh empowers you to create{" "}
            <span style={{ fontWeight: "500" }}>meaningful connections </span>{" "}
            built on <span style={{ fontWeight: "500" }}>trust </span> and{" "}
            <span style={{ fontWeight: "500" }}>tailored</span> interactions.
          </Text>
        </VStack>
      </Flex>

      <Text
        my={{ md: "2rem", base: "1rem" }}
        fontSize={{ md: "1.5rem", base: "0.875rem" }}
        color={"#434343"}
        fontWeight={"700"}
        textAlign={"center"}
        width={"100%"}
        lineHeight={"1.2"}
      >
        Here's how Hushh can transform your business
      </Text>

      <VStack
        textAlign={"center"}
        alignItems={"center"}
        justifyContent={"center"}
        bg={"rgba(245, 245, 247, 1)"}
        p={{ md: "3rem", base: "1rem" }}
      >
        <Text
          fontWeight={"700"}
          lineHeight={"1.2"}
          color={"#434343"}
          fontSize={{ md: "1.5rem", base: "0.875rem" }}
        >
          Hushh Developer APIs
        </Text>
        <Text
          fontWeight={"400"}
          lineHeight={"1.2"}
          mt={{ md: "1.5rem", base: "0.75rem" }}
          color={"rgba(28,28,28,1)"}
          fontSize={{ md: "1.16rem", base: "0.8rem" }}
        >
          Unlock the{" "}
          <span style={{ fontWeight: "500" }}>
            power of consent-driven data{" "}
          </span>{" "}
          to deliver personalized experiences by <br />{" "}
          <span style={{ fontWeight: "500" }}>
            integrating our APIs seamlessly with your CRM and applications,
          </span>{" "}
          leading to <br /> increased engagement, customer loyalty, and
          ultimately, higher conversion rates.*
        </Text>

        <Accordion
          allowToggle
          minW={"80%"}
          w="100%"
          flexDirection="row"
          p={{ md: "4rem", base: "1rem" }}
          display="flex"
          justifyContent="center"
          flexWrap="wrap"
          gap={{ md: "6rem", base: "1rem" }}
        >
          <AccordionItem>
            <Box
              bg="purple.200"
              p={{ md: "2rem", base: "0.75rem" }}
              w={{ base: "100%", md: "250px" }}
              maxW="250px"
              minH="220px"
              m={2}
              textAlign="center"
              alignItems={"center"}
              justifyContent={"center"}
              display={"flex"}
              flexDirection={"column"}
            >
              <Image src={LockIcon} alt="Consent Driven" boxSize={"5rem"} />
              <AccordionButton
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                alignItems="center"
                h="100%"
                minH="44px"
              >
                <Box
                  as="span"
                  flex="1"
                  fontWeight="500"
                  fontSize={{ md: "1.5rem", base: "1rem" }}
                  alignSelf={{ base: "center", md: "flex-start" }}
                >
                  Consent-driven <br /> Data
                </Box>
                <ChevronDownIcon
                  aria-hidden="true"
                  style={{
                    background: "#5f6368",
                    color: "white",
                    borderRadius: "50%",
                  }}
                  stroke="white"
                  alignSelf="flex-end"
                />
              </AccordionButton>
            </Box>
            <AccordionPanel pb={4} fontSize={{ md: "1rem", base: "0.8rem" }}>
              <Box maxWidth="280px" mx="auto" textAlign={"left"}>
                <Text
                  color={"#030712"}
                  lineHeight={"1.38"}
                  fontWeight={"400"}
                  fontSize={{ md: "1rem", base: "0.8rem" }}
                >
                  Integrate Hushh APIs into your systems to access valuable,
                  zero-party customer data with user consent, adhering to GDPR
                  standards.
                </Text>
              </Box>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <Box
              bg="purple.200"
              p={{ md: "2rem", base: "0.75rem" }}
              w={{ base: "100%", md: "250px" }}
              maxW="250px"
              minH="220px"
              m={2}
              textAlign="center"
              alignItems={"center"}
              justifyContent={"center"}
              display={"flex"}
              flexDirection={"column"}
            >
              <Image
                src={MultiUserIcon}
                alt="Personalized Experiences"
                boxSize={"5rem"}
              />
              <AccordionButton
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                alignItems="center"
                h="100%"
                minH="44px"
              >
                <Box
                  as="span"
                  flex="1"
                  fontWeight="500"
                  fontSize={{ md: "1.5rem", base: "1rem" }}
                  alignItems={"center"}
                  justifyContent={"center"}
                  display={"flex"}
                  flexDirection={"column"}
                >
                  Personalized <br /> Experiences
                </Box>
                <ChevronDownIcon
                  aria-hidden="true"
                  style={{
                    background: "#5f6368",
                    color: "white",
                    borderRadius: "50%",
                  }}
                  stroke="white"
                  alignSelf="flex-end"
                />
              </AccordionButton>
            </Box>
            <AccordionPanel pb={4} fontSize={{ md: "1rem", base: "0.8rem" }}>
              <Box maxWidth="280px" mx="auto" textAlign={"left"}>
                <Text
                  color={"#030712"}
                  lineHeight={"1.38"}
                  fontWeight={"400"}
                  fontSize={{ md: "1rem", base: "0.8rem" }}
                >
                  Leverage user preferences, purchase history, and behavior to
                  deliver targeted marketing, personalized recommendations, and
                  bespoke services.
                </Text>
              </Box>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <Box
              bg="purple.200"
              p={{ md: "2rem", base: "1rem" }}
              w={{ base: "100%", md: "250px" }}
              maxW="250px"
              minH="220px"
              m={2}
              textAlign="center"
            >
              <AccordionButton
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                alignItems="center"
                h="100%"
                minH="44px"
              >
                <Box
                  as="span"
                  flex="1"
                  fontWeight="500"
                  fontSize={{ md: "1.5rem", base: "1rem" }}
                  textAlign="center"
                  alignItems={"center"}
                  justifyContent={"center"}
                  display={"flex"}
                  flexDirection={"column"}
                >
                  Trust & <br /> Transparency
                </Box>
                <ChevronDownIcon
                  aria-hidden="true"
                  style={{
                    background: "#5f6368",
                    color: "white",
                    borderRadius: "50%",
                  }}
                  stroke="white"
                  alignSelf="flex-end"
                />
              </AccordionButton>
            </Box>
            <AccordionPanel pb={4} fontSize={{ md: "1rem", base: "0.8rem" }}>
              <Box maxWidth="280px" mx="auto" textAlign={"left"}>
                <Text
                  color={"#030712"}
                  lineHeight={"1.38"}
                  fontWeight={"400"}
                  fontSize={{ md: "1rem", base: "0.8rem" }}
                >
                  Empower your users to control their data and decide what they
                  share, fostering a relationship built on transparency and
                  trust.
                </Text>
              </Box>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </VStack>

      <VStack
        my={{ md: "3rem", base: "1.5rem" }}
        px={"18.5%"}
        gap={{ md: "1rem", base: "0.5rem" }}
        textAlign={{ base: "center", md: "left" }}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Text
          textAlign={{ base: "center", md: "left" }}
          fontWeight={"700"}
          fontSize={{ md: "1.5rem", base: "0.875rem" }}
          lineHeight={"1.2"}
          color={"rgba(28,28,28,1)"}
          alignSelf={{ base: "center", md: "flex-start" }}
        >
          Glimpse into Developer APIs
        </Text>

        <Box
          width="100%"
          maxW="950px"
          position="relative"
          paddingBottom="56.25%"
          height="0"
          overflow="hidden"
          borderRadius="10px"
          flexShrink={0}
        >
          <iframe
            src="https://www.youtube.com/embed/mXymL7IZBPg?si=ipvIGuTEY7eQlvJC"
            title="Developer APIs Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              borderRadius: "10px",
            }}
          />
        </Box>
      </VStack>

      <Flex
        direction={{ base: "column", lg: "row" }}
        align="center"
        justify="space-between"
        bg="#F5F7F9"
        p={{ base: 6, lg: 10 }}
        w="full"
        gap={10}
      >
        <Box textAlign={{ base: "center", lg: "left" }} flexShrink={0}>
          <Heading as="h2" size="lg" mb={6} color="#4A5568">
            Are you one of the following?
          </Heading>
        </Box>

        <Flex
          flexWrap="wrap"
          justify="space-around"
          w="full"
          gap={6}
          bg="#E6F4FF"
          mt={{ base: 8, lg: 0 }}
        >
          <VStack
            bg="#E6F4FF"
            p={8}
            borderRadius="md"
            align="start"
            boxShadow="md"
            maxW="300px"
            minH="220px"
          >
            <Heading as="h3" size="md" color="#2D3748">
              Forward-thinking Businesses
            </Heading>
            <Text mt={4} color="#4A5568">
              Across industries like{" "}
              <b>
                fashion, retail, wellness, travel, electronics, luxury,
              </b>{" "}
              and more, Hushh APIs empower you to personalize the customer
              journey and build deeper connections.
            </Text>
          </VStack>

          <VStack
            bg="#E6F4FF"
            p={8}
            borderRadius="md"
            align="start"
            boxShadow="md"
            maxW="300px"
            minH="220px"
          >
            <Heading as="h3" size="md" color="#2D3748">
              Application <br /> Developers
            </Heading>
            <Text mt={4} color="#4A5568">
              Integrate Hushh's powerful consent-driven data insights into your
              apps to create{" "}
              <b>hyper-personalized user experiences</b> that drive engagement
              and satisfaction.
            </Text>
          </VStack>

          <VStack
            bg="#E6F4FF"
            p={8}
            borderRadius="md"
            align="start"
            boxShadow="md"
            maxW="300px"
            minH="220px"
          >
            <Heading as="h3" size="md" color="#2D3748">
              CRM & Database Managers
            </Heading>
            <Text mt={4} color="#4A5568">
              Enrich your customer profiles with valuable,{" "}
              <b>consented data</b> to power personalized marketing campaigns,
              targeted segmentation, and data-driven decision-making for your
              organization.
            </Text>
          </VStack>
        </Flex>
      </Flex>

      <Box
        bg="#F5F7F9"
        mb={{ md: "2rem", base: "1rem" }}
        w={"100%"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        textAlign={"center"}
      >
        <Button
          w={{ base: "90%", md: "780px" }}
          minH="44px"
          px={"12px"}
          bg={"rgba(153, 40, 112, 1)"}
          color={"white"}
          _hover={{
            color: "white",
            background: "black",
          }}
          onClick={() =>
            window.open(
              "https://docs.google.com/forms/d/e/1FAIpQLSeIQF0GhLxmwEHrmOpMRQVlxuJBtQYUP2oT_GQt16h8oyw2Dg/viewform",
              "_blank"
            )
          }
        >
          Want to know more about Hushh Companion?
        </Button>
      </Box>

      <Divider borderWidth={"2px"} my={"1rem"} stroke={"grey"} />

      <VStack
        gap={{ md: "2rem", base: "1rem" }}
        alignItems={"center"}
        textAlign={"center"}
        justifyContent={"center"}
      >
        <Text
          color={"#1c1c1c"}
          fontWeight={"700"}
          lineHeight={"1.2"}
          fontSize={{ md: "2.3rem", base: "1.4rem" }}
        >
          VIBE Search API
        </Text>
        <Text
          color={"#434343"}
          fontWeight={"400"}
          lineHeight={"1.2"}
          fontSize={{ md: "1.17rem", base: "0.875rem" }}
        >
          Delivers{" "}
          <span style={{ fontWeight: "500" }}>
            highly personalized search results
          </span>{" "}
          using <span style={{ fontWeight: "500" }}>semantic analysis</span>,
          image search, <br /> and{" "}
          <span style={{ fontWeight: "500" }}>
            implicit behavior understanding
          </span>
          . Boosts{" "}
          <span style={{ fontWeight: "500" }}>
            customer satisfaction, <br /> engagement, and revenue.
          </span>
        </Text>

        <Accordion
          allowToggle
          minW={"80%"}
          w="100%"
          flexDirection="row"
          p={{ md: "4rem", base: "1rem" }}
          display="flex"
          justifyContent="center"
          flexWrap="wrap"
          gap={{ md: "6rem", base: "1rem" }}
        >
          <AccordionItem>
            <Box
              bg="purple.200"
              p={4}
              w={{ base: "100%", md: "250px" }}
              maxW="250px"
              minH="220px"
              m={2}
              textAlign="center"
            >
              <AccordionButton
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                alignItems="center"
                h="100%"
                minH="44px"
              >
                <Box
                  as="span"
                  flex="1"
                  fontWeight="500"
                  fontSize={{ md: "1.5rem", base: "1rem" }}
                  alignSelf={{ base: "center", md: "flex-start" }}
                >
                  Discover Your <br /> Digital Self
                </Box>
                <ChevronDownIcon
                  aria-hidden="true"
                  style={{
                    background: "#5f6368",
                    color: "white",
                    borderRadius: "50%",
                  }}
                  stroke="white"
                  alignSelf="flex-end"
                />
              </AccordionButton>
            </Box>
            <AccordionPanel pb={4} fontSize={{ md: "1rem", base: "0.8rem" }}>
              <Box maxWidth="280px" mx="auto">
                <UnorderedList spacing={3} textAlign="left">
                  <ListItem>
                    <strong>Track Your Browsing:</strong> Gain insights into
                    your online behavior and interests.
                  </ListItem>
                  <ListItem>
                    <strong>Evolving Interests:</strong> Watch how your
                    preferences change over time.
                  </ListItem>
                  <ListItem>
                    <strong>Data Control:</strong> Choose exactly what
                    information you want to collect.
                  </ListItem>
                </UnorderedList>
              </Box>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <Box
              bg="pink.200"
              w={{ base: "100%", md: "250px" }}
              maxW="250px"
              minH="220px"
              p={4}
              m={2}
              textAlign="center"
            >
              <AccordionButton
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                alignItems="center"
                h="100%"
                minH="44px"
              >
                <Box
                  as="span"
                  flex="1"
                  fontWeight="500"
                  fontSize={{ md: "1.5rem", base: "1rem" }}
                  alignSelf={{ base: "center", md: "flex-start" }}
                >
                  Shop Smarter, <br /> Not Harder
                </Box>
                <ChevronDownIcon
                  aria-hidden="true"
                  style={{
                    background: "#5f6368",
                    color: "white",
                    borderRadius: "50%",
                  }}
                  stroke="white"
                  alignSelf="flex-end"
                />
              </AccordionButton>
            </Box>
            <AccordionPanel pb={4} fontSize={{ md: "1rem", base: "0.8rem" }}>
              <Box maxWidth="280px" mx="auto">
                <UnorderedList spacing={3} textAlign="left">
                  <ListItem>
                    <strong>Cross-Brand Shopping Cart:</strong> Compare products
                    across different websites with ease.
                  </ListItem>
                  <ListItem>
                    <strong>Curated Collections:</strong> Save and organize
                    products you love.
                  </ListItem>
                  <ListItem>
                    <strong>Link Library:</strong> Keep all your favorite
                    content just a click away.
                  </ListItem>
                </UnorderedList>
              </Box>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <Box
              bg="pink.300"
              w={{ base: "100%", md: "250px" }}
              maxW="250px"
              minH="220px"
              p={4}
              m={2}
              textAlign="center"
            >
              <AccordionButton
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                alignItems="center"
                h="100%"
                minH="44px"
              >
                <Box
                  as="span"
                  flex="1"
                  fontWeight="500"
                  fontSize={{ md: "1.5rem", base: "1rem" }}
                  alignSelf={{ base: "center", md: "flex-start" }}
                >
                  Your Data, <br /> Your Way
                </Box>
                <ChevronDownIcon
                  aria-hidden="true"
                  style={{
                    background: "#5f6368",
                    color: "white",
                    borderRadius: "50%",
                  }}
                  stroke="white"
                  alignSelf="flex-end"
                />
              </AccordionButton>
            </Box>
            <AccordionPanel pb={4} fontSize={{ md: "1rem", base: "0.8rem" }}>
              <Box maxWidth="280px" mx="auto">
                <UnorderedList spacing={3} textAlign="left">
                  <ListItem>
                    <strong>Personal Insights:</strong> Understand your digital
                    footprint like never before.
                  </ListItem>
                  <ListItem>
                    <strong>Data Portability:</strong> Easily export your
                    information for personal use.
                  </ListItem>
                  <ListItem>
                    <strong>Future-Ready:</strong> Coming soon - Hushh Wallet
                    for secure, consensual data monetization.
                  </ListItem>
                </UnorderedList>
              </Box>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </VStack>
    </>
  );
};

export default Business;
