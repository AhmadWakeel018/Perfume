import Button from "../../../components/Button"
import RibbonText from "../../../components/RibbonText"

const HeroSection = () => {
    return (
        <div className="min-h-[90vh] relative flex items-end px-[60px] py-[120px] overflow-hidden">
            <div className="flex flex-col gap-[20px] z-10 relative">
                <h2 className="text-[45px] leading-[60px] font-bold text-white">Indulge in the allure of luxury</h2>
                <p className="text-[16px] leading-[20px] text-white capitalize">example text for this sections paragraph text but longer for vsual.  example text for this sections paragraph text but longer for vsual</p>
                <div className="flex gap-[10px]">
                    <Button btnText={"Shop Perfume"} />
                    <Button btnText={"Shop Cologne"} dark={true} />
                </div>
            </div>
            <div className="absolute bottom-[30px] left-0 z-10 textScrollToLeft  w-[200%]">
                <RibbonText />
            </div>
            <video autoPlay muted loop className="absolute inset-0 h-[89vh] w-full object-cover">
                <source src="/src/assets/hero-video.mp4" type="video/mp4" />
            </video>
        </div>
    )
}

export default HeroSection