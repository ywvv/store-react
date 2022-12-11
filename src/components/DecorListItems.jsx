import DecorItem from './DecorItem.jsx'

const DecorListItems = ({ data, showItemModal, handleAddCartItem }) => {
  return (
    <div className='d-flex flex-wrap justify-content-evenly gap-5 px-md-5'>
      {data.length > 0 ? (
        data.map(item => {
          return (
            <DecorItem
              key={item.id}
              {...item}
              showItemModal={showItemModal}
              handleAddCartItem={handleAddCartItem}
            />
          )
        })
      ) : (
        <h2>Nothing found :(</h2>
      )}
    </div>
  )
}

export default DecorListItems
