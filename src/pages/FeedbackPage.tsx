import { Link } from "react-router";

interface ButtonTypes {
  text: string;
  backgroundColor: string;
  textColor: string;
  href?: string;
  to?: string;
}

function Button({text, backgroundColor, textColor, href, to}: ButtonTypes){
  const classes = "w-full md:w-max md:px-16 h-10 rounded-lg font-bold text-xs md:text-sm cursor-pointer active:scale-95 duration-300 transition-all uppercase flex items-center justify-center";

  if(href){
    return(
      <a 
        style={{ backgroundColor, color: textColor }}
        href={href}
        className={classes}
      >
        {text}
      </a>
    )
  }

  if(to){
    return(
      <Link 
        style={{ backgroundColor, color: textColor }}
        to={to}
        className={classes}
      >
        {text}
      </Link>
    )
  }
}

function FeedbackPage(){
  return(
    <div className="flex flex-col">

      <section className="w-full h-max p-4 sm:px-8 md:px-10 lg:px-15 xl:px-20 md:py-5 flex flex-col gap-3 md:gap-4 lg:gap-5 font-light">
        <h1 className='text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-[40px] font-medium font-e-UkraineHead'>
          Зворотний зв'язок
        </h1>
        <p className="text-xs/5 md:text-sm lg:text-base/6 text-justify">
          Ми завжди раді вашим питанням, пропозиціям та відгукам. Скористайтеся телеграм ботом або ж заповніть форму нижче!
        </p>
      </section>

      <section className="w-full h-max p-4 sm:px-8 md:px-10 lg:px-15 xl:px-20 md:py-5 flex flex-col gap-3 md:gap-4 lg:gap-5">
        <div className="w-full h-max flex flex-col gap-3 md:gap-4 lg:gap-5 font-light">
          <h2 className="font-medium text-base md:text-lg lg:text-xl xl:text-2xl font-e-UkraineHead">
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
          href="https://t.me/molrada_mova_test_bot"
        />
      </section>
    </div>
  )
}

export default FeedbackPage;