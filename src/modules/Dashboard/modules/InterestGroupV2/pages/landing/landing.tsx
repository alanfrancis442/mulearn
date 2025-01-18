import React from "react";
import {
    Container,
    InputGroup,
    InputLeftAddon,
    InputLeftElement
} from "@chakra-ui/react";
import IgGridItem from "../../components/IgGridItem/IgGridItem";
import webdev from "../../assets/images/webdev.webp";
import ai from "../../assets/images/ai.webp";
import cyber from "../../assets/images/cyber.webp";
import mobiledev from "../../assets/images/mobiledev.webp";
import gamedev from "../../assets/images/gamedev.webp";
import datascience from "../../assets/images/datascience.webp";
import { Flex } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const Landing = () => {
    const IgList = [
        {
            imageUrl: webdev,
            title: "Web Development"
        },
        {
            imageUrl: ai,
            title: "Artificial Intelligence"
        },
        {
            imageUrl: cyber,
            title: "Cyber Security"
        },
        {
            imageUrl: mobiledev,
            title: "Mobile Development"
        },
        {
            imageUrl: gamedev,
            title: "Game Development"
        },
        {
            imageUrl: datascience,
            title: "Data Science"
        },
        {
            imageUrl: webdev,
            title: "Web Development"
        },
        {
            imageUrl: ai,
            title: "Artificial Intelligence"
        },
        {
            imageUrl: cyber,
            title: "Cyber Security"
        },
        {
            imageUrl: mobiledev,
            title: "Mobile Development"
        },
        {
            imageUrl: gamedev,
            title: "Game Development"
        },
        {
            imageUrl: datascience,
            title: "Data Science"
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
                    Interest Groups
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
                p={8}
                borderRadius={16}
                border={"1px solid rgba(120, 120, 120, 0.5)"}
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
                    Software
                </h1>
                <SimpleGrid
                    w={"100%"}
                    columns={{ base: 1, sm: 2, md: 3 }}
                    spacing={10}
                >
                    {IgList.map(item => (
                        <IgGridItem
                            imageUrl={item.imageUrl}
                            title={item.title}
                        />
                    ))}
                </SimpleGrid>
            </Container>
        </div>
    );
};

export default Landing;
