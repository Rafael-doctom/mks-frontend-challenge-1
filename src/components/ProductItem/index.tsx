import { FiShoppingBag } from 'react-icons/fi'
import Product from '../../types/Product'

import { 
    ProductItemContainer, 
    ProductContent, 
    ProductImage, 
    ProductHeader, 
    ProductPriceTag, 
    ProductTitle, 
    ProductDescription,
    BuyButton
} from './styles'

type ProductItemProps = {

    product:Product
}

export default ({ product }:ProductItemProps) => {

    return(

        <ProductItemContainer>
            <ProductContent>
                <ProductImage url={product.photo} />
                    
                <ProductHeader>
                    <ProductTitle>
                        {product.name}
                    </ProductTitle>
                    <ProductPriceTag>
                        R${parseInt(product.price.toString())}
                    </ProductPriceTag>
                </ProductHeader>

                <ProductDescription>
                    {product.description}
                </ProductDescription>
                
                <BuyButton>
                    <FiShoppingBag />
                    COMPRAR
                </BuyButton>
            </ProductContent>
        </ProductItemContainer>


    )
}