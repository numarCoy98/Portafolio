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
        <nav className="flex justify-between items-center h-24 p-5">
            <div >
                <a className="text-blue-light"> Numar Coy</a>
            </div>
            <div>
                <ol className="flex justify-between items-center">
                    {lenguages[lenguage].map(({ name, id }) => (<li className="mx-2 text-blue-light" key={id}>{name.toUpperCase()}</li>))}
                </ol>
            </div>
            <div className="">
                <a onClick={() => setLenguage('eng')} className={`mx-2 text-blue-light ${lenguage === 'eng' ? 'font-black' : ''}`}>ENG</a>
                <a onClick={() => setLenguage('esp')} className={`mx-2 text-blue-light ${lenguage === 'esp' ? 'font-black' : ''}`}>ESP</a>
            </div>
        </nav>
    )
}
