import { Box, Button, Container, Flex, Img, Link } from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
	return (
		<Box
			w="100%"
			h="100%"
			// position="fixed"
			// top="0"
			// boxShadow={"20px 20px 20px 20px  #00000036"}
			// backdropFilter={"blur"}
			// // background={"#1f1f1f"}
			// zIndex="9999999999999999999"
			// overflow="hidden"
		>
			<Container
				maxW="1200px"
				h="100px"
				display={"flex"}
				alignItems={"center"}
				justifyContent={"space-between"}
				overflow="hidden"
			>
				<Link href="/" title="Home Cafe">
					<Box>
						<Img src="/logo.png" alt="" w="120px" h="80px" />
					</Box>
				</Link>
				<Flex alignItems={"center"} display={{ base: "none", md: "flex" }}>
					<Link mx=".4rem" href="#cafés">
						Meow Café
					</Link>
					<Link mx=".4rem" href="#cafés">
						Início
					</Link>
					<Link mx=".4rem" href="#Croissants">
						Produtos
					</Link>
					<Link mx=".4rem" href="#Sobre_nós">
						Sobre
					</Link>
				</Flex>
				<Flex alignItems={"center"}>
					<Link href="/" mx="1rem">
						Login
					</Link>
					<Button w="100px" bg="#431B1B" color="#fbfbfb" borderRadius={"20px"}>
						Delivery
					</Button>
				</Flex>
			</Container>
		</Box>
	);
};

export default Navbar;
