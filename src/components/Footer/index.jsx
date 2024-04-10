import { facebookIcon, instaIcon, linkedInIcon, twitterIcon } from "../../../static-img-urls"

const Footer = () => {
    return (
        <div className="flex flex-col bg-black gap-[40px] pt-[90px] pb-[30px] px-[120px]">
            <div className="flex gap-[120px] w-fit mx-auto mb-[60px]">
                <div className="flex flex-col gap-[20px]">
                    <h3 className="text-[18px] font-bold leading-[24px] text-white">Featured</h3>
                    <div className="flex flex-col gap-[10px]">
                        <p className="text-[#777777] text-[18px] leading-[24px] font-medium">City Scent</p>
                        <p className="text-[#777777] text-[18px] leading-[24px] font-medium">Tropical Rain</p>
                        <p className="text-[#777777] text-[18px] leading-[24px] font-medium">Summer Heat</p>
                        <p className="text-[#777777] text-[18px] leading-[24px] font-medium">City Summer</p>
                    </div>
                </div>
                <div className="flex flex-col gap-[20px]">
                    <h3 className="text-[18px] font-bold leading-[24px] text-white">Perfume</h3>
                    <div className="flex flex-col gap-[10px]">
                        <p className="text-[#777777] text-[18px] leading-[24px] font-medium">Product 1</p>
                        <p className="text-[#777777] text-[18px] leading-[24px] font-medium">Product 2</p>
                        <p className="text-[#777777] text-[18px] leading-[24px] font-medium">Product 3</p>
                        <p className="text-[#777777] text-[18px] leading-[24px] font-medium">Product 4</p>
                    </div>
                </div>
                <div className="flex flex-col gap-[20px]">
                    <h3 className="text-[18px] font-bold leading-[24px] text-white">Cologne</h3>
                    <div className="flex flex-col gap-[10px]">
                        <p className="text-[#777777] text-[18px] leading-[24px] font-medium">Product 1</p>
                        <p className="text-[#777777] text-[18px] leading-[24px] font-medium">Product 2</p>
                        <p className="text-[#777777] text-[18px] leading-[24px] font-medium">Product 3</p>
                        <p className="text-[#777777] text-[18px] leading-[24px] font-medium">Product 4</p>
                    </div>
                </div>
                <div className="flex flex-col gap-[20px]">
                    <h3 className="text-[18px] font-bold leading-[24px] text-white">Sale</h3>
                    <div className="flex flex-col gap-[10px]">
                        <p className="text-[#777777] text-[18px] leading-[24px] font-medium">Product 1</p>
                        <p className="text-[#777777] text-[18px] leading-[24px] font-medium">Product 2</p>
                        <p className="text-[#777777] text-[18px] leading-[24px] font-medium">Product 3</p>
                        <p className="text-[#777777] text-[18px] leading-[24px] font-medium">Product 4</p>
                    </div>
                </div>
            </div>
            <div className="flex gap-[60px]">
                <div className="flex flex-col gap-[20px]">
                    <h3 className="text-[18px] font-bold leading-[24px] capitalize text-white">GIFT CARDS</h3>
                    <h3 className="text-[18px] font-bold leading-[24px] capitalize text-white">BECOME A MEMBER</h3>
                    <h3 className="text-[18px] font-bold leading-[24px] capitalize text-white">SEND US FEEDBACK</h3>
                </div>
                <div className="flex flex-col gap-[20px]">
                    <h3 className="text-[18px] font-bold leading-[24px] text-white">GET HELP</h3>
                    <div className="flex flex-col gap-[10px]">
                        <p className="text-[#777777] text-[18px] leading-[24px] font-medium">Order Status</p>
                        <p className="text-[#777777] text-[18px] leading-[24px] font-medium">Shipping and Delivery</p>
                        <p className="text-[#777777] text-[18px] leading-[24px] font-medium">Returns</p>
                        <p className="text-[#777777] text-[18px] leading-[24px] font-medium">Order Cancellation</p>
                        <p className="text-[#777777] text-[18px] leading-[24px] font-medium">Payment Options</p>
                        <p className="text-[#777777] text-[18px] leading-[24px] font-medium">Gift Card Balance</p>
                        <p className="text-[#777777] text-[18px] leading-[24px] font-medium">Contact Us</p>
                    </div>
                </div>
                <div className="flex flex-col gap-[20px]">
                    <h3 className="text-[18px] font-bold leading-[24px] text-white">ABOUT NEBU</h3>
                    <div className="flex flex-col gap-[10px]">
                        <p className="text-[#777777] text-[18px] leading-[24px] font-medium">News</p>
                        <p className="text-[#777777] text-[18px] leading-[24px] font-medium">Careers</p>
                        <p className="text-[#777777] text-[18px] leading-[24px] font-medium">Investors</p>
                        <p className="text-[#777777] text-[18px] leading-[24px] font-medium">Purpose</p>
                        <p className="text-[#777777] text-[18px] leading-[24px] font-medium">Sustainability</p>
                    </div>
                </div>
                <div className="flex flex-col gap-[20px]">
                    <h3 className="text-[18px] font-bold leading-[24px] text-white">PROMOTIONS & DISCOUNTS</h3>
                    <div className="flex flex-col gap-[10px]">
                        <p className="text-[#777777] text-[18px] leading-[24px] font-medium">Student</p>
                        <p className="text-[#777777] text-[18px] leading-[24px] font-medium">Military</p>
                        <p className="text-[#777777] text-[18px] leading-[24px] font-medium">Teacher</p>
                        <p className="text-[#777777] text-[18px] leading-[24px] font-medium">First Responders & Medical Professionals</p>
                        <p className="text-[#777777] text-[18px] leading-[24px] font-medium">Birthday</p>
                    </div>
                </div>
                <div className="flex gap-[5px]">
                    <img src={facebookIcon} className="w-[40px] h-[40px]" />
                    <img src={twitterIcon} className="w-[40px] h-[40px]" />
                    <img src={linkedInIcon} className="w-[40px] h-[40px]" />
                    <img src={instaIcon} className="w-[40px] h-[40px]" />
                </div>
            </div>
            <div className="flex justify-end gap-[40px]">
                <p className="text-[#777777] text-[12px] leading-[18px] font-medium">Guides</p>
                <p className="text-[#777777] text-[12px] leading-[18px] font-medium">Terms of Sale</p>
                <p className="text-[#777777] text-[12px] leading-[18px] font-medium">Terms of Use</p>
                <p className="text-[#777777] text-[12px] leading-[18px] font-medium">Privacy Policy</p>
                <p className="text-[#777777] text-[12px] leading-[18px] font-medium">Your Privacy Choices</p>
            </div>
            <div className="flex justify-between">
                <div className="flex gap-[15px]">
                    <p className="text-[18px] leading-[24px] text-white font-medium">United States</p>
                    <p className="text-[18px] leading-[24px] text-white font-medium">2024 fragrence401.com Rights Reserved</p>
                </div>
                <p className="text-[#D4D4D4] text-[18px] leading-[24px] font-medium">CA Supply Chains Act</p>
            </div>
        </div>
    )
}

export default Footer