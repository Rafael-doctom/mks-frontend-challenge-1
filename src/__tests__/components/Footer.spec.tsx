import { render } from '@testing-library/react'

// utilities
import Footer from '../../components/Footer'

describe('Footer component', () => {

    it('should render the correct pharse', () => {

        const { getByText } = render(

            <Footer />
        )

        getByText(/mks sistemas © todos os direitos reservados/i)
    })
})