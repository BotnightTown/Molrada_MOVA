import { Link} from "react-router";
import { RxChevronRight } from "react-icons/rx";
import MolradaLogo from '../assets/Молрада_лого.svg'

type HeaderItem = {
  title: string;
  to: string;
}
type Dropdown = {
  to: string;
  title: string; 
  children:React.ReactNode;
}

function DropdownItem({title, to}:HeaderItem){
  return(
    <Link to={to} className="text-sm uppercase text-white hover:text-[#4ACBD1] transition-all duration-300">
      {title}
    </Link>
  )
}

function Dropdown({title, children}:Dropdown){

  return(
    <div className="flex flex-col text-black relative group">
      <div className="flex flex-row justify-between cursor-pointer">
        <p className="text-sm uppercase font-extrabold group hover:text-[#4ACBD1] transition-all duration-300">{title}</p>
        <RxChevronRight className="text-xl transition-all duration-300 ease-in-out group-hover:rotate-90" />
      </div>
      <div
      className="flex flex-col gap-[10px] bg-[#3C4046C7] absolute top-full left-0 p-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300"
      >
        {children}
      </div>
    </div>
  )
}

function HeaderItem({title, to}: HeaderItem){
  return(
    <Link to={to} className="uppercase font-extrabold text-sm text-black hover:text-[#4ACBD1] transition-all duration-300">
      {title}
    </Link>
  )
}

function HeaderDesktop(){
  return(
    <header className="w-full h-20 px-7 py-2 fixed z-500 flex flex-row justify-start items-center gap-5">
      <Link to="/" className="w-12 h-12 cursor-pointer">
        <img src={MolradaLogo} alt="Миколаївпастранс_лого" className="w-13"/>
      </Link>
      <HeaderItem title="головна" to="/" />
      <Dropdown title="про нас" to="/about">
        <DropdownItem title="наша мета" to=""/>
        <DropdownItem title="функції молодіжної ради" to=""/>
        <DropdownItem title="структура молодіжної ради" to=""/>
        <DropdownItem title="команди/моніторинг/адвокація" to=""/>
      </Dropdown>
      <HeaderItem title="молодіжна мапа області" to="/map" />
      <HeaderItem title="зворотний зв'язок" to="/feedback" />
    </header>
  )
}

export default HeaderDesktop;