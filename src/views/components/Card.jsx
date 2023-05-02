import './card.css'
export const Card = ({ url }) => {
    return (
        <article className="w-64 h-80 rounded-3xl shadow-2xl shadow-blue"
            style={{
                // border: '1px solid red',
                // backgroundImage: `url(${imageUrl})`,
                // boxShadow: "15px 15px 5px 5px",
            }}>
            <img src={url} alt="me" className="rounded-3xl" width='100%' height='100%'
            />

        </article>
    )
}
