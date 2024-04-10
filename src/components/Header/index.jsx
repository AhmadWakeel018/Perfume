import { logo } from "../../../static-img-urls"
import SearchBox from "../searchbox"

const Header = () => {
    return (
        <div className="absolute top-0 left-0 z-10 px-[16px] pt-[12px] flex flex-col gap-[10px] w-full" >
            <div className="self-end flex gap-[15px]">
                <p className="text-[12px] font-normal leading-[18px] text-white">Accessibility Statement</p>
                <span className="border min-h-full w-[1px]" />
                <p className="text-[12px] font-normal leading-[18px] text-white">Help</p>
                <span className="border min-h-full w-[1px]" />
                <p className="text-[12px] font-normal leading-[18px] text-white">Account</p>
            </div>
            <div className="flex justify-between">
                <a href="/">
                     <img src={logo} alt="" width={220} height={60} />
                </a>
                <div className="flex gap-[20px] items-center">
                    <a href="new-featured" className="text-[14px] cursor-pointer font-normal leading-[20px] text-white">New & Featured</a>
                    <a href="perfumes" className="text-[14px] cursor-pointer font-normal leading-[20px] text-white">Perfumes</a>
                    <a href="colognes" className="text-[14px] cursor-pointer font-normal leading-[20px] text-white">Colognes</a>
                    <a href="sale" className="text-[14px] cursor-pointer font-normal leading-[20px] text-white">Sale</a>
                    <a href="privacy" className="text-[14px] cursor-pointer font-normal leading-[20px] text-white">Contact</a>
                </div>
                <div className="flex gap-[20px] items-center">
                    <SearchBox />
                    <div className="flex gap-[15px] mr-[30px]">
                        <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.00119019 22.3861C0.281395 18.1147 3.46439 14.5609 7.7682 13.3533C5.16136 12.2378 3.35105 9.81391 3.35105 7.00376C3.35105 3.13584 6.77647 0 11.0016 0C15.2267 0 18.6521 3.13584 18.6521 7.00376C18.6521 9.81391 16.8418 12.2378 14.2318 13.3533C18.5356 14.5609 21.7186 18.1147 21.9988 22.3861C22.0208 22.7175 21.7343 23 21.3691 23C21.0386 23 20.7615 22.7637 20.7395 22.461C20.4404 17.7774 16.1932 14.0652 11.0016 14.0652C5.80992 14.0652 1.56278 17.7774 1.26054 22.461C1.24165 22.7637 0.96459 23 0.630863 23C0.265654 23 -0.0208473 22.7175 0.00119019 22.3861ZM17.3928 7.00376C17.3928 3.77281 14.5309 1.15288 11.0016 1.15288C7.47226 1.15288 4.6104 3.77281 4.6104 7.00376C4.6104 10.2347 7.47226 12.8546 11.0016 12.8546C14.5309 12.8546 17.3928 10.2347 17.3928 7.00376Z" fill="white" />
                        </svg>
                        <svg width="18" height="23" viewBox="0 0 18 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 19.934L16.7036 5.01801C16.6803 4.72283 16.4378 4.49907 16.144 4.49907H13.4114C13.4067 2.01863 11.4295 0 9 0C6.57047 0 4.59326 2.01863 4.5886 4.49907H1.85596C1.56684 4.49907 1.32435 4.72283 1.29637 5.01801L0 19.934C0 19.953 0 19.9673 0 19.9863C0 21.6479 1.49689 23 3.3342 23H14.6658C16.5031 23 18 21.6479 18 19.9863C18 19.9673 18 19.953 18 19.934ZM9 1.14262C10.814 1.14262 12.2876 2.64707 12.2922 4.49907H5.70777C5.71243 2.64707 7.18601 1.14262 9 1.14262ZM14.6658 21.8526H3.3342C2.12176 21.8526 1.13316 21.029 1.11917 20.0054L2.36891 5.64169H4.5886V7.64604C4.5886 7.96026 4.84041 8.21735 5.14819 8.21735C5.45596 8.21735 5.70777 7.96026 5.70777 7.64604V5.64169H12.2922V7.64604C12.2922 7.96026 12.544 8.21735 12.8518 8.21735C13.1596 8.21735 13.4114 7.96026 13.4114 7.64604V5.64169H15.6311L16.8808 20.0101C16.8668 21.029 15.8782 21.8526 14.6658 21.8526Z" fill="white" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header