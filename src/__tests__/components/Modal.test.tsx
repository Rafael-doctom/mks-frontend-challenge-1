import userEvent from '@testing-library/user-event'

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
              products:TEST_PRODUCTS
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
              products:TEST_PRODUCTS
            } as any
        })
        
        getByText(/seu carrinho está vazio/i)
        getByText(/adicione itens/i)
    })

    it('should decrease product quantity on decrease click', async () => {

        const TEST_PRODUCTS:IModalItem[]= [{

            id:1,
            name:'Air Pods',
            description:'Lorem ipsum 2', 
            photo:'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/airpods.webp',
            price:1200.00, 
            quantity: 3
        }]
     
        const { getByText, getByLabelText, debug } = renderWithRedux(<Modal />,
            {
                preloadedState: {

                    products: TEST_PRODUCTS
                } as any
            }
        )

        const decreaseButton = getByLabelText(/decrease quantity of air pods/i)
        await userEvent.click(decreaseButton)

        getByText('2')
        
    })

    it('should increase product quantity on increase click', async () => {

        const TEST_PRODUCTS:IModalItem[]= [{

            id:1,
            name:'Air Pods',
            description:'Lorem ipsum 2', 
            photo:'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/airpods.webp',
            price:1200.00, 
            quantity: 3
        }]
     
        const { getByText, getByLabelText, debug } = renderWithRedux(<Modal />,
            {
                preloadedState: {

                   products: TEST_PRODUCTS
                } as any
            }
        )

        const increaseButton = getByLabelText(/increase quantity of air pods/i)
        await userEvent.click(increaseButton)

        getByText('4')   
    })

    it('should remove product on remove click', async () => {

        const TEST_PRODUCTS:IModalItem[]= [{

            id:1,
            name:'Air Pods',
            description:'Lorem ipsum 2', 
            photo:'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/airpods.webp',
            price:1200.00, 
            quantity: 3
        }]
     
        const { getByText, getByLabelText, debug, queryByText } = renderWithRedux(<Modal />,
            {
                preloadedState: {

                    products: TEST_PRODUCTS
                } as any
            }
        )

        const removeButton = getByLabelText(/remove air pods/i)
        await userEvent.click(removeButton)

        expect(queryByText(/air pods/i)).toBeNull()
        getByText(/seu carrinho está vazio/i)  
        getByText(/adicione itens/i)  
    })
})