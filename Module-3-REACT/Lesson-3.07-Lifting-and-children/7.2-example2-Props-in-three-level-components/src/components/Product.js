



const Product = props => {
    return (
        <article className="card">
            <img className="card__img" src={props.imgSrc} alt={props.name} />
            <h3 className="card__title">{props.name}</h3>
            <p className="card__description">{props.description}</p>
            <button className="card__btn">Añadir a la cesta</button>
        </article>
    );
};

export default Product;