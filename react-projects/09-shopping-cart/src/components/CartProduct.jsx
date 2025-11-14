export default function CartProduct(props) {
    const removeProductHandler = (id) => {
        props.onRemove(id);
    };

    return (
        <>
            <div className="cart-row">
                <div className="cart-item cart-column">
                    <img
                        className="cart-item-image"
                        src={props.img}
                        width="100"
                        height="100"
                    />
                    <span className="cart-item-title">{props.title}</span>
                </div>
                <span className="cart-price cart-column">$ {props.price}</span>
                <div className="cart-quantity cart-column">
                    <button
                        onClick={() => removeProductHandler(props.id)}
                        className="btn btn-danger"
                        type="button"
                    >
                        REMOVE
                    </button>
                </div>
            </div>
        </>
    );
}
