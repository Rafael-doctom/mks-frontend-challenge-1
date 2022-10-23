import { useDispatch } from 'react-redux'
import { decreaseQuantity, increaseQuantity, removeProduct } from '../../slices/modalSlice'
import ModalItem from '../../types/ModalItem'

import { 
    ModalItemContainer,
    RemoveItemButton,
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
    
    const dispatch = useDispatch()

    return (

        <ModalItemContainer>
            <RemoveItemButton
                onClick={() => dispatch(removeProduct(product.id))}
            >
                x
            </RemoveItemButton>

            <ItemImage url={product.photo} />
            
            <ItemTitle>
                {product.name}
            </ItemTitle>

           <div style={{display:'flex', alignItems:'center', padding:'0 10px'}}>
                <ItemQuantityContainer>
                    <p>Qtd:</p>

                    <ItemQuantity>
                        <QuantityButton
                            onClick={() => dispatch(decreaseQuantity(product.id))}
                        >
                            -
                        </QuantityButton>
                        <Quantity>
                            {product.quantity}
                        </Quantity>
                        <QuantityButton
                            onClick={() => dispatch(increaseQuantity(product.id))}
                        >
                            +
                        </QuantityButton>
                    </ItemQuantity>
                </ItemQuantityContainer>

                <ItemPrice>
                    R${parseInt(product.price.toString())}
                </ItemPrice>
           </div>

        </ModalItemContainer>
    )
}