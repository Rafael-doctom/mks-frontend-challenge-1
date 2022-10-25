import { IoCart } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'

// styles
import { Cart } from './styles'

// utilities
import { toggleModal } from '../../slices/modalSlice'
import { RootState } from '../../store'
import { useAppSelector } from '../../hooks/reduxHooks'
import { selectProductsCount } from '../../store/reducers/modalSelectors'

export default () => {

    const dispatch = useDispatch()
    const totalItems = useAppSelector(selectProductsCount)
   
    return (

        <Cart
            onClick={() => dispatch(toggleModal())}
        >
            <IoCart />
            <p>{totalItems}</p>
        </Cart>
    )
}