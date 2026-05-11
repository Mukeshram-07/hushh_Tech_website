import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  List,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import Companion from "../../svg/companion.svg";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "lucide-react";

const Consumers = () => {
  return (
    <>
      <Box
        gap={{ md: "3rem", base: "1rem" }}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        w={"100%"}
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
          For Consumers
        </Heading>
        <Text
          fontSize={{ md: "2.83rem", base: "1.41rem" }}
          lineHeight={"1.2"}
          fontWeight={"700"}
          as={"h2"}
          color={"#1c1c1c"}
        >
          Own Your Data, <br /> Unlock Its Value{" "}
        </Text>
        <Text
          color={"#434343"}
          fontWeight={"700"}
          lineHeight={"1.2"}
          fontSize={{ md: "1.5rem", base: "0.875rem" }}
        >
          Your Data, Your Rules. Get Rewarded for What You Share.
        </Text>
        <Text
          fontWeight={"400"}
          fontSize={{ md: "1rem", base: "0.8rem" }}
          lineHeight={"1.2"}
        >
          Take control of your digital footprint and unlock personalized
          experiences and exclusive rewards with Hushh's suite of products.
        </Text>

        {/* Priority 4 — Top product cards: HStack → Flex responsive */}
        <Flex
          direction={{ base: "column", md: "row" }}
          spacing={4}
          gap={{ md: "1rem", base: "1rem" }}
          justifyContent="center"
          w="100%"
          px={{ base: "1rem", md: "0" }}
          alignItems="center"
        >
          <Box
            bg="black"
            color="white"
            borderRadius="3xl"
            overflow="hidden"
            textAlign="center"
          >
            <Image
              src="/gif/typing.gif"
              alt="Hushh Companion Hushh Browser Companion"
              width={"340px"}
              height={"220px"}
            />
            <Box p={4} bg={"rgba(28,28,28,1)"} color={"white"}>
              <Text fontWeight="400" fontSize={{ md: "0.75rem", base: "0.75rem" }}>
                Hushh Companion
              </Text>
              <Text fontWeight={"600"} fontSize={{ md: "1.25rem", base: "1rem" }}>
                Track Your Digital <br /> Footprint
              </Text>
            </Box>
          </Box>

          <Box
            bg="black"
            color="white"
            borderRadius="3xl"
            overflow="hidden"
            textAlign="center"
          >
            <Image
              src="/images/fendiCards.png"
              alt="Hushh Wallet"
              width={"460px"}
              height={"370px"}
            />
            <Box p={4} bg={"rgba(28,28,28,1)"} color={"white"}>
              <Text fontWeight="400" fontSize={{ md: "0.75rem", base: "0.75rem" }}>
                Hushh Wallet
              </Text>
              <Text fontWeight={"600"} fontSize={{ md: "1.25rem", base: "1rem" }}>
                Your Personal Data, <br /> Your Powerhouse
              </Text>
            </Box>
          </Box>

          <Box
            bg="black"
            color="white"
            borderRadius="3xl"
            overflow="hidden"
            textAlign="center"
          >
            <Image
              src="/images/dressImage.png"
              alt="Vibe Search"
              width={"340px"}
              height={"220px"}
            />
            <Box p={4} bg={"rgba(28,28,28,1)"} color={"white"}>
              <Text fontWeight="400" fontSize={{ md: "0.75rem", base: "0.75rem" }}>
                Vibe Search
              </Text>
              <Text fontWeight={"600"} fontSize={{ md: "1.25rem", base: "1rem" }}>
                Stop Scrolling, <br /> Start Discovering!
              </Text>
            </Box>
          </Box>
        </Flex>
      </Box>

      {/* Priority 4 — Wallet video section: HStack → Flex responsive */}
      <Flex
        direction={{ base: "column", md: "row" }}
        bg={"#D9D2E9"}
        px={{ md: "10rem", base: "1rem" }}
        mt={{ md: "3rem", base: "1rem" }}
        gap={{ md: "6rem", base: "1.5rem" }}
        padding={{ md: "2rem", base: "1rem" }}
        alignItems={"center"}
        w={"100%"}
      >
        <Box
          as="div"
          className="embed-container"
          w="100%"
          maxW="400px"
          overflow="hidden"
          position="relative"
          paddingBottom="56.25%"
          flexShrink={0}
        >
          <iframe
            src="https://www.youtube.com/embed/igf1PYq1WOM"
            title="Hushh User Journey"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "85%",
            }}
          />
        </Box>

        <Box
          p={4}
          textAlign={"left"}
          display={"flex"}
          flexDirection={"column"}
          gap={{ md: "2rem", base: "1rem" }}
        >
          <Text
            fontSize={{ md: "2rem", base: "1.2rem" }}
            fontWeight="500"
            lineHeight="1.2"
            color="#434343"
          >
            Imagine This
          </Text>
          <Text
            mr={{ md: "6rem", base: "0" }}
            color={"#666666"}
            fontWeight={"400"}
            lineHeight={"1.2"}
            fontSize={{ md: "1rem", base: "0.875rem" }}
          >
            You walk into your favorite store, and the sales agent understands
            your style, size, and even your vibe. They offer you personalized
            recommendations and exclusive discounts, all because you've chosen
            to share relevant information with them.
          </Text>
          <Text
            color={"#666666"}
            fontWeight={"700"}
            lineHeight={"1.2"}
            fontSize={{ md: "1rem", base: "0.875rem" }}
          >
            This is the power of Hushh Wallet.
          </Text>
        </Box>
      </Flex>

      <VStack bg={"#F5F5F7"} p={{ md: "4rem", base: "1rem" }}>
        <Text
          fontSize={{ md: "2.3rem", base: "1.15rem" }}
          color={"#1c1c1c"}
          fontWeight={"700"}
          lineHeight={"1.2"}
        >
          Hushh Wallet
        </Text>
        <Text
          fontSize={{ md: "1.16rem", base: "0.8rem" }}
          color={"#434343"}
          fontWeight={"600"}
          lineHeight={"1.2"}
        >
          Take control of your digital identity and unlock a world of
          personalized experiences and rewards.
        </Text>
        <Image src="/images/mobile.png" alt="Hushh Wallet App" />
        <Text
          color={"#434343"}
          fontWeight={"400"}
          fontSize={{ md: "1.5rem", base: "0.875rem" }}
          lineHeight={"1.2"}
        >
          We live in a{" "}
          <span style={{ fontWeight: "500" }}>data-driven world.</span>
        </Text>
        <Text
          color={"#434343"}
          fontWeight={"400"}
          fontSize={{ md: "1.5rem", base: "0.875rem" }}
          lineHeight={"1.2"}
        >
          Every online interaction, every purchase, every click leaves a digital
          footprint.
        </Text>
        <Text
          color={"#434343"}
          fontWeight={"400"}
          fontSize={{ md: "1.5rem", base: "0.875rem" }}
          lineHeight={"1.2"}
        >
          Hushh Wallet empowers you to{" "}
          <span style={{ fontWeight: "500" }}>take control</span> of that data
          and{" "}
          <span style={{ fontWeight: "500" }}>use it to your advantage.</span>
        </Text>
      </VStack>

      <Accordion
        allowToggle
        minW={"100%"}
        w="100%"
        flexDirection="row"
        p={{ md: "4rem", base: "1rem" }}
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
      >
        <AccordionItem>
          <Box
            bg="purple.200"
            p={4}
            w={{ md: "250px", base: "150px" }}
            h={{ md: "200px", base: "100px" }}
            m={2}
            borderRadius="md"
            textAlign="center"
          >
            {/* Priority 6 — minH on AccordionButton */}
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
                alignSelf="flex-start"
              >
                Unify your Scattered Data
              </Box>
              {/* Priority 6 — aria-hidden on icon */}
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
            Collect your data from phones, apps, brands, and data giants
            creating a comprehensive digital profile.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <Box
            bg="pink.200"
            w={{ md: "250px", base: "150px" }}
            h={{ md: "200px", base: "100px" }}
            p={4}
            m={2}
            borderRadius="md"
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
                alignSelf="flex-start"
              >
                Curate your Identity
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
            Manage and refine your digital identity to reflect your true self.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <Box
            bg="pink.300"
            w={{ md: "250px", base: "150px" }}
            h={{ md: "200px", base: "100px" }}
            p={4}
            m={2}
            borderRadius="md"
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
                alignSelf="flex-start"
              >
                Unlock Personalized Experiences
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
            Share your data to receive tailored experiences and offers.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <Box
            bg="blue.200"
            w={{ md: "250px", base: "150px" }}
            h={{ md: "200px", base: "100px" }}
            p={4}
            m={2}
            borderRadius="md"
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
                alignSelf="flex-start"
              >
                Get Rewarded
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
            Earn rewards for sharing your data with trusted partners.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <Box
            bg="blue.300"
            w={{ md: "250px", base: "150px" }}
            h={{ md: "200px", base: "100px" }}
            p={4}
            m={2}
            borderRadius="md"
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
                alignSelf="flex-start"
              >
                Transparency and Control
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
            Maintain full control over who accesses your data and how it is
            used.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      {/* Priority 4 — Wallet video section: HStack → Flex responsive */}
      {/* Priority 1 — Responsive iframe for Hushh Wallet video */}
      <Flex
        direction={{ base: "column", md: "row" }}
        my={{ md: "2rem", base: "1rem" }}
        alignItems={"center"}
        justifyContent={"center"}
        gap={{ md: "4rem", base: "1.5rem" }}
        px={{ base: "1rem", md: "0" }}
      >
        <Text
          fontWeight={"700"}
          lineHeight={"1.2"}
          color={"rgba(28,28,28,1)"}
          fontSize={{ md: "2rem", base: "1rem" }}
          textAlign={{ base: "center", md: "left" }}
        >
          Glimpse into Hushh Wallet
        </Text>
        <Box
          width="100%"
          maxW="828px"
          position="relative"
          paddingBottom="56.25%"
          height="0"
          overflow="hidden"
          borderRadius="15px"
          flexShrink={0}
        >
          <iframe
            src="https://www.youtube.com/embed/WYppPoOSi7k?si=yMlu5PUzuZhueJZm"
            title="Hushh Wallet Demo"
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
              borderRadius: "15px",
            }}
          />
        </Box>
      </Flex>

      <VStack
        my={{ md: "8rem", base: "1rem" }}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Flex
          direction={{ base: "column", md: "row" }}
          alignItems={"center"}
          justifyContent={"center"}
          gap={{ md: "4rem", base: "1.5rem" }}
          bg={"rgba(0,0,0,0)"}
          mx={{ md: "6rem", base: "1rem" }}
          textAlign={{ base: "center", md: "left" }}
        >
          <Text
            fontWeight={"700"}
            lineHeight={"1.2"}
            color={"#434343"}
            fontSize={{ md: "1.5rem", base: "0.875rem" }}
          >
            Hushh Wallet is more than just an app; it's a movement.
            <br />
            Download and unlock the true power of your personal data.
          </Text>
          <Image
            src="/images/QRWallet.png"
            alt="Hushh Wallet QR Code"
            boxSize={{ md: "16rem", base: "100px" }}
          />
        </Flex>
        <Button
          maxW={{ md: "680px", base: "90%" }}
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
          Want to have Wallet capabilities in your brand?
        </Button>
      </VStack>
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
          Hushh Companion
        </Text>
        <Text
          color={"#434343"}
          fontWeight={"600"}
          lineHeight={"1.2"}
          fontSize={{ md: "1.17rem", base: "0.8rem" }}
        >
          More than just a Chrome extension – it's your personal companion for a
          smarter, <br /> more organized digital life.{" "}
        </Text>
        <Accordion
          allowToggle
          minW={"80%"}
          w="100%"
          flexDirection="row"
          p={{ md: "4rem", base: "1rem" }}
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          gap={{ md: "6rem", base: "1rem" }}
        >
          <AccordionItem>
            <Box
              bg="purple.200"
              p={4}
              w={{ md: "250px", base: "150px" }}
              h={{ md: "200px", base: "100px" }}
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
                  alignSelf="flex-start"
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
              w={{ md: "250px", base: "150px" }}
              h={{ md: "200px", base: "100px" }}
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
                  alignSelf="flex-start"
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
                    <strong>Cross-Brand Shopping Cart: </strong> Compare
                    products across different websites with ease.
                  </ListItem>
                  <ListItem>
                    <strong>Curated Collections: </strong> Save and organize
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
              w={{ md: "250px", base: "150px" }}
              h={{ md: "200px", base: "100px" }}
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
                  alignSelf="flex-start"
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
                    <strong>Future-Ready: </strong> Coming soon - Hushh Wallet
                    for secure, consensual data monetization.
                  </ListItem>
                </UnorderedList>
              </Box>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </VStack>

      {/* Priority 2 — Companion iframe: responsive wrapper */}
      {/* Priority 4 — Companion section: HStack → Flex responsive */}
      <Flex
        direction={{ base: "column", md: "row" }}
        my={{ md: "2rem", base: "1rem" }}
        alignItems={"center"}
        justifyContent={"center"}
        gap={{ md: "4rem", base: "1.5rem" }}
        px={{ base: "1rem", md: "0" }}
      >
        <Box
          width="100%"
          maxW="728px"
          position="relative"
          paddingBottom="56.25%"
          height="0"
          overflow="hidden"
          borderRadius="15px"
          flexShrink={0}
        >
          <iframe
            src="https://www.youtube.com/embed/371l4LVRcwo?si=RcUlPxi17GAUWJLS"
            title="Hushh Browser Companion"
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
              borderRadius: "15px",
            }}
          />
        </Box>
        <Image src="/images/browserCompanion.png" alt="Hushh Browser Companion" />
      </Flex>

      <VStack
        my={{ md: "8rem", base: "1rem" }}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Flex
          direction={{ base: "column", md: "row" }}
          alignItems={"center"}
          justifyContent={"center"}
          gap={{ md: "4rem", base: "1.5rem" }}
          bg={"rgba(0,0,0,0)"}
          textAlign={{ base: "center", md: "right" }}
          mx={{ md: "6rem", base: "1rem" }}
        >
          <Text
            fontWeight={"700"}
            lineHeight={"1.2"}
            color={"#434343"}
            fontSize={{ md: "1.5rem", base: "0.875rem" }}
          >
            Ready to enhance your digital journey? Add Hushh Companion
            <br />
            to Chrome today and start exploring the web on your own
            <br />
            terms!
          </Text>
          <Image
            src={Companion}
            alt="Hushh Browser Companion"
            boxSize={{ md: "16rem", base: "100px" }}
          />
        </Flex>
        <Button
          maxW={{ md: "680px", base: "90%" }}
          px={"12px"}
          bg={"rgba(153, 40, 112, 1)"}
          color={"white"}
          _hover={{
            color: "white",
            background: "black",
          }}
          onClick={() =>
            window.open(
              "https://chromewebstore.google.com/detail/hushh-browser-companion/glmkckchoggnebfiklpbiajpmjoagjgj?authuser=0&hl=en",
              "_blank"
            )
          }
        >
          Want to know more about Hushh Companion?
        </Button>
      </VStack>
      <Divider borderWidth={"2px"} my={"1rem"} stroke={"grey"} />

      <VStack>
        <Text
          fontWeight={"700"}
          lineHeight={"1.2"}
          color={"#1c1c1c"}
          fontSize={{ md: "2.3rem", base: "1.15rem" }}
        >
          Vibe Search
        </Text>
        <Text
          fontWeight={"600"}
          lineHeight={"1.2"}
          color={"#434343"}
          mt={{ md: "1rem", base: "0.5rem" }}
          fontSize={{ md: "1.1rem", base: "0.8rem" }}
        >
          Stop Searching, Start Vibing.
        </Text>
        <Text
          fontWeight={"600"}
          lineHeight={"1.2"}
          color={"#434343"}
          fontSize={{ md: "1.1rem", base: "0.8rem" }}
        >
          Find your perfect outfit effortlessly <br />with AI-powered fashion
          search.
        </Text>

        {/* Priority 3 & 4 — Vibe Search video 1: responsive iframe + Flex layout */}
        <Flex
          direction={{ base: "column", md: "row" }}
          my={{ md: "2.5rem", base: "1.5rem" }}
          gap={{ md: "8rem", base: "1.5rem" }}
          px={{ md: "12rem", base: "1rem" }}
          boxSizing="border-box"
          width={"100%"}
          alignItems="center"
        >
          <Box
            width="100%"
            maxW="360px"
            position="relative"
            paddingBottom="171.67%"
            height="0"
            overflow="hidden"
            borderRadius="10px"
            flexShrink={0}
          >
            <iframe
              src="https://www.youtube.com/embed/gGFm5QVsJwg?si=LIBm-M3--HA10I7g"
              title="Vibe Search Demo"
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
          <VStack
            flex={1}
            gap={{ md: "1.25rem", base: "0.875rem" }}
            textAlign={"left"}
            alignItems={"flex-start"}
          >
            <Text
              fontWeight={"700"}
              lineHeight={"1.2"}
              color={"rgba(28,28,28,1)"}
              fontSize={{ md: "1.5rem", base: "0.875rem" }}
            >
              Unleash the Power of AI Search
            </Text>
            <Text
              fontWeight={"400"}
              lineHeight={"1.2"}
              color={"rgba(28,28,28,1)"}
              fontSize={{ md: "1rem", base: "0.8rem" }}
            >
              Describe what you want using natural language - "boho summer
              dress," "Dark academia aesthetic outfits for fall," "minimal
              office outfit," "bold office outfits for women," "dresses for a
              summer beach party," – Vibe Search understands!
            </Text>
            <Text
              fontWeight={"400"}
              lineHeight={"1.2"}
              color={"rgba(28,28,28,1)"}
              fontSize={{ md: "1rem", base: "0.8rem" }}
            >
              See a look you love? Upload the picture and instantly discover
              similar items.
            </Text>
            <Text
              fontWeight={"400"}
              lineHeight={"1.2"}
              color={"rgba(28,28,28,1)"}
              fontSize={{ md: "1rem", base: "0.8rem" }}
            >
              No more keyword stuffing – Vibe Search gets you there faster and
              more accurately.
            </Text>
          </VStack>
        </Flex>
      </VStack>

      <Flex
        direction={{ base: "column", md: "row" }}
        my={{ md: "2rem", base: "1rem" }}
        px={{ md: "12rem", base: "1rem" }}
        gap={{ md: "4rem", base: "1.5rem" }}
        alignItems="flex-start"
      >
        <VStack textAlign={"left"} alignItems={"flex-start"} justifyContent={"flex-start"}>
          <Text
            fontWeight={"700"}
            lineHeight={"1.2"}
            color={"rgba(153,40,112,1)"}
            fontSize={{ md: "1.5rem", base: "0.875rem" }}
          >
            Try Vibe Search Now
          </Text>
          <Text
            mt={{ md: "1.5rem", base: "0.5rem" }}
            fontWeight={"400"}
            fontSize={{ md: "1rem", base: "0.8rem" }}
            lineHeight={"1.2"}
          >
            Example Queries:{" "}
          </Text>
          <UnorderedList
            gap={{ md: "1rem", base: "0.5rem" }}
            display={"flex"}
            flexDirection={"column"}
            fontWeight={"400"}
            fontSize={{ md: "1rem", base: "0.8rem" }}
            lineHeight={"1.2"}
          >
            <ListItem>Boho Summer Dress</ListItem>
            <ListItem>Casual Summer Dress</ListItem>
            <ListItem>Minimal Office Outfit</ListItem>
            <ListItem>Bold Office Outfits for Women</ListItem>
            <ListItem>Dresses for a Summer Beach Party</ListItem>
            <ListItem>Ball Dresses</ListItem>
            <ListItem>Streetwear for Men</ListItem>
            <ListItem>Floral and Striped Dresses</ListItem>
          </UnorderedList>
        </VStack>
      </Flex>

      {/* Priority 3 & 4 — Vibe Search video 2: responsive iframe + Flex layout */}
      <Flex
        direction={{ base: "column", md: "row" }}
        my={{ md: "2.5rem", base: "1.5rem" }}
        gap={{ md: "14rem", base: "1.5rem" }}
        px={{ md: "12rem", base: "1rem" }}
        boxSizing="border-box"
        width={"100%"}
        alignItems="center"
      >
        <Box
          width="100%"
          maxW="360px"
          position="relative"
          paddingBottom="171.67%"
          height="0"
          overflow="hidden"
          borderRadius="10px"
          flexShrink={0}
        >
          <iframe
            src="https://www.youtube.com/embed/4tH9j6kIQ0Q?si=3kp9oBbXRdh7Ewab"
            title="Vibe Search Personalization"
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
        <VStack
          flex={1}
          gap={{ md: "1.25rem", base: "0.875rem" }}
          textAlign={"left"}
          alignItems={"flex-start"}
        >
          <Text
            fontWeight={"700"}
            lineHeight={"1.2"}
            color={"rgba(28,28,28,1)"}
            fontSize={{ md: "1.5rem", base: "0.875rem" }}
          >
            Personalization That Gets You
          </Text>
          <Text
            fontWeight={"400"}
            lineHeight={"1.2"}
            color={"rgba(28,28,28,1)"}
            fontSize={{ md: "1rem", base: "0.8rem" }}
          >
            <span style={{ fontWeight: "500" }}>Your Style, Your Feed:</span>{" "}
            Vibe Search learns what you love. The more you interact, the more
            tailored your results become.
          </Text>
          <Text
            fontWeight={"400"}
            lineHeight={"1.2"}
            color={"rgba(28,28,28,1)"}
            fontSize={{ md: "1rem", base: "0.8rem" }}
          >
            <span style={{ fontWeight: "500" }}>Effortless Discovery:</span>{" "}
            Just browse and like products – Vibe Search personalizes your
            experience automatically.
          </Text>
          <Text
            fontWeight={"400"}
            lineHeight={"1.2"}
            color={"rgba(28,28,28,1)"}
            fontSize={{ md: "1rem", base: "0.8rem" }}
          >
            <span style={{ fontWeight: "500" }}>Control Your Style Journey:{" "}</span>
            Soon you'll be able to fine-tune your preferences for ultimate
            control.
          </Text>
        </VStack>
      </Flex>

      <VStack my={{ md: "2rem", base: "1rem" }} textAlign={"center"} gap={{ md: "2rem", base: "1rem" }}>
        <Text
          color={"#434343"}
          fontSize={{ md: "1.5rem", base: "0.875rem" }}
          fontWeight={"600"}
        >
          Ready to find your perfect fashion match? Start vibing with Vibe{" "}
          <br /> Search today!
        </Text>
        <Button
          maxW={{ md: "680px", base: "90%" }}
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
          Schedule a demo to know more about Vibe Search
        </Button>
      </VStack>
    </>
  );
};

export default Consumers;