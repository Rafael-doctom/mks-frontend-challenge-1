import { useSelector, useDispatch } from 'react-redux'

// components
import ModalItem from '../ModalItem'

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
import { toggleModal, selectIsVisible, selectProducts } from '../../store/slices/modalSlice'
import { useAppSelector, useAppDispatch } from '../../hooks/reduxHooks'
import { selectProductsTotalPrice } from '../../store/reducers/modalSelectors'

export default () => {

    const totalPrice = useAppSelector(selectProductsTotalPrice)
    const isVisible = useAppSelector(selectIsVisible)
    const products = useAppSelector(selectProducts)
    const dispatch = useAppDispatch()

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
                        {products.map((product) => (

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