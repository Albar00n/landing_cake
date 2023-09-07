import Head from "next/head";
import HomeDetails from "@/components";

export default function Home() {
	return (
		<>
			<Head>
				<title>Cake Cafés </title>
				<meta
					name="description"
					content="Um lugar perfeito para pais de pets e amantes de café. Nossa cafeteria tem um espaço confortável para você e seu melhor amigo."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/logo.png" />
			</Head>
			<>
				<HomeDetails />
			</>
		</>
	);
}
