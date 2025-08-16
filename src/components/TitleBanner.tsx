interface TitleBannerTypes {
  title: string;
  description: string;
  src: string;
  srcAlt: string;
}

function TitleBanner({title, description, src, srcAlt}:TitleBannerTypes){
  return(
    <section className='w-full h-[250px] sm:h-[350px] md:h-100 lg:h-[500px] xl:h-[600px] overflow-hidden flex items-center font-e-UkraineHead relative z-5'>
      <div className='flex flex-col gap-2 lg:gap-4 px-3 sm:px-10 md:px-15 lg:px-30 absolute z-10'>
        <h1 className='text-base sm:text-lg md:text-2xl lg:text-4xl xl:text-[40px] font-medium text-white font-e-UkraineHead text-shadow-lg'>{title}</h1>
        <h3 className='sm:w-100 lg:w-[650px] text-[10px] md:text-xs lg:text-sm xl:text-base font-normal text-[#BDBDBD]'>{description}</h3>
      </div>      

      <div className="w-full h-full relative z-0">
        <img src={src} alt={srcAlt} className="w-full h-full object-cover" />
        <div className="absolute inset-0 pointer-events-none shadow-[inset_200px_0_250px_rgba(0,0,0,0.85)] md:shadow-[inset_300px_0_250px_rgba(0,0,0,0.85)] lg:shadow-[inset_400px_0_250px_rgba(0,0,0,0.85)]"></div>
      </div>
    </section>
  )
}

export default TitleBanner;