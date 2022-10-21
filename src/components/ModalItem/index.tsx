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

export default () => {

    return (

        <ModalItemContainer>
            <ItemImage>
            </ItemImage>

            <ItemTitle>
                Apple Watch Series 4 GPS
            </ItemTitle>

            <ItemQuantityContainer>
                <p>Qtd:</p>

                <ItemQuantity>
                    <QuantityButton>
                        -
                    </QuantityButton>
                    <Quantity>
                        1
                    </Quantity>
                    <QuantityButton>
                        +
                    </QuantityButton>
                </ItemQuantity>
            </ItemQuantityContainer>

            <ItemPrice>
                R$399
            </ItemPrice>

        </ModalItemContainer>
    )
}