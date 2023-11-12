import './Navbar.scss'

const Navbar = () => {

  return <>
    <nav className='navbar'>

      <div className="logo">
        <img src="logo.svg" alt="logo" />
        <span>Lamadmin</span>
      </div>

      <div className="icons">
        <img className='icon' src="search.svg" alt="search" />
        <img className='icon' src="app.svg" alt="app" />
        <img className='icon' src="expand.svg" alt="expand" />

        <div className="notification">
          <img src="notifications.svg" alt="notifications" />
          <span>1</span>
        </div>
        <div className="user">
          <img src="https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="user-photo" />
          <span>Jane</span>
        </div>
        <img src="settings.svg" alt="settings" />
      </div>
    </nav>
  </>
}

export default Navbar