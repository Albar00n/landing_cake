import {
	Box,
	Button,
	Container,
	Heading,
	Img,
	Stack,
	Text,
} from "@chakra-ui/react";

const Meow = () => {
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
					<Box w={{ base: "100%", md: "45%" }} my={{ base: "4rem", md: "0" }}>
						<Heading fontSize="58px" fontWeight={"700"} color="#fbfbfb">
							Meow Enjoy
						</Heading>
						<Text fontSize="16px" my=".5rem" fontWeight={"400"} color="#fbfbfb">
							Todos os sábados e domingos
						</Text>
                        <Text fontSize="16px" my=".5rem" fontWeight={"400"} color="#fbfbfb">
							Venha tomar o seu brunch com a gente!
						</Text>
                        <Text fontSize="16px" my=".5rem" fontWeight={"700"} color="#3C0E0E">
							Faça uma reserva {">"}
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
					<Box w={{ base: "80%", md: "50%" }}>
						<Img src="/image7.png" alt="" w="100%" h="100%" />
					</Box>
				</Container>
			</Box>
		</>
	);
};

export default Meow;
