import { cityScents, star } from "../../../static-img-urls"

const ProductCard = () => {
    return (
        <div className="flex flex-col h-[450px] justify-evenly">
            <div className="shadow-[0px_4px_22px_-3px_#00000040] bg-gradient-to-tr overflow-hidden from-[#2B2B2B] to-[#101010] rounded-[9px]">
                <img className="h-[300px] object-fill mx-auto" src={cityScents} alt="" />
            </div>
            <div className="flex flex-col gap-[10px] px-[10px]">
                <div className="flex justify-between items-center">
                    <h3 className="text-[14px] font-normal leading-[20px]">City Scent Product</h3>
                    <span className="flex gap-[5px]">
                        <img src={star}  />
                        <p className="text-[14px] leading-[18px]">4.1</p>
                    </span>
                </div>
                <p className="text-[14px] font-normal text-[#777777] leading-[20px]">Body Fit</p>
                <p className="text-[14px] font-normal text-[#777777] leading-[20px]">Base Green Marl</p>
                <p className="text-[14px] font-bold leading-[20px]">$24</p>
            </div>
        </div>
    )
}

export default ProductCard