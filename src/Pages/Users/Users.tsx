import { Add, DataTable } from '@/Components'
import './Users.scss'
import { GridColDef } from '@mui/x-data-grid';
import { userRows } from '@/Data';
import { useState } from 'react';


const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "firstName",
    type: "string",
    headerName: "First name",
    width: 150,
  },
  {
    field: "lastName",
    type: "string",
    headerName: "Last name",
    width: 150,
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    width: 200,
  },
  {
    field: "phone",
    type: "string",
    headerName: "Phone",
    width: 200,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 200,
    type: "string",
  },
  {
    field: "verified",
    headerName: "Verified",
    width: 150,
    type: "boolean",
  },
];



const Users = () => {

const [isOpen, setIsOpen] = useState(false)

  return <>
    <div className='users'>
      <div className="info">
        <h1>Users</h1>
        <button onClick={() => setIsOpen(true)}>Add New Users</button>
      </div>
      <DataTable slug="users"  columns={columns} rows={userRows} />
      {isOpen?<Add {...{columns,setIsOpen}} slug="User"/>:null}
    </div>
  </>
}

export default Users