export default function Product() {
    return (
        <>
            <div className="shop-item">
                <span className="shop-item-title">Shirt</span>
                <img className="shop-item-image" src="images/Shirt.png" />
                <div className="shop-item-details">
                    <span className="shop-item-price">$129</span>
                    <button
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
