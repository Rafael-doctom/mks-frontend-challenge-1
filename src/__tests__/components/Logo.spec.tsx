import { render } from '@testing-library/react'

// utilities
import Logo from '../../components/Logo'

describe('Logo component', () => {

    it('should render the correct logo', () => {

        const { getByText } = render( <Logo />)

        getByText(/mks/i)
        getByText(/sistemas/i)
    })
})