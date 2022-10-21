import { FiShoppingBag } from 'react-icons/fi'
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

export default () => {

    return(

        <ProductItemContainer>
            <ProductContent>
                <ProductImage>
                    IMAGEM
                </ProductImage>
                    
                <ProductHeader>
                    <ProductTitle>
                        Apple Homepod
                    </ProductTitle>
                    <ProductPriceTag>
                        R$ 399
                    </ProductPriceTag>
                </ProductHeader>
                <ProductDescription>
                    Redesigned from scratch and completely revised.
                    
                </ProductDescription>
                <BuyButton>
                    <FiShoppingBag />
                    COMPRAR
                </BuyButton>
            </ProductContent>
        </ProductItemContainer>


    )
}