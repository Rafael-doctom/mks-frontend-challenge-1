import { Product } from '../../types/Product'
import ProductItem from '../ProductItem'
import { ProductsContainer } from './styles'

type ProductsProps = {
     
     products:Product[]
}

export default ({ products }:ProductsProps) => {

     return(

          <ProductsContainer>

               { products.map(product => (
                    <ProductItem key={product.id} product={product} />
               ))}
               
          </ProductsContainer>
     )
}

