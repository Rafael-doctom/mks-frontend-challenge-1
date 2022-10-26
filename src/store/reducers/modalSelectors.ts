import { RootState } from '../index'

export const selectProductsTotalPrice = (state:RootState) => {

    return state.products.reduce((acc, currentProduct) => {

        return acc + currentProduct.price * currentProduct.quantity
    },0)
}

export const selectProductsCount = (state:RootState) => {

    return state.products.reduce((acc, currentProduct) => {

        return acc + currentProduct.quantity
    },0)

}