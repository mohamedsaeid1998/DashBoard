
import { singleUser } from '@/Data'
import './User.scss'
import { Single } from '@/Components'

const User = () => {

  return <>
    <div className='user'>
      <Single {...singleUser} />
    </div>
  </>
}

export default User