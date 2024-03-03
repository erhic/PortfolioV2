import { headerLogo } from '../assets/images'
import { navLinks } from "../constants"
import { hamburger } from '../assets/icons'
const Nav = () => {
  return (
    // spacing by padding , position  , z index , full width
    <header className='padding-x py-4 absolute w-full z-10  '>
      {/* flex to position nxt to each other horizontal ,space between ,max width 1440 */}
      <nav className='flex justify-between items-center max-container'>
        <a href="">
          <img src={headerLogo} width={130} height={29} alt="logo" />
        </a>
        {/*min width of 1024, will be hidden */}
        <ul className='flex justify-center items-center gap-16 max-lg:hidden'>
          {
            navLinks.map((item) => (
              <li key={item.label}>
                {/* setting font type, lineheight ,size ,color */}
                <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray hover:border-b-4 border-yellow-400'>
                  {item.label}
                </a>
              </li>
            ))
          }
        </ul>
        {/*default hidden but minwidth 1024 will display block */}
        <div className='hidden max-lg:block'>
          <img src={hamburger} alt="hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  )
}

export default Nav