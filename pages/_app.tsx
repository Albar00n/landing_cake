import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Chakra from "@/components/Layout/Chakra";
export default function App({ Component, pageProps }: AppProps) {
	return (
		<Chakra>
			<Component {...pageProps} />
		</Chakra>
	);
}
