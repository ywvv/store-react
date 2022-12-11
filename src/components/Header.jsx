import Navigation from './Navigation.jsx'
import Cart from './Cart.jsx'
import { Container } from 'react-bootstrap'

const Header = ({ cartCount, totalPrice, showCartModal }) => {
  return (
    <header
      className='bg-black fs-4 position-fixed w-100 z-index'
      style={{ zIndex: 10 }}>
      <Container className='d-flex align-items-center justify-content-between'>
        <Navigation />
        <Cart
          cartCount={cartCount}
          totalPrice={totalPrice}
          showCartModal={showCartModal}
        />
      </Container>
    </header>
  )
}

export default Header
