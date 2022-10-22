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

export default () => {

    const { isVisible, products } = useSelector((state:RootState) => state.modal)
    const dispatch = useDispatch()

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
                    <span>R$799</span>
                </Total>

                <BuyButton>
                    Finalizar Compra 
                </BuyButton>
            </ModalFooter>

        </ModalContainer>

    )
}