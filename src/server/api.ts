import axios from 'axios'

// utilities
import Product from '../types/Product'

const getProducts = async (): Promise<Product[]> => {

    const { data } = await axios.get('https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC')
    return data.products
}

export default {

    getProducts
}