import { Splide, SplideSlide } from "@splidejs/react-splide"
import { NewFeaturedSlides } from "../../../static-data"
import NewFeaturedSlide from "../../pageComponents/NewFeatured/NewFeaturedSlide"

const NewFeatured = () => {
    const splideOptions = {
        type: 'loop',
        direction:"ttb",
        perPage: 1,
        perMove: 1,
        rewind: true,
        autoplay: true,
        paginationDirection: 'ttb',
        gap: '1rem',
        height:'100vh',
    }


    return (
        <div className="relative newfeatured">
            {
                <Splide options={splideOptions}>
                    
                        {
                            NewFeaturedSlides.map((item, index) => {
                                return (
                                    <SplideSlide key={`${item.heading}${index}`}>
                                        <NewFeaturedSlide bgImage={item.bgImage} featuredImg={item.featuredImg} heading={item.heading} subheading={item.subheading} />
                                    </SplideSlide>
                                )
                            })
                        }
                </Splide>
            }
        </div>
    )
}

export default NewFeatured