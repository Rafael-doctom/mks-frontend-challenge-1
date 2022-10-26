// components
import ProductItem from '../../components/ProductItem'

// utilities
import { renderWithRedux } from '../../helpers/testHelpers'
import Product from '../../types/Product'

describe('Product component', () => {

    it('should show the correct product item', () => {

        const TEST_PRODUCT:Product = {
            
            id:1,
            name:'Air Pods',
            description:'Lorem ipsum 2', 
            photo:'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/airpods.webp',
            price:1200.00
        }

        const { getByText, debug } = renderWithRedux(<ProductItem product={TEST_PRODUCT} />,
           
            {
                preloadedState: {} as any
            }
        )

        getByText(/air pods/i)
        getByText('R$1200')
        getByText(/lorem ipsum 2/i)
        getByText(/comprar/i) 
    })
})