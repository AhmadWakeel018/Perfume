import { collectionData } from "../../../../static-data"
import { leftArrow, rightArrow } from "../../../../static-img-urls";
import ProductCard from "../../../components/ProductCard";
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


const NewReleases = () => {

  const splideOptions = {
    type: 'loop',
    perPage: 4,
    perMove: 1,
    rewind: true,
    autoplay: true,
    gap: '1rem',
    autoHeight: false,
    pagination: false
  }

  return (
    <div className="py-[90px] px-[60px] flex flex-col gap-[25px] relative">
      <div className="flex items-center gap-[30px]">
        <h3 className="text-[28px] leading-[38px] font-normal">NEW RELEASES</h3>
        <p className="gradient-text">View All</p>
      </div>
      <Splide options={splideOptions} hasTrack={false}>
        <div className="splide__arrows absolute right-[60px] -top-[45px]">
          <button className="splide__arrow splide__arrow--prev">
            <img className="w-[12px] h-[12px]" src={rightArrow} alt=""/>
          </button>
          <button className="splide__arrow splide__arrow--next">
            <img className="w-[12px] h-[12px]" src={leftArrow} alt=""/>
          </button>
        </div>
        <SplideTrack>
          {
            collectionData.map((item,index) => {
              return (
                <SplideSlide key={`${item.heading}${index}`}>
                  <ProductCard title={item.heading} bgImage={item.bgimage} />
                </SplideSlide>
              )
            })
          }
        </SplideTrack>
      </Splide>
    </div>
  )
}

export default NewReleases