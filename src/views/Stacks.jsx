const backendTecnologies = [
    { name: 'nodejs', url: '/nodejs.svg' },
    { name: 'express', url: '/express.svg' },
    { name: 'python', url: '/python.svg' },
    { name: 'fastApi', url: '/fastapi.svg' },
    { name: 'mongoDB', url: '/mongodb.svg' },
    { name: 'git', url: '/git.svg' },
]

const frontendTecnologies = [
    { name: 'html', url: '/html.svg' },
    { name: 'javascript', url: '/javascript.svg' },
    { name: 'react', url: '/react.svg' },
    { name: 'jest', url: '/jest.svg' },
    { name: 'tailwind', url: '/tailwindcss.svg' },
    { name: 'bootstrap', url: '/bootstrap.svg' },

]
export const Stacks = () => {
    return (
        <>
            <div className="py-16 bg-white">
                <p className="text-3xl text-blue-dark text-bold text-center py-5">Habilidades</p>
                <div className="flex justify-around items-center flex-wrap">
                    <div className="w-64 h-80 shadow-xl shadow-blue-dark rounded-xl">
                        <div className="flex justify-center py-5">
                            <img src="/code.svg" alt="code" width={50} />
                        </div>
                        <p className="text-center text-bold">FRONTEND</p>
                        <div className="flex flex-wrap justify-center items-center">
                            {frontendTecnologies.map(({ name, url }) => (<img className="m-5 hover:scale-150 ease-out duration-300" src={url} alt={name} key={name} width={40} />))}

                        </div>
                    </div>
                    <div className="w-64 h-80 shadow-xl shadow-blue-dark rounded-xl">
                        <div className="flex justify-center py-5">
                            <img src="/server.svg" alt="code" width={50} />
                        </div>
                        <p className="text-center text-bold">BACKEND</p>
                        <div className="flex flex-wrap justify-center items-center">
                            {backendTecnologies.map(({ name, url }) => (<img className="m-5 hover:scale-150 ease-out duration-300" src={url} alt={name} key={name} width={40} />))}

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
