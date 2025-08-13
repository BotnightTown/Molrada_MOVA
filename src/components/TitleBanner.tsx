interface TitleBannerTypes {
  title: string;
  description: string;
  src: string;
  srcAlt: string;
}

function TitleBanner({title, description, src, srcAlt}:TitleBannerTypes){
  return(
    <section className='w-full h-[250px] overflow-hidden flex items-center font-e-UkraineHead relative z-5'>
      <div className='flex flex-col gap-2 px-3 absolute z-10'>
        <h3 className='text-base font-medium text-white font-e-UkraineHead'>{title}</h3>
        <h5 className='text-[10px] font-normal text-[#BDBDBD]'>{description}</h5>
      </div>      

      <div className="w-full h-full relative z-0">
        <img src={src} alt={srcAlt} className="w-full h-full object-cover" />
        <div className="absolute inset-0 pointer-events-none shadow-[inset_200px_0_250px_rgba(0,0,0,0.85)]"></div>
      </div>
    </section>
  )
}

export default TitleBanner;