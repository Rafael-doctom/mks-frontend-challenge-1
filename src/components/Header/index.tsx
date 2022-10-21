import { HeaderContainer, Header, Logo, Cart } from './styles'
import {IoCart}  from 'react-icons/io5'

export default () => {

    return (
        <HeaderContainer>
            <Header>
                <Logo>
                    <p>MKS</p>
                    <span>Sistemas</span>
                </Logo>
                
                <Cart>
                    <IoCart/>
                    0
                </Cart>
            </Header>
        </HeaderContainer>
        
    )
}