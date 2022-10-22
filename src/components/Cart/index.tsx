import { IoCart } from 'react-icons/io5'
import { Cart } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { toggleModal } from '../../slices/modalSlice'
import { RootState } from '../../store'


export default () => {

    const { products } = useSelector((state:RootState) => state.modal)
    const dispatch = useDispatch()
    const totalItems = products.reduce((total, { quantity }) => {

        return total + quantity
    },0)
   

    return (

        <Cart
            onClick={() => dispatch(toggleModal())}
        >
            <IoCart />
            {totalItems}
        </Cart>
    )
}