// components
import ProductItem from '../ProductItem'

// styles
import { ProductsContainer } from './styles'

// utilities
import Product from '../../types/Product'

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

