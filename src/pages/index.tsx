import type { NextPage } from 'next'
import Header from '../components/Header'
import Products from '../components/Products'
import Footer from '../components/Footer'
import Modal from '../components/Modal'

const Home: NextPage = () => {
  return (
    <div>

      <Header />
      <Products />
      <Footer />
      <Modal />
    </div>
  )
}

export default Home
