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
      className={`w-full h-10 rounded-sm bg-[${backgroundColor}] text-${textColor} font-bold text-sm cursor-pointer active:scale-95 duration-300 transition-all`}
    >
      {text}
    </button>
  )
}

function MainPage() {
  return(
    <div className="flex flex-col">
      <TitleBanner 
        title="Голос молоді миколаївщини"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        src={Fish1}
        srcAlt="Члени молодіжної ради"
      />
      <article className="w-full h-max p-4 flex flex-col gap-5">
        <div className="flex flex-col gap-3 py-4 font-light">
          <h2 className="font-medium text-base/6 font-e-UkraineHead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h2>
          <p className="text-xs/5 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="text-xs/5 text-justify">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <img 
          src={Fish2} 
          alt="Члени молради" 
          className="w-full h-62 rounded-xl"
        />
      </article>
      <section className="w-full h-max p-4 flex flex-col gap-5">
        <div className="w-full h-max flex flex-col gap-3 text-xs/5 text-justify font-regular font-light">
          <h3 className="font-medium text-[#4ACBD1] text-xl font-e-UkraineHead">
            Телеграм бот
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <ol className="list-decimal flex flex-col gap-3 p-3">
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
      <section className="w-full h-max p-4 flex flex-col gap-5">
        <div className="w-full h-max flex flex-col gap-3 text-xs/5 text-justify font-regular font-light">
          <h3 className="font-medium text-[#FCD739] text-xl font-e-UkraineHead">
            Молодіжна мапа
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div className="w-full h-50 relative">
          <div className="w-full h-full p-5 flex flex-col gap-[10px] items-center justify-center absolute inset-0 z-20">
            <h2 className="font-e-UkraineHead text-xl font-bold text-white">Молодіжна мапа області</h2>
            <p className="text-xs text-[#BDBDBD]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, НЕ ЧІПАЙТЕ СТРУКТУРУ БЛОКУ ПРОСТО ЗМІНІТЬ ТЕКСТ</p>
          </div>

          <div className='w-full h-full relative z-0 *:rounded-[10px]'>
            <img 
              src={Fish3} 
              alt="Молодь області"
              className='w-full h-full object-cover z-5'
            />
            <img 
              src={MykoObl} 
              alt="Миколаївська область"
              className='w-[50%] h-max object-cover absolute top-1/2 right-1/10 -translate-y-1/2 z-6'
            />
            <div className='absolute inset-0 pointer-events-none bg-[#1D160D99] z-7'></div>
          </div>
        </div>

        <Button 
          text="перейти до молодіжної мапи"
          backgroundColor="#FCD739"
          textColor="black"
        />
      </section>
      <article className="w-full h-max py-5 flex flex-col gap-5 items-center rounded-t-[20px] bg-[#4ACBD1] text-black">
        <h4 className="font-e-UkraineHead text-base font-normal">Слідкуйте за нами у соцмережах</h4>
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