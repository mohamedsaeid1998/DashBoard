import { Single } from '@/Components'
import './Product.scss'
import { singleProduct } from '@/Data'

const Product = () => {

  return <>
    <div className='product'>
      <Single {...singleProduct} />
    </div>
  </>
}

export default Product