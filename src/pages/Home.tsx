import Cta from "@/componets/home/Cta";
import CustomerReview from "../componets/home/CustomerReview";
import Faq from "../componets/home/Faq";
import Features from "../componets/home/Features";
import Hero from "../componets/home/Hero";

function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Cta />
      <CustomerReview />
      <Faq />
    </>
  );
}

export default Home;
