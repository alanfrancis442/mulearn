import { Box } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
const IgGridItem = ({
    imageUrl,
    title
}: {
    imageUrl: string;
    title: string;
}) => {
    return (
        <Box
            bg="white"
            w="100%"
            paddingTop={6}
            paddingBottom={6}
            color="black"
            border={"1px solid #787878"}
            borderRadius={16}
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 32,
                cursor: "pointer"
            }}
        >
            <Image src={imageUrl} alt="image not found" />
            <p
                style={{
                    fontSize: "18px",
                    fontWeight: "bold"
                }}
            >
                {title}
            </p>
        </Box>
    );
};

export default IgGridItem;
