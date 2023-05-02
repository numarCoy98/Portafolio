import { useState } from "react"

const listWindowsEsp = [
    { id: 1, name: 'Home' },
    { id: 2, name: 'Educación' },
    { id: 3, name: 'Mi experiencia' },
    { id: 4, name: 'Proyectos' },
    { id: 5, name: 'Contacto' }
]

const listWindowsEng = [
    { id: 1, name: 'Home' },
    { id: 2, name: 'Education' },
    { id: 3, name: 'Experience' },
    { id: 4, name: 'Projects' },
    { id: 5, name: 'Contact' }
]

const lenguages = { esp: listWindowsEsp, eng: listWindowsEng }

export const Navbar = () => {
    const [lenguage, setLenguage] = useState('esp')
    return (
        <nav className="flex justify-between items-center h-24 p-5 bg-blue-dark text-lg font-medium">
            <div >
                <a className="text-white text-xl"> Numar</a>
            </div>
            <div>
                <ol className="flex justify-between items-center">
                    {lenguages[lenguage].map(({ name, id }) => (<li className="mx-2 text-white transition duration-200 delay-150 hover:text-blue-light" key={id}>{name.toUpperCase()}</li>))}
                </ol>
            </div>
            <div className="">
                <a onClick={() => setLenguage('eng')} className={`mx-2 text-white ${lenguage === 'eng' ? 'font-bold' : ''}`}>ENG</a>
                <a onClick={() => setLenguage('esp')} className={`mx-2 text-white ${lenguage === 'esp' ? 'font-bold' : ''}`}>ESP</a>
            </div>
        </nav>
    )
}
