import React, { useState } from 'react'
import Menu from './Menu'
import Catagories from './Catagories'
import items from './data'
const App = () => {
    const [menuItems, setMenuItems] = useState(items)
    const [catagories, setCatagories] = useState([])

    const filterItems = (catagory) => {

        if(catagory === 'all') {
            setMenuItems(items)
            return
        }
        const newItems = items.filter(()=> items.catagory === catagory);
        setMenuItems(newItems)
    }
  return (
    <div>
        <section className='menu section'>
            <div className='title'>
                <h2>Our Menu</h2>
                <div className='underline'></div>
            </div>
            <Catagories filterItems={filterItems}/>
            <Menu items={menuItems}/>
        </section>
    </div>
  )
}
export default App