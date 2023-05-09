import { Link } from "react-scroll";

export const AboutMe = () => {
    // const onToContact = () => {

    // }
    return (
        <div className="w-full flex sm:justify-between bg-white py-16 flex-wrap">
            <div className="w-9/12 m-auto sm:w-1/2 flex justify-center items-center">
                <img src="/me4.png" alt="me" className="sm:max-w-screen-sm" />
            </div>
            <div className="w-9/12 m-auto max-w-screen-sm sm:w-1/2 h-full flex items-start flex-col my-auto">
                <p className="text-3xl text-blue-dark font-bold my-3">Sobre mi</p>
                <p className="text-base text-blue-king mr-5 text-justify">Soy ingeniero mecatrónico con más de 2
                    años de experiencia trabajando en el
                    área de desarrollo de software. He
                    diseñado y desarrollado aplicaciones
                    Web haciendo uso de diferentes
                    frameworks como Mithril, React y Fast
                    Api. Y adicionalmente he desarrollado
                    scripts para el área de minería de datos
                    en el lenguaje Python.
                </p>
                <Link
                    smooth={true}
                    duration={500}
                    to='contact'
                    className='font-bold bg-blue-light shadow-md shadow-blue p-3 rounded-3xl text-blue-dark my-3 hover:bg-sky-700'>
                    Contactame
                </Link>
            </div>
        </div>
    )
}
