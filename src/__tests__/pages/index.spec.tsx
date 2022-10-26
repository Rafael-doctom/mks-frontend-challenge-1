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
})