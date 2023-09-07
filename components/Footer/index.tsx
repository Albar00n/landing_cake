import { Container, Stack, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
	return (
		<>
			<Container
				maxW="1200px"
				h="100%"
				display={"flex"}
				alignItems={"center"}
				justifyContent={"space-between"}
				flexDirection={{ base: "column", md: "row" }}
			>
				<Stack
					h={{ base: "100%", md: "300px" }}
					w={{ base: "100%", md: "30%" }}
				>
					<Text fontSize={"20px"} fontWeight={"700"} color="#000" my="1rem">
						Informações
					</Text>
					<Text fontSize={"16px"} fontWeight={"400"} color="#000" my=".5rem">
						Todos os direitos reservados Meow Cafe Ltda.
					</Text>
					<Text fontSize={"16px"} fontWeight={"400"} color="#000" my=".5rem">
						Um lugar perfeito para pais de pets e amantes de café!
					</Text>
				</Stack>
				<Stack
					h={{ base: "100%", md: "300px" }}
					w={{ base: "100%", md: "30%" }}
				>
					<Text fontSize={"20px"} fontWeight={"700"} color="#000" my="1rem">
						Links Úteis
					</Text>
					<Text fontSize={"16px"} fontWeight={"400"} color="#000" my=".5rem">
						Início
					</Text>
					<Text fontSize={"16px"} fontWeight={"400"} color="#000" my=".5rem">
						Sobre
					</Text>
					<Text fontSize={"16px"} fontWeight={"400"} color="#000" my=".5rem">
						Produtos
					</Text>
					<Text fontSize={"16px"} fontWeight={"400"} color="#000" my=".5rem">
						Delivery
					</Text>
					<Text fontSize={"16px"} fontWeight={"400"} color="#000" my=".5rem">
						Login
					</Text>
				</Stack>
				<Stack
					h={{ base: "100%", md: "300px" }}
					w={{ base: "100%", md: "30%" }}
				>
					<Text fontSize={"20px"} fontWeight={"700"} color="#000" my="1rem">
						Institucional
					</Text>
					<Text fontSize={"16px"} fontWeight={"400"} color="#000" my=".5rem">
						CNPJ: XX. XXX. XXX/0001-XX
					</Text>
					<Text fontSize={"16px"} fontWeight={"400"} color="#000" my=".5rem">
						Endereço: Lorem ipsum, 64
					</Text>
					<Text fontSize={"16px"} fontWeight={"400"} color="#000" my=".5rem">
						Política de Privacidade
					</Text>
					<Text fontSize={"16px"} fontWeight={"400"} color="#000" my=".5rem">
						Dúvidas Frequentes
					</Text>
					<Text fontSize={"16px"} fontWeight={"400"} color="#000" my=".5rem">
						Acessibilidade
					</Text>
				</Stack>
			</Container>
		</>
	);
};

export default Footer;
