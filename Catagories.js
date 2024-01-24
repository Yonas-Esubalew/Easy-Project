import React from 'react'

const Catagories = ({filterItems}) => {
  return (
    <div className='btn-container'>
        <button className='filter-btn' onClick={()=> filterItems('all')}>
            All
        </button>
        <button className='filter-btn' onClick={()=> filterItems('breakfast')}>
            breakfast
        </button>
    </div>
  )
}

export default Catagories