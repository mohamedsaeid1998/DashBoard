import { GridColDef } from '@mui/x-data-grid';
import './Add.scss'

type Props = {
  slug: string;
  columns: GridColDef[];
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}


const Add = ({ slug, columns, setIsOpen }: Props) => {

  return <>
    <div className='add'>
      <div className="model">
        <div onClick={() => setIsOpen(false)} className="close">X</div>
        <h1>Add New {slug}</h1>
        <form >
          {columns.filter((item) => item.field !== "id" && item.field !== "img")
            .map((column) => <div className="item">
              <label htmlFor="">{column.headerName}</label>
              <input type={column.type} placeholder={column.field}/>
            </div>
            )}
        <button type="submit">Send</button>
        </form>
      </div>
    </div>
  </>
}

export default Add