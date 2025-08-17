import { FaRegCopyright } from "react-icons/fa";
import Molrada_logo from "../assets/Logo/Молрада_лого.svg"
import Facebook from '../assets/fb_icon.svg';
import Instagram from '../assets/ins_icon.svg';
import TikTok from '../assets/tiktok_icon.svg';

function Footer(){
  return(
    <footer className="w-full h-max p-5 flex flex-col items-center justify-center gap-3 border-t-1 border-[#4ACBD1]">
      <div className="w-full h-max flex flex-col gap-3 items-center justify-center">
        <div className="flex flex-col gap-[10px] items-center justify-center">
          <img src={Molrada_logo} alt="Молрада лого" className="w-13"/>
          <h5 className="text-xs font-medium">
            Молодіжна рада при Миколаївській ОВА
          </h5>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="w-max h-max flex flex-row gap-5 *:w-[30px] *:cursor-pointer *:hover:scale-105 *:duration-300 *:transition-all">
            <a 
              href="https://www.facebook.com/share/17NZvsm4jh/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <img src={Facebook} alt="Facebook" />
            </a>
            <a 
              href="https://www.instagram.com/molradamova?igsh=cXZsNzd1aGdsOGk3"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <img src={Instagram} alt="Instagram" />
            </a>
            <a 
              href="https://www.tiktok.com/@molradamova"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              <img src={TikTok} alt="TikTok" />
            </a>
          </div>
          <p className="font-e-UkraineHead text-sm font-light">mikolaivskaoblasnamolodiznarad@gmail.com</p>
        </div>
      </div>
      <div className="w-full h-max px-5 py-[10px] border-t-1 border-[#4ACBD1] text-xs font-extralight">
        <p><FaRegCopyright className="inline"/> 2025  МР МОВА </p>
        <p>Всі права захищені (лол ні)</p>
      </div>
    </footer>
  )
}

export default Footer;