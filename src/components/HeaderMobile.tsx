import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { RxHamburgerMenu, RxChevronRight } from "react-icons/rx";
import MolradaLogo from '../assets/Logo/Молрада_лого.svg'

type HeaderItem = {
  to: string;
  children:React.ReactNode;
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
    <Link to={to} className="text-xs font-light uppercase hover:text-[#4ACBD1] transition-all duration-300">
      {title}
    </Link>
  )
}

function Dropdown({title, children}:Dropdown){
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
        <h4 className="text-sm uppercase font-bold">{title}</h4>
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

function HeaderItem({to, children}: HeaderItem){
  return(
    <Link to={to} className="py-2 border-[#4ACBD1] border-b-2 text-sm uppercase font-bold cursor-pointer">
      {children}
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
      <div className="w-full h-20 bg-white py-2 px-7 flex flex-row justify-between items-center">
        <Link to="/">
          <img src={MolradaLogo} alt="Молрада Лого" className='w-13'/>
        </Link>
        <RxHamburgerMenu className='w-10 h-10 cursor-pointer' onClick={handleClick}/>
      </div>
      <div className={`bg-white overflow-hiden transition-all duration-500 px-8 ${isOpen ? 'h-[calc(100vh-80px)] opacity-100 pointer-events-auto py-8' : 'h-0 opacity-0 pointer-events-none p-0'} flex flex-col gap-[10px]`}>
        <h3 className="font-bold uppercase text-center">меню</h3>
        <HeaderItem to="/">Головна</HeaderItem>
        <Dropdown title="про нас" to="/about">
          <DropdownItem title="наша мета" to=""/>
          <DropdownItem title="функції молодіжної ради" to=""/>
          <DropdownItem title="структура молодіжної ради" to=""/>
          <DropdownItem title="команди/моніторинг/адвокація" to=""/>
        </Dropdown>
        <HeaderItem to="/map">молодіжна мапа області</HeaderItem>
        <HeaderItem to="/feedback">зворотний зв'язок</HeaderItem>
      </div>
    </header>
  )
}

export default HeaderMobile;