import DecorListItems from '../components/DecorListItems.jsx'
import DecorItemModal from '../components/DecorItemModal.jsx'
import { useEffect, useState } from 'react'
import FilterBar from '../components/FilterBar.jsx'
import { Container } from 'react-bootstrap'

const Store = props => {
  const { data, isModalShow, showModal, hideModal, handleAddCartItem } = props
  const [inputText, setInputText] = useState('')
  const [item, setItem] = useState({})
  const [sortPrice, setSortPrice] = useState(null)
  const [checkedColors, setCheckedColors] = useState([
    { color: 'green', isChecked: false },
    { color: 'pink', isChecked: false },
    { color: 'white', isChecked: false }
  ])

  const showItemModal = id => {
    setItem(data.find(el => el.id === id))
    showModal()
  }

  const handleInputChange = ({ target }) => {
    setInputText(target.value)
  }

  useEffect(() => {
    filteredData()
  }, [checkedColors])

  const filteredData = () => {
    let newData = data.filter(
      item => item.name.toLowerCase().indexOf(inputText.toLowerCase()) !== -1
    )

    if (checkedColors.find(item => item.isChecked === true)) {
      newData = newData.filter(item =>
        checkedColors
          .filter(item => item.isChecked)
          .map(item => item.color)
          .includes(item.color)
      )
    }

    if (sortPrice === 'toLow') {
      newData = newData.sort((a, b) => b.price - a.price)
    }
    if (sortPrice === 'toHigh') {
      newData = newData.sort((a, b) => a.price - b.price)
    }

    return newData
  }

  const handlePriceSort = sort => {
    setSortPrice(sort)
  }

  const handleCheckedColors = ({ target }) => {
    setCheckedColors(
      checkedColors.map(item => {
        if (item.color === target.name) {
          item.isChecked = !item.isChecked
        }
        return item
      })
    )
  }

  return (
    <Container
      className='text-center'
      style={{ paddingTop: '100px', paddingBottom: '100px' }}>
      <h1>Store</h1>
      <FilterBar
        handlePriceSort={handlePriceSort}
        sortPrice={sortPrice}
        inputText={inputText}
        handleInputChange={handleInputChange}
        handleCheckedColors={handleCheckedColors}
        checkedColors={checkedColors}
      />
      <DecorListItems
        data={filteredData()}
        showItemModal={showItemModal}
        handleAddCartItem={handleAddCartItem}
      />
      <DecorItemModal
        item={item}
        hideModal={hideModal}
        handleAddCartItem={handleAddCartItem}
        isModalShow={isModalShow}
      />
    </Container>
  )
}

export default Store
