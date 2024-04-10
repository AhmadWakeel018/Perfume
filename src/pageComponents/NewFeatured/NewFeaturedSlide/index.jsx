import Button from "../../../components/Button"

const NewFeaturedSlide = ({bgImage,featuredImg,heading,subheading}) => {
  return (
    <div className="w-screen h-screen relative flex items-center px-[200px] py-[20%]">
        <div className="w-[40%] z-10">
            <img src={featuredImg} />
        </div>
        <div className="flex flex-col gap-[30px] z-10">
            <h3 className="text-[45px] leading-[60px] font-medium text-white">{heading}</h3>
            <p className="text-[15px] leading-[20px] font-normal capitalize text-white">{subheading}</p>
            <Button btnText={"View Products"} dark={true}/>
        </div>
        <img className="absolute inset-0 object-cover" src={bgImage} alt=""/>
        <div className="absolute inset-0 bg-[#0000006E]"/>
    </div>
  )
}

export default NewFeaturedSlide