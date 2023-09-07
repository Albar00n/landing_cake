import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HeadFeat from "@/components/Featured/HeadFeat";
import Featured from "@/components/Featured";
import CenterP from "@/components/Center";
import Enjoy from "@/components/Enjoy";
import Meow from "@/components/Meow";
import Footer from "@/components/Footer";

const HomeDetails = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<HeadFeat />
			<Featured />
			<CenterP />
			<Enjoy />
			<Meow />
			<Footer />
		</>
	);
};

export default HomeDetails;
