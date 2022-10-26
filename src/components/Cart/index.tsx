import { IoCart } from 'react-icons/io5'

// styles
import { CartContainer } from './styles'

// utilities
import { toggleModal } from '../../store/slices/modalSlice'
import { useAppSelector, useAppDispatch } from '../../hooks/reduxHooks'
import { selectProductsCount } from '../../store/reducers/modalSelectors'

const Cart = () => {

    const totalItems = useAppSelector(selectProductsCount)
    const dispatch = useAppDispatch()
    
    const handleCartClick = () => {

        dispatch(toggleModal())
    }
    
    return (

        <CartContainer
            onClick={handleCartClick}
        >
            <IoCart />
            <p>{totalItems}</p>
        </CartContainer>
    )
}

Cart.displayName = 'Cart'
export default Cart 