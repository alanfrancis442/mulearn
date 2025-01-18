import {
    Avatar,
    AvatarGroup,
    Card,
    CardBody,
    Container,
    Flex,
    Heading,
    Image,
    Input,
    InputGroup,
    InputLeftElement,
    SimpleGrid,
    Stack,
    Text,
    Button
} from "@chakra-ui/react";
import image1 from "../../assets/image1.webp";
import image2 from "../../assets/image2.webp";
import image3 from "../../assets/image3.webp";
import image4 from "../../assets/image4.webp";
import image5 from "../../assets/image5.webp";
import image6 from "../../assets/image6.webp";
import { CiCalendar, CiClock2 } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { Calendar, Clock, MapPin } from "lucide-react";

const LCLanding = () => {
    const learningCircles = [
        {
            id: 1,
            image: image1,
            name: "UI/UX Designers CET",
            karmaPoints: "12.5K",
            college: "College of Engineering Trivandrum",
            location: "Sreekaryam, Trivandrum",
            members: [
                {
                    id: 1,
                    name: "Member 1",
                    avatar: "https://bit.ly/sage-adebayo"
                },
                {
                    id: 2,
                    name: "Member 2",
                    avatar: "https://bit.ly/ryan-florence"
                },
                {
                    id: 3,
                    name: "Member 3",
                    avatar: "https://bit.ly/kent-c-dodds"
                },
                {
                    id: 4,
                    name: "Member 4",
                    avatar: "https://bit.ly/prosper-baba"
                }
            ]
        },
        {
            id: 2,
            image: image2,
            name: "React Developers MACE",
            karmaPoints: "10.2K",
            college: "Mar Athanasius College of Engineering",
            location: "Kothamangalam, Ernakulam",
            members: [
                {
                    id: 1,
                    name: "Member 1",
                    avatar: "https://bit.ly/dan-abramov"
                },
                {
                    id: 2,
                    name: "Member 2",
                    avatar: "https://bit.ly/code-beast"
                },
                {
                    id: 3,
                    name: "Member 3",
                    avatar: "https://bit.ly/tioluwani-kolawole"
                }
            ]
        },
        {
            id: 3,
            image: image3,
            name: "Python ML Group CUSAT",
            karmaPoints: "15.8K",
            college: "Cochin University of Science and Technology",
            location: "Kalamassery, Kochi",
            members: [
                {
                    id: 1,
                    name: "Member 1",
                    avatar: "https://bit.ly/kent-c-dodds"
                },
                {
                    id: 2,
                    name: "Member 2",
                    avatar: "https://bit.ly/ryan-florence"
                },
                {
                    id: 3,
                    name: "Member 3",
                    avatar: "https://bit.ly/prosper-baba"
                },
                {
                    id: 4,
                    name: "Member 4",
                    avatar: "https://bit.ly/code-beast"
                },
                {
                    id: 5,
                    name: "Member 5",
                    avatar: "https://bit.ly/sage-adebayo"
                }
            ]
        },
        {
            id: 4,
            image: image4,
            name: "Cyber Security TKMCE",
            karmaPoints: "9.7K",
            college: "TKM College of Engineering",
            location: "Kollam, Kerala",
            members: [
                {
                    id: 1,
                    name: "Member 1",
                    avatar: "https://bit.ly/sage-adebayo"
                },
                {
                    id: 2,
                    name: "Member 2",
                    avatar: "https://bit.ly/dan-abramov"
                }
            ]
        },
        {
            id: 5,
            image: image5,
            name: "IoT Innovators GECT",
            karmaPoints: "11.3K",
            college: "Government Engineering College, Thrissur",
            location: "Thrissur, Kerala",
            members: [
                {
                    id: 1,
                    name: "Member 1",
                    avatar: "https://bit.ly/kent-c-dodds"
                },
                {
                    id: 2,
                    name: "Member 2",
                    avatar: "https://bit.ly/ryan-florence"
                },
                {
                    id: 3,
                    name: "Member 3",
                    avatar: "https://bit.ly/prosper-baba"
                }
            ]
        },
        {
            id: 6,
            image: image6,
            name: "DevOps Team NSSCE",
            karmaPoints: "13.9K",
            college: "NSS College of Engineering",
            location: "Palakkad, Kerala",
            members: [
                {
                    id: 1,
                    name: "Member 1",
                    avatar: "https://bit.ly/dan-abramov"
                },
                {
                    id: 2,
                    name: "Member 2",
                    avatar: "https://bit.ly/sage-adebayo"
                },
                {
                    id: 3,
                    name: "Member 3",
                    avatar: "https://bit.ly/kent-c-dodds"
                },
                {
                    id: 4,
                    name: "Member 4",
                    avatar: "https://bit.ly/ryan-florence"
                }
            ]
        }
    ];
    return (
        <div
            style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 32
            }}
        >
            <Flex
                w={"100%"}
                justifyContent={"space-between"}
                alignItems={"center"}
                p={4}
                borderRadius={16}
                flexDirection={{ base: "column", md: "row" }}
                gap={{ base: 4, md: 0 }}
            >
                <h1
                    style={{
                        fontSize: "32px",
                        fontWeight: "bold",
                        color: "black",
                        textAlign: "center"
                    }}
                >
                    Learning Circles
                </h1>
                <InputGroup w={{ base: "100%", md: "45%" }}>
                    <InputLeftElement paddingLeft={2} paddingTop={2}>
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M19 19L15.5001 15.5M18 9.5C18 14.1944 14.1944 18 9.5 18C4.80558 18 1 14.1944 1 9.5C1 4.80558 4.80558 1 9.5 1C14.1944 1 18 4.80558 18 9.5Z"
                                stroke="#787878"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </InputLeftElement>
                    <Input
                        type="text"
                        borderRadius={32}
                        backgroundColor={"white"}
                        size={"lg"}
                        placeholder="Search for skills, jobs, locations, colleges"
                    />
                </InputGroup>
            </Flex>

            <Container
                maxW="12xl"
                bg={"white"}
                width={"100%"}
                overflow={"hidden"}
                p={0}
                pt={8}
                pl={8}
                borderRadius={16}
                border={"1px solid rgba(120, 120, 120, 0.5)"}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "start",
                    gap: 64
                }}
            >
                <Container
                    maxW="12xl"
                    p={0}
                    width={"100%"}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "start",
                        gap: 32
                    }}
                >
                    <Flex
                        pr={8}
                        direction={{ base: "column", md: "row" }}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        w={"100%"}
                        gap={{ base: 4, md: 0 }}
                    >
                        <h1
                            style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "black"
                            }}
                        >
                            Learning Circles with upcoming meets
                        </h1>
                        <Button
                            borderRadius={32}
                            bg={"#0961F5"}
                            color={"white"}
                            py={6}
                            px={8}
                        >
                            Create new learning circle
                        </Button>
                    </Flex>
                    <div
                        style={{
                            display: "flex",
                            gap: 16,
                            overflowX: "auto",
                            width: "100%",
                            WebkitOverflowScrolling: "touch",
                            msOverflowStyle: "none" /* IE and Edge */,
                            scrollbarWidth: "none" /* Firefox */
                        }}
                        className="no-scrollbar"
                    >
                        {Array.from({ length: 20 }).map((_, index) => (
                            <div
                                style={{
                                    padding: "8px 16px",
                                    borderRadius: 32,
                                    textWrap: "nowrap",
                                    color: "#787878",
                                    border: "1px solid #787878",
                                    cursor: "pointer"
                                }}
                                key={index}
                            >
                                Your College
                            </div>
                        ))}
                    </div>
                    <div
                        style={{
                            display: "flex",
                            gap: 16,
                            overflowX: "auto",
                            width: "100%",
                            WebkitOverflowScrolling: "touch",
                            msOverflowStyle: "none" /* IE and Edge */,
                            scrollbarWidth: "none" /* Firefox */
                        }}
                        className="no-scrollbar"
                    >
                        {learningCircles.map(learningCircle => (
                            <Card
                                borderRadius={24}
                                border={"1px solid rgba(120, 120, 120, 0.5)"}
                                shadow={"none"}
                                overflow={"hidden"}
                                maxW="md"
                                minW={"md"}
                                p={4}
                            >
                                <Image
                                    src={learningCircle.image}
                                    alt="Green double couch with wooden legs"
                                    height={100}
                                    objectFit={"cover"}
                                    borderRadius={16}
                                    draggable={false}
                                />
                                <CardBody p={0} py={6}>
                                    <Stack spacing="2" align={"start"}>
                                        <Heading size="md">
                                            UI/UX Designers CET
                                        </Heading>
                                        <Heading
                                            size={"sm"}
                                            fontWeight={"semibold"}
                                        >
                                            12.5K Karma Points
                                        </Heading>
                                        <Text fontSize={"sm"}>
                                            College of Engineering Trivandrum
                                        </Text>
                                        <Text fontSize={"sm"}>
                                            Sreekaryam, Trivandrum
                                        </Text>
                                        <Stack
                                            justifyContent={"center"}
                                            w={"100%"}
                                            px={2}
                                            py={5}
                                            gap={4}
                                            fontWeight={"semibold"}
                                        >
                                            <Flex
                                                justifyContent={"space-between"}
                                                gap={2}
                                                px={2}
                                            >
                                                {/*  */}
                                                <Flex
                                                    gap={2}
                                                    flexDirection={"column"}
                                                    justifyContent={"center"}
                                                    alignItems={"center"}
                                                >
                                                    <Calendar />
                                                    <Text fontSize={"sm"}>
                                                        27 Dec
                                                    </Text>
                                                </Flex>
                                                <Flex
                                                    gap={2}
                                                    flexDirection={"column"}
                                                    justifyContent={"center"}
                                                    alignItems={"center"}
                                                >
                                                    <Clock />
                                                    <Text fontSize={"sm"}>
                                                        04:00PM
                                                    </Text>
                                                </Flex>
                                                <Flex
                                                    gap={2}
                                                    flexDirection={"column"}
                                                    justifyContent={"center"}
                                                    alignItems={"center"}
                                                >
                                                    <MapPin />
                                                    <Text fontSize={"sm"}>
                                                        College Gazebo
                                                    </Text>
                                                </Flex>
                                                <Flex
                                                    gap={2}
                                                    flexDirection={"column"}
                                                    justifyContent={"center"}
                                                    alignItems={"center"}
                                                >
                                                    <Text
                                                        fontWeight={"bold"}
                                                        fontSize={"lg"}
                                                    >
                                                        100
                                                    </Text>
                                                    <Text fontSize={"sm"}>
                                                        Karma Points
                                                    </Text>
                                                </Flex>
                                            </Flex>
                                            <Button
                                                borderRadius={32}
                                                bg={"#0961F5"}
                                                color={"white"}
                                                py={6}
                                            >
                                                Join Learning Circle
                                            </Button>
                                        </Stack>
                                        <Flex
                                            justifyContent={"space-between"}
                                            gap={2}
                                        >
                                            <AvatarGroup size="xs">
                                                <Avatar
                                                    src="https://cdn.myanimelist.net/r/84x124/images/characters/9/131317.webp?s=d4b03c7291407bde303bc0758047f6bd"
                                                    name="Uchiha Sasuke"
                                                />
                                                <Avatar
                                                    src="https://cdn.myanimelist.net/r/84x124/images/characters/7/284129.webp?s=a8998bf668767de58b33740886ca571c"
                                                    name="Baki Ani"
                                                />
                                                <Avatar
                                                    src="https://cdn.myanimelist.net/r/84x124/images/characters/9/105421.webp?s=269ff1b2bb9abe3ac1bc443d3a76e863"
                                                    name="Uchiha Chan"
                                                />
                                                <Avatar variant="solid" />
                                            </AvatarGroup>
                                            <Text fontSize={"sm"}>
                                                5 people you might know have
                                                joined
                                            </Text>
                                        </Flex>
                                    </Stack>
                                </CardBody>
                            </Card>
                        ))}
                    </div>
                </Container>
                <Container
                    maxW="12xl"
                    p={0}
                    width={"100%"}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "start",
                        gap: 32
                    }}
                >
                    <h1
                        style={{
                            fontSize: "20px",
                            fontWeight: "bold",
                            color: "black"
                        }}
                    >
                        All Learning Circles
                    </h1>
                    <div
                        style={{
                            display: "flex",
                            gap: 16,
                            overflowX: "auto",
                            width: "100%",
                            WebkitOverflowScrolling: "touch",
                            msOverflowStyle: "none" /* IE and Edge */,
                            scrollbarWidth: "none" /* Firefox */
                        }}
                        className="no-scrollbar"
                    >
                        {Array.from({ length: 20 }).map((_, index) => (
                            <div
                                style={{
                                    padding: "8px 16px",
                                    borderRadius: 32,
                                    textWrap: "nowrap",
                                    color: "#787878",
                                    border: "1px solid #787878",
                                    cursor: "pointer"
                                }}
                                key={index}
                            >
                                Your College
                            </div>
                        ))}
                    </div>
                    <SimpleGrid
                        w={"100%"}
                        columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
                        spacing={4}
                        pr={8}
                    >
                        {learningCircles.map(learningCircle => (
                            <Card
                                borderRadius={24}
                                border={"1px solid rgba(120, 120, 120, 0.5)"}
                                shadow={"none"}
                                overflow={"hidden"}
                                maxW="sm"
                                p={4}
                            >
                                <Image
                                    src={learningCircle.image}
                                    alt="Green double couch with wooden legs"
                                    height={100}
                                    objectFit={"cover"}
                                    borderRadius={16}
                                    draggable={false}
                                />
                                <CardBody p={0} py={6}>
                                    <Stack spacing="2" align={"start"}>
                                        <Heading size="md">
                                            UI/UX Designers CET
                                        </Heading>
                                        <Heading
                                            size={"sm"}
                                            fontWeight={"semibold"}
                                        >
                                            12.5K Karma Points
                                        </Heading>
                                        <Text fontSize={"sm"}>
                                            College of Engineering Trivandrum
                                        </Text>
                                        <Text fontSize={"sm"}>
                                            Sreekaryam, Trivandrum
                                        </Text>
                                        <Flex
                                            justifyContent={"space-between"}
                                            gap={2}
                                        >
                                            <AvatarGroup size="xs">
                                                <Avatar
                                                    src="https://cdn.myanimelist.net/r/84x124/images/characters/9/131317.webp?s=d4b03c7291407bde303bc0758047f6bd"
                                                    name="Uchiha Sasuke"
                                                />
                                                <Avatar
                                                    src="https://cdn.myanimelist.net/r/84x124/images/characters/7/284129.webp?s=a8998bf668767de58b33740886ca571c"
                                                    name="Baki Ani"
                                                />
                                                <Avatar
                                                    src="https://cdn.myanimelist.net/r/84x124/images/characters/9/105421.webp?s=269ff1b2bb9abe3ac1bc443d3a76e863"
                                                    name="Uchiha Chan"
                                                />
                                                <Avatar variant="solid" />
                                            </AvatarGroup>
                                            <Text fontSize={"sm"}>
                                                5 people you might know have
                                                joined
                                            </Text>
                                        </Flex>
                                    </Stack>
                                </CardBody>
                            </Card>
                        ))}
                    </SimpleGrid>
                </Container>
            </Container>
        </div>
    );
};

export default LCLanding;
