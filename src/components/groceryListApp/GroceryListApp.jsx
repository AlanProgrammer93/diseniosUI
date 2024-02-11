import React, { useState } from 'react'
import { MdOutlineRemoveCircle } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";

import './GroceryListApp.css'

const GroceryListApp = () => {
    const [list, setList] = useState([])
    const [item, setItem] = useState('')

    const handlerAddItem = () => {
        setList([...list, { title: item, status: false }])
        setItem('')
    }

    const handlerRemoveItem = (removeItem) => {
        setList(list.filter(item => item.title !== removeItem.title));
    }

    const handlerDone = (update) => {
        const newList = [...list];
        const updatedItem = newList.find(
            item => item.title === update.title
        );
        updatedItem.status = !updatedItem.status;
        setList(newList);
    }
    return (
        <div className='container_GLA'>
            <div className='box_GLA'>
                <h2>Grocery List</h2>
                <div id='grocery'>
                    <input
                        id='whiteList'
                        type='text'
                        placeholder='Write Grocery Item...'
                        required
                        name='item'
                        onChange={(e) => setItem(e.target.value)}
                        value={item}
                    />
                    <button onClick={handlerAddItem}>Add Item</button>
                </div>
            </div>
            <ol>
                {
                    list.length > 0 && list.map(item => (
                        <li key={item.title} className={`${item.status && 'done'}`}>
                            <p onClick={() => handlerDone(item)}>{item.title}</p>
                            <MdOutlineRemoveCircle
                                className='remove'
                                onClick={() => handlerRemoveItem(item)}
                            />
                            {
                                item.status && (
                                    <FaCheckCircle
                                        className='check'
                                    />
                                )
                            }

                        </li>
                    ))
                }
            </ol>
        </div>
    )
}

export default GroceryListApp