import TitleBanner from "../components/TitleBanner";
import Fish2 from "../assets/Fish 2.png"
import Fish4 from "../assets/Fish 4.png"

function AboutPage(){
  return(
    <div className="w-full h-max flex flex-col">
      <TitleBanner 
        title="Хто ми?"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        src={Fish4}
        srcAlt="Члени молради"
      />
      <article 
        id="goal"
        className="w-full h-max p-4 sm:px-8 md:px-10 lg:px-15 xl:px-20 md:py-5 flex flex-col gap-3 md:gap-4 lg:gap-5"
      >
        <h2 className="font-medium text-base md:text-lg lg:text-xl xl:text-2xl font-e-UkraineHead">
          Наша мета
        </h2>
        <p className="text-xs/5 md:text-sm lg:text-base/6 text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p className="text-xs/5 md:text-sm lg:text-base/6 text-justify">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </article>
      <article 
        id="struct"
        className="w-full h-max p-4 sm:px-8 md:px-10 lg:px-15 xl:px-20 md:py-5 flex flex-col md:flex-row gap-3 md:gap-5 lg:gap-8"
      >
        <img 
          src={Fish2} 
          alt="Члени молодіжної ради" 
          className="w-full md:w-75 lg:w-90 xl:w-100 h-62 md:h-90 lg:h-100 xl:h-115 rounded-xl object-cover"
        />
        <div className="w-full h-max py-5 flex flex-col gap-3 md:gap-4 lg:gap-5">
          <h2 className="font-medium text-base md:text-lg lg:text-xl xl:text-2xl font-e-UkraineHead">
            Структура молодіжної ради
          </h2>
          <p className="text-xs/5 md:text-sm lg:text-base/6 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <ol className="list-decimal p-3 flex flex-col gap-3 md:gap-4 lg:gap-5 text-xs/5 md:text-sm lg:text-base/6 text-justify">
            <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </li>
            <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </li>
            <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </li>
          </ol>
        </div>
      </article>
      <article 
        id="teams"
        className="w-full h-max p-4 sm:px-8 md:px-10 lg:px-15 xl:px-20 md:py-5 flex flex-col gap-3 md:gap-5 lg:gap-8"
      >
        <div className="w-full h-max flex flex-col md:flex-row md:items-stretch gap-3 md:gap-5 lg:gap-8">
          <div className="flex-1 min-w-0 flex flex-col gap-3 md:gap-4 lg:gap-5">
            <h2 className="font-medium text-base md:text-lg lg:text-xl xl:text-2xl font-e-UkraineHead text-[#C24AD2]">1. Команди</h2>
            <p className="text-xs/5 md:text-sm lg:text-base/6 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-xs/5 md:text-sm lg:text-base/6 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="w-full md:w-[300px] min-h-50 rounded-[10px] bg-[#C24AD2]"></div>
        </div>
        <div className="w-full h-max flex flex-col md:flex-row-reverse md:items-stretch gap-3 md:gap-5 lg:gap-8">
          <div className="flex-1 min-w-0 flex flex-col gap-3 md:gap-4 lg:gap-5">
            <h2 className="font-medium text-base md:text-lg lg:text-xl xl:text-2xl font-e-UkraineHead text-[#4ACBD1]">1. Команди</h2>
            <p className="text-xs/5 md:text-sm lg:text-base/6 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-xs/5 md:text-sm lg:text-base/6 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="w-full md:w-[300px] min-h-50 rounded-[10px] bg-[#4ACBD1]"></div>
        </div>
        <div className="w-full h-max flex flex-col md:flex-row md:items-stretch gap-3 md:gap-5 lg:gap-8">
          <div className="flex-1 min-w-0 flex flex-col gap-3 md:gap-4 lg:gap-5">
            <h2 className="font-medium text-base md:text-lg lg:text-xl xl:text-2xl font-e-UkraineHead text-[#FCD739]">1. Команди</h2>
            <p className="text-xs/5 md:text-sm lg:text-base/6 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-xs/5 md:text-sm lg:text-base/6 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="w-full md:w-[300px] min-h-50 rounded-[10px] bg-[#FCD739]"></div>
        </div>
      </article>
    </div>
  )
}

export default AboutPage;