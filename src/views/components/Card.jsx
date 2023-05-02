import './card.css'
export const Card = ({ url }) => {
    return (
        <article className="w-72 h-96 rounded-3xl shadow-2xl shadow-blue">
            <img src={url} alt="me" className="rounded-3xl" width='100%' height='100%' />
        </article>
    )
}
