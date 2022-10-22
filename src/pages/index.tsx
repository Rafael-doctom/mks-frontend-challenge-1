import type { NextPage } from 'next'
import { InferGetStaticPropsType } from 'next'
import Header from '../components/Header'
import Products from '../components/Products'
import Footer from '../components/Footer'
import Modal from '../components/Modal'
import Product from '../types/Product'

const Home = ({ products }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <Header />
      <Products products={products}/>
      <Footer />
      <Modal />
    </div>
  )
}

export default Home


export const getStaticProps = async () => {

  const res = await fetch('https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC');
  const data = await res.json();
  const products:Product[] = data.products;

  if(!products){

    return {

      notFound:true
    }
  }

  return {

    props: {

      products
    },
    revalidate:1
  }
}