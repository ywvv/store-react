import { Button, Modal, Row, Col } from 'react-bootstrap'
import Image from 'react-image-webp'

const DecorItemModal = ({
  item,
  hideModal,
  handleAddCartItem,
  isModalShow
}) => {
  return (
    <>
      <Modal show={isModalShow} onHide={hideModal} size={'lg'}>
        <Modal.Header closeButton>
          <Modal.Title as={'h3'}>{item.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={12} xl={6}>
              <Image
                className='img-fluid rounded'
                src={item.url}
                webp={item.urlWebp}
                alt='Vase'
              />
            </Col>
            <Col className='d-flex justify-content-between flex-column'>
              <p className='fs-4 pt-lg-0 pt-4' style={{ textAlign: 'justify' }}>
                {item.desc}
              </p>
              <div className='text-end'>
                <p className='m-0 fs-5 ms-2'>${item.price}</p>
                <Button
                  style={{ width: '4.2rem' }}
                  variant='success'
                  onClick={() => {
                    handleAddCartItem(item.name, item.id, item.price)
                  }}>
                  Add
                </Button>
              </div>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer className='d-flex justify-content-end'>
          <Button variant='dark' onClick={hideModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/*<div*/}
      {/*  className='fixed top-0 bottom-0 right-0 left-0 bg-black/50 z-10 flex justify-center'*/}
      {/*  onClick={hideModal}*/}
      {/*/>*/}
      {/*<div className='z-20 bg-white fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-5 rounded-md w-2/3 flex gap-5'>*/}
      {/*  <div className='text-2xl text-center flex flex-col justify-between'>*/}
      {/*    <h3 className='text-3xl'>{item.name}</h3>*/}
      {/*    <p className='text-gray-600'>{item.desc}</p>*/}
      {/*    <div>*/}
      {/*      <p className='mb-2 text-green-900'>${item.price}</p>*/}
      {/*      <button*/}
      {/*        className='bg-green-700 transition-colors text-white rounded-md py-1 px-4 hover:bg-green-600 w-full'*/}
      {/*        onClick={() => {*/}
      {/*          handleAddCartItem(item.name, item.id, item.price)*/}
      {/*        }}>*/}
      {/*        Add*/}
      {/*      </button>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*  <img className='rounded-md w-1/2 h-fit' src={item.url} alt='Vase' />*/}
      {/*  <i*/}
      {/*    className='bi bi-x-circle-fill bg-white rounded-full text-5xl absolute -top-5 -right-5 cursor-pointer text-green-700 transition hover:text-green-600'*/}
      {/*    onClick={hideModal}></i>*/}
      {/*</div>*/}
    </>
  )
}

export default DecorItemModal
