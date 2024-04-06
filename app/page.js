import HomeHeroSection from "@/components/HomeHeroSection/HomeHeroSection";
import ItemsAirrval from "./itemsArrival/page";
import Branding from "@/components/Branding/Branding";
import TheShopSection from "@/components/TheShopSection/TheShopSection";


const Home =() => {
  return (
    <main className="">
        <HomeHeroSection/>
        <ItemsAirrval/>
        <Branding/>
        {/* <TheShopItemsAll/> */}
        <TheShopSection/>
    </main>
  ); 
}

export default Home;