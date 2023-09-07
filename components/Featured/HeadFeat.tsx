import { Box, Container, Heading } from "@chakra-ui/react";

const HeadFeat = () => {
	return (
		<Box w="100%" h="140px">
			<Container
				maxW="1200px"
				my={{ base: "5rem", md: "0" }}
				h="100%"
				display={"flex"}
				alignItems={"center"}
				justifyContent={"center"}
				flexDirection="column"
			>
				<Heading fontSize={"40px"} fontWeight={"700"} color="#3C0E0E">
					Cafés
				</Heading>
				<Heading
					textAlign={"center"}
					fontSize={"16px"}
					fontWeight={"400"}
					color="#3C0E0E"
				>
					Conheça nossos cafés exclusivos pensados e preparados por nossos
					baristas renomados.
				</Heading>
			</Container>
		</Box>
	);
};

export default HeadFeat;
