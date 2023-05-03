const tecnologies = [
    { name: 'javascript', url: '/javaScript.png' },
    { name: 'git', url: '/git.png' },
    { name: 'python', url: '/python.png' },
    { name: 'jest', url: '/jest.png' },
    { name: 'tailwind', url: '/tailwind.png' },
    { name: 'react', url: '/react.png' },
    { name: 'bootstrap', url: '/bootstrap.png' },
    { name: 'html', url: '/html.png' },
    { name: 'nodejs', url: '/nodejs.png' },
    { name: 'fastApi', url: '/fastApi.png' },
    { name: 'mongoDB', url: '/mongoDB.png' }
]
export const Stacks = () => {
    return (
        <div className="bg-white flex justify-center items-center flex-col " style={{ height: '80vh' }}>
            <p className="text-3xl text-blue text-bold text-center py-5">Stack tecnológico</p>
            <div className="flex flex-wrap justify-center item-center">
                {tecnologies.map(({ name, url }) => (<img className="m-5 hover:scale-150 ease-out duration-300" src={url} alt={name} key={name} width={100} />))}
            </div>
        </div>
    )
}
