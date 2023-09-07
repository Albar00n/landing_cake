import {
	Box,
	Button,
	Container,
	Heading,
	Img,
	SimpleGrid,
	Stack,
	Text,
} from "@chakra-ui/react";
import React from "react";

const Featured = () => {
	const data = [
		{
			id: 1,
			img: "/image3.png",
			price: "R$ 16,00",
			title: "Capuccino",
			text: "Café expresso , leite vaporizado, espuma e um toque de caramelo.",
			bg: "linear-gradient(203deg, #F6C7C5 4.72%, #C27D7A 102.83%)",
		},
		{
			id: 2,
			img: "/image2.png",
			price: "R$ 24,00",
			title: "Café ao Leite",
			text: "Café expresso , leite vaporizado, espuma e um toque de caramelo.",
			bg:
				"linear-gradient(203deg, rgba(250, 250, 250, 0.95) 4.72%, rgba(84, 21, 17, 0.58) 102.83%)",
		},
		{
			id: 3,
			img: "/image1.png",
			price: "R$ 10,00",
			title: "Café Preto",
			text: "Café expresso , leite vaporizado, espuma e um toque de caramelo.",
			bg:
				"linear-gradient(203deg, rgba(10, 9, 9, 0.95) 4.72%, rgba(84, 21, 17, 0.95) 102.83%)",
		},
	];
	return (
		<>
			<Box
				w="100%"
				h="100%"
				bgImage={"/bg.png"}
				bgSize={"cover"}
				bgRepeat={"no-repeat"}
				position="relative"
				zIndex={"9999999999"}
			>
				<Container
					maxW="1200px"
					my={{ base: "3rem", md: "4rem" }}
					h="100%"
					display={"flex"}
					alignItems={"center"}
					justifyContent={"center"}
				>
					<SimpleGrid
						h="100%"
						w="100%"
						columns={{ base: 1, md: 2, xl: 3 }}
						spacing={5}
						px={{ base: "0", sm: "5rem", md: "0" }}
					>
						{data.map((item) => (
							<Stack
								key={item.id}
								w="100%"
								h="468px"
								borderRadius={"48px"}
								bg={item.bg}
								alignItems={"center"}
								px="1rem"
								justifyContent={"space-around"}
							>
								<Img src={item.img} alt="" w="330px" h="200px" />
								<Text fontSize={"32px"} fontWeight={"600"} color="#fbfbfb">
									{item.price}
								</Text>
								<Heading fontSize={"20px"} fontWeight={"600"} color="#fbfbfb">
									{item.title}
								</Heading>
								<Text
									textAlign={"center"}
									fontSize={"14px"}
									fontWeight={"400"}
									color="#fbfbfb"
								>
									{item.text}
								</Text>
								<Button
									display={"flex"}
									alignItems={"center"}
									justifyContent={"center"}
									w="100%"
									h="50px"
									bg="#fbfbfb"
									borderRadius={"20px"}
									boxShadow={"0px 8px 7px 0px rgba(0, 0, 0, 0.25)"}
									color={"#000"}
									my="1rem"
								>
									Delivery
								</Button>
							</Stack>
						))}
					</SimpleGrid>
				</Container>
			</Box>
		</>
	);
};

export default Featured;
