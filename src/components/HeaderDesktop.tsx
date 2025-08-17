import { Link} from "react-router";
import { HashLink } from 'react-router-hash-link';
import { RxChevronRight } from "react-icons/rx";
import MolradaLogo from '../assets/Logo/Молрада_лого.svg'

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
    <HashLink to={to} className="text-sm uppercase text-white hover:text-[#4ACBD1] transition-all duration-300">
      {title}
    </HashLink>
  )
}

function Dropdown({to, title, children}:Dropdown){

  return(
    <div className="flex flex-col text-black relative group">
      <div className="flex flex-row justify-between cursor-pointer">
        <Link to={to}>
          <p className="text-sm uppercase font-extrabold group hover:text-[#4ACBD1] transition-all duration-300">
            {title}
          </p>
        </Link>
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
    <header className="w-full h-16 px-7 py-2 bg-white fixed z-500 flex flex-row justify-start items-center gap-5 font-e-UkraineHead">
      <Link to="/" className="w-12 h-12 cursor-pointer">
        <img src={MolradaLogo} alt="Молрада лого" className="w-11"/>
      </Link>
      <HeaderItem title="головна" to="/" />
      <Dropdown title="про нас" to="/about">
        <DropdownItem title="наша мета" to="/about/#goal"/>
        <DropdownItem title="структура молодіжної ради" to="/about/#struct"/>
        <DropdownItem title="команди/моніторинг/адвокація" to="/about/#teams"/>
      </Dropdown>
      <HeaderItem title="молодіжна мапа області" to="/map" />
      <HeaderItem title="зворотний зв'язок" to="/feedback" />
    </header>
  )
}

export default HeaderDesktop;