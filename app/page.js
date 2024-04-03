import Branding from "@/components/Branding/Branding";
import ItemsAirrval from "./itemsArrival/page";
import HomeHeroSection from "@/components/HomeHeroSection/HomeHeroSection";




const Home =() => {

  return (

    <main className="">
        <HomeHeroSection/> 
        <ItemsAirrval/>
        <Branding/>
    </main>

  );
  
}

export default Home;