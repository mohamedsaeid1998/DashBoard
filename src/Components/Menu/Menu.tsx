import { Link } from 'react-router-dom'
import './Menu.scss'
import { menu } from '../../Data'
const Menu = () => {

  return <>
    <aside className='menu'>
      {menu.map((item) => <div key={item.id} className="item">
        <span className="title">{item.title}</span>
        {item.listItems.map((listItem) => <Link to={listItem.url} key={listItem.id} className='listItem'>
          <img src={listItem.icon} alt={listItem.title} />
          <div className="ListItemTitle">{listItem.title}</div>
        </Link>)}
      </div>
      )}
    </aside>
  </>
}

export default Menu