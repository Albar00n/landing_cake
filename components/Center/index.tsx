import { Container, Img, Stack, Text } from "@chakra-ui/react";
import React from "react";

const CenterP = () => {
	return (
		<>
			<Container
			id="Croissants"
				my="5rem"
				maxW="1200px"
				h="100%"
				display={"flex"}
				alignItems={"center"}
				justifyContent={"space-between"}
				flexDirection={{ base: "column-reverse", md: "row" }}
			>
				<Stack w={{ base: "100%", md: "45%" }}>
					<Text
						fontSize={"20px"}
						fontWeight={"600"}
						color="#F9C4C4"
						bg="#fbfbfb"
						borderRadius={"20px"}
						w="100px"
						display={"flex"}
						alignItems={"center"}
						justifyContent={"center"}
					>
						R$ 12,00
					</Text>
					<Text
						fontSize={"70px"}
						fontWeight={"700"}
						color="#4D1D1D"
						bg=""
						borderBottom={"1px"}
					>
						Croissants
					</Text>
					<Text fontSize={"40px"} fontWeight={"500"} color="#4D1D1D" bg="">
						Conheça nossa receita
					</Text>
					<Text fontSize={"14px"} fontWeight={"400"} color="" bg="">
						A nossa receita de Croissant vai te surpreender. Croissants
						clássicos ou recheados!
					</Text>
				</Stack>
				<Stack w={{ base: "100%", md: "45%" }}>
					<Img src="/Image5.png" alt="" h="100%" w="100%" />
				</Stack>
			</Container>
		</>
	);
};

export default CenterP;
