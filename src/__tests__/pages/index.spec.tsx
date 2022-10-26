// utilities 
import Home, { getStaticProps } from '../../pages'
import api from '../../server/api'
import Product from '../../types/Product'
import { renderWithRedux } from '../../helpers/testHelpers'

describe('The home page', () => {

    it('getStaticProps should return the correct list of products from the api', async () => {

        const TEST_PRODUCTS:Product[] = [{

            id:1,
            name:'Iphone 11 128 GB',
            description:'Lorem ipsum', 
            photo:'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone11x128.webp',
            price:5000.00
        }]

        jest.spyOn(api, 'getProducts').mockImplementation(async () => 

            TEST_PRODUCTS
        )

        const response = await getStaticProps()

        expect(api.getProducts).toHaveBeenCalled()
        expect(response).toEqual({

            props: {

                products: TEST_PRODUCTS
            }, 
            revalidate:10
        })
    })

    it('Home page renders products correctly', () => {

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

        const { getByTestId, debug } = renderWithRedux(<Home products={TEST_PRODUCTS} />,
           
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