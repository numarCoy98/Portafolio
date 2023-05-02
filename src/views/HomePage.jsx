import { Card } from "./components/Card"

const redSocialIcons = [
    { key: 1, name: 'linkedin', classNameIcon: 'bx bxl-linkedin', url: 'https://www.linkedin.com/in/stiven-coy/' },
    { key: 2, name: 'github', classNameIcon: 'bx bxl-github', url: 'https://github.com/numarCoy98' },
    { key: 3, name: 'instagram', classNameIcon: 'bx bxl-instagram', url: 'https://www.instagram.com/numarcoy3/' }
]

export const HomePage = () => {
    const imageUrl = '/meSmall2.jpg'
    return (
        <div className="container mx-auto px-4 flex justify-between rounded-2xl mt-4" style={{ height: '80vh' }}>
            <div className="w-1/2 flex justify-center items-start flex-col font-bold">
                <p className="text-3xl text-blue-light-2">Bienvenidos</p>
                <p className="text-xl text-white">Mi nombre es Numar Stiven Coy Paez</p>
                <p className="text-xl text-white">y soy desarrollador <span className="text-blue ">FRONTEND</span></p>
                <div className="text-white text-2xl flex justify-start my-4">
                    {redSocialIcons.map(({ classNameIcon, url, key }) =>
                        (<a target='_blank' key={key} href={url} className="mr-2"><i className={classNameIcon}></i></a>)
                    )}
                </div>
                <button className="bg-blue-light shadow-md shadow-blue p-3 rounded-3xl text-blue-dark my-3">
                    Descargar CV
                </button>
            </div>

            <div className="w-1/2 h-full flex justify-center items-center">
                <Card url={imageUrl} />
            </div>
        </div>
    )
}
