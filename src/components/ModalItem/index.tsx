import { useDispatch } from 'react-redux'

// styles
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

// utilities
import { decreaseQuantity, increaseQuantity, removeProduct } from '../../slices/modalSlice'
import ModalItem from '../../types/ModalItem'
import { useAppDispatch } from '../../hooks/reduxHooks'

type ModalItemProps = {

    product: ModalItem
}

export default ({product}:ModalItemProps) => {
    
    const dispatch = useAppDispatch()

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