import { Box, Container, Heading, Img, Text } from "@chakra-ui/react";
import React from "react";

const Hero = () => {
	return (
		<>
			<Box id="cafés" boxShadow={"20px 20px 20px  #00000036"}>
				<Container
					maxW="1200px"
					my={{ base: "5rem", md: "0" }}
					h={{ base: "100%", md: "400px" }}
					display={"flex"}
					alignItems={"center"}
					justifyContent={"space-between"}
					// flexDirection={{base:"column",md:"row"}}
				>
					<Box w={{ base: "100%", md: "40%" }}>
						<Heading fontSize={"24px"} color="#3C0E0E" fontWeight={"700"}>
							Sabor inesquecível
						</Heading>
						<Heading fontSize={"80px"} color="#3C0E0E" fontWeight={"700"}>
							Meow <br /> Café
						</Heading>
						<Text
							w={{ base: "50%", md: "100%" }}
							fontSize={"16px"}
							color="#3C0E0E"
							fontWeight={"400"}
						>
							Um lugar perfeito para pais de pets e amantes de café. Nossa
							cafeteria tem um espaço confortável para você e seu melhor amigo.
						</Text>
					</Box>
					<Box
						zIndex="-1"
						position={{ base: "absolute", md: "relative" }}
						right={{ base: "-25rem", md: "0" }}
						top={{ base: "-1rem", md: "-5rem", lg: "-1rem" }}
					>
						<Img src="/header.png" alt="" w="" h="" zIndex="-1" />
					</Box>
				</Container>
			</Box>
		</>
	);
};

export default Hero;