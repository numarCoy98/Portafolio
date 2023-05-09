import { RedSocialIcons } from "./components"
import { Card } from "./components/Card"

export const HomePage = () => {
    const imageUrl = '/meSmall2.jpg'
    return (
        <>
            <div className="container mx-auto px-4 flex sm:justify-between rounded-2xl mt-16 py-28 flex-wrap">
                <div className="w-9/12 sm:w-1/2 flex justify-center items-start flex-col font-bold ">
                    <p className="font-mono text-3xl text-blue-light-2">Bienvenidos</p>
                    <p className="font-mono text-xl text-white">Mi nombre es Numar Stiven Coy Paez</p>
                    <p className="font-mono text-xl text-white">y soy desarrollador <span className="text-blue font-black">FULL STACK</span></p>
                    <div className="text-white text-2xl flex justify-start my-4">
                        <RedSocialIcons />
                    </div>
                    <a href="/CV_NUMAR-COY.pdf" target='_blank' download className="bg-blue-light shadow-md shadow-blue p-3 rounded-3xl text-blue-dark my-3">
                        Descargar CV
                    </a>
                </div>
                <div className="hidden sm:flex w-1/2 h-full justify-center items-center">
                    <Card url={imageUrl} />
                </div>
            </div>
        </>
    )
}
