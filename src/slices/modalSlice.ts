import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import ModalItem from '../types/ModalItem'
import Product from '../types/Product'

type InitialSate = {

    isVisible:boolean, 
    products:ModalItem[]

}

const initialState:InitialSate = {

    isVisible:false,
    products:[]
}

const modalSlice = createSlice({

    name:'modal',
    initialState, 
    reducers: {

        toggleModal: (state) => {

            state.isVisible = !state.isVisible
        },
        addProduct: (state, action:PayloadAction<Product>) => {

            const product = action.payload

            // checks if the product's already in the modal
            const isAlrealdyInModal = state.products.some((item) => {

                item.id === product.id
            })

            // if it is, increase its quantity
            if(isAlrealdyInModal) {

                state.products = state.products.map((item) => 

                    item.id === product.id 
                    ? {...item, quantity: item.quantity + 1} 
                    : item
                )

                return
            }

            // if it isn't, add it to the modal
            state.products = [...state.products, {...product, quantity:1}]

        },
        removeProduct: (state, action:PayloadAction<number>) => {

            state.products = state.products.filter(
                product => product.id !== action.payload
            )
        },
        increaseQuantity: (state, action:PayloadAction<number>) => {

            state.products = state.products.map((product) =>

                product.id === action.payload
                ? {...product, quantity: product.quantity + 1}
                : product
            
            )
        },
        decreaseQuantity: (state, action:PayloadAction<number>) => {

            state.products = state.products.map((product) =>

                product.id === action.payload
                ? {...product, quantity: product.quantity - 1}
                : product
            
            )
            .filter(product => product.quantity > 0)

        },
        clearModal: (state) => {

            state.products = []
        }

    }
})