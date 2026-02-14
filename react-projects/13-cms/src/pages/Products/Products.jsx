import { useState } from 'react';
import { products } from '../../Datas';
import './Products.css';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router';
import { width } from '@mui/system';
import { DeleteOutline } from '@mui/icons-material';
export default function UserList() {
    const [productsData, setProductsData] = useState(products);

    const productDelete = (productID) => {
        setProductsData(
            productsData.filter((product) => product.id != productID),
        );
    };

    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            width: 90,
        },
        {
            field: 'title',
            headerName: 'Name',
            width: 200,
            renderCell: (params) => {
                console.log(params);
                return (
                    <Link to={`/product/${params.row.id}`} className="link">
                        <div className="userListUser">
                            <img
                                src={params.row.avatar}
                                className="userListImg"
                            />
                            {params.row.title}
                        </div>
                    </Link>
                );
            },
        },
        {
            field: 'price',
            headerName: 'Price',
            window: 120,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <div className="edit-delete">
                        <Link to={`/product/${params.row.id}`} className="link">
                            <button className="userListEdit">Edit</button>
                        </Link>
                        <DeleteOutline
                            className="userListDelete"
                            onClick={() => productDelete(params.row.id)}
                        />
                    </div>
                );
            },
        },
    ];
    return (
        <div>
            <DataGrid
                rows={productsData}
                columns={columns}
                disableSelectionOnClick
                initialState={{
                    pagination: {
                        paginationModel: { pageSize: 3 },
                    },
                }}
                pageSizeOptions={[3, 5, 10]}
                checkboxSelection
            />
        </div>
    );
}
