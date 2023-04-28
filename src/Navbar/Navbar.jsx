const listWindows = [
    { id: 1, name: 'Home' },
    { id: 2, name: 'Educación' },
    { id: 3, name: 'Mi experiencia' },
    { id: 4, name: 'Proyectos' },
    { id: 5, name: 'Contacto' }
]

export const Navbar = () => {

    return (
        <nav className="flex justify-between items-center h-24 p-5">
            <div >
                <a className="text-blue-light"> Numar Coy</a>
            </div>
            <div>
                <ol className="flex justify-between items-center">
                    {listWindows.map(({ name, id }) => (<li className="mx-2 text-blue-light" key={id}>{name.toUpperCase()}</li>))}
                </ol>
            </div>
            <div className="">
                <a className="mx-2 text-blue-light" href="">ENG</a>
                <a className="mx-2 text-blue-light" href="">ESP</a>
            </div>
        </nav>
    )
}
