import TitleBanner from "../components/TitleBanner";
import Fish1 from '../assets/Fish 1.png'
import Fish2 from '../assets/Fish 2.png'
import Fish3 from "../assets/Fish 3.png"
import MykoObl from '../assets/Миколаївська область жовтий 1.png'
import Facebook from '../assets/fb_icon.svg';
import Instagram from '../assets/ins_icon.svg';
import TikTok from '../assets/tiktok_icon.svg';

interface ButtonTypes {
  text: string;
  backgroundColor: string;
  textColor: string;
}

function Button({text, backgroundColor, textColor}: ButtonTypes){
  return(
    <button 
      type="button"
      style={{ backgroundColor, color: textColor }}
      className="w-full md:w-max md:px-16 h-10 rounded-lg font-bold text-xs md:text-sm cursor-pointer active:scale-95 duration-300 transition-all uppercase"
    >
      {text}
    </button>
  )
}

function MainPage() {
  return(
    <div className="w-full h-max flex flex-col">
      <TitleBanner 
        title="Голос молоді миколаївщини"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        src={Fish1}
        srcAlt="Члени молодіжної ради"
      />
      <article className="w-full h-max p-4 sm:px-8 md:px-10 lg:px-15 xl:px-20 md:py-5 flex flex-col md:flex-row gap-5 lg:gap-15 xl:gap-20">
        <div className="flex flex-col gap-3 md:gap-4 lg:gap-5 py-4 font-light">
          <h2 className="font-medium text-base md:text-lg lg:text-xl xl:text-2xl font-e-UkraineHead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h2>
          <p className="text-xs/5 md:text-sm lg:text-base/6 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="text-xs/5 md:text-sm lg:text-base/6 text-justify">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <img 
          src={Fish2} 
          alt="Члени молради" 
          className="w-full md:w-75 lg:w-90 xl:w-100 h-62 md:h-90 lg:h-100 xl:h-115 rounded-xl object-cover"
        />
      </article>
      <section className="w-full h-max p-4 sm:px-8 md:px-10 lg:px-15 xl:px-20 md:py-5 flex flex-col gap-3 md:gap-4 lg:gap-5">
        <div className="w-full h-max flex flex-col gap-3 md:gap-4 lg:gap-5 font-light">
          <h2 className="font-medium text-[#4ACBD1] text-base md:text-lg lg:text-xl xl:text-2xl font-e-UkraineHead">
            Телеграм бот
          </h2>
          <p className="text-xs/5 md:text-sm lg:text-base/6  text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <ol className="list-decimal p-3 flex flex-col gap-3 md:gap-4 lg:gap-5 text-xs/5 md:text-sm lg:text-base/6  text-justify">
            <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </li>
            <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </li>
            <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </li>
            <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </li>
          </ol>
        </div>
        <Button 
          text="доєднатися"
          backgroundColor="#4ACBD1"
          textColor="white"
        />
      </section>
      <section className="w-full h-max p-4 sm:px-8 md:px-10 lg:px-15 xl:px-20 md:py-5 flex flex-col gap-3 md:gap-4 lg:gap-5">
        <div className="w-full h-max flex flex-col gap-3 font-light">
          <h2 className="font-medium text-[#FCD739] text-base md:text-lg lg:text-xl xl:text-2xl font-e-UkraineHead">
            Молодіжна мапа
          </h2>
          <p className="text-xs/5 md:text-sm lg:text-base/6  text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="text-xs/5 md:text-sm lg:text-base/6 text-justify">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div className="w-full h-50 md:h-75 lg:h-100 xl:h-125 relative">
          <div className="w-full h-full px-5 md:px-15 flex flex-col gap-[10px]  justify-center absolute inset-0 z-20">
            <h2 className="font-e-UkraineHead text-xl md:text-2xl lg:text-[32px] font-bold text-white">Молодіжна мапа області</h2>
            <p className="text-xs md:text-sm lg:text-base text-[#BDBDBD]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, НЕ ЧІПАЙТЕ СТРУКТУРУ БЛОКУ ПРОСТО ЗМІНІТЬ ТЕКСТ</p>
          </div>

          <div className='w-full h-full relative z-0 *:rounded-[10px] overflow-hidden'>
            <img 
              src={Fish3} 
              alt="Молодь області"
              className='w-full h-full object-cover z-5'
            />
            <img 
              src={MykoObl} 
              alt="Миколаївська область"
              className='w-[50%] lg:w-[40%] h-max object-cover absolute top-1/2 right-1/10 -translate-y-1/2 z-6'
            />
            <div className='absolute inset-0 pointer-events-none bg-[linear-gradient(0deg,rgba(29,22,13,1)_0%,rgba(29,22,13,0.2)_100%)] z-7'></div>
          </div>
        </div>

        <Button 
          text="перейти до молодіжної мапи"
          backgroundColor="#FCD739"
          textColor="black"
        />
      </section>
      <article className="w-full h-max py-5 flex flex-col gap-5 items-center rounded-t-[20px] md:rounded-t-[40px] bg-[#4ACBD1] text-black">
        <h2 className="font-e-UkraineHead text-base font-normal">Слідкуйте за нами у соцмережах</h2>
        <div className="w-max h-max flex flex-row gap-5 *:w-[30px] *:cursor-pointer *:hover:scale-105 *:duration-300 *:transition-all">
          <img src={Facebook} alt="Facebook" />
          <img src={Instagram} alt="Instagram" />
          <img src={TikTok} alt="TikTok" />
        </div>
      </article>
    </div>
  )
}

export default MainPage;