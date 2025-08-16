import Fish3 from "../assets/Fish 3.png"
import MykoObl from '../assets/Миколаївська область жовтий 1.png'

interface MolradaCardType {
  title:string;
}

function MolradaCard({title}:MolradaCardType){
  return(
    <article className="h-30 md:h-35 lg:h-40 p-2 md:p-3 lg:p-5 bg-[#4ACBD1] rounded-[10px]">
      <h3 className="font-e-UkraineHead font-medium text-xs md:text-sm lg:text-base">{title}</h3>
    </article>
  )
}

function MapPage(){
  return(
    <div>
      <div className="w-full h-[250px] sm:h-[350px] md:h-100 lg:h-[500px] xl:h-[600px] relative">
        <div className="w-full h-full px-3 sm:px-10 md:px-15 lg:px-30 flex flex-col gap-[10px]  justify-center absolute inset-0 z-20">
          <h1 className="text-base sm:text-lg md:text-2xl lg:text-4xl xl:text-[40px] font-medium text-white font-e-UkraineHead text-shadow-lg">Молодіжна мапа області</h1>
          <h3 className="sm:w-100 lg:w-[650px] text-[10px] md:text-xs lg:text-sm xl:text-base font-normal text-[#BDBDBD]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, НЕ ЧІПАЙТЕ СТРУКТУРУ БЛОКУ ПРОСТО ЗМІНІТЬ ТЕКСТ</h3>
        </div>

        <div className='w-full h-full relative z-0 overflow-hidden'>
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

      <article className="w-full h-max p-4 sm:px-8 md:px-10 lg:px-15 xl:px-20 md:py-5 flex flex-col gap-3 md:gap-4 lg:gap-5">
        <h2 className="font-medium text-base md:text-lg lg:text-xl xl:text-2xl font-e-UkraineHead">
          Якийсь заголовок
        </h2>
        <p className="text-xs/5 md:text-sm lg:text-base/6 text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p className="text-xs/5 md:text-sm lg:text-base/6 text-justify">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <h2 className="font-medium text-base md:text-lg lg:text-xl xl:text-2xl font-e-UkraineHead">
          Ще один заголовок
        </h2>
        <ul className="list-disc p-3 flex flex-col gap-3 md:gap-4 lg:gap-5 text-xs/5 md:text-sm lg:text-base/6  text-justify">
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
          <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
          <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
        </ul>
      </article>

      <section className="w-full h-max p-4 sm:px-8 md:px-10 lg:px-15 xl:px-20 md:py-5 flex flex-col gap-3 md:gap-4 lg:gap-5">
        <h2 className="font-medium text-base md:text-lg lg:text-xl xl:text-2xl font-e-UkraineHead">
          Молодіжні ради
        </h2>
        <div className="grid gap-5 md:gap-6 lg:gap-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
          <MolradaCard title="Миколаївська обласна молодіжна рада"/>
          <MolradaCard title="Миколаївська міська молодіжна рада"/>
          <MolradaCard title="Башатанська молодіжна рада"/>
          <MolradaCard title="Вознесеньска молодіжна рада"/>
          <MolradaCard title="Коблівська молодіжна рада"/>
          <MolradaCard title="Очаківська молодіжна рада"/>
          <MolradaCard title="Снігурівська молодіжна рада"/>
          <MolradaCard title="Новоодеська молодіжна рада"/>
          <MolradaCard title="Куцурубська молодіжна рада"/>
          <MolradaCard title="Доманівська молодіжна рада"/>
          <MolradaCard title="Первомайська молодіжна рада"/>
        </div>
      </section>
    </div>
  )
}

export default MapPage;