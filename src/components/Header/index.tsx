// components
import Cart from '../Cart'

// styles
import { Header, Logo } from './styles'

export default () => {

    return (
        <Header>
            
            <Logo>
                <p>MKS</p>
                <span>Sistemas</span>
            </Logo>
                
            <Cart />
            
        </Header>
        
    )
}