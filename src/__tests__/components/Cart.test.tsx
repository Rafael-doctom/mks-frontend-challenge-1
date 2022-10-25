// components
import Cart from '../../components/Cart'

// utilities
import { renderWithRedux } from '../../helpers/testHelpers'
import IModalItem from '../../types/IModalItem'

describe('Cart component', () => {

    it('should show the correct cart products count', () => {

        const TEST_PRODUCTS:IModalItem[] = [
            {
                id:1,
                name:'Iphone 11 128 GB',
                description:'Lorem ipsum', 
                photo:'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone11x128.webp',
                price:5000.00,
                quantity: 2

            },
            {
                id:2,
                name:'Air Pods',
                description:'Lorem ipsum 2', 
                photo:'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/airpods.webp',
                price:1200.00, 
                quantity: 3
            }
        ]

        const { getByText } = renderWithRedux(<Cart />, {
            preloadedState: {
              modal: {
                products:TEST_PRODUCTS
              }
            } as any
        })
        
        getByText('5')
    })
})