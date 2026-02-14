import { React, useState } from 'react';
import { userRow } from '../../Datas';
import './UserList.css';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router';
import { width } from '@mui/system';
import { DeleteOutline } from '@mui/icons-material';

export default function UserList() {
    const [userDatas, setUserDatas] = useState(userRow);

    const [selectProduct,setSelectProduct] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handlerEdit = product => {
        setSelectProduct(product)
        setIsModalOpen(true)
        console.log('اطلاعات', product);
        
    }

    const userDelete = (userID) => {
        setUserDatas(userDatas.filter((user) => user.id != userID));
    };

    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            width: 90,
        },
        {
            field: 'user',
            headerName: 'User',
            width: 200,
            renderCell: (params) => {
                console.log(params);
                return (
                    <Link to="/" className="user-list">
                        <div className="userListUser">
                            <img
                                src={params.row.avatar}
                                className="userListImg"
                            />
                            {params.row.username}
                        </div>
                    </Link>
                );
            },
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 200,
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 120,
        },
        {
            field: 'transActions',
            headerName: 'TransActions',
            width: '160',
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <div className="edit-delete">
                        <Link
                            to={`/user/${params.row.id}`}
                            className="user-list"
                        >
                            <button className="userListEdit">Edit</button>
                        </Link>
                        <DeleteOutline
                            className="userListDelete"
                            onClick={() => userDelete(params.row.id)}
                        />
                    </div>
                );
            },
        },
    ];

    return (
        <div>
            <DataGrid
                rows={userDatas}
                columns={columns}
                disableSelectionOnClick
                initialState={{
                    pagination: {
                        paginationModel: { pageSize: 3 },
                    },
                }}
                pageSizeOptions={[3, 5, 10]}
            />
        </div>
    );
}
