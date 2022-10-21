import type { NextPage } from 'next'
import Header from '../components/Header'
import Products from '../components/Products'
import Footer from '../components/Footer'
import ModalCart from '../components/ModalCart'

const Home: NextPage = () => {
  return (
    <div>

      <Header />
      <Products />
      <Footer />
      <ModalCart />
    </div>
  )
}

export default Home
