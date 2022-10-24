import { useSelector, useDispatch } from 'react-redux'

// styles
import { 
    ModalContainer, 
    ModalEmpty,
    ModalCloseButton, 
    ModalHeader, 
    ModalTitle, 
    ModalContent,
    ModalFooter,
    Total,
    BuyButton
} from './styles'

// utilities
import ModalItem from '../ModalItem'
import type { RootState } from '../../store'
import { toggleModal } from '../../slices/modalSlice'

export default () => {

    const { isVisible, products } = useSelector((state:RootState) => state.modal)
    const dispatch = useDispatch()
    const totalPrice = products.reduce((total, { price, quantity }) => {

        return total + parseInt(price.toString()) * quantity
    },0)


    return (
        
        <ModalContainer isVisible={isVisible}>
            <ModalCloseButton 
                onClick={() => dispatch(toggleModal())}
            >
                X
            </ModalCloseButton>
            { products.length === 0 &&
                <ModalEmpty>
                    <h2>Seu carrinho está vazio</h2>
                    <h3>Adicione itens</h3>
                </ModalEmpty>
            }
            { products.length > 0 &&   
                <> 

                    <ModalHeader>
                        <ModalTitle>
                            Carrinho
                            <br/> 
                            de compras
                        </ModalTitle>
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
                </>
            }
        </ModalContainer>

    )
}