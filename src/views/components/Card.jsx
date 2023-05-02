import './card.css'
export const Card = ({ url }) => {
    return (
        <article className="w-72 h-96 rounded-3xl shadow-2xl shadow-blue" style={{ overflow: 'hidden' }}>
            <img
                src={url}
                alt="me"
                className="rounded-3xl hover:scale-150 ease-out duration-300"
                width='100%'
                height='100%' />
        </article>
    )
}
