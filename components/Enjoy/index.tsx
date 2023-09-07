import {
	Box,
	Button,
	Container,
	Heading,
	Img,
	Stack,
	Text,
} from "@chakra-ui/react";

const Enjoy = () => {
	return (
		<>
			<Box
				my="5rem"
				w="100%"
				h={{ base: "100%", md: "500px" }}
				display={"flex"}
				alignItems={"center"}
				justifyContent={"center"}
				position="relative"
				px=".5rem"
			>
				<Container
					h={{ base: "100%", md: "350px" }}
					maxW="1200px"
					bg="linear-gradient(203deg, rgba(243, 199, 196, 0.95) 4.72%, rgba(84, 21, 17, 0.95) 81.94%)"
					borderRadius={"20px"}
					display={"flex"}
					alignItems={"center"}
					justifyContent={"space-between"}
					flexDirection={{ base: "column-reverse", md: "row" }}
				>
					<Box w={{ base: "80%", md: "50%" }}>
						<Img src="/image6.png" alt="" w="100%" h="100%" />
					</Box>
					<Box w={{ base: "100%", md: "45%" }} my={{ base: "4rem", md: "0" }}>
						<Heading fontSize="48px" fontWeight={"700"} color="#fbfbfb">
							Levamos até você!
						</Heading>
						<Text fontSize="16px" fontWeight={"400"} color="#fbfbfb">
							Estamos nos principais aplicativos de Delivery!
						</Text>
						<Button
							w="280px"
							h="50px"
							display="flex"
							alignItems={"center"}
							justifyContent={"center"}
							fontSize="16px"
							fontWeight={"600"}
							color="#000"
							bg="#fbfbfb"
							borderRadius={"20px"}
							mt="3rem"
						>
							Delivery
						</Button>
					</Box>
				</Container>
				{/* <Box
					pos={"absolute"}
					bottom={"0"}
					right={"0"}
					w="250px"
					border="1px"
					h="200px"
				>
                    <Img src="" alt="" w="100%" h="100%" />
                </Box> */}
			</Box>
			<Box
				id="Sobre_nós"
				w="100%"
				h={{ base: "100%", md: "600px" }}
				bgImage="/bg2.png"
				bgSize={"cover"}
				bgRepeat={"no-repeat"}
				display={"flex"}
				alignItems={"center"}
				justifyContent={"center"}
			>
				<Container
					h={{ base: "100%", md: "350px" }}
					maxW="1200px"
					// bg="linear-gradient(203deg, rgba(243, 199, 196, 0.95) 4.72%, rgba(84, 21, 17, 0.95) 81.94%)"
					borderRadius={"20px"}
					display={"flex"}
					alignItems={"center"}
					justifyContent={"space-between"}
					flexDirection={{ base: "column", md: "row" }}
					my="3rem"
				>
					<Stack w={{ base: "100%", md: "48%" }}>
						<Text fontSize="20px" fontWeight={"500"} color="#4D1D1D">
							Sobre nós
						</Text>
						<Text
							fontSize="40px"
							lineHeight={"50px"}
							fontWeight={"700"}
							color="#4D1D1D"
						>
							Nós oferecemos uma experiência inesquecível para amantes de café e
							pais de pet!
						</Text>
					</Stack>
					<Stack w={{ base: "100%", md: "48%" }}>
						<Text my=".3rem" fontSize="16px" fontWeight={"700"} color="#4D1D1D">
							O melhor lugar para apreciar o seu café
						</Text>
						<Text my=".3rem" fontSize="16px" fontWeight={"400"} color="#000">
							No Meow Cafe, priorizamos a criação de um espaço onde tanto os
							seres humanos quanto seus animais de estimação possam relaxar e
							desfrutar.
						</Text>
						<Text my=".3rem" fontSize="16px" fontWeight={"400"} color="#000">
							Nosso design interior é inspirado na harmonia e conforto, com
							sofás aconchegantes, iluminação suave e uma decoração que remete à
							natureza e à alegria que os animais trazem para nossas vidas.
						</Text>
					</Stack>
				</Container>
			</Box>
		</>
	);
};

export default Enjoy;
