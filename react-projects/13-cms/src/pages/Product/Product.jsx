import { Link } from 'react-router';
import './Product.css';
import Chart from '../../components/Chart/Chart';
import { productData } from '../../Datas';
// import {Publish} from '@mui/material'

export default function Product() {
    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to="/newProduct">
                    <button className="productAddButton">Create</button>
                </Link>
            </div>

            <div className="productTop">
                <div className="productTopLeft">
                    <Chart
                        dataKey="sales"
                        title="Sale In Month"
                        data={productData}
                    />
                </div>

                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img
                            className="productInfoImg"
                            src="../public/images/dell.jpg"
                            alt="dell laptop"
                        />
                        <span className="productName">Dell Laptop</span>
                    </div>

                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <div className="productInfoKey">ID: </div>
                            <div className="productInfoValue">132</div>
                        </div>
                        <div className="productInfoItem">
                            <div className="productInfoKey">Name: </div>
                            <div className="productInfoValue">Dell Laptop</div>
                        </div>
                        <div className="productInfoItem">
                            <div className="productInfoKey">Sales: </div>
                            <div className="productInfoValue">$90,000</div>
                        </div>
                        <div className="productInfoItem">
                            <div className="productInfoKey">Avtive: </div>
                            <div className="productInfoValue">Yes</div>
                        </div>
                        <div className="productInfoItem">
                            <div className="productInfoKey">In Stores: </div>
                            <div className="productInfoValue">No</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label>Product Name</label>
                        <input type="text" placeholder="Dell Laptop" />

                        <label>In Sales</label>
                        <select id="inStock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>

                        <label>Avtive</label>
                        <select id="inStock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>

                    <div className="productFormRight">
                        <div className="productUploader">
                            <img
                                className="productUploaderImg"
                                src="../public/images/dell.jpg"
                                alt="profile photo"
                            />
                            <label>
                                {/* <Publish/> */}
                                <input
                                    style={{ display: 'none' }}
                                    type="file"
                                />
                            </label>
                        </div>

                        <button className="productButton">Upload (Edit)</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
