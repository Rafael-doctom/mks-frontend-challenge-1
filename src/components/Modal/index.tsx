import ModalItem from '../ModalItem'
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

    return (
        
        <ModalContainer>
            <ModalHeader>
                <ModalTitle>
                    Carrinho de compras
                </ModalTitle>
                <ModalCloseButton>
                    X
                </ModalCloseButton>
            </ModalHeader>

            <ModalContent>
                <ModalItem />
                <ModalItem />  
                  
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