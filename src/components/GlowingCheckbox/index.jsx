import React from 'react'
import './styles.css'
import { FaPhone, FaPlane, FaMoon, FaWifi, FaBluetoothB } from "react-icons/fa6";
import { FaVolumeMute } from "react-icons/fa";

const GlowingCheckbox = () => {
    return (
        <div className='GloCheck_buttons'>
            <label>
                <input type='checkbox' name='check' />
                <span></span>
                <FaPhone />
            </label>
            <label>
                <input type='checkbox' name='check' />
                <span></span>
                <FaPlane />
            </label>
            <label>
                <input type='checkbox' name='check' />
                <span></span>
                <FaMoon />
            </label>
            <label>
                <input type='checkbox' name='check' />
                <span></span>
                <FaWifi />
            </label>
            <label>
                <input type='checkbox' name='check' />
                <span></span>
                <FaVolumeMute />
            </label>
            <label>
                <input type='checkbox' name='check' />
                <span></span>
                <FaBluetoothB />
            </label>
        </div>
    )
}

export default GlowingCheckbox