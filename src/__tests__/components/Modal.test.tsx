// components
import Modal from '../../components/Modal'

// utilities
import { renderWithRedux } from '../../helpers/testHelpers'
import IModalItem from '../../types/IModalItem'

describe('Modal component', () => {

    it('should show the correct modal products', () => {

        const TEST_PRODUCTS:IModalItem[] = [

            {
                id:1,
                name:'Air Pods',
                description:'Lorem ipsum 2', 
                photo:'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/airpods.webp',
                price:1200.00, 
                quantity: 3
            }
        ]

        const { getByText } = renderWithRedux(<Modal />, {
            preloadedState: {
              modal: {
                products:TEST_PRODUCTS
              }
            } as any
        })
        
        getByText(/air pods/i)
        getByText('3')
        getByText('R$1200')
        getByText('R$3600')
        getByText(/finalizar compra/i)
    })

    it('should show the empty modal phrase if the modal is empty', () => {

        const TEST_PRODUCTS:IModalItem[] = []

        const { getByText, debug } = renderWithRedux(<Modal />, {
            preloadedState: {
              modal: {
                products:TEST_PRODUCTS
              }
            } as any
        })
        
        getByText(/seu carrinho está vazio/i)
        getByText(/adicione itens/i)
    })
})