import './card.css'
export const Card = ({ url }) => {
    return (
        <article className="sm:w-72 sm:h-96 w-11/12 rounded-3xl shadow-2xl shadow-blue" style={{ overflow: 'hidden' }}>
            <img
                src={url}
                alt="me"
                className="rounded-3xl hover:scale-150 ease-out duration-300 "
                width='100%'
                height='100%' />
        </article>
    )
}
