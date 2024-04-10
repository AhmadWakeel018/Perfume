import RibbonText from "../../components/RibbonText"
import NewReleases from "../../pageComponents/Home/NewReleases"

const Perfumes = () => {
    return (
        <div className="relative top-[120px]">
            <div className="h-[2px] borderstyle" />
            <div className="relative h-[24px] overflow-hidden">
                <div className="absolute bottom-[0px] left-0 z-10 textScrollToLeft w-[200%]">
                    <RibbonText />
                </div>
            </div>
            <div className="h-[2px] borderstyle" />
            <div className="flex flex-col gap-[45px] my-[45px]">
                <NewReleases />
                <NewReleases />
                <NewReleases />
                <NewReleases />
                <NewReleases />
            </div>
        </div>
    )
}

export default Perfumes