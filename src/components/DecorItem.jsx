import { Button, Card } from 'react-bootstrap'
import './DecorItem.scss'
import Image from 'react-image-webp'

const DecorItem = ({
  url,
  urlWebp,
  name,
  price,
  id,
  showItemModal,
  handleAddCartItem
}) => {
  return (
    <Card
      className='Card'
      onClick={() => {
        showItemModal(id)
      }}>
      <Card.Img as={Image} variant='top' webp={urlWebp} src={url} alt='Vase' />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>${price}</Card.Text>
        <Button
          variant='success'
          onClick={event => {
            event.stopPropagation()
            handleAddCartItem(name, id, price)
          }}>
          Add
        </Button>
      </Card.Body>
    </Card>
  )
}

export default DecorItem
