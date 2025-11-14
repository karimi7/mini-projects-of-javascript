export default function Product(props) {
    const AddToCartHandler = (id) => {
        props.onAddProduct(id);
    };

    return (
        <>
            <div className="shop-item">
                <span className="shop-item-title">{props.title}</span>
                <img className="shop-item-image" src={props.img} />
                <div className="shop-item-details">
                    <span className="shop-item-price">$ {props.price}</span>
                    <button
                        onClick={() => AddToCartHandler(props.id)}
                        type="button"
                        className="btn btn-primary shop-item-button"
                    >
                        ADD TO CART
                    </button>
                </div>
            </div>
        </>
    );
}
