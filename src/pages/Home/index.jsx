import HeroSection from "../../pageComponents/Home/Hero"
import HomeFooter from "../../pageComponents/Home/HomeFooter"
import LatestTrends from "../../pageComponents/Home/LatestTrends"
import LatestTrends2 from "../../pageComponents/Home/LatestTrends2"
import LatestTrends3 from "../../pageComponents/Home/LatestTrends3"
import NewReleases from "../../pageComponents/Home/NewReleases"
import ShopByCollection from "../../pageComponents/Home/ShopByCollection"

const Home = () => {
  return (
    <div className="flex flex-col bg-black text-white">
      <HeroSection />
      <ShopByCollection />
      <LatestTrends />
      <NewReleases />
      <LatestTrends2 />
      <NewReleases />
      <LatestTrends3 />
      <NewReleases />
      <HomeFooter />
    </div>
  )
}

export default Home