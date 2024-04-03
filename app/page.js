import HomeHeroSection from "@/components/HomeHeroSection/HomeHeroSection";
import ItemsAirrval from "./itemsArrival/page";
import Branding from "@/components/Branding/Branding";





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