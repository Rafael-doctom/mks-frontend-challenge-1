import ModalItem from '../../types/ModalItem'
import { 
    ModalItemContainer,
    ItemImage,
    ItemTitle,
    ItemQuantityContainer,
    ItemQuantity,
    QuantityButton,
    Quantity,
    ItemPrice
} from './styles'

type ModalItemProps = {

    product: ModalItem
}

export default ({product}:ModalItemProps) => {

    return (

        <ModalItemContainer>
            <ItemImage>
            </ItemImage>

            <ItemTitle>
                {product.name}
            </ItemTitle>

            <ItemQuantityContainer>
                <p>Qtd:</p>

                <ItemQuantity>
                    <QuantityButton>
                        -
                    </QuantityButton>
                    <Quantity>
                        {product.quantity}
                    </Quantity>
                    <QuantityButton>
                        +
                    </QuantityButton>
                </ItemQuantity>
            </ItemQuantityContainer>

            <ItemPrice>
                {product.price}
            </ItemPrice>

        </ModalItemContainer>
    )
}