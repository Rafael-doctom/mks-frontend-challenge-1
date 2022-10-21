import { HeaderContainer, Header, Logo } from './styles'
import Cart from '../Cart'

export default () => {

    return (
        <HeaderContainer>
            <Header>
                <Logo>
                    <p>MKS</p>
                    <span>Sistemas</span>
                </Logo>
                
                <Cart />
            </Header>
        </HeaderContainer>
        
    )
}