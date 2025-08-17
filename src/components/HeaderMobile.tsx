import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { HashLink } from 'react-router-hash-link';
import { RxHamburgerMenu, RxChevronRight } from "react-icons/rx";
import MolradaLogo from '../assets/Logo/Молрада_лого.svg'

type HeaderItem = {
  to: string;
  title: string;
}
type Dropdown = {
  title: string; 
  to: string;
  children:React.ReactNode;
}
type DropdownItem = {
  title:string; 
  to:string;
}

function DropdownItem({title, to}:DropdownItem){
  return(
    <HashLink to={to} className="text-xs font-light uppercase hover:text-[#4ACBD1] transition-all duration-300">
      {title}
    </HashLink>
  )
}

function Dropdown({to, title, children}:Dropdown){
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [height, setHeight] = useState<string>("0px");
  const contentRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {setIsOpen(!isOpen)}

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(`${contentRef.current.scrollHeight + 6}px`);
    } else {
      setHeight("0px");
    }
  }, [isOpen]);

  return(
    <div className="py-2 border-[#4ACBD1] border-b-2">
      <div className="flex flex-row justify-between cursor-pointer" onClick={handleClick}>
        <Link to={to}><h4 className="text-sm uppercase font-bold">{title}</h4></Link>
        <RxChevronRight className={`text-base transition-all duration-800 ease-in-out ${isOpen ? "rotate-90" : "rotate-0"}`}/>
      </div>
      <div
      ref={contentRef} 
      style={{ height }}
      className={`flex flex-col gap-[10px] ${isOpen ? "py-[6px]" : "py-0"} overflow-hidden transition-all duration-800 ease-in-out`}
      >
        {children}
      </div>
    </div>
  )
}

function HeaderItem({to, title}: HeaderItem){
  return(
    <Link to={to} className="py-2 border-[#4ACBD1] border-b-2 text-sm uppercase font-bold cursor-pointer">
      {title}
    </Link>
  )
}

function HeaderMobile(){
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const location = useLocation();

  const handleClick = () => setIsOpen(!isOpen);

  useEffect(()=>{
    setIsOpen(false);
  }, [location.pathname])

  return(
    <header className="w-full fixed z-1000 text-black">
      <div className="w-full h-16 bg-white py-2 px-7 flex flex-row justify-between items-center">
        <Link to="/">
          <img src={MolradaLogo} alt="Молрада Лого" className='w-11'/>
        </Link>
        <RxHamburgerMenu className='w-8 h-8 cursor-pointer' onClick={handleClick}/>
      </div>
      <div className={`bg-white overflow-hiden transition-all duration-500 px-8 ${isOpen ? 'h-[calc(100vh-80px)] opacity-100 pointer-events-auto py-8' : 'h-0 opacity-0 pointer-events-none p-0'} flex flex-col gap-[10px]`}>
        <h3 className="font-bold uppercase text-center">меню</h3>
        <HeaderItem to="/" title="Головна" />
        <Dropdown title="про нас" to="/about">
          <DropdownItem title="наша мета" to="/about/#goal"/>
          <DropdownItem title="структура молодіжної ради" to="/about/#struct"/>
          <DropdownItem title="команди/моніторинг/адвокація" to="/about/#teams"/>
        </Dropdown>
        <HeaderItem to="/map" title="молодіжна мапа області" />
        <HeaderItem to="/feedback" title="зворотний зв'язок" />
      </div>
    </header>
  )
}

export default HeaderMobile;