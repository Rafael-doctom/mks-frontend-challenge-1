import { IoCart } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'

// styles
import { Cart } from './styles'

// utilities
import { toggleModal } from '../../slices/modalSlice'
import { useAppSelector, useAppDispatch } from '../../hooks/reduxHooks'
import { selectProductsCount } from '../../store/reducers/modalSelectors'

export default () => {

    const totalItems = useAppSelector(selectProductsCount)
    const dispatch = useAppDispatch()
    
    return (

        <Cart
            onClick={() => dispatch(toggleModal())}
        >
            <IoCart />
            <p>{totalItems}</p>
        </Cart>
    )
}