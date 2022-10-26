import { FiShoppingBag } from 'react-icons/fi'

// styles
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

// utilities
import { addProduct } from '../../store/slices/modalSlice'
import Product from '../../types/Product'
import { useAppDispatch } from '../../hooks/reduxHooks'
import formatPrice from '../../helpers/formatPrice'

type ProductItemProps = {

    product:Product
}

export default ({ product }:ProductItemProps) => {

    const dispatch = useAppDispatch()
    const price = formatPrice(product.price)

    return(

        <ProductItemContainer data-testid={`product-${product.id}`}>
            <ProductContent>
                <ProductImage url={product.photo} />
                    
                <ProductHeader>
                    <ProductTitle>
                        {product.name}
                    </ProductTitle>
                    <ProductPriceTag>
                        R${price}
                    </ProductPriceTag>
                </ProductHeader>

                <ProductDescription>
                    {product.description}
                </ProductDescription>
                
                <BuyButton
                    onClick={() => dispatch(addProduct(product))}
                >
                    <FiShoppingBag />
                    COMPRAR
                </BuyButton>
            </ProductContent>
        </ProductItemContainer>


    )
}