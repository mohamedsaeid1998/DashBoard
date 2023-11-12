import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid'
import './DataTable.scss'
import { Link } from 'react-router-dom';

type Props = {
  columns:GridColDef[];
  rows:object[];
  slug: string;
}



const DataTable = ({columns,rows,slug}:Props) => {



  const actionColumn: GridColDef = {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="action">
          <Link to={`/${slug}/${params.row.id}`}>
            <img src="/view.svg" alt="" />
          </Link>
          <div className="delete" onClick={() => handleDelete(params.row.id)}>
            <img src="/delete.svg" alt="" />
          </div>
        </div>
      );
    },
  };


  
  const handleDelete = (id: number) => {
    console.log(id);

  };

  return <>
    <div className='dataTable'>
      <DataGrid className='dataGrid'
        rows={rows}
        columns={[...columns,actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          }
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  </>
}

export default DataTable