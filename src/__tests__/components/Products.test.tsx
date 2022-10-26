// components
import Products from '../../components/Products'

// utilities
import { renderWithRedux } from '../../helpers/testHelpers'
import Product from '../../types/Product'

describe('Product component', () => {

    it('The product component renders products correctly', () => {

        const TEST_PRODUCTS:Product[] = [
            {
                id:1,
                name:'Iphone 11 128 GB',
                description:'Lorem ipsum', 
                photo:'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone11x128.webp',
                price:5000.00
            },
            {
                id:2,
                name:'Air Pods',
                description:'Lorem ipsum 2', 
                photo:'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/airpods.webp',
                price:1200.00
            }
        ]

        const { getByTestId, debug } = renderWithRedux(<Products products={TEST_PRODUCTS} />,
           
            {
                preloadedState: {} as any
            }
        )

        TEST_PRODUCTS.forEach(product => {

            const productItem = getByTestId(`product-${product.id}`)

            expect(productItem.textContent).toContain(product.name)
        })
    })
})