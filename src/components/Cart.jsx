const Cart = ({ cartCount, totalPrice, showCartModal }) => {
  return (
    <div className='d-flex align-items-center'>
      {cartCount > 0 && <div className='badge'>${totalPrice}</div>}
      <button className='btn position-relative' onClick={showCartModal}>
        <i className='bi bi-bag text-white-50 fs-3 '></i>
        {cartCount > 0 && (
          <span className='d-flex justify-content-center align-items-center text-white border border-2 p-1 position-absolute fst-normal h-50 fs-6 w-50 bottom-0 end-0 bg-success rounded-circle'>
            {cartCount}
          </span>
        )}
      </button>
    </div>
  )
}

export default Cart
