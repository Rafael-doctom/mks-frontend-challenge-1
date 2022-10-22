import { IoCart } from 'react-icons/io5'
import { Cart } from './styles'
import { useDispatch } from 'react-redux'
import { toggleModal } from '../../slices/modalSlice'


export default () => {

    const dispatch = useDispatch()    

    return (

        <Cart
            onClick={() => dispatch(toggleModal())}
        >
            <IoCart />
            0
        </Cart>
    )
}