import './TopBox.scss'
import { topDealUsers } from '../../Data'
const TopBox = () => {

  return <>
    <div className='topBox'>
      <h1>Top Deals</h1>
      <div className="list">
        {topDealUsers.map((user) => <div key={user.id} className="listItem">
          <div className="user">
            <img src={user.img} alt="user" />
            <div className="userText">
              <div className="username">{user.username}</div>
              <div className="email">{user.email}</div>
            </div>
          </div>
          <div className="amount">${user.amount}</div>
        </div>
        )}
      </div>
    </div>
  </>
}

export default TopBox