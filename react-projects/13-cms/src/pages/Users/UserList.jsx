import { React, useState } from 'react';
import { userRow } from '../../Datas';
import './UserList.css';
// import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router';
// import { width } from '@mui/system';
import { DeleteOutline } from '@mui/icons-material';

export default function UserList() {
    const [userDatas, setUserDatas] = useState(userRow);

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
                    <Link to="/" className="link">
                        <div className="userListUser">
                            <img
                                src={params.row.avatar}
                                className="userListImg"
                            />
                            {params.row.username}
                        </div>
                        <button className="userListEdit">Edit</button>
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
            window: 120,
        },
        {
            field: 'transActions',
            headerName: 'TransActions',
            window: '160',
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={`/user/${params.row.id}`} className="link">
                            <button className="userListEdit">Edit</button>
                        </Link>
                        <DeleteOutline
                            className="userListDelete"
                            onClick={() => userDelete(params.row.id)}
                        />
                    </>
                );
            },
        },
    ];

    return (
        <div className="userList">
            {/* <DataGrid
                rows={userDatas}
                columns={columns}
                disableSelectionOnClick
                pageSize={3}
            /> */}
            <h1>USERS</h1>
        </div>
    );
}
