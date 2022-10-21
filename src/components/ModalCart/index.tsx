import { 
    ModalCartContainer, 
    ModalCloseButton, 
    ModalHeader, 
    ModalTitle 
} from './styles'

export default () => {

    return (
        
        <ModalCartContainer>
            <ModalHeader>
                <ModalTitle>
                Carrinho de compras
                </ModalTitle>
                <ModalCloseButton>
                    X
                </ModalCloseButton>

            </ModalHeader>

        </ModalCartContainer>

    )
}