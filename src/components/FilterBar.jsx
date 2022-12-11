import { Button, Col, Form, Row } from 'react-bootstrap'
import './FilterBar.scss'

const FilterBar = props => {
  const {
    handlePriceSort,
    sortPrice,
    inputText,
    handleInputChange,
    handleCheckedColors,
    checkedColors
  } = props

  const sort = sortPrice === 'toLow' ? 'toHigh' : 'toLow'

  return (
    <Row className='mb-5 align-items-center gy-2'>
      <Col md={12} lg={3}>
        <Button
          className='position-relative w-100'
          onClick={() => handlePriceSort(sort)}
          variant='outline-dark'>
          Sort Price
          {sortPrice && (
            <i
              className={`top-50 end-0 translate-middle-y me-3 position-absolute ml-2 bi bi-caret-${
                sort !== 'toLow' ? 'down' : 'up'
              }-fill`}></i>
          )}
        </Button>
      </Col>
      <Col md={12} lg={6}>
        <Form.Control
          placeholder='Search...'
          value={inputText}
          onChange={e => handleInputChange(e)}
        />
      </Col>
      <Col md={12} lg={3}>
        <div
          className='d-flex justify-content-between'
          style={{ padding: '0.3rem 0.75rem' }}>
          {checkedColors.map(item => (
            <Form.Check
              className={item.color}
              id={item.color}
              key={item.color}
              type='checkbox'
              label={item.color}
              name={item.color}
              onChange={e => handleCheckedColors(e)}
            />
          ))}
        </div>
      </Col>
    </Row>
  )
}

export default FilterBar
