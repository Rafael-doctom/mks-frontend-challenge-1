// components
import ProductItem from '../ProductItem'

// styles
import { ProductsContainer } from './styles'

// utilities
import Product from '../../types/Product'

type ProductsProps = {
     
     products:Product[]
}

const Products = ({ products }:ProductsProps) => {

     return(

          <ProductsContainer>

               { products.map(product => (
                    <ProductItem key={product.id} product={product} />
               ))}
               
          </ProductsContainer>
     )
}

Products.displayName = 'Products'
export default Products

