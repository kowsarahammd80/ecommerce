import HomeHeroSection from "@/components/HomeHeroSection/HomeHeroSection";
import ItemsAirrval from "./itemsArrival/page";
import Branding from "@/components/Branding/Branding";
import TheShop from "./theShop/page";





const Home =() => {

  return (

    <main className="">
        <HomeHeroSection/> 
        <ItemsAirrval/>
        <Branding/>
        <TheShop/>
    </main>

  );
  
}

export default Home;