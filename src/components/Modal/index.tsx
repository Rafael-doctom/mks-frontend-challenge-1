import ModalItem from '../ModalItem'
import type { RootState } from '../../store'
import { useSelector, useDispatch } from 'react-redux'
import { toggleModal } from '../../slices/modalSlice'
import { 
    ModalContainer, 
    ModalCloseButton, 
    ModalHeader, 
    ModalTitle, 
    ModalContent,
    ModalFooter,
    Total,
    BuyButton
} from './styles'
import { useEffect } from 'react'
// import ModalItem from '../../types/ModalItem'

export default () => {

    const { isVisible, products } = useSelector((state:RootState) => state.modal)
    const dispatch = useDispatch()
    const totalPrice = products.reduce((total, { price, quantity }) => {

        return total + parseInt(price.toString()) * quantity
    },0)


    return (
        
        <ModalContainer isVisible={isVisible}>
            <ModalHeader>
                <ModalTitle>
                    Carrinho de compras
                </ModalTitle>
                <ModalCloseButton 
                    onClick={() => dispatch(toggleModal())}>
                    X
                </ModalCloseButton>
            </ModalHeader>

            <ModalContent>
                {products.map(product => (

                    <ModalItem key={product.id} product={product}/>   
                ))}
            </ModalContent>

            <ModalFooter>
                <Total>
                    <p>Total:</p>
                    <span>R${totalPrice}</span>
                </Total>

                <BuyButton>
                    Finalizar Compra 
                </BuyButton>
            </ModalFooter>

        </ModalContainer>

    )
}