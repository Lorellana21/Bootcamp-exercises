import Product from './Product';

const ProductList = props => {
    return (
        <ul className="cards">
            <li>
                {/* Aquí empieza lo importante*/}
                <Product
                    imgSrc={props.imgSrc}
                    name={props.name}
                    description={props.description}
                />
                {/* Aquí acaba lo importante*/}
            </li>
        </ul>
    );
};

export default ProductList;