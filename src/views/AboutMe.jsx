import { useNavigate, useLocation } from "react-router-dom";

const nextPathName = { "/aboutMe": '/stack', '/stack': "/aboutMe" }

export const AboutMe = () => {

    return (
        <div className="w-full flex justify-between bg-white py-16">
            <div className="w-1/2 flex justify-center items-center">
                <img src="/me4.png" alt="" />
            </div>
            <div className="w-1/2 h-full flex items-start flex-col my-auto">
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
                <button className='font-bold bg-blue-light shadow-md shadow-blue p-3 rounded-3xl text-blue-dark my-3 hover:bg-sky-700'>
                    Contactame
                </button>
            </div>
        </div>
    )
}
