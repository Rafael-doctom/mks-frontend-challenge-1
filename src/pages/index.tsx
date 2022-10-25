import { InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'

// components
import Logo from '../components/Logo'
import Products from '../components/Products'
import Footer from '../components/Footer'
import Modal from '../components/Modal'

// styles
import { Header } from '../styles/index'

// utilities
import api from '../server/api'
import Product from '../types/Product'
import Cart from '../components/Cart'

type HomeProps = {

  products: Product[]
}

const Home:NextPage<HomeProps> = ({ products }) => {
  return (
    <div>
      <Head>
        <title>MKS Sistemas</title>
        <meta name="title" content="MKS Sistemas" />
        <meta name="description" content="Desafio frontend proposto pela empresa MKS Desenvolvimento de Sistemas" />
        <link rel="icon" href="/favicon.ico" />        
      </Head>
      <Header>
        <Logo />
        <Cart />
      </Header>
      <Products products={products}/>
      <Footer />
      <Modal />
    </div>
  )
}

export default Home


export const getStaticProps = async () => {

  const products = await api.getProducts()

  if(!products){

    return {

      notFound:true
    }
  }

  return {

    props: {

      products
    },
    revalidate:10
  }
}