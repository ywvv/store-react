import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Store from './pages/Store.jsx'
import { useEffect, useState } from 'react'
import dataBase from './data/data.js'
import Header from './components/Header.jsx'
import CartModal from './components/CartModal.jsx'

const App = () => {
  const [cartCount, setCartCount] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  const [isModalShow, setIsModalShow] = useState(false)
  const [isCartModalShow, setIsCartModalShow] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const location = useLocation()

  useEffect(() => {
    setIsModalShow(false)
  }, [location])

  useEffect(() => {
    handleSumPrice()
    handleCartCount()
  }, [cartItems])

  const handleCartCount = () => {
    setCartCount(
      cartItems.map(item => item.count).reduce((acc, cur) => acc + cur, 0)
    )
  }

  const handleClearCart = () => {
    setCartItems([])
  }

  const handleSumPrice = () => {
    setTotalPrice(
      cartItems
        .map(item => item.totalPrice)
        .reduce((acc, cur) => (+acc + +cur).toFixed(2), 0)
    )
  }

  const showModal = () => {
    setIsModalShow(true)
  }

  const hideModal = () => {
    setIsModalShow(false)
  }

  const showCartModal = () => {
    setIsCartModalShow(true)
  }

  const hideCartModal = () => {
    setIsCartModalShow(false)
  }

  const handleAddCartItem = (newItem, id, price) => {
    const index = cartItems.map(item => item.name).indexOf(newItem)

    if (index !== -1) {
      setCartItems(
        cartItems.map(item => {
          if (item.name === newItem) {
            item.count++
            item.totalPrice = (+item.totalPrice + +price).toFixed(2)
          }
          return item
        })
      )
      return
    }

    setCartItems(prevState => [
      ...prevState,
      { name: newItem, count: 1, id, price, totalPrice: price }
    ])
  }

  const handleIncCount = item => {
    setCartItems(
      cartItems.map(itm => {
        if (itm.name === item.name) {
          itm.count++
          itm.totalPrice = (+itm.totalPrice + +item.price).toFixed(2)
        }
        return itm
      })
    )
  }

  const handleDeleteItem = item => {
    setCartItems(cartItems.filter(itm => itm !== item))
  }

  const handleDecrCount = item => {
    setCartItems(
      cartItems
        .map(itm => {
          if (itm.name === item.name) {
            itm.count--
            itm.totalPrice = (+itm.totalPrice - +item.price).toFixed(2)
          }

          return itm
        })
        .filter(item => item.count > 0)
    )
  }

  return (
    <>
      <Header
        cartCount={cartCount}
        totalPrice={totalPrice}
        showCartModal={showCartModal}
      />
      <CartModal
        hideCartModal={hideCartModal}
        cartItems={cartItems}
        totalPrice={totalPrice}
        handleIncCount={handleIncCount}
        handleDecrCount={handleDecrCount}
        handleClearCart={handleClearCart}
        handleDeleteItem={handleDeleteItem}
        isCartModalShow={isCartModalShow}
      />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/store'
          element={
            <Store
              data={dataBase}
              showModal={showModal}
              hideModal={hideModal}
              isModalShow={isModalShow}
              handleAddCartItem={handleAddCartItem}
            />
          }
        />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </>
  )
}

export default App
