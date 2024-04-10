import { latestTrendBg2 } from "../../../../static-img-urls"
import Button from "../../../components/Button"
import RibbonText from "../../../components/RibbonText"

const LatestTrends2 = () => {
  return (
    <div className="relative h-[70vh] overflow-hidden flex px-[60px] items-center">
      <div className="flex flex-col gap-[20px] z-10 relative">
        <h2 className="text-[45px] leading-[60px] font-bold text-white">Indulge in the allure of luxury</h2>
        <p className="text-[16px] leading-[20px] text-white capitalize">example text for this sections paragraph text but longer for vsual.  example text for this sections paragraph text but longer for vsual</p>
        <div className="flex gap-[10px]">
          <Button btnText={"Shop Perfume"} />
          <Button btnText={"Shop Cologne"} />
        </div>
      </div>
      <img className="absolute inset-0 h-[70vh] w-full object-cover" src={latestTrendBg2} alt="" />
      <div className="absolute bottom-[30px] left-0 z-10 textScrollToLeft  w-[200%]">
        <RibbonText />
      </div>
    </div>
  )
}

export default LatestTrends2