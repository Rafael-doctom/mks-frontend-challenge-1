import { IoCart } from 'react-icons/io5'

// styles
import { Cart } from './styles'

// utilities
import { toggleModal } from '../../store/slices/modalSlice'
import { useAppSelector, useAppDispatch } from '../../hooks/reduxHooks'
import { selectProductsCount } from '../../store/reducers/modalSelectors'

export default () => {

    const totalItems = useAppSelector(selectProductsCount)
    const dispatch = useAppDispatch()
    
    const handleCartClick = () => {

        dispatch(toggleModal())
    }
    
    return (

        <Cart
            onClick={handleCartClick}
        >
            <IoCart />
            <p>{totalItems}</p>
        </Cart>
    )
}