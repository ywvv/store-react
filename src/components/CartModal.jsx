import { useState } from 'react'
import { Button, Modal, Row, Col, Spinner } from 'react-bootstrap'

const CartModal = props => {
  const {
    hideCartModal,
    cartItems,
    totalPrice,
    handleIncCount,
    handleDecrCount,
    handleClearCart,
    handleDeleteItem,
    isCartModalShow
  } = props

  const [isLoading, setIsLoading] = useState(false)
  const [isDone, setIsDone] = useState(false)

  const handleCheckout = () => {
    setIsLoading(true)

    const timer = setTimeout(() => {
      setIsLoading(false)
      setIsDone(true)
    }, 3000)

    const timer2 = setTimeout(() => {
      setIsDone(false)
      hideCartModal()
      handleClearCart()
    }, 5000)

    return () => {
      clearTimeout(timer)
      clearTimeout(timer2)
    }
  }

  return (
    <Modal show={isCartModalShow} onHide={hideCartModal}>
      <Modal.Header closeButton>
        <Modal.Title>Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cartItems.length > 0 ? (
          <>
            {cartItems.map(item => (
              <Row className='border-bottom py-1' key={item.id}>
                <Col>
                  <h5 className='m-0'>{item.name}</h5>
                  <p className='text-sm m-0'>${item.totalPrice}</p>
                </Col>
                <Col className='d-flex fs-5 align-items-center gap-1 justify-content-end'>
                  <div className='d-flex align-items-center gap-1 w-50 justify-content-between'>
                    <Button
                      className='p-1'
                      variant='dark'
                      onClick={() => handleIncCount(item)}>
                      <i className='bi bi-plus' />
                    </Button>
                    {item.count}
                    <Button
                      className='p-1'
                      variant='dark'
                      onClick={() => handleDecrCount(item)}>
                      <i className='bi bi-dash' />
                    </Button>
                  </div>
                  <Button
                    className='p-1'
                    variant='danger'
                    onClick={() => handleDeleteItem(item)}>
                    <i className='bi bi-x' />
                  </Button>
                </Col>
              </Row>
            ))}
          </>
        ) : (
          <div className='text-center py-5'>
            <i className='bi bi-bag-x text-danger fs-1 mb-4'></i>
            <h2 className='text-3xl'>Cart is empty :(</h2>
          </div>
        )}
      </Modal.Body>
      <Modal.Footer className='border-0'>
        {cartItems.length > 0 && (
          <h4 className='me-auto'>Total: ${totalPrice}</h4>
        )}
        <Button variant='dark' onClick={hideCartModal}>
          Close
        </Button>
        {cartItems.length > 0 && (
          <Button
            disabled={isLoading || isDone}
            variant='success'
            onClick={handleCheckout}>
            {isLoading ? (
              <>
                <Spinner
                  className='me-2'
                  animation='border'
                  size='sm'
                  role='status'
                />
                Loading...
              </>
            ) : isDone ? (
              'Done'
            ) : (
              'Checkout'
            )}
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  )
}

export default CartModal
