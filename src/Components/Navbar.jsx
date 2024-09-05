import { navLists } from "../constants"
import { appleImg, bagImg, searchImg } from "../utils"

const Navbar = () => {
    return (
        <header className="w-full py-5 sm:px-10 px-5 flex justify-center items-center">
            <nav className="flex w-full screen-max-width">
                <img src={appleImg} alt="Apple logo" width={14} height={18} />
                <div className="flex flex-1 justify-center max-sm:hidden">
                    {navLists.map((nav,i) => (
                        <div id={nav} key={i} className="px-5 text-sm cursor-pointer text-gray-500 hover:text-white transition-all">
                            {nav}
                        </div>
                    ))}
                </div>
                <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
                    <img src={searchImg} alt="Search" width={18} height={18} />
                    <img src={bagImg} alt="Shop" width={18} height={18} />

                </div>
            </nav>
        </header>
    )
}

export default Navbar