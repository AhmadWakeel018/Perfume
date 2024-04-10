const CollectionCard = ({ bgImage, title }) => {
  return (
    <div className="flex flex-col shadow-[0px_4px_22px_-3px_#00000040] bg-gradient-to-tr overflow-hidden justify-evenly from-[#2B2B2B] to-[#101010] rounded-[9px] h-[400px]">
      <img className="h-[300px] object-fill" src={bgImage} alt="" />
      <div className="flex justify-between items-center px-[30px]">
        <h3 className="text-[36px] leading-[48px] ">{title}</h3>
        <button className="border-[2px] rounded-full w-[36px] h-[36px] flex items-center justify-center">
          <svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L9.71009 6.66156C10.3168 7.0559 10.3168 7.9441 9.71009 8.33844L1 14" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default CollectionCard