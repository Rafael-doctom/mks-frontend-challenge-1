// components
import ModalItem from '../../components/ModalItem'

// utilities
import IModalItem from '../../types/IModalItem'
import { renderWithRedux } from '../../helpers/testHelpers'

describe('ModalItem component', () => {

    it('should show the correct modal item', () => {

        const TEST_PRODUCT:IModalItem = {
            
            id:1,
            name:'Air Pods',
            description:'Lorem ipsum 2', 
            photo:'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/airpods.webp',
            price:1200.00, 
            quantity: 3
        }

        const { getByText, getByLabelText } = renderWithRedux(<ModalItem product={TEST_PRODUCT} />,
           
            {
                preloadedState: {} as any
            }
        )

        getByText(/air pods/i)
        getByText('3')
        getByText('R$1200')
        getByLabelText(/decrease quantity of air pods/i)
        getByLabelText(/increase quantity of air pods/i)
        getByLabelText(/remove air pods/i)
    })
})