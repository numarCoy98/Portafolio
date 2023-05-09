import { useState } from "react"
import { Link } from "react-scroll";

const listWindowsEsp = [
    { id: 1, name: 'Home', to: 'home' },
    { id: 6, name: 'Perfil', to: 'profile' },
    { id: 7, name: 'Habilidades', to: 'habilities' },
    // { id: 2, name: 'Educación' },
    // { id: 3, name: 'Mi experiencia' },
    // { id: 4, name: 'Proyectos (Proximamente)', },
    { id: 5, name: 'Contacto', to: 'contact' }
]

const listWindowsEng = [
    { id: 1, name: 'Home', to: '/home' },
    { id: 6, name: 'About me', to: '/profile' },
    // { id: 2, name: 'Education' },
    // { id: 3, name: 'Experience' },
    { id: 4, name: 'Projects', to: '/projects' },
    // { id: 5, name: 'Contact' }
]

const lenguages = { esp: listWindowsEsp, eng: listWindowsEng }


export const Navbar = () => {

    const [lenguage, setLenguage] = useState('esp')
    const [showDropdown, setShowDropdown] = useState(false)


    return (
        <nav className="flex justify-between items-center h-16 p-5 bg-blue-dark text-lg font-medium fixed w-full top-0">
            <div >
                <p className="text-white text-xl"> Numar Coy</p>
            </div>
            <div className="hidden sm:block">
                <ol className="flex justify-between items-center">
                    {lenguages[lenguage].map(({ name, id, to }) =>
                    (<Link to={to}
                        smooth={true}
                        duration={500}
                        className="mx-2 text-white transition duration-200 delay-150 hover:text-blue-light cursor-pointer"
                        key={id}>{name.toUpperCase()}

                    </Link>))}
                </ol>
            </div>
            <div className="sm:hidden">
                <div className="text-white text-2xl" onClick={() => setShowDropdown(n => !n)}>
                    <i className='bx bx-menu'></i>
                </div>
                <div className={`${showDropdown ? '' : 'hidden'} absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}>
                    <div className="py-1">
                        {lenguages[lenguage].map(({ name, id, to }) =>
                        (<Link to={to}
                            onClick={() => setShowDropdown(false)}
                            smooth={true}
                            duration={500}
                            className="text-gray-700 block px-4 py-2 text-sm cursor-pointer"
                            key={id}>{name.toUpperCase()}
                        </Link>))}
                    </div>
                </div>
            </div>

            {/* <div className="">
                <a onClick={() => setLenguage('eng')} className={`mx-2 text-white ${lenguage === 'eng' ? 'font-bold' : ''}`}>ENG</a>
                <a onClick={() => setLenguage('esp')} className={`mx-2 text-white ${lenguage === 'esp' ? 'font-bold' : ''}`}>ESP</a>
            </div> */}
        </nav>
    )
}
